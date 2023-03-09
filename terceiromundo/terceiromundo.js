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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}