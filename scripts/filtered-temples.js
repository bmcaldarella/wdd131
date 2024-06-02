const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }
];
const home= document.getElementById("home");
const oldTemple = document.getElementById("old-temple");
const container = document.querySelector(".container");
const newTemple= document.getElementById("new-temple");
const largeTemple= document.getElementById("large-temple");
const smallTemple= document.getElementById("small-temple");
const mainTitle= document.querySelector(".main-title");
const area = 90000;

home.addEventListener("click", ()=>{
  showTemples(temples);
  mainTitle.innerHTML="Home";

});


oldTemple.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
      const [year] = temple.dedicated.split(", ");
      return parseInt(year) <= 1900;
      
  });
  showTemples(oldTemples);
  mainTitle.innerHTML="Old Temples";
});


newTemple.addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const [year] = temple.dedicated.split(", ");
    return parseInt(year) > 2000;
  });
  showTemples(newTemples);
  mainTitle.innerHTML="New Temples";
});

largeTemple.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > area);
  showTemples(largeTemples);
  mainTitle.innerHTML="Large Temples";

});

function showTemples(templesToShow) {
  container.innerHTML = ""; 
  templesToShow.forEach(temple => {
      let carTemple = document.createElement("section");
      let nameTemple = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let picture = document.createElement("img");

      nameTemple.innerHTML = `<h2 class="text-title">${temple.templeName}</h2>`;
      nameTemple.style.textAlign="center";
      picture.setAttribute("src", temple.imageUrl);
      picture.setAttribute("alt", `${temple.templeName} temple`);
      picture.setAttribute("loading", "lazy");
      location.innerHTML = `<span class="text">Location: </span>${temple.location}`;
      dedication.innerHTML = `<span class="text">Dedication: </span>${temple.dedicated}`;
      area.innerHTML = `<span class="text">Size: </span>${temple.area}`;

      carTemple.appendChild(picture);
      carTemple.appendChild(nameTemple);
      carTemple.appendChild(location);
      carTemple.appendChild(dedication);
      carTemple.appendChild(area);

      container.appendChild(carTemple);
  });
}

smallTemple.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area <= area);
  showTemples(smallTemples);
  mainTitle.innerHTML="Small Temples";

});
showTemples(temples);