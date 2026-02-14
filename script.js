const sections = document.querySelectorAll(".section, .gmp");

window.addEventListener("scroll", ()=>{
sections.forEach(sec=>{
let top = window.scrollY;
let offset = sec.offsetTop - 400;
let height = sec.offsetHeight;

if(top > offset && top < offset + height){
sec.style.opacity = 1;
sec.style.transform = "translateY(0)";
}
});
});

sections.forEach(sec=>{
sec.style.opacity = 0;
sec.style.transform = "translateY(50px)";
sec.style.transition = "1s";
});



let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(step) {
  index += step;
  if (index < 0) index = total - 1;
  if (index >= total) index = 0;
  showSlide();
}

/* auto slide every 3 seconds */
setInterval(() => {
  moveSlide(1);
}, 3000);

