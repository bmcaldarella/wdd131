

let numero = 0;

function addItem() {
    let button = document.getElementById('addCard');
    
    button.addEventListener('click', (event) => {
        let productName = "Item";
        
        let message = document.createElement('div');
        message.classList.add('message');
        document.body.appendChild(message);
        message.innerHTML = `<h4>${productName} Added to cart</h4>`;
        
        function deleteMessage() {
            setTimeout(() => {
                message.remove();
            }, 3000);
        }
        deleteMessage();

        function trolleyAdd() {
            let trolley = document.querySelector(".trolley-shop").parentElement;
            let numberAdd = trolley.querySelector('.numberAdd');

            if (!numberAdd) {
                numberAdd = document.createElement('div');
                numberAdd.classList.add('numberAdd');
                trolley.appendChild(numberAdd);
            }

            numero++;
            numberAdd.innerHTML = `<small>${numero}</small>`;
        }
        trolleyAdd();
    });
}

addItem();

function addToCart(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = '/wdd131/product-details.html'; 
}




var currentYearElement = document.querySelector(".currentyear"); 
var currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
currentYearElement.style.color = "white";

var lastModifiedElement = document.querySelector(".lastTimeModified");
var lastModified = document.lastModified;
lastModifiedElement.textContent = lastModified;
lastModifiedElement.style.color = "white";