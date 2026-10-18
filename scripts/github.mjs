// Saves the last year of GitHub contributions to src/github.json for the Activity section.
// CI runs it before every build. Locally: GITHUB_TOKEN=$(gh auth token) npm run github
// If GitHub can't be reached, the committed snapshot stays and the build goes on.
import { writeFile } from 'node:fs/promises'

const login = 'bczak'
const out = new URL('../src/github.json', import.meta.url)
const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      restrictedContributionsCount
      contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } }
    }
  }
}`

try {
  const token = process.env.GITHUB_TOKEN
  if (!token) throw new Error('GITHUB_TOKEN is not set')
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { authorization: `bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables: { login } }),
  })
  const { data, errors } = await res.json()
  if (!res.ok || errors) throw new Error(JSON.stringify(errors ?? res.status))
  const c = data.user.contributionsCollection
  const days = c.contributionCalendar.weeks.flatMap(w => w.contributionDays)
  const json = {
    login,
    updated: new Date().toISOString().slice(0, 10),
    from: days[0].date,
    total: c.contributionCalendar.totalContributions,
    private: c.restrictedContributionsCount,
    counts: days.map(d => d.contributionCount),
  }
  await writeFile(out, JSON.stringify(json) + '\n')
  console.log(`github.json: ${days.length} days from ${json.from}`)
} catch (e) {
  console.warn(`::warning::GitHub activity not refreshed, keeping the committed snapshot: ${e.message}`)
}
