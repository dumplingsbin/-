const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const slides = document.querySelectorAll(".slide");

next.addEventListener("click", function () {
    handleNextSlider()
});
prev.addEventListener("click", handlePrevSlider);

var currentIndex = 0; // 初始化轮播图的位置

var autoPlay = true; // 是否开动自动轮播

var autoDirection = true; // 轮播方向

var time = 3000; // 轮播间隔

// 设置轮播定时器
var picInterval = setInterval(autoDirection ? handleNextSlider : handlePrevSlider, time);

// 自动播放模式
if (autoPlay) {
    picInterval
}

// 轮播图前进一张
function handleNextSlider() {
    // 防止因为点击事件，使得自动轮播事件出现错乱
    // 清除定时器，停止轮播
    clearInterval(picInterval);
    slides[currentIndex].classList.remove("current");

    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add("current")
    // 一定要写完整，只写picInterval，轮播图会不动
    // 重启定时器，自动轮播
    picInterval = setInterval(autoDirection ? handleNextSlider : handlePrevSlider, time);
}

// 轮套图后退一张
function handlePrevSlider() {
    clearInterval(picInterval);
    slides[currentIndex].classList.remove("current");

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add("current")
    picInterval = setInterval(autoDirection ? handleNextSlider : handlePrevSlider, time);
}