//add preload class to body
document.body.classList.add('preload');

//remove reload class to body on load
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});

const navbar = document.getElementById('main-navbar');
const skills_section = document.getElementById('skills');
const more_skills_section = document.getElementById('more-skills');
const experience_section = document.getElementById('experience');
const projects_section = document.getElementById('projects');

//Enable popovers
$(function () {
  $('[data-toggle="popover"]').popover();
});

//Learn more button
document.getElementById('learn-more-button').addEventListener(
  'mouseover',
  () => {
    anime({
      targets: '#learn-more-arrow',
      rotate: '90deg',
    });
  },
  { passive: true }
);

document.getElementById('learn-more-button').addEventListener(
  'mouseleave',
  () => {
    anime({
      targets: '#learn-more-arrow',
      rotate: '0deg',
    });
  },
  { passive: true }
);

document.getElementById('learn-more-button').addEventListener(
  'click',
  () => {
    let offset =
      document.documentElement.scrollTop +
      skills_section.getBoundingClientRect().top -
      100;

    anime({
      targets: [document.documentElement, document.body],
      scrollTop: offset,
      duration: 600,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

//skills and projects buttons scrolling handling

document.getElementById('skills-button').addEventListener(
  'click',
  () => {
    let offset =
      document.documentElement.scrollTop +
      skills_section.getBoundingClientRect().top -
      100;

    anime({
      targets: [document.documentElement, document.body],
      scrollTop: offset,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

document.getElementById('experience-button').addEventListener(
  'click',
  () => {
    let offset =
      document.documentElement.scrollTop +
      experience_section.getBoundingClientRect().top -
      100;

    anime({
      targets: [document.documentElement, document.body],
      scrollTop: offset,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

document.getElementById('projects-button').addEventListener(
  'click',
  () => {
    let offset =
      document.documentElement.scrollTop +
      projects_section.getBoundingClientRect().top -
      100;

    anime({
      targets: [document.documentElement, document.body],
      scrollTop: offset,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

//contact me button scrolling handling
document.getElementById('contact-button').addEventListener(
  'click',
  () => {
    anime({
      targets: [document.documentElement, document.body],
      scrollTop: document.body.scrollHeight,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

//top button scrolling handling
document.getElementById('top-button').addEventListener(
  'click',
  () => {
    //console.log("click");
    anime({
      targets: [document.documentElement, document.body],
      scrollTop: 0,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

//logo button scrolling handling
document.getElementById('logo-button').addEventListener(
  'click',
  () => {
    //console.log("click");
    anime({
      targets: [document.documentElement, document.body],
      scrollTop: 0,
      duration: 800,
      easing: 'easeInOutQuad',
    });
  },
  { passive: true }
);

//initialized previous state object
let PrevState = {
  topButton: false,
  skillsImg: false,
  moreSkillsImg: false,
  experienceImg: false,
  projectsImg: false,
};

//Scrolling listener
window.addEventListener(
  'scroll',
  () => {
    //Back to top button animation
    //Button state determines if button is shown or hidden
    //Button state is true if the page is 400px down and false otherwise
    let buttonState;
    if (document.documentElement.scrollTop > 400) {
      buttonState = true;
    } else {
      buttonState = false;
    }

    //if button state changes from false to true, show button animation
    if (buttonState == true && PrevState.topButton == false) {
      anime({
        targets: '#top-button',
        bottom: 54,
        easing: 'easeOutBack',
        duration: 700,
      });
    }
    //if button state changes from true to false, hide button animation
    else if (buttonState == false && PrevState.topButton == true) {
      anime({
        targets: '#top-button',
        bottom: -200,
        easing: 'easeInBack',
        duration: 700,
      });
    }

    PrevState.topButton = buttonState;

    //card ending pattern animations
    let imgStateSkills;
    let imgStateExperience;
    let imgStateMoreSkills;
    let imgStateProjects;

    // if the bottom of the skills section is higher than the lowest point of the window, imgStateSkills is true
    if (projects_section.getBoundingClientRect().bottom < window.innerHeight) {
      imgStateSkills = true;
      imgStateMoreSkills = true;
      imgStateExperience = true;
      imgStateProjects = true;
    } else if (
      experience_section.getBoundingClientRect().bottom < window.innerHeight
    ) {
      imgStateSkills = true;
      imgStateMoreSkills = true;
      imgStateExperience = true;
      imgStateProjects = false;
    } else if (
      more_skills_section.getBoundingClientRect().bottom < window.innerHeight
    ) {
      imgStateSkills = true;
      imgStateMoreSkills = true;
      imgStateExperience = false;
      imgStateProjects = false;
    } else if (
      skills_section.getBoundingClientRect().bottom < window.innerHeight
    ) {
      imgStateSkills = true;
      imgStateMoreSkills = false;
      imgStateExperience = false;
      imgStateProjects = false;
    } else {
      imgStateSkills = false;
      imgStateMoreSkills = false;
      imgStateExperience = false;
      imgStateProjects = false;
    }

    //if the skills image state goes from false -> true, show image animation
    if (imgStateSkills == true && PrevState.skillsImg == false) {
      anime({
        targets: '.img1',
        backgroundPosition: '50% 100%',
        easing: 'easeOutQuad',
        duration: 600,
      });
    }
    //if the skills image state goes from true -> false, hide image animation
    else if (imgStateSkills == false && PrevState.skillsImg == true) {
      anime({
        targets: '.img1',
        backgroundPosition: '50% 150%',
        duration: 1,
      });
    }

    //if the skills more skills state goes from false -> true, show image animation
    if (imgStateMoreSkills == true && PrevState.moreSkillsImg == false) {
      anime({
        targets: '.img2',
        backgroundPosition: '50% 100%',
        easing: 'easeOutQuad',
        duration: 600,
      });
    }
    //if the skills more skills state goes from true -> false, hide image animation
    else if (imgStateMoreSkills == false && PrevState.moreSkillsImg == true) {
      anime({
        targets: '.img2',
        backgroundPosition: '50% 150%',
        duration: 1,
      });
    }

    //if the experience image state goes from false -> true, show image animation
    if (imgStateExperience == true && PrevState.experienceImg == false) {
      anime({
        targets: '.img3',
        backgroundPosition: '50% 100%',
        easing: 'easeOutQuad',
        duration: 600,
      });
    }
    //if the experience image state goes from true -> false, hide image animation
    else if (imgStateExperience == false && PrevState.experienceImg == true) {
      anime({
        targets: '.img3',
        backgroundPosition: '50% 150%',
        duration: 1,
      });
    }

    //if the projects image state goes from false -> true, show image animation
    if (imgStateProjects == true && PrevState.projectsImg == false) {
      anime({
        targets: '.img4',
        backgroundPosition: '50% 100%',
        easing: 'easeOutQuad',
        duration: 600,
      });
    }
    //if the projects image state goes from true -> false, hide image animation
    else if (imgStateProjects == false && PrevState.projectsImg == true) {
      anime({
        targets: '.img4',
        backgroundPosition: '50% 150%',
        duration: 1,
      });
    }

    PrevState.skillsImg = imgStateSkills;
    PrevState.moreSkillsImg = imgStateMoreSkills;
    PrevState.experienceImg = imgStateExperience;
    PrevState.projectsImg = imgStateProjects;
  },
  { passive: true }
);

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let id = entry.target.getAttribute('id');
      if (id == 'more-skills') {
        id = 'skills';
      }
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#${id}-button`).classList.add('active');
      } else {
        document.querySelector(`#${id}-button`).classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});

window.addEventListener(
  'mousemove',
  (e) => {
    anime({
      targets: '#cursor-circle',
      top: e.clientY - 50,
      left: e.clientX - 50,
      duration: 50,
      easing: 'easeOutQuad',
    });
  },
  { passive: true }
);

document.querySelectorAll('a, button, .hoverable').forEach(
  (element) => {
    element.addEventListener('mouseover', () => {
      anime({
        targets: '#cursor-circle',
        scale: 2.3,
        duration: 800,
      });
    });

    element.addEventListener('mouseleave', () => {
      anime({
        targets: '#cursor-circle',
        scale: 1,
        duration: 800,
      });
    });
  },
  { passive: true }
);

//enable bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
