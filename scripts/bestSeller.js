const products = [
    {
      productName: "RIPPED DENIM JACKET",
      category: "JACKET",
      seller:"best seller",
      price: 49.99,
      images: [
        "https://static.zara.net/assets/public/3814/68ff/d2ec4e378e08/bcb2eee8ba3d/01538470406-e1/01538470406-e1.jpg?ts=1708008872390&w=750",
        "https://static.zara.net/assets/public/9277/704a/24bd4b5e9dfe/ec0bb13c9a9f/01538470406-e2/01538470406-e2.jpg?ts=1708008870334&w=750",
        "https://static.zara.net/assets/public/6715/9fb2/a82f463596e8/ce6a4e88334e/01538470406-e3/01538470406-e3.jpg?ts=1708008876239&w=750"
      ]
    },
    {
      productName: "DENIM WAISTCOAT",
      category: "JACKET",
      price: 39.99,
      images: [
        "https://static.zara.net/assets/public/2e4f/8911/5a55418f9f90/07e03cf97b52/00840450300-e1/00840450300-e1.jpg?ts=1716191920472&w=750",
        "https://static.zara.net/assets/public/41d5/61e3/03b74c768487/4866154ce5cd/00840450300-e2/00840450300-e2.jpg?ts=1716191907675&w=750",
        "https://static.zara.net/assets/public/0c88/7bdd/4f7140a2ad97/bf43d64f3298/00840450300-e3/00840450300-e3.jpg?ts=1716191920403&w=750"
      ]
    },
    {
      productName: "TEXTURED RIPSTOP JACKET",
      category: "JACKET",
      price: 59.99,
      images: [
        "https://static.zara.net/assets/public/cb58/8558/e0c14e9abcb9/ae7f966019f0/04391424814-e1/04391424814-e1.jpg?ts=1712909675359&w=750",
        "https://static.zara.net/assets/public/0b96/d947/5b4f4487b570/04440dcfd886/04391424814-e2/04391424814-e2.jpg?ts=1712909671488&w=750",
        "https://static.zara.net/assets/public/ac0e/e0f7/ab114ca39706/92b3c6aed061/04391424814-e3/04391424814-e3.jpg?ts=1712909667616&w=750"
      ]
    },
    {
      productName: "LIGHT PADDED JACKET",
      category: "JACKET",
      price: 59.99,
      images: [
        "https://static.zara.net/assets/public/1402/6957/4ca94c38ad8b/5ae66e12f331/04302520800-e1/04302520800-e1.jpg?ts=1704987828388&w=750",
        "https://static.zara.net/assets/public/f4a3/00e0/d67a4e8fb759/9b13443fb9d9/04302520800-e2/04302520800-e2.jpg?ts=1704987830111&w=750",
        "https://static.zara.net/assets/public/c801/87bc/63154938a738/1f74a94fad78/04302520800-e3/04302520800-e3.jpg?ts=1704987828942&w=750"
      ]
    },
    {
      productName: "HOODED PUFFER JACKET",
      category: "JACKET",
      price: 79.95,
      images: [
        "https://static.zara.net/assets/public/18f3/0c71/7c5c43df9d9c/714942535e55/00029501711-e1/00029501711-e1.jpg?ts=1705323031437&w=750",
        "https://static.zara.net/assets/public/1a2e/c317/1e4947b8ab4e/76a84d4e81d2/00029501711-e2/00029501711-e2.jpg?ts=1705323015304&w=750",
        "https://static.zara.net/assets/public/8d6c/81f0/b28146cc9ece/952ad93cf572/00029501711-e3/00029501711-e3.jpg?ts=1705323020641&w=750"
      ]
    },
   {
      productName: "RUSTIC TEXTURED POLO",
      category: "POLO",
      price: 19.99,
      images: [
        "https://static.zara.net/assets/public/d70d/117c/f5b14e489968/b520b4948652/05039489809-e1/05039489809-e1.jpg?ts=1716469961398&w=750",
        "https://static.zara.net/assets/public/fb09/b300/4a5f400c9203/472333c37ab7/05039489809-e2/05039489809-e2.jpg?ts=1716469965298&w=750",
        "https://static.zara.net/assets/public/658f/ed5f/fc804867a788/c6e658590aed/05039489809-e3/05039489809-e3.jpg?ts=1716469981484&w=750"
      ]
    },
    {
      productName: "black TEXTURED POLO SHIRT",
      category: "POLO",
      price: 19.99,
      images: [
        "https://static.zara.net/assets/public/1742/ed9e/43e242c299e8/2de89b9cdf4a/01887460800-e1/01887460800-e1.jpg?ts=1705574254095&w=750",
        "https://static.zara.net/assets/public/f724/b3f9/6ab048da94c1/31a4d4c9eab9/01887460800-e2/01887460800-e2.jpg?ts=1705578073268&w=750",
        "https://static.zara.net/assets/public/6d52/4b5f/ffbb4cb3a661/6774e6a25312/01887460800-e3/01887460800-e3.jpg?ts=1705574265857&w=750"
      ]
    },
    {
      productName: "TEXTURED KNIT POLO",
      category: "POLO",
      seller:"best seller",
      price: 39.99,
      images: [
        "https://static.zara.net/assets/public/a42c/db18/2fb849f19a63/e346e01efae1/06674408600-e1/06674408600-e1.jpg?ts=1715587763492&w=750",
        "https://static.zara.net/assets/public/3e53/2a65/6c194623bfb0/4f91920932b4/06674408600-e2/06674408600-e2.jpg?ts=1715587761503&w=750",
        "https://static.zara.net/assets/public/f18e/5612/b2c4499195e1/2899beedcafd/06674408600-e3/06674408600-e3.jpg?ts=1715587763988&w=750"
      ]
    },
    {
      productName: "TEXTURED KNIT POLO SHIRT",
      category: "POLO",
      price: 49.99,
      images: [
        "https://static.zara.net/assets/public/1312/5c2a/53574bfe83d9/ddf8f2745a11/03991411510-e1/03991411510-e1.jpg?ts=1714650010390&w=750",
        "https://static.zara.net/assets/public/92a6/da67/c99744b1abdc/65f55db6e20b/03991411510-e2/03991411510-e2.jpg?ts=1714650009605&w=750",
        "https://static.zara.net/assets/public/77e4/3e59/5e464e46b024/cdacfc56f7e5/03991411510-e3/03991411510-e3.jpg?ts=1714650012402&w=750"
      ]
    },
    {
      productName: "TEXTURED KNIT POLO SHIRT",
      category: "POLO",
      price: 29.99,
      images: [
        "https://static.zara.net/assets/public/d045/8ab3/14ed48eda212/a8ec30d6937a/03529400093-e1/03529400093-e1.jpg?ts=1713425502441&w=750",
        "https://static.zara.net/assets/public/adf4/2f8f/203c476b9181/346312baef02/03529400093-e2/03529400093-e2.jpg?ts=1713425502484&w=750",
        "https://static.zara.net/assets/public/2e50/511b/1817466f9806/b9386180bf16/03529400093-e3/03529400093-e3.jpg?ts=1713425505821&w=750"
      ]
    },
  {
      productName: "PURL KNIT QUARTER-ZIP",
      category: "SWEATER",
      price: 29.99,
      images: [
        "https://static.zara.net/assets/public/8b3a/3c63/567a45199ff2/a04867450fc6/1690196395481/1690196395481.jpg?ts=1701375008489&w=750",
        "https://static.zara.net/assets/public/d404/07e7/bf8043ae80ae/132fac992cab/1690196396413/1690196396413.jpg?ts=1702247639221&w=750",
        "https://static.zara.net/assets/public/7f91/f9f1/75864e2f9966/0d2bb15e7bc3/1690196399430/1690196399430.jpg?ts=1701858042450&w=750"
      ]
    },
    {
      productName: "TEXTURED SWEATER",
      category: "SWEATER",
      price: 19.99,
      images: [
        "https://static.zara.net/assets/public/2c19/dda5/8957408c8fc3/20385967184f/02893403710-e1/02893403710-e1.jpg?ts=1706805368926&w=750",
        "https://static.zara.net/assets/public/e03c/937c/bad34f80b301/1837288335d0/02893403710-e2/02893403710-e2.jpg?ts=1706805366604&w=750",
        "https://static.zara.net/assets/public/f36a/bd48/22624f5d91bd/73f16bc58630/02893403710-e3/02893403710-e3.jpg?ts=1706805368350&w=750"
      ]
    },
    {
      productName: "KNIT POLO SHIRT WITH MATCHING DENIM",
      category: "SWEATER",
      price: 59.99,
      images: [
        "https://static.zara.net/assets/public/f8f9/dd38/6c6943e8a696/dc8c576dd077/09598437505-e1/09598437505-e1.jpg?ts=1707395670612&w=750",
        "https://static.zara.net/assets/public/61a5/b072/d30d4fd6a9c9/530b37fe7574/09598437505-e2/09598437505-e2.jpg?ts=1707395671199&w=750",
        "https://static.zara.net/assets/public/a887/906a/fd644e48bcec/93fbb6580d98/09598437505-e3/09598437505-e3.jpg?ts=1707395678918&w=750"
      ]
    },
    {
      productName: "STRIPED KNIT POLO SHIRT",
      category: "SWEATER",
      seller:"best seller",
      price: 45.99,
      images: [
        "https://static.zara.net/assets/public/386d/9ba5/45d84ca3b067/5b41eb6d58d6/05536404400-e1/05536404400-e1.jpg?ts=1706119039565&w=750",
        "https://static.zara.net/assets/public/3e9e/f850/fc78429dbdc2/47760ee1b878/05536404400-e2/05536404400-e2.jpg?ts=1706119040672&w=750",
        "https://static.zara.net/assets/public/b01d/d2a7/51844eecb4c0/06ea6d4182cc/05536404400-e3/05536404400-e3.jpg?ts=1706119045398&w=750"
      ]
    },
    {
      productName: "TEXTURED COTTON SWEATER",
      category: "SWEATER",
      price: 35.95,
      images: [
        "https://static.zara.net/assets/public/d383/baef/e99f48b4baaa/27b394df6b43/02632402400-e1/02632402400-e1.jpg?ts=1704204594821&w=750",
        "https://static.zara.net/assets/public/ee62/ffb9/6cdf4a2d9291/e87db75432ae/02632402400-e2/02632402400-e2.jpg?ts=1704204594810&w=750",
        "https://static.zara.net/assets/public/3f22/f799/f1d440628b3a/f2042960215b/02632402400-e3/02632402400-e3.jpg?ts=1704204596530&w=750"
      ]
    },
   {
      productName: "Black jeans",
      category: "jeans",
      price: 29.99,
      images: [
        "https://static.zara.net/assets/public/f666/caac/31e941b88f12/77bd2be62bd2/08062400800-e2/08062400800-e2.jpg?ts=1708000749998&w=750",
        "https://static.zara.net/assets/public/05c7/16df/15834cce9129/5ce50f4d268d/08062400800-e3/08062400800-e3.jpg?ts=1708000765049&w=750",
        "https://static.zara.net/assets/public/43d8/b73c/066f44818d4a/bf6b4f19b928/08062400800-e1/08062400800-e1.jpg?ts=1708000756240&w=750",
        "https://static.zara.net/assets/public/71d4/0aa1/0e394a8c9424/a81c3a54139e/08062400800-e4/08062400800-e4.jpg?ts=1708000754231&w=750"
      ]
    },
    {
      productName: "Blue jeans",
      category: "jeans",
      price: 29.99,
      images: [
        "https://static.zara.net/assets/public/19bc/9368/e0004e21abc4/36b8b757af12/08062400407-a1/08062400407-a1.jpg?ts=1708013712850&w=750",
        "https://static.zara.net/assets/public/465b/e9ad/e13f4cda8b3b/5e4f7db0bb02/08062400407-e1/08062400407-e1.jpg?ts=1708000761751&w=750",
        "https://static.zara.net/assets/public/3477/46ae/eece4824becc/8db132957f41/08062400407-e2/08062400407-e2.jpg?ts=1708000771240&w=750",
        "https://static.zara.net/assets/public/b322/f644/20414ed6a3ad/37e7487d1463/08062400407-e3/08062400407-e3.jpg?ts=1708000766581&w=750",
        "https://static.zara.net/assets/public/f6bc/2015/6df94d46a8cd/8122933c809f/08062400407-e4/08062400407-e4.jpg?ts=1708000770251&w=750"
      ]
    },
    {
      productName: "White jeans",
      category: "jeans",
      price: 39.99,
      images: [
        "https://static.zara.net/assets/public/3154/051b/f0fb43cc99fc/8c90594c5a98/03991330710-e1/03991330710-e1.jpg?ts=1716298701078&w=750",
        "https://static.zara.net/assets/public/4d8f/7691/724a40308387/812072030d88/03991330710-e2/03991330710-e2.jpg?ts=1716298701971&w=750",
        "https://static.zara.net/assets/public/68a2/d0bc/8e0b4f00863a/ac29e0ee5e21/03991330710-e3/03991330710-e3.jpg?ts=1716298707833&w=750",
        "https://static.zara.net/assets/public/fcb9/635d/813d4f24ad6d/a2a6b55d089d/03991330710-e4/03991330710-e4.jpg?ts=1716298708188&w=750"
      ]
    },
    {
      productName: "JEANS WITH POCKETS",
      category: "jeans",
      price: 59.99,
      images: [
        "https://static.zara.net/assets/public/4393/b49a/838a4047b9ea/716d76a816fd/05575471800-e1/05575471800-e1.jpg?ts=1712158036636&w=750",
        "https://static.zara.net/assets/public/483f/5185/465f46de9b31/66e3f886546b/05575471800-e2/05575471800-e2.jpg?ts=1712158036776&w=750",
        "https://static.zara.net/assets/public/90cd/2a3c/08cf4b21b2b3/08735537722d/05575471800-e3/05575471800-e3.jpg?ts=1712158052328&w=750",
        "https://static.zara.net/assets/public/c5ef/a019/2fa64c778961/6a3866fde1d5/05575471800-e4/05575471800-e4.jpg?ts=1712158038011&w=750"
      ]
    },
    {
      productName: "Big jeans",
      category: "jeans",
      price: 39.99,
      images: [
        "https://static.zara.net/assets/public/4b37/0d53/42974796a3ea/fc834317f1b0/00840430400-e1/00840430400-e1.jpg?ts=1709652262705&w=750",
        "https://static.zara.net/assets/public/ad6c/36cc/85cf4d03b472/ae50c3eec1f4/00840430400-e2/00840430400-e2.jpg?ts=1709652264048&w=750",
        "https://static.zara.net/assets/public/2005/3d4d/95b146d796cc/9441242a1eb4/00840430400-e3/00840430400-e3.jpg?ts=1709652266116&w=750",
        "https://static.zara.net/assets/public/fecf/b36b/cd61449bb9bc/2167495cba54/00840430400-e4/00840430400-e4.jpg?ts=1709652265875&w=750"
      ]
    },
  {
      productName: "ABSTRACT PRINT STRETCH SHIRT",
      category: "shirt",
      price: 39.95,
      images: [
        "https://static.zara.net/assets/public/9d7d/6921/e3604b85b95f/5c27070cc935/05679054401-e1/05679054401-e1.jpg?ts=1716469968378&w=750",
        "https://static.zara.net/assets/public/bb4b/7ea6/28b14f1b9004/4be593c87e14/05679054401-e2/05679054401-e2.jpg?ts=1716469965294&w=750",
        "https://static.zara.net/assets/public/755d/759d/5c1a4bc3b14c/7b5b5b8069a7/05679054401-e3/05679054401-e3.jpg?ts=1716469979406&w=750"
      ]
    },
    {
      productName: "PRINTED SATIN SHIRT",
      category: "shirt",
      price: 19.99,
      images: [
        "https://static.zara.net/assets/public/d68b/3508/85c4480ab956/786822453a94/06085430500-e1/06085430500-e1.jpg?ts=1715843571002&w=750",
        "https://static.zara.net/assets/public/3591/5c4e/017742f4b95d/93deac2f05de/06085430500-e2/06085430500-e2.jpg?ts=1715843570958&w=750",
        "https://static.zara.net/assets/public/fe75/5eff/c953434cadaf/cda1461a7944/06085430500-e3/06085430500-e3.jpg?ts=1715843571635&w=750"
      ]
    },
    {
      productName: "SEERSUCKER SHIRT",
      category: "shirt",
      price: 39.99,
      images: [
        "https://static.zara.net/assets/public/e696/fc47/e84145eea95d/57f85eb4ea9b/05679055401-e1/05679055401-e1.jpg?ts=1716469966860&w=750",
        "https://static.zara.net/assets/public/9422/5daf/6e9946b499f0/e65b25b17c8e/05679055401-e2/05679055401-e2.jpg?ts=1716469971299&w=750",
        "https://static.zara.net/assets/public/1eeb/8e90/72354eac8b5a/7e53c14b62da/05679055401-e3/05679055401-e3.jpg?ts=1716469981209&w=750"
      ]
    },
    {
      productName: "COTTON - LINEN SHIRT",
      category: "shirt",
      
      price: 39.99,
      images: [
        "https://static.zara.net/assets/public/f6d0/033c/d2874270b11f/cf81f4007844/1689087323990/1689087323990.jpg?ts=1701374048485&w=750",
        "https://static.zara.net/assets/public/fd47/0128/b9de48678c20/08c4574eadfb/1689087323988/1689087323988.jpg?ts=1704327891172&w=750",
        "https://static.zara.net/assets/public/c929/22f5/a9f045d68dbc/4a867918c97f/1673338593459/1673338593459.jpg?ts=1702275448053&w=750"
      ]
    },
    {
      productName: "TEXTURED CHECK SHIRT",
      category: "shirt",
      price: 29.99,
      images: [
        "https://static.zara.net/assets/public/330a/f854/505540f3bb79/67d9bc62a1b5/07545431500-e1/07545431500-e1.jpg?ts=1716459956707&w=750",
        "https://static.zara.net/assets/public/6152/3082/56074ebaa59c/6452e7884f8b/07545431500-e2/07545431500-e2.jpg?ts=1716459948553&w=750",
        "https://static.zara.net/assets/public/e3f2/6850/9c22461aa6f6/243d3b84bcea/07545431500-e3/07545431500-e3.jpg?ts=1716459958153&w=750",
        "https://example.com/camiseta-basica4.jpg"
      ]
    },
    {
      productName: "COTTON - LINEN SHIRT",
      category: "shirt",
      seller:"best seller",
      price: 35.99,
      images: [
        "https://static.zara.net/assets/public/4e00/c48a/74874e88917b/688a1f010556/03057227679-e1/03057227679-e1.jpg?ts=1716469971983&w=750",
        "https://static.zara.net/assets/public/8b7a/25de/a31f483caa4a/43785c57c00b/03057227679-e2/03057227679-e2.jpg?ts=1716469968492&w=750",
        "https://static.zara.net/assets/public/9efc/9a30/1109480ba475/d41b4a0d298f/03057227679-e3/03057227679-e3.jpg?ts=1716469982007&w=750",
        "https://example.com/camiseta-basica4.jpg"
      ]
    }
  
  
  
  ];
  
  
  
  const bestSellerProducts = products.filter(product => product.seller === "best seller");
  
  const container = document.querySelector('.seller-container');
  
  bestSellerProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
  
    const productName = document.createElement('h2');
    productName.textContent = product.productName;
  
    const productPrice = document.createElement('p');
    productPrice.innerHTML = `<p class="product-price">Price: $${product.price}</p>`;
  
    const productImage = document.createElement('img');
    productImage.src = product.images[0]; 
    productImage.alt = product.productName;
    
  
    const buyButton = document.createElement('button');
    buyButton.textContent = "Add to cart";
    buyButton.classList.add('buy-button');

    buyButton.addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Added to cart!');
  });

  
    productDiv.appendChild(productName);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(buyButton);
    container.appendChild(productDiv);
  });
  