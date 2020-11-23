const skills_section = document.getElementById("skills");
const projects_section = document.getElementById("projects");

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

document.getElementById("contactme-button").addEventListener('click', () => {
    anime({
        targets: [document.documentElement, document.body],
        scrollTop: document.body.scrollHeight,
        duration: 1500,
        easing: 'easeInOutQuad',
    });
});

document.getElementById("top-button").addEventListener('click', () => {
    console.log("click");
    anime({
        targets: [document.documentElement, document.body],
        scrollTop: 0,
        duration: 1000,
        easing: 'easeInOutQuad',
    });
});


let prevButtonState = false;
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



});