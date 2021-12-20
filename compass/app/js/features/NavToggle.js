
const NavToggle = (e) => {
    e.preventDefault();
    const navWrap = document.querySelector('.nav-wrap');
    navWrap.classList.toggle('nav-wrap--active');
}

export default NavToggle;