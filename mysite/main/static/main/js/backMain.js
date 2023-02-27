 let sw = document.querySelector(".chek");
function darkAndWhite(event) {
    let video = document.querySelector(".back_video");
    let intervalRewind;
    if (event.target.checked == false){
        video.pause();

        intervalRewind = setInterval( ()=> {
            if (video.currentTime == 0) clearInterval(intervalRewind);
            else video.currentTime += -.1;
        }, 60);
    }
    else {
        clearInterval(intervalRewind);
        video.play()
    }
}
sw.addEventListener('input', darkAndWhite)