const video = document.getElementById("myVideo");
const uiBox = document.getElementById("uiBox");
const boxText = document.getElementById("boxText");
const sceneButton = document.getElementById("sceneBtn");

function toggle() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}



function fastForward() {
    video.currentTime += 1;
}


function rewind() {
    video.currentTime -= 1;
}

function slowMotion() {
    video.playbackRate = 0.5;
}


function normalSpeed() {
    video.playbackRate = 1;
}

video.addEventListener("timeupdate", () => {
    console.log("current time:", video.currentTime);
});


function showBox(message0) {
    boxText.textContent = message0;
    uiBox.classList.remove("hidden");
    uiBox.classList.add("show");
}

function hiddenBox() {
    uiBox.classList.remove("show");
    uiBox.classList.add("hidden");
}

video.addEventListener("timeupdate", () => {
    const time = video.currentTime;
    

    if (time > 5 && time < 6){
        showBox("cue 1: The video reached 5 second!");
    }

    if (time > 10 && time < 11 ) {
        showBox(" cue 2 10 second - UI changed again");
    }

    if (time > 15) {
        hiddenBox();
    }
});

video.addEventListener("pause", () => {
    showBox("video paused - showing extra UI!");
});

video.addEventListener("ended", () => {
    showBox("video finished 🎉 ");
});

sceneButton.addEventListener("click", () => {
    video.currentTime = 10;
    video.play();
});