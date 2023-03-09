
var button = document.getElementById('check');

var backgroundColor = 'white';

var header = document.getElementsByTagName('header')[0];

button.addEventListener('click', function() {

  if (backgroundColor === 'white') {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = 'white';
    header.style.backgroundColor = '#2a2a2a';
    backgroundColor = 'black';

  } else {
    document.body.style.backgroundColor = '#f6f2e9';
    document.body.style.color = 'black';
    header.style.backgroundColor = '#f6f2e9';
    backgroundColor = 'white';

  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); 
};
const itens = document.querySelectorAll(".item");


itens.forEach(function (item) {


    item.addEventListener("click", function(){

    const ativarItem = document.querySelector(".ativo");

    if (ativarItem) {
        ativarItem.classList.remove("ativo");
    }
    item.classList.add("ativo");

});
    
});