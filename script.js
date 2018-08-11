/*-----Global variables-----*/
const openSlideButton = document.getElementById('menu-small')
const closeSlideButton = document.getElementById('close-slide')
const sideNavLink = document.getElementsByClassName('side-nav-link')

/*-----Side navigation functions-----*/
const openSlideMenu = () => {
  document.getElementById('side-menu').style.width = '300px';
}

const closeSlideMenu = () => {
  document.getElementById('side-menu').style.width = '0';
  removeActiveClass()
}

openSlideButton.addEventListener("click", openSlideMenu);
closeSlideButton.addEventListener("click", closeSlideMenu);

for (let i = 0; i < sideNavLink.length; i++) {
  sideNavLink[i].addEventListener("click", closeSlideMenu)
}