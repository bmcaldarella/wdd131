document.addEventListener('DOMContentLoaded', () => {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (selectedProduct) {
        const productDetailsContainer = document.querySelector('.product-details');
        const productDetailsName = document.querySelector('.product-details-name');
        const productDetailsPrice = document.querySelector('.product-details-price');
        
        productDetailsName.innerHTML = `<h1 class="title-product">${selectedProduct.productName}</h1>`;

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        selectedProduct.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = selectedProduct.productName;
            imageContainer.appendChild(img);
        });

        productDetailsContainer.appendChild(imageContainer);

        productDetailsPrice.innerHTML = `<h2>$${selectedProduct.price.toFixed(2)}</h2>`;
    }

    const addCardButton = document.getElementById('addCard');
    addCardButton.addEventListener('click', () => {
        if (selectedProduct) {
         
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(selectedProduct);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart!');
        }
    });
});
