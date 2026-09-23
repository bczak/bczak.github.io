// Всё, что меняется из года в год, — здесь.
export const config = {
  age: 26,
  episode: 'XXVI',
  dateText: '17 октября, суббота',   // TODO: точная дата
  timeText: 'с 19:00',                // TODO
  venue: 'Кальянная',                 // TODO: название
  address: 'адрес скину в чат',       // TODO: адрес
  mapUrl: '',                         // TODO: ссылка на карту (можно оставить пустой)
  wishlistUrl: 'https://t.me/bczak_whishlist',
  siteUrl: 'https://bczak.github.io/bd/',
  // Фото для страницы «Кто такой Жак» (из public/photos/<год>/).
  aboutPhotos: {
    hero: '2025/026.jpg',
    groot: '2025/025.jpg',
    friends: '2025/003.jpg',
  },
  // Подписи к прошлым вечеринкам. Фото подхватываются из src/photos.json по году.
  years: {
    '2025': { title: 'Эпизод XXV', caption: 'Кальянная, 25 лет, все свои. Печенька с Грутом в комплекте.' },
  } as Record<string, { title: string; caption: string }>,
}
