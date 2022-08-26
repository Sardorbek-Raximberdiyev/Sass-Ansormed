const elSiteHeader = document.querySelector('.site-header');
const elOpenButon = elSiteHeader.querySelector('.open-button');

if (elOpenButon) {
  elOpenButon.addEventListener('click', function () {
    elSiteHeader.classList.toggle('site-header-open');
  })
}