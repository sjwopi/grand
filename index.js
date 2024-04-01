
const header = document.querySelector('.header')
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

const headerHamb = document.querySelector('.header-mobile__hambbtn')
const headerMob = document.querySelector('.header-mobile')

headerHamb.addEventListener('click', (e) => {
  headerHamb.classList.toggle('open')
  headerMob.classList.toggle('open')
  if (!document.body.classList.contains('open')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.body.classList.toggle('open')
})