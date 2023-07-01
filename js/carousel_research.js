const top_slides = document.getElementById("top-recon").querySelector(".slides").children;
const top_buttons = document.getElementById("top-recon").querySelector(".buttons").children;

function top_showImage(imageNum) {
    for (var i = 0; i < 4; i++) {
        top_slides[i].classList.remove("active");
        top_buttons[i].classList.remove("active");
    }
    top_slides[imageNum - 1].classList.add("active");
    top_buttons[imageNum - 1].classList.add("active");
}

var top_currentNum = 2;

function top_showImageAuto() {
    top_showImage(top_currentNum);

    if (top_currentNum == 4) {
        top_currentNum = 1;
    } else {
        top_currentNum++;
    }
}

function top_resetTimer() {
    clearInterval(intervalID_TOP);
}

for (var i = 0; i < top_buttons.length; i++) {
    top_buttons[i].addEventListener("click", top_resetTimer);
}

intervalID_TOP = setInterval(top_showImageAuto, 5500);


const soft_slides = document.getElementById("soft-extrap").querySelector(".slides").children;
const soft_buttons = document.getElementById("soft-extrap").querySelector(".buttons").children;

function soft_showImage(imageNum) {
    for (var i = 0; i < 3; i++) {
        soft_slides[i].classList.remove("active");
        soft_buttons[i].classList.remove("active");
    }
    soft_slides[imageNum - 1].classList.add("active");
    soft_buttons[imageNum - 1].classList.add("active");
}

var soft_currentNum = 2;

function soft_showImageAuto() {
    soft_showImage(soft_currentNum);

    if (soft_currentNum == 3) {
        soft_currentNum = 1;
    } else {
        soft_currentNum++;
    }
}

function soft_resetTimer() {
    clearInterval(intervalID_SOFT);
}

for (var i = 0; i < soft_buttons.length; i++) {
    soft_buttons[i].addEventListener("click", soft_resetTimer);
}

intervalID_SOFT = setInterval(soft_showImageAuto, 5500);