// Всё, что меняется из года в год, — здесь.
export const config = {
  age: 26,
  episode: 'XXVI',
  dateText: '14 октября, среда',
  timeText: 'с 19:00',                // TODO
  venue: 'Кальянная',                 // TODO: название
  address: 'адрес скину в чат',       // TODO: адрес
  mapUrl: '',                         // TODO: ссылка на карту (можно оставить пустой)
  wishlistUrl: 'https://t.me/bczak_whishlist',
  siteUrl: 'https://bczak.github.io/bd/',
  // Фото для страницы «Кто такой Жак» (из public/photos/<год>/).
  aboutPhotos: {
    hero: 'zhak.jpg',
    groot: '2025/025.jpg',
    friends: '2025/003.jpg',
  },
  // Подписи к прошлым вечеринкам. Фото подхватываются из src/photos.json по году.
  years: {
    '2025': { title: 'Эпизод XXV', caption: 'Кальянная, 25 лет, все свои. Печенька с Грутом в комплекте.' },
    '2023': { title: 'Эпизод XXIII', caption: 'Утром бранч в футболке RHCP, вечером неон, шарики и танцы.' },
    '2022': { title: 'Эпизод XXII', caption: 'Боулинг всей толпой. И один закат для баланса.' },
    '2021': { title: 'Эпизод XXI', caption: 'Год селфи в зеркале. Коробки, лифт и один именинник.' },
    '2020': { title: 'Эпизод XX', caption: 'Пандемия. Маска, зеркало и торт. Праздник всё равно состоялся.' },
    '2019': { title: 'Эпизод XIX', caption: 'Девятнадцать. Общага, шарики и вся компания в одном коридоре.' },
    '2018': { title: 'Эпизод XVIII', caption: 'Совершеннолетие. Ужин и первый сбор всех вместе.' },
  } as Record<string, { title: string; caption: string }>,
}
