const body = document.querySelector('body');
let themeButton = document.querySelector('.change-theme');
let themeIcon = document.querySelector('.change-theme');
let homeBtn = document.querySelector('.name-page');

document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
        themeIcon.src ='icons/dark-theme.svg';
    } else {
        body.classList.remove('light');
        themeIcon.src ='icons/light-theme.svg';
    }
});

themeButton.onclick = function () {
    body.classList.toggle('light');
    let changedTheme = body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', changedTheme);
    themeIcon.src = changedTheme === 'light' ? 'icons/dark-theme.svg' : 'icons/light-theme.svg';
}

homeBtn.addEventListener('click', function(){
    location.reload();
});

document.querySelectorAll('.openVideos').forEach(button => {
    button.addEventListener('click', () => {
        let buttonImg = button.querySelector('img');
        let videosContainer = button.parentElement.querySelector('.home-page_videos');

        if (videosContainer.style.width === '95%') {
            videosContainer.style.width = '0';
            button.style.width = '60px';
            if (buttonImg.classList.contains('chevron-right')) {
                buttonImg.classList.remove('chevron-right');
                buttonImg.classList.add('chevron-left');
            } else if (buttonImg.classList.contains('chevron-left')) {
                buttonImg.classList.remove('chevron-left');
                buttonImg.classList.add('chevron-right');  
            }
        } else {
            videosContainer.style.width = '95%';
            button.style.width = '75px';
            if (buttonImg.classList.contains('chevron-right')) {
                buttonImg.classList.remove('chevron-right');
                buttonImg.classList.add('chevron-left');
            } else if (buttonImg.classList.contains('chevron-left')) {
                buttonImg.classList.remove('chevron-left');
                buttonImg.classList.add('chevron-right');
            }
        }
    });
});

let currentSlide = 0;
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; 
    }

    const offset = -currentSlide * 100; // Вычисляем смещение
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}