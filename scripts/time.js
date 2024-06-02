var currentYearElement = document.querySelector(".currentyear"); 
var currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
currentYearElement.style.color = "white";

var lastModifiedElement = document.querySelector(".lastTimeModified");
var lastModified = document.lastModified;
lastModifiedElement.textContent = lastModified;
lastModifiedElement.style.color = "white";