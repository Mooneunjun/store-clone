// 선택 버튼 클릭 이벤트 핸들러
var selectionButtons = document.querySelectorAll(".btn-selection");

selectionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // 로컬 스토리지에 오늘의 날짜 저장
    var today = new Date().toISOString().split("T")[0];
    localStorage.setItem("popupDate", today);

    // 팝업 가시성 체크
    checkPopupVisibility();
  });
});

// 페이지 로딩 시 실행되는 함수
function checkPopupVisibility() {
  var orderTypePopup = document.getElementsByClassName("order-type-popup")[0];
  var dimmedLayer = document.getElementsByClassName("dimmed-layer")[0];
  if (orderTypePopup) {
    // 저장된 날짜 가져오기
    var storedDate = localStorage.getItem("popupDate");

    if (storedDate) {
      // 저장된 날짜가 있을 경우
      var today = new Date().toISOString().split("T")[0];

      if (storedDate === today) {
        // 저장된 날짜와 오늘 날짜가 일치하는 경우
        orderTypePopup.classList.add("hidden");
        dimmedLayer.classList.add("hidden");
      } else {
        // 저장된 날짜와 오늘 날짜가 일치하지 않는 경우
        orderTypePopup.classList.remove("hidden");
        dimmedLayer.classList.remove("hidden");
      }
    } else {
      // 저장된 날짜가 없는 경우 (첫 방문 등)
      orderTypePopup.classList.remove("hidden");
      dimmedLayer.classList.remove("hidden");
    }
  }
}

// 페이지 로딩 시 팝업 가시성 확인
checkPopupVisibility();
