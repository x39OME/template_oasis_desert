// Toggle Menu
function menuToggle(){

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Dark Mode
let body = document.querySelector('body');
let dark = document.querySelector('#dark');

dark.onclick = function (){

  if(dark.checked == true){
    body.classList.add('darkMode');
  } else {
    body.classList.remove('darkMode');
  }
}

// Move & Scroll To Top
let scrollToTop = document.querySelector(".scroll-to-top");
// section
let section = document.querySelector(".section");
let landscapes = document.querySelector(".landscapes");
let stories = document.querySelector(".stories");
let gallery = document.querySelector(".gallery");
let desert = document.querySelector(".desert");
// move
let transformRight = document.querySelectorAll(".transform-right");
let transformLeft = document.querySelectorAll(".transform-left");
let transformBottom = document.querySelectorAll(".transform-bottom");
let scale = document.querySelectorAll(".scale");
let transformLeftTop = document.querySelectorAll(".transform-left-top");
let Opac = document.querySelectorAll(".opac");


// onscroll
window.onscroll = function () {
  this.scrollY >= 1000 ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");

  // section Section
  if (window.scrollY >= section.offsetTop + -300) {
    console.log("Reached Section Three");
    transformRight.forEach((img) => {
      img.style.transform = "translateX(0px)"
      img.style.opacity = "1"
    });
  }
  // section Landscapes
  if (window.scrollY >= landscapes.offsetTop) {
    transformLeft.forEach((land) => {
      land.style.transform = "translateX(0px)"
    });
  }
  // section Stories
  if (window.scrollY >= stories.offsetTop) {
    transformBottom.forEach((story) => {
      story.style.transform = "translateY(0px)"
    });
  }
  // section Gallery
  if (window.scrollY >= gallery.offsetTop) {
    scale.forEach((gall) => {
      gall.style.transform = "scale(1,1)"
    });
  }
  // section Desert
  if (window.scrollY >= desert.offsetTop) {
    transformLeftTop.forEach((des) => {
      des.style.transform = "translate(0px, 0px)"
    });
  }
  if (window.scrollY >= desert.offsetTop) {
    Opac.forEach((des) => {
      des.style.opacity = "1"
      des.style.transform = "translateX(0px)"
    });
  }
};
  // Click Scroll To Back To Top
scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Our Gallery Filter
let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  // Remove Active Class From All Lis And Add To Current
  li.addEventListener("click", function removeActive() {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  });
  // Manage Imgs
  li.addEventListener("click", function manageImgs() {
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  });
});


  // Start Slider
(function () {
  const pictures = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07'
  ];

  const buttons = document.querySelectorAll('.btn');
  const slider = document.querySelector('.slider');

  let counter = 0

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains('btn-left')){
        counter--
        if (counter < 0){
          counter = pictures.length - 1
        }
        slider.style.backgroundImage = `url('imgs/slider/${pictures[counter]}.jpg')`
      }
      if (button.classList.contains('btn-right')){
        counter--
        if (counter < 0){
          counter = pictures.length - 1
        }
        slider.style.backgroundImage = `url('imgs/slider/${pictures[counter]}.jpg')`
      }
    })
  })
}) ();


// Auto Write Text
const text = "Welcome Everyone To Oasis Desert This Website Create By x39OME";
const write = document.querySelector(".write");
let index = 0;

function writeText() {
  write.innerText = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0;
    }
}
setInterval(writeText, 100);


// Start Button Popup
const open = document.getElementById("open");
const question = document.getElementById("question");
const close = document.getElementById("close");

open.addEventListener('click', ()=> {
	question.classList.add('show')
});
close.addEventListener('click', ()=> {
	question.classList.remove('show')
});
// End Button Popup
// Time & Date
setInterval(function(){
  document.getElementById('date').innerHTML = Date();
  },1000);
