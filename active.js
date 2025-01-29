

const navLinks = document.querySelectorAll('.nav1 a');
const currentURL = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentURL) {
    link.classList.add('active'); 
  }
});




let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};







let span = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
}
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};





