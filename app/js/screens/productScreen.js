import data from '../data.js';

const ProductScreen = {
    render: () => {
        const {products} = data;

        return `
            ${products.map(
                (product) => `
                <li class="product-card">
                    <a href="product-single.html" class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                        <button class="btn add-cart add-cart--product">
                            <img src="imgs/SVG/cart.svg" alt="shop cart icon">
                        </button>
                    </a>
                    <div class="card-txt">
                    ${product.category.map((tag,i) =>` 
                        <a href="##" class="card-tag">${tag}</a>
                        `).join('')}  
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