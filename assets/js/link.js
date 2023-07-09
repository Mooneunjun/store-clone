// a 태그 href가 빈 상태일시 클릭하면 아무런 반응 없애주기 원래는 클릭하면 새로고침함
const anchorTags = document.querySelectorAll("a");
for (let i = 0; i < anchorTags.length; i++) {
  const href = anchorTags[i].getAttribute("href");
  if (href === "" || href === "/") {
    anchorTags[i].addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
}

//카테고리 열기 닫히기 토글버튼
function toggleClosedClass(event) {
  event.preventDefault();
  const menuListArea = this.closest(".menu-list-area");
  menuListArea.classList.toggle("is-closed");
}

const btnToggles = document.querySelectorAll(".btn-toggle");
btnToggles.forEach((btnToggle) => {
  btnToggle.addEventListener("click", toggleClosedClass);
});
