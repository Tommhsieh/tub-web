//輪播 carousel
let index = 0; // 現在是第幾張
const items = document.querySelectorAll(".carousel-item");
const inner = document.querySelector(".carousel-inner");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  inner.style.transform = `translateX(-${index * 100}%)`; //移動圖片位置 translateX(-${index * 100}% , index = 0 → 第一張 → -0%, index = 1 → 第二張 → -100%
    dots.forEach(d => d.classList.remove("active")); //更新圓點樣式,全部圓點移除 active
    dots[index].classList.add("active"); //將當前 index 對應的小圓點加上 active
}

//左按鈕（上一張）
document.querySelector(".prev").onclick = () => {
    index = (index === 0) ? items.length - 1 : index - 1; // 循環,index=0 時再按「上一張」，會跳到最後一張（循環）,否則 index–1
    updateCarousel();
};

//右按鈕（下一張）
document.querySelector(".next").onclick = () => {
    index = (index === items.length - 1) ? 0 : index + 1; //最後一張按 next → 回到第一張（循環）,否則 index+1
    updateCarousel();
};

//小圓點點選切換,點哪個圓點 → 跳到第幾張,index 直接變成那個圓點的 i
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i;
        updateCarousel();
    };
});

/* 自動輪播 */
setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
}, 3000);