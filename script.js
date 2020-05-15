var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("DOMContentLoaded", setGradient);


function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ",  " + color2.value + ")";

   

  h3.textContent = body.style.background + ";";

  color1.style.background = color1.value;
  color2.style.background = color2.value;
}

function ranGen() {
  var letters = "123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }  
 

  return color;
 
}

function randomColor() {
  color1.value = ranGen();
  color2.value = ranGen();


  setGradient();
}

randomBtn.addEventListener("click", randomColor);
randomBtn.addEventListener("click", function() {
  
  randomBtn.style.padding = "1rem 2rem";
  randomBtn.style.borderRadius = "10px";
 
});



