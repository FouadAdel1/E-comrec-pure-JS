var index = 0;
var sliders = document.getElementsByClassName("mySlides");
console.log(sliders);
function showSlider(direction) {
  if (direction == "next") {
    index++;
    if (index == sliders.length) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = sliders.length - 1;
    } else {
      index--;
    }
  }
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove("main");
  }
  sliders[index].classList.add("main");
}
//******************* function for button to top *************************************/
function scrollTOTop() {
  window.scrollTo(0, 0);
}
//**********************************filter********************************************************
var all = document.querySelectorAll(".filterDiv");
console.log(all);
let arr = [];
all.forEach((item) => {
  arr.push(item);
});
console.log(arr);
function filterSelection(product) {
  arr.filter((item) => {
    if (product == "all") {
      item.style.display = "none";
      if (item.classList.contains("filterDiv")) item.style.display = "block";
    } else if (product == "men") {
      item.style.display = "none";
      if (item.classList.contains("men")) item.style.display = "block";
    } else if (product == "women") {
      item.style.display = "none";
      if (item.classList.contains("women")) item.style.display = "block";
    } else if (product == "kids") {
      item.style.display = "none";
      if (item.classList.contains("kids")) item.style.display = "block";
    } else if (product == "shoes") {
      item.style.display = "none";
      if (item.classList.contains("shoes")) item.style.display = "block";
    }
  });
}
/******************************counter for cart ****************************************************************/

/*let counter;
if (Number(localStorage.getItem("counter"))) {
  document.getElementById("cart").innerHTML = Number(
    localStorage.getItem("counter")
  );
  counter = Number(localStorage.getItem("counter"));
  console.log(counter);
} else {
  counter = 0;
}*/
var counter = 0;
function countercart() {
  counter++;
  localStorage.setItem("counter", counter);
  document.getElementById("cart").innerHTML = Number(
    localStorage.getItem("counter")
  );
}
localStorage.setItem("counter", counter);
