import ProductScreen from "./screens/productScreen.js";

const router = () => {
    const productsDOM = document.querySelector('#products-container');
    productsDOM.insertAdjacentHTML('beforeend',ProductScreen.render());
}

window.addEventListener('load',router);

