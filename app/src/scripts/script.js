let button = document.querySelector('.presentation__button'),
    video = document.querySelector('.presentation__video');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("yeah");
    if (video.paused) {
        button.innerHTML = `<i class="presentation__icon fal fa-pause-circle"></i>`;
        video.style = "z-index: 1"
        video.play();
        console.log("play");
    } else {
        button.innerHTML = `<i class="presentation__icon fal fa-play-circle"></i>`
        video.pause();
        video.style = "z-index: -1"
        console.log("pause?");
    }
})