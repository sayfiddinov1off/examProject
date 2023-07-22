// for Timer
let days = document.querySelector('.day');
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
let seconds = document.querySelector('.second');
// for Slider
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let slide = document.querySelectorAll('.slide');
// for Tab Links
let tabLinks = document.querySelectorAll('.tab_link');
let tabContents = document.querySelectorAll('.tabImage');
let tabAboutPlanet = document.querySelectorAll('.tabWords');

let deadline = new Date('2023-07-22T13:00:00Z');

const countDown = (targetData) => {
    setInterval(() => updataCountDown(targetData), 1000);
};
const formaTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const updataCountDown = (deadline) => {
    let currentTime = Date.parse(new Date());
    let timeDifference = Date.parse(deadline) - currentTime;

    // calculate days, hours, minutes, seconds, from timeDifference
    let calcSeconds = Math.floor(timeDifference / 1000) % 60;
    let calcMinutes = Math.floor(timeDifference / 1000 / 60) % 60;
    let calcHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    days.textContent = formaTime(calcDays);
    hours.textContent = formaTime(calcHours);
    minutes.textContent = formaTime(calcMinutes);
    seconds.textContent = formaTime(calcSeconds);
};

countDown(deadline);

// if (days.innerText == 0) {
//     days.style.display = 'none';
// }
// if (hours.innerText == 0 && days.innerText == 0) {
//     hours.style.display = 'none';
// }
// if (minutes.innerText == 0 && hours.innerText == 0 && days.innerText == 0) {
//     minutes.style.display = 'none';
// }
// if (seconds.innerText == 0 && minutes.innerText == 0 && hours.innerText == 0 && days.innerText == 0) {
//     seconds.style.display = 'none';
// }

// slider
let slideCount = 0;

prevBtn.addEventListener('click', () => {
    if (slideCount <= 0) {
        slideCount = slide.length - 1;
    } else {
        slideCount--;
    }
    hideSlide();
    showSlide(slideCount);
});

nextBtn.addEventListener('click', () => {
    if (slideCount > slide.length - 2) {
        slideCount = 0;
    } else {
        slideCount++;
    }
    hideSlide();
    showSlide(slideCount);
});

function showSlide(i = 0) {
    slide[i].classList.add('active');
}

function hideSlide() {
    slide.forEach((slides) => {
        slides.classList.remove('active');
    });
}

hideSlide();
showSlide();

// tab-link,  tab-content

function toggleTabs(tabContents, tabLinks) {
    function hideTab() {
        tabAboutPlanet.forEach((item) => {
            item.classList.remove('active');
        });
        tabContents.forEach((imgTabs) => {
            imgTabs.style.display = 'none';
        });
    }

    function tabsName() {
        tabAboutPlanet.forEach((section_two) => {
            planetName.style.display = 'none';
        });
    }

    function showTab(i = 0) {
        tabContents[i].style.display = 'flex';
        tabLinks[i].classList.add('active');
        tabAboutPlanet[i].classList.add('active');
        // console.log(tabAboutPlanet[i]);
    }

    tabLinks.forEach((tablink, i) => {
        tablink.addEventListener('click', () => {
            hideTab();
            showTab(i);
        });
    });

    hideTab();
    showTab();
}
toggleTabs(tabContents, tabLinks);
