
const header = document.querySelector('header')
const searchHeader = header.querySelector('.header__search')
const searchHeaderBtn = header.querySelector('.header__search-btn')

searchHeaderBtn.addEventListener('mouseover', () => {
  searchHeader.classList.add('open')
  header.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('header') || e.target.classList.contains('header__container')) {
      searchHeader.classList.remove('open')
    }
  })
})