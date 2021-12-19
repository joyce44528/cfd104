import data from '../data.js';

const ProductScreen = {
    render: () => {
        const {products} = data;

        return `
            ${products.map(
                (product) => `
                <li class="product-card">
                    <a href="/#/product/${product._id}" class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                        <button class="btn add-cart">
                            <img src="imgs/SVG/cart.svg" alt="shop cart icon">
                        </button>
                    </a>
                    <div class="card-txt">
                        <a href="##" class="card-tag">${product.category}</a>
                        <a class="card-title">${product.name}</a>
                        <div class="card-detail">
                            <a class="card-color"></a>
                            <div class="card-price">NT $${product.price}</div>
                        </div>
                    </div>
                </li>
                `
            ).join('\n')}
        `
    }
}

export default ProductScreen;