document.addEventListener('DOMContentLoaded', (event) => {
    const gobBack = document.getElementById('back');
    const toBuyIt = document.getElementById('ToBuyIt');
    
    gobBack.addEventListener('click', () => {
        window.history.back();
    });

    toBuyIt.addEventListener('click', () => {
        window.location.href = '/wdd131/project/addCart.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = {};
    let totalPrice = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(product => {
            cartItems[product.productName] = cartItems[product.productName] ? cartItems[product.productName] + 1 : 1;
        });

        Object.keys(cartItems).forEach(productName => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productNameElement = document.createElement('h3');
            productNameElement.className = 'productName';
            productNameElement.textContent = productName;

            const productCount = document.createElement('span');
            productCount.className = 'productCount';
            productCount.textContent = ` (x${cartItems[productName]})`; 

            const productPrice = document.createElement('p');
            productPrice.className = 'price';
            const productPriceValue = cart.find(product => product.productName === productName).price;
            productPrice.textContent = ` $${productPriceValue.toFixed(2)}`;

            const productImage = document.createElement('img');
            productImage.className = 'productImage';
            productImage.src = cart.find(product => product.productName === productName).images[0];
            productImage.alt = productName;

            productDiv.appendChild(productImage);
            productDiv.appendChild(productNameElement);
            productDiv.appendChild(productCount);
            productDiv.appendChild(productPrice);

            totalPrice += (productPriceValue * cartItems[productName]); // Calcular el total sumando el precio de cada producto

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'deleteButton'
        
            deleteButton.addEventListener('click', () => removeProduct(productName));
            productDiv.appendChild(deleteButton);

            cartList.appendChild(productDiv);
        });
    }

    const totalDiv = document.getElementById('total-price');
    totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;

    function removeProduct(productName) {
        const productIndex = cart.findIndex(product => product.productName === productName);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload(); 
        }
    }
});
