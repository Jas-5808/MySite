let backgroundMain = document.querySelector(".back_video");
let sw = document.querySelector(".chek");
let video = document.querySelector(".back_video");
let intervalRewind;
//
function darkAndWhite(event) {
    console.log(event.target.checked);
      if (event.target.checked == false){

            intervalRewind = setInterval(function () {
                video.playbackRate = 1.0;
                console.log("res")

                if (video.currentTime==0) {
                    clearInterval(intervalRewind);
                    video.pause();
                } else {
                    video.currentTime += -.1;
                }
            }, 50);
      }
      else video.play()


}
sw.addEventListener('input', darkAndWhite)
console.log(sw)

