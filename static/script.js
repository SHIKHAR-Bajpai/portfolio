function setTheme(mode){
    if(mode == 'blue'){
        document.getElementById('colour-theme').href='static/blue.css'
    }
    if(mode == 'white'){
        document.getElementById('colour-theme').href='default.css'
    }
    if(mode == 'green'){
        document.getElementById('colour-theme').href='static/green.css'
    }
    if(mode == 'dark'){
        document.getElementById('colour-theme').href='static/dark.css'
    }  
    
    localStorage.setItem('theme', mode)
}

// Function to load the saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    }
}
// Event listener for theme dots
document.addEventListener("DOMContentLoaded", function () {
    loadTheme();

    const themeDots = document.getElementsByClassName("theme-dot");
    for (let dot of themeDots) {
        dot.addEventListener("click", function () {
            const mode = this.getAttribute("data-mode");
            setTheme(mode);
        });
    }
});

const card = document.querySelector(".card");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  
    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
}

function resetStyles(e) {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
}

if (!motionMatchMedia.matches) {
    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);
}
// hover effect end

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementsByClassName("form-input");

    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }
    });
});

// For time on footer
function updateDateTime() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const dayOfWeek = days[date.getDay()];
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const currentDateTime = `${dayOfWeek}, ${formattedDate}, ${hours}:${minutes}:${seconds}`;

    const footerDateElement = document.querySelector(".footer-date");
    footerDateElement.innerHTML = `<p>${currentDateTime}</p>`;
}
updateDateTime();
setInterval(updateDateTime, 1000);



