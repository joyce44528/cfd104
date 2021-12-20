import ProductScreen from "./screens/productScreen.js";
import NavToggle from "./features/NavToggle.js";

const router = () => {
    const productsDOM = document.querySelector('#products-container');
    productsDOM.insertAdjacentHTML('beforeend',ProductScreen.render());
}

window.addEventListener('load',router);

const navBtn = document.querySelector('.nav-toggle');
navBtn.addEventListener('click',NavToggle);