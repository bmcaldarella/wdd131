var currentYearElement = document.getElementById("currentyear");
var currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
currentYearElement.style.color="black";


var lastModifiedElement = document.getElementById("lastTimeModified");
var lastModified = document.lastModified;
lastModifiedElement.textContent = lastModified;
lastModifiedElement.style.color="black";


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    titleNav.style.textAling="center";
	
   
   


});