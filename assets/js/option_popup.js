document.querySelector(".btn-order").addEventListener("click", function () {
  // 메뉴가 음료수와 스프 카테고리인 경우 옵션 목록을 숨김
  if (menuDetail.category === "음료" || menuDetail.category === "스프") {
    handleOrderButtonClick();
    history.back();
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
  } else if (selectedTabIndex === "2") {
    badgeElement.textContent = "배달";
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

  // option-group1에서 체크된 항목들의 개수를 구함
  let checkedCount = document.querySelectorAll(
    ".option-group1 .input-check:checked"
  ).length;

  // 체크된 항목들의 개수에 따라 900원씩 추가
  let addition1 = checkedCount * 900;

  // 두 번째 계산 부분: option-group2에서 체크된 항목과 수량에 따른 금액 계산
  let optionItems = document.querySelectorAll(".option-group2 .option-item");
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

//.option-item 요소를 클릭할 때마다 주문 버튼 텍스트 갱신
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
/// 주문하기 버튼 클릭 이벤트

function handleOrderButtonClick() {
  // price와 discount 값을 가져오기
  var price = menuDetail.price;
  var discount = menuDetail.discount;

  // 할인이 있는 경우 최종 가격 계산
  var finalPrice = price;
  if (discount) {
    finalPrice = price - price * (discount / 100);
  }

  // 최종 가격을 100원 단위로 내림하여 계산
  var roundedPrice = Math.floor(finalPrice / 100) * 100;

  //돈을 계산하는 함수
  function calculateTotal() {
    // amount 값을 가져와서 정수로 변환
    let amount = parseInt(document.querySelector(".amount").innerText, 10);

    // option-group1에서 체크된 항목들의 개수를 구함
    let checkedCount = document.querySelectorAll(
      ".option-group1 .input-check:checked"
    ).length;

    // 체크된 항목들의 개수에 따라 900원씩 추가
    let addition1 = checkedCount * 900;

    // 두 번째 계산 부분: option-group2에서 체크된 항목과 수량에 따른 금액 계산
    let optionItems = document.querySelectorAll(".option-group2 .option-item");
    let addition2 = 0;
    let prices = [1500, 900, 1900];
    optionItems.forEach((item, index) => {
      let isChecked = item
        .querySelector(".label")
        .classList.contains("checked");
      if (isChecked) {
        let itemAmount = parseInt(
          item.querySelector(".amount").textContent,
          10
        );
        addition2 += prices[index] * itemAmount;
      }
    });

    // 중간 합계와 추가 금액을 합해서 최종 금액을 구함
    let total = amount * (roundedPrice + addition1 + addition2);

    return total;
  }

  let orderList = localStorage.getItem("orderList")
    ? JSON.parse(localStorage.getItem("orderList"))
    : [];

  let amountSelect2 = document.querySelector("#amount-select-2 .amount");
  if (menuDetail.category === "음료" || menuDetail.category === "스프") {
    let orderListItem = orderList.find((item) => item.Name === menuDetail.name);
    if (orderListItem) {
      // 이미 존재하는 메뉴일 경우, 가격만 업데이트
      orderListItem.price += calculateTotal();
      orderListItem.amount += Number(amountSelect2.textContent);
    } else {
      orderList.push({
        Name: menuDetail.name,
        category: menuDetail.category,
        imageUrl: menuDetail.imageUrl,
        price: calculateTotal(),
        amount: Number(amountSelect2.textContent),
      });
    }
    localStorage.setItem("orderList", JSON.stringify(orderList));
  } else {
    let labelsText = "";
    let optionBase = document.querySelectorAll(
      ".option-base .input-radio:checked"
    );

    optionBase.forEach((input) => {
      let label = document.querySelector(`label[for='${input.id}'] .label-txt`);
      if (label) {
        labelsText = label.textContent;
      }
    });

    let optionGroup1 = document.querySelectorAll(
      ".option-group1 .input-check:checked"
    );

    optionGroup1.forEach((input) => {
      let label = document.querySelector(`label[for='${input.id}'] .label-txt`);
      if (label) {
        labelsText += ", " + label.textContent;
      }
    });

    let checkedItems = document.querySelectorAll(".option-group2 .checked");

    checkedItems.forEach((item) => {
      let label = item.querySelector(".label-txt");
      let amount = item.nextElementSibling.querySelector(".amount");
      if (label && amount) {
        labelsText +=
          ", " + label.textContent + " " + amount.textContent + "개";
      }
    });

    let cleanedText = labelsText.replace(/\s+/g, " ");

    let orderListItem = orderList.find(
      (item) => item.Name === menuDetail.name && item.option === cleanedText
    );
    if (orderListItem) {
      // 이미 존재하는 메뉴일 경우, 가격만 업데이트
      orderListItem.price += calculateTotal();
      orderListItem.amount += Number(amountSelect2.textContent);
    } else {
      orderList.push({
        Name: menuDetail.name,
        category: menuDetail.category,
        imageUrl: menuDetail.imageUrl,
        price: calculateTotal(),
        amount: Number(amountSelect2.textContent),
        option: cleanedText,
      });
    }
    localStorage.setItem("orderList", JSON.stringify(orderList));
    history.back();
  }
}

// 주문하기 버튼 클릭 이벤트에 함수 연결
document
  .querySelector(".option-popup-area .btn-order")
  .addEventListener("click", handleOrderButtonClick);
