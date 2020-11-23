
//add preload class to body 
document.body.classList.add('preload');

//remove reload class to body on load
window.addEventListener("load", () => {
    document.body.classList.remove('preload');
});

const skills_section = document.getElementById("skills");
const more_skills_section = document.getElementById("more-skills")
const projects_section = document.getElementById("projects");

//skills and projects buttons scrolling handling


document.getElementById("skills-button").addEventListener('click', () => {
    let offset = document.documentElement.scrollTop + skills_section.getBoundingClientRect().top - 20;

    anime({
        targets: [document.documentElement, document.body],
        scrollTop: offset,
        duration: 500,
        easing: 'easeInOutQuad',
    });
});

document.getElementById("portfolio-button").addEventListener('click', () => {
    let offset = document.documentElement.scrollTop + projects_section.getBoundingClientRect().top - 20;

    anime({
        targets: [document.documentElement, document.body],
        scrollTop: offset,
        duration: 1000,
        easing: 'easeInOutQuad',
    });
});

//contact me button scrolling handling
document.getElementById("contactme-button").addEventListener('click', () => {
    anime({
        targets: [document.documentElement, document.body],
        scrollTop: document.body.scrollHeight,
        duration: 1500,
        easing: 'easeInOutQuad',
    });
});

//top button scrolling handling
document.getElementById("top-button").addEventListener('click', () => {
    console.log("click");
    anime({
        targets: [document.documentElement, document.body],
        scrollTop: 0,
        duration: 1000,
        easing: 'easeInOutQuad',
    });
});

//initialized previous state variables
let prevButtonState = false;
let prevImgStateSkills = false;
let prevImgStateMoreSkills = false;
let prevImgStateProjects = false;
//Scrolling listener
window.addEventListener("scroll", () => {
    //Back to top button animation
    //Button state determines if button is shown or hidden
    //Button state is true if the page is 400px down and false otherwise
    let buttonState;
    if (document.documentElement.scrollTop > 400) {
        buttonState = true;
    }
    else {
        buttonState = false;
    }

    //if button state changes from false to true, show button animation
    if (buttonState == true && prevButtonState == false) {
        anime({
            targets: '#top-button',
            bottom: 54,
            easing: 'easeOutBack',
            duration: 700,
        });
    }
    //if button state changes from true to false, hide button animation
    else if (buttonState == false && prevButtonState == true) {
        anime({
            targets: '#top-button',
            bottom: -200,
            easing: 'easeInBack',
            duration: 700,
        });
    }

    prevButtonState = buttonState;

    //card ending pattern animations
    let imgStateSkills;
    let imgStateMoreSkills;
    let imgStateProjects;

    // if the bottom of the skills section is higher than the lowest point of the window, imgStateSkills is true
    if (projects_section.getBoundingClientRect().bottom < window.innerHeight) {
        imgStateSkills = true;
        imgStateMoreSkills = true;
        imgStateProjects = true;
    }
    else if (more_skills_section.getBoundingClientRect().bottom < window.innerHeight) {
        imgStateSkills = true;
        imgStateMoreSkills = true;
        imgStateProjects = false;
    }
    else if (skills_section.getBoundingClientRect().bottom < window.innerHeight) {
        imgStateSkills = true;
        imgStateMoreSkills = false;
        imgStateProjects = false;
    }
    else {
        imgStateSkills = false;
        imgStateMoreSkills = false;
        imgStateProjects = false;
    }

    //if the skills image state goes from false -> true, show image animation
    if (imgStateSkills == true && prevImgStateSkills == false) {
        anime({
            targets: '.img1',
            backgroundPosition: '50% 100%',
            easing: 'easeOutQuad',
            duration: 800,
        });
    }
    //if the skills image state goes from true -> false, hide image animation
    else if (imgStateSkills == false && prevImgStateSkills == true) {
        anime({
            targets: '.img1',
            backgroundPosition: '50% 150%',
            duration: 10,
        });
    }

    //if the skills image state goes from false -> true, show image animation
    if (imgStateMoreSkills == true && prevImgStateMoreSkills == false) {
        anime({
            targets: '.img2',
            backgroundPosition: '50% 100%',
            easing: 'easeOutQuad',
            duration: 800,
        });
    }
    //if the skills image state goes from true -> false, hide image animation
    else if (imgStateMoreSkills == false && prevImgStateMoreSkills == true) {
        anime({
            targets: '.img2',
            backgroundPosition: '50% 150%',
            duration: 10,
        });
    }

    //if the skills image state goes from false -> true, show image animation
    if (imgStateProjects == true && prevImgStateProjects == false) {
        anime({
            targets: '.img3',
            backgroundPosition: '50% 100%',
            easing: 'easeOutQuad',
            duration: 800,
        });
    }
    //if the skills image state goes from true -> false, hide image animation
    else if (imgStateProjects == false && prevImgStateProjects == true) {
        anime({
            targets: '.img3',
            backgroundPosition: '50% 150%',
            duration: 10,
        });
    }

    prevImgStateSkills = imgStateSkills;
    prevImgStateMoreSkills = imgStateMoreSkills;
    prevImgStateProjects = imgStateProjects;
});