const menu_btn = document.querySelector(".mobile_menu");
const menu_wrapper = document.querySelector(".mobile_menu_wrapper");
const menu_close = document.querySelector(".closeMenu");
const body_hidden = document.querySelectorAll(".mobile_opened");
const menuLinks = document.querySelectorAll(".links .menu_link");

const menuWrapper = () => {
   menu_wrapper.classList.toggle("right_0");
};
const appenedClasses = () => {
   body_hidden.forEach((item) => {
      item.classList.toggle("body_hide");
   });
};

function toggleMenu() {
   menuWrapper();
   appenedClasses();
}

menu_btn.addEventListener("click", toggleMenu);
menu_close.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));

// const accordionItem = document.querySelector('.accordion__item')
// const accordionItem2 = document.querySelector('.accordion__item2')
// const accordionItem3 = document.querySelector('.accordion__item3')
// const accordionItem4 = document.querySelector('.accordion__item4')

// function toggleHeight1(){
//     accordionItem.classList.toggle("heightFitContent");
// }
// function toggleHeight2(){
//     accordionItem2.classList.toggle("heightFitContent");
// }
// function toggleHeight3(){
//     accordionItem3.classList.toggle("heightFitContent");
// }
// function toggleHeight4(){
//     accordionItem4.classList.toggle("heightFitContent");
// }

// accordionItem.addEventListener("click", ()=> {
//     toggleHeight1()
// })
// accordionItem2.addEventListener("click", ()=> {
//     toggleHeight2()
// })
// accordionItem3.addEventListener("click", ()=> {
//     toggleHeight3()
// })
// accordionItem4.addEventListener("click", ()=> {
//     toggleHeight4()
// })

$(document).ready(function () {
   $(".accordion-list > li > .answer").hide();

   $(".accordion-list > li").click(function () {
      if ($(this).hasClass("active")) {
         $(this).removeClass("active").find(".answer").slideUp();
      } else {
         $(".accordion-list > li.active .answer").slideUp();
         $(".accordion-list > li.active").removeClass("active");
         $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
   });
});

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      }
   });
}

let options = {
   threshold: [0.5],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
   observer.observe(elm);
}

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   });
}

$(".slider_wrapper").slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 2,
   arrows: false,
   dots: true,
   responsive: [
      {
         breakpoint: 1500,
         settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
         },
      },
      {
         breakpoint: 1100,
         settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
         },
      },
      {
         breakpoint: 768,
         settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
         },
      },
   ],
});

$(".mobile_tokenomiks_items").slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   dots: false,
});
