document.querySelector(".btn-order").addEventListener("click", function () {
  // 메뉴가 음료수 카테고리인 경우 옵션 목록을 숨김
  if (menuDetail.category === "음료") {
  }
  // 메뉴가 음료수 카테고리가 아닌 경우 옵션 목록을 표시
  else {
    // body 요소에 'scroll-off' 클래스 추가
    document.body.classList.add("scroll-off");
    changeThemeColor("#999");
    // .option-popup-area 요소의 'hidden' 클래스 제거
    const optionPopupArea = document.querySelector(".option-popup-area");
    optionPopupArea.classList.remove("hidden");

    // .menu-option-popup 요소에 애니메이션 클래스 추가
    const menuOptionPopup = document.querySelector(".menu-option-popup");
    menuOptionPopup.classList.remove("animate-slide-down");
    menuOptionPopup.classList.add("animate-slide-up");
    ///
  }
  ///
  // .name 클래스를 가진 요소에 삽입하기
  document.querySelector(".name").textContent = menuDetail.name;
  ///
  ///
  // selectedTabIndex 값 가져오기
  const selectedTabIndex = localStorage.getItem("selectedTabIndex");
  console.log(selectedTabIndex);
  // .badge 요소 선택
  const badgeElement = document.querySelector(".option-badge");

  // selectedTabIndex 값에 따라 .badge 내용 설정
  if (selectedTabIndex === "0") {
    badgeElement.textContent = "포장";
  } else if (selectedTabIndex === "1") {
    badgeElement.textContent = "매장";
  }

  ///

  const menuImageElement = document.querySelector(".menu-img:last-child");

  if (menuDetail.imageUrl) {
    menuImageElement.src = menuDetail.imageUrl;
  }
  ///
  ///
});

///
///
///
//
///
///

document.querySelector(".btn-close").addEventListener("click", function () {
  changeThemeColor("#fff");
  const popup = document.querySelector(".content-body");
  popup.scrollTop = 0;
  // body 요소에서 'scroll-off' 클래스 제거
  document.body.classList.remove("scroll-off");

  // .menu-option-popup 요소에 애니메이션 클래스 추가
  const menuOptionPopup = document.querySelector(".menu-option-popup");
  menuOptionPopup.classList.add("animate-slide-down");
  // 0.3초 후에 .option-popup-area 요소에 'hidden' 클래스 추가
  const optionPopupArea = document.querySelector(".option-popup-area");
  const dimmedLayer = document.querySelector(".dimmed-layer");
  changeThemeColor("#fff");
  dimmedLayer.style.animation = "fade-out 0.3s ease"; // 添加渐变隐藏的动画效果
  setTimeout(function () {
    optionPopupArea.classList.add("hidden");
    dimmedLayer.style.animation = ""; // 删除动画属性
  }, 300);
});
//
///
///
//돈을 계산하는 함수
function calculateTotal() {
  // amount 값을 가져와서 정수로 변환
  let amount = parseInt(document.querySelector(".amount").innerText, 10);

  // option-list1에서 체크된 항목들의 개수를 구함
  let checkedCount = document.querySelectorAll(
    ".option-list1 .input-check:checked"
  ).length;

  // 체크된 항목들의 개수에 따라 900원씩 추가
  let addition1 = checkedCount * 900;

  // 두 번째 계산 부분: option-list2에서 체크된 항목과 수량에 따른 금액 계산
  let optionItems = document.querySelectorAll(".option-list2 .option-item");
  let addition2 = 0;
  let prices = [1500, 900, 1900];
  optionItems.forEach((item, index) => {
    let isChecked = item.querySelector(".label").classList.contains("checked");
    if (isChecked) {
      let itemAmount = parseInt(item.querySelector(".amount").textContent, 10);
      addition2 += prices[index] * itemAmount;
    }
  });

  // 중간 합계와 추가 금액을 합해서 최종 금액을 구함
  let total = amount * (roundedPrice + addition1 + addition2);

  return total;
}

calculateTotal();

// .option-item 요소를 클릭할 때마다 주문 버튼 텍스트 갱신
const optionItems = document.querySelectorAll(".option-item");
optionItems.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    // amount 값을 가져와서 정수로 변환
    let amount = parseInt(document.querySelector(".amount").innerText, 10);
    const btnOrders = document.querySelectorAll(".btn-order");

    // 주문 버튼의 텍스트 값 설정
    btnOrders.forEach((btnOrder) => {
      if (!menuDetail.stock) {
        btnOrder.textContent = "일시 품절";
      } else {
        btnOrder.textContent =
          amount + "개 담기 " + formatPrice(calculateTotal());
      }
    });
  });
});

//

//
