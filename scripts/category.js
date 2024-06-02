//shirt
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('shirt');
  
    productsContainer.addEventListener('click', () => {
        window.location.href = '/wdd131/project/shirt.html';
    });
  });
  
  //all
  document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('seeAll');
  
    productsContainer.addEventListener('click', () => {
        window.location.href = '/wdd131/project/allProducts.html';
    });
  });
  
  //jackets
  document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('jackets');
  
    productsContainer.addEventListener('click', () => {
        window.location.href = '/wdd131/project/jackets.html';
    });
  });
  
  //sweter
  document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('sweter');
  
    productsContainer.addEventListener('click', () => {
        window.location.href = '/wdd131/project/sweter.html';
    });
  });
  
  //trousers

  document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('jeans');
  
    productsContainer.addEventListener('click', () => {
        window.location.href = '/wdd131/project/jeans.html';
    });
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    const cartHome = document.querySelector(".trolley");
    cartHome.addEventListener('click', () => {
        window.location.href = '/wdd131/project/cart.html';
    });
});
