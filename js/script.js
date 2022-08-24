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
//  const removeClasses = () => {
//     body_hidden.forEach((item) => {
//        item.classList.toggle("body_hide");
//     });
//  };

function toggleMenu() {
    menuWrapper();
    appenedClasses();
}

menu_btn.addEventListener("click", toggleMenu);
menu_close.addEventListener("click", toggleMenu);
menuLinks.forEach( link => link.addEventListener("click", toggleMenu))

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


  const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



















// const menu_btn = document.querySelector(".mobile_menu");
// const menu_wrapper = document.querySelector(".mobile_menu_wrapper");
// const menu_close = document.querySelector(".closeMenu");
// const body_hidden = document.querySelectorAll(".mobile_opened");
// const menu_link = document.getElementById("menu_link");
// const menu_link1 = document.getElementById("menu_link1");
// const menu_link2 = document.getElementById("menu_link2");
// const menu_link3 = document.getElementById("menu_link3");
// const menu_link4 = document.getElementById("menu_link4");
// const menu_link5 = document.getElementById("menu_link5");
// const menu_link6 = document.getElementById("menu_link6");
// const menu_link7 = document.getElementById("menu_link7");
// const menu_link8 = document.getElementById("menu_link8");



// const menuWrapper = () => {
//    menu_wrapper.classList.toggle("right_0");
// };
// const appenedClasses = () => {
//     body_hidden.forEach((item) => {
//        item.classList.toggle("body_hide");
//     });
//  };
// //  const removeClasses = () => {
// //     body_hidden.forEach((item) => {
// //        item.classList.toggle("body_hide");
// //     });
// //  };
// menu_btn.addEventListener("click", () => {
//    menuWrapper();
//    appenedClasses();
// });
// menu_close.addEventListener("click", () => {
//    appenedClasses();
//    menuWrapper();
// });

// menu_link.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link1.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link2.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link3.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link4.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link5.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link6.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link7.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });
// menu_link8.addEventListener("click", () => {
//     appenedClasses();
//     menuWrapper();
// });

