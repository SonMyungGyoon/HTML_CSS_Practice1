(function () {
  const spanMain = document.querySelector("main h2 span");
  const textArr = [
    "Web Publisher",
    "Front-End Developer",
    "Web UI Designer",
    "Back-End Developer",
  ];
  let index = 0;
  let currentTxt = textArr[index].split("");
  function writeText() {
    spanMain.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
      setTimeout(writeText, Math.floor(Math.random() * 100));
    } else {
      currentTxt = spanMain.textContent.split("");
      setTimeout(deleteText, 3000);
    }
  }
  function deleteText() {
    currentTxt.pop();
    spanMain.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
      setTimeout(deleteText, Math.floor(Math.random() * 100));
    } else {
      index = (index + 1) % textArr.length;
      currentTxt = textArr[index].split("");
      writeText();
    }
  }
  writeText();
})();

const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
  requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if (browerScrollY > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
}

/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
  // selector 매개변로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // 현재 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.pageYOffset;
  // 이동할 대상의 위치(y 값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: "smooth" });
};
// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
  scollMoveEl[i].addEventListener("click", function (e) {
    const target = this.dataset.target;
    animationMove(target);
  });
}
