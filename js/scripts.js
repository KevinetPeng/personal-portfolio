//add preload class to body
document.body.classList.add("preload");

//remove reload class to body on load
window.addEventListener("load", () => {
  document.body.classList.remove("preload");

  // show title box image
  if (window.scrollY < 250) {
    anime({
      targets: ".img4",
      backgroundPosition: "50% 100%",
      easing: "easeOutQuad",
      duration: 700,
    });
  }
});

const navbar = document.getElementById("main-navbar");
const experience_section = document.getElementById("experience");
const title_box = document.getElementById("intro-title-box");

//Enable popovers
$(function () {
  $('[data-toggle="popover"]').popover();
});

document.getElementById("learn-more-button").addEventListener(
  "click",
  () => {
    let offset =
      document.documentElement.scrollTop +
      experience_section.getBoundingClientRect().top -
      100;

    anime({
      targets: [document.documentElement, document.body],
      scrollTop: offset,
      duration: 800,
      easing: "easeInOutQuad",
    });
  },
  { passive: true }
);

//initialized previous state object
let prevState = {
  topButton: false,
  experienceImg: false,
  titleBoxImg: false,
};

//Scrolling listener
window.addEventListener("scroll", () => {
  let currentState = {
    topButton: false,
    experienceImg: false,
    titleBoxImg: false,
  };

  //Back to top button animation
  //Button state determines if button is shown or hidden
  //Button state is true if the page is 400px down and false otherwise
  if (document.documentElement.scrollTop > 400) {
    currentState.topButton = true;
  } else {
    currentState.topButton = false;
  }

  //if button state changes from false to true, show button animation
  if (currentState.topButton == true && prevState.topButton == false) {
    anime({
      targets: "#top-button",
      bottom: 54,
      easing: "easeOutBack",
      duration: 700,
    });
  }
  //if button state changes from true to false, hide button animation
  else if (currentState.topButton == false && prevState.topButton == true) {
    anime({
      targets: "#top-button",
      bottom: -200,
      easing: "easeInBack",
      duration: 700,
    });
  }

  //card ending pattern animations

  // if the bottom of the experience section is higher than the lowest point of the window, imgStateExperience is true
  if (experience_section.getBoundingClientRect().bottom < window.innerHeight) {
    currentState.experienceImg = true;
  } else {
    currentState.experienceImg = false;
  }
  if (window.scrollY < 250) {
    currentState.titleBoxImg = true;
  } else {
    currentState.titleBoxImg = false;
  }

  //if the experience image state goes from false -> true, show image animation
  if (currentState.experienceImg == true && prevState.experienceImg == false) {
    anime({
      targets: ".img3",
      backgroundPosition: "50% 100%",
      easing: "easeOutQuad",
      duration: 700,
    });
  }
  //if the experience image state goes from true -> false, hide image animation
  else if (currentState.experienceImg == false) {
    anime({
      targets: ".img3",
      backgroundPosition: "50% 150%",
      easing: "easeOutQuad",
      duration: 100,
    });
  }

  //if the title obx image state goes from false -> true, show image animation
  if (currentState.titleBoxImg == true && prevState.titleBoxImg == false) {
    anime({
      targets: ".img4",
      backgroundPosition: "50% 100%",
      easing: "easeOutQuad",
      duration: 700,
    });
  }
  //if the title box image state goes from true -> false, hide image animation
  else if (currentState.titleBoxImg == false) {
    anime({
      targets: ".img4",
      backgroundPosition: "50% 150%",
      easing: "easeOutQuad",
      duration: 500,
    });
  }

  prevState = { ...currentState };
});

//top button scrolling handling
document.getElementById("top-button").addEventListener(
  "click",
  () => {
    anime({
      targets: [document.documentElement, document.body],
      scrollTop: 0,
      duration: 800,
      easing: "easeInOutQuad",
    });
  },
  { passive: true }
);

//enable bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
