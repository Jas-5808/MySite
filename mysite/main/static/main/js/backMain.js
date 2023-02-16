let sw = document.querySelector(".chek");
let video = document.querySelector(".back_video");
let intervalRewind;
//
function darkAndWhite(event) {
    if (event.target.checked == false){
    video.pause();
        intervalRewind = setInterval( ()=> {
            console.log(video.currentTime);
            if (video.currentTime == 0) {
                clearInterval(intervalRewind);
            }
            else video.currentTime += -.1;
        }, 60);
    }
    else {
        clearInterval(intervalRewind);
        video.play()
    }
}
sw.addEventListener('input', darkAndWhite)

// sw.addEventListener("click", (event)=>{
//     document.querySelector(".characterBlock").style.animation ="animatsionOposity 1s linear forwards";
//     document.querySelector(".description").style.animation ="animatsionOposity 1s linear forwards";
// })
// function anim(){
//     document.querySelector(".characterBlock").style.animation ="animatsionOposity 1s linear forwards reverse";
//     document.querySelector(".description").style.animation ="animatsionOposity 1s linear forwards reverse";
// };
