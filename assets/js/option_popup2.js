///
///
// 获取所有的 .btn-cart 元素
const optionItems = document.querySelectorAll(".option-item");
const MenuItems = document.querySelectorAll(".menu-item");
const recentMenuItems = document.querySelectorAll(".recent-menu-item");
let menuItem;

///
MenuItems.forEach((recentMenuLink) => {
  recentMenuLink.addEventListener("click", () => {
    const title = recentMenuLink.getAttribute("title");
    menuItem = findMenuItemByTitle(storeList, title);
    // menuItem을 로컬 스토리지에 menuDetail로 저장
    localStorage.setItem("menuDetail", JSON.stringify(menuItem));

    let menuDetail = menuItem;
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

    // 최종 가격을 원화(₩) 형식으로 포맷
    var formattedPrice = formatPrice(roundedPrice);

    // 가격을 원화(₩) 형식으로 포맷하는 함수
    function formatPrice(price) {
      var formattedNumber = price.toLocaleString("ko-KR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formattedNumber + "원";
    }
    const btnOrder = document.querySelector(".btn-order");
    btnOrder.textContent = "1개 담기 " + formattedPrice;

    document.querySelector(".amount").textContent = 1;
    // body 요소에 'scroll-off' 클래스 추가
    document.body.classList.add("scroll-off");

    // .option-popup-area 요소의 'hidden' 클래스 제거
    const optionPopupArea = document.querySelector(".option-popup-area");
    optionPopupArea.classList.remove("hidden");

    // .menu-option-popup 요소에 애니메이션 클래스 추가
    const menuOptionPopup = document.querySelector(".menu-option-popup");
    menuOptionPopup.classList.remove("animate-slide-down");
    menuOptionPopup.classList.add("animate-slide-up");
    ///

    ///
    // .name 클래스를 가진 요소에 삽입하기
    document.querySelector(".name").textContent = menuDetail.name;
    ///
    ///
    // selectedTabIndex 값 가져오기
    const selectedTabIndex = localStorage.getItem("selectedTabIndex");
    // .badge 요소 선택
    const badgeElement = document.querySelector(".option-badge");

    // selectedTabIndex 값에 따라 .badge 내용 설정
    if (selectedTabIndex === "0") {
      badgeElement.textContent = "포장";
    } else if (selectedTabIndex === "1") {
      badgeElement.textContent = "매장";
    }

    ///

    const menuImageElement = document.querySelector(".menu-img-last-child");

    if (menuDetail.imageUrl) {
      menuImageElement.src = menuDetail.imageUrl;
    }
    ///

    // amount 값 설정
    let amount = 1;

    // .btn-minus 요소 선택
    const btnMinus = document.querySelectorAll(".btn-minus");

    // .btn-plus 요소 선택
    const btnPlus = document.querySelectorAll(".btn-plus");

    // .amount 요소 선택
    const amountElement2 = document
      .getElementById("amount-select-2")
      .querySelector(".amount");

    // 더하기 버튼 클릭 이벤트 핸들러
    btnPlus.forEach((btn, index) => {
      // 첫 번째와 두 번째 버튼에 대해서만 이벤트 핸들러 등록
      if (index === 0) {
        btn.addEventListener("click", () => {
          // amount 값 1 증가
          amount += 1;

          // amount 값 업데이트
          amountElement2.textContent = amount;

          // 주문버튼 텍스트 값 설정
          // 모든 주문 버튼 요소에 대해 반복
          const btnOrders = document.querySelectorAll(".btn-order");
          btnOrders.forEach((btnOrder) => {
            // amount 값을 가져와서 정수로 변환
            let amount = parseInt(
              document.querySelector(".amount").innerText,
              10
            );

            // 주문 버튼의 텍스트 값 설정
            btnOrder.textContent =
              amount + "개 담기 " + formatPrice(calculateTotal());
          });

          // 첫 번째 요소에 대해 연산 수행
          if (btnMinus.length > 0) {
            btnMinus[0].disabled = false;
          }
        });
      }
    });

    ///
    //
    //
    // 빼기 버튼 클릭 이벤트 핸들러
    btnMinus.forEach((btn, index) => {
      // 첫 번째와 두 번째 버튼에 대해서만 이벤트 핸들러 등록
      if (index === 0) {
        btn.addEventListener("click", () => {
          // amount 값 1 감소
          amount -= 1;

          // amount 값 업데이트
          amountElement2.textContent = amount;

          // 주문버튼 텍스트 값 설정
          const btnOrders = document.querySelectorAll(".btn-order");
          btnOrders.forEach((btnOrder) => {
            // amount 값을 가져와서 정수로 변환
            let amount = parseInt(
              document.querySelector(".amount").innerText,
              10
            );

            //주문 버튼의 텍스트 값 설정
            btnOrder.textContent =
              amount + "개 담기 " + formatPrice(calculateTotal());
          });

          // amount 값이 1 이하인 경우 모든 버튼의 disabled 속성 추가
          if (amount <= 1) {
            // 첫 번째 요소에 대해 연산 수행
            if (btnMinus.length > 0) {
              btnMinus[0].disabled = true;
            }
          }
        });
      }
    });
    ///
    ///
    //
    ///
    ///

    //
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
    ///
    ///
    ///

    // .option-item 요소를 클릭할 때마다 주문 버튼 텍스트 갱신
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
  });
});
//

///

recentMenuItems.forEach((recentMenuLink) => {
  recentMenuLink.addEventListener("click", () => {
    const title = recentMenuLink.getAttribute("title");
    const menuItem = findMenuItemByTitle(storeList, title);
    // menuItem을 로컬 스토리지에 menuDetail로 저장
    localStorage.setItem("menuDetail", JSON.stringify(menuItem));

    let menuDetail = menuItem;
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

    // 최종 가격을 원화(₩) 형식으로 포맷
    var formattedPrice = formatPrice(roundedPrice);

    // 가격을 원화(₩) 형식으로 포맷하는 함수
    function formatPrice(price) {
      var formattedNumber = price.toLocaleString("ko-KR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formattedNumber + "원";
    }
    const btnOrder = document.querySelector(".btn-order");
    btnOrder.textContent = "1개 담기 " + formattedPrice;

    document.querySelector(".amount").textContent = 1;
    // body 요소에 'scroll-off' 클래스 추가
    document.body.classList.add("scroll-off");

    // .option-popup-area 요소의 'hidden' 클래스 제거
    const optionPopupArea = document.querySelector(".option-popup-area");
    optionPopupArea.classList.remove("hidden");

    // .menu-option-popup 요소에 애니메이션 클래스 추가
    const menuOptionPopup = document.querySelector(".menu-option-popup");
    menuOptionPopup.classList.remove("animate-slide-down");
    menuOptionPopup.classList.add("animate-slide-up");
    ///

    ///
    // .name 클래스를 가진 요소에 삽입하기
    document.querySelector(".name").textContent = menuDetail.name;
    ///
    ///
    // selectedTabIndex 값 가져오기
    const selectedTabIndex = localStorage.getItem("selectedTabIndex");
    // .badge 요소 선택
    const badgeElement = document.querySelector(".option-badge");

    // selectedTabIndex 값에 따라 .badge 내용 설정
    if (selectedTabIndex === "0") {
      badgeElement.textContent = "포장";
    } else if (selectedTabIndex === "1") {
      badgeElement.textContent = "매장";
    }

    ///

    const menuImageElement = document.querySelector(".menu-img-last-child");

    if (menuDetail.imageUrl) {
      menuImageElement.src = menuDetail.imageUrl;
    }
    ///

    // amount 값 설정
    let amount = 1;

    // .btn-minus 요소 선택
    const btnMinus = document.querySelectorAll(".btn-minus");

    // .btn-plus 요소 선택
    const btnPlus = document.querySelectorAll(".btn-plus");

    // .amount 요소 선택
    const amountElement2 = document
      .getElementById("amount-select-2")
      .querySelector(".amount");

    // 더하기 버튼 클릭 이벤트 핸들러
    btnPlus.forEach((btn, index) => {
      // 첫 번째와 두 번째 버튼에 대해서만 이벤트 핸들러 등록
      if (index === 0) {
        btn.addEventListener("click", () => {
          // amount 값 1 증가
          amount += 1;

          // amount 값 업데이트
          amountElement2.textContent = amount;

          // 주문버튼 텍스트 값 설정
          // 모든 주문 버튼 요소에 대해 반복
          const btnOrders = document.querySelectorAll(".btn-order");
          btnOrders.forEach((btnOrder) => {
            // amount 값을 가져와서 정수로 변환
            let amount = parseInt(
              document.querySelector(".amount").innerText,
              10
            );

            // 주문 버튼의 텍스트 값 설정
            btnOrder.textContent =
              amount + "개 담기 " + formatPrice(calculateTotal());
          });

          // 첫 번째 요소에 대해 연산 수행
          if (btnMinus.length > 0) {
            btnMinus[0].disabled = false;
          }
        });
      }
    });

    ///
    //
    //
    // 빼기 버튼 클릭 이벤트 핸들러
    btnMinus.forEach((btn, index) => {
      // 첫 번째와 두 번째 버튼에 대해서만 이벤트 핸들러 등록
      if (index === 0) {
        btn.addEventListener("click", () => {
          // amount 값 1 감소
          amount -= 1;

          // amount 값 업데이트
          amountElement2.textContent = amount;

          // 주문버튼 텍스트 값 설정
          const btnOrders = document.querySelectorAll(".btn-order");
          btnOrders.forEach((btnOrder) => {
            // amount 값을 가져와서 정수로 변환
            let amount = parseInt(
              document.querySelector(".amount").innerText,
              10
            );

            //주문 버튼의 텍스트 값 설정
            btnOrder.textContent =
              amount + "개 담기 " + formatPrice(calculateTotal());
          });

          // amount 값이 1 이하인 경우 모든 버튼의 disabled 속성 추가
          if (amount <= 1) {
            // 첫 번째 요소에 대해 연산 수행
            if (btnMinus.length > 0) {
              btnMinus[0].disabled = true;
            }
          }
        });
      }
    });
    ///
    ///
    //
    ///
    ///

    //
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
    ///
    ///
    ///

    // .option-item 요소를 클릭할 때마다 주문 버튼 텍스트 갱신
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
  });
});

///
///
//  // 点击了.btn-close或.btn-order时执行的操作
// ...
function handleClick() {
  // body 요소에서 'scroll-off' 클래스 제거
  document.body.classList.remove("scroll-off");

  // .menu-option-popup 요소에 애니메이션 클래스 추가
  const menuOptionPopup = document.querySelector(".menu-option-popup");
  menuOptionPopup.classList.add("animate-slide-down");

  // 0.3초 후에 .option-popup-area 요소에 'hidden' 클래스 추가
  const optionPopupArea = document.querySelector(".option-popup-area");
  const dimmedLayer = document.querySelector(".light");
  dimmedLayer.style.animation = "fade-out 0.3s ease"; // 添加渐变隐藏的动画效果
  setTimeout(function () {
    optionPopupArea.classList.add("hidden");
    dimmedLayer.style.animation = ""; // 删除动画属性
  }, 300);

  const amount1Element = document.querySelector("#amount-select-2 .amount");
  amount1Element.textContent = "1";
  amount = 1;

  // DOM에서 옵션 목록 요소를 선택합니다.
  const optionList = document.querySelector(".option-list");

  // 모든 옵션 항목을 선택합니다.
  const optionItems = optionList.querySelectorAll(".option-item");

  // 첫 번째 옵션 항목을 선택합니다.
  const firstOption = optionItems[0];

  // 첫 번째 옵션의 라디오 버튼을 선택합니다.
  const firstRadio = firstOption.querySelector(".input-radio");

  // 모든 옵션 항목의 라디오 버튼을 반복하여 선택 상태를 설정합니다.
  optionItems.forEach((optionItem) => {
    const radio = optionItem.querySelector(".input-radio");
    if (optionItem === firstOption) {
      // 첫 번째 옵션 항목인 경우 선택 상태로 설정합니다.
      radio.checked = true;
    } else {
      // 첫 번째 옵션 항목이 아닌 경우 선택 상태를 해제합니다.
      radio.checked = false;
    }
  });

  const checkboxes = document.querySelectorAll(".input-check");

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
    }

    const btnMinusElements = document.querySelectorAll(".btn-minus");
    btnMinusElements.forEach((btnMinus) => {
      btnMinus.disabled = true;
      btnMinus.classList.remove("enabled");
    });
    const optionItems = document.querySelectorAll(".option-list2 .option-item");
    optionItems.forEach((optionItem) => {
      const amountElement = optionItem.querySelector(".amount");
      const checkedElement = optionItem.querySelector(".checked");

      amountElement.textContent = "0";
      if (checkedElement) {
        checkedElement.classList.remove("checked");
      }
    });
  });
}

document.querySelector(".btn-close").addEventListener("click", function () {
  handleClick();
});
//
document.querySelector(".btn-order").addEventListener("click", function () {
  handleClick();
});
///

//
window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".option-list2 .option-item").forEach((item) => {
    const addButton = item.querySelector(".btn-plus");
    const subtractButton = item.querySelector(".btn-minus");
    const amountElement = item.querySelector(".amount");
    const labelElement = item.querySelector(".label");

    addButton.addEventListener("click", () => {
      let currentAmount = parseInt(amountElement.textContent, 10);
      currentAmount += 1;
      amountElement.textContent = currentAmount;

      if (currentAmount > 0) {
        subtractButton.classList.add("enabled");
        subtractButton.removeAttribute("disabled");
        labelElement.classList.add("checked");
      }
    });

    subtractButton.addEventListener("click", () => {
      let currentAmount = parseInt(amountElement.textContent, 10);
      if (currentAmount > 0) {
        currentAmount -= 1;
        amountElement.textContent = currentAmount;
      }

      if (currentAmount <= 0) {
        subtractButton.classList.remove("enabled");
        subtractButton.setAttribute("disabled", "");
        labelElement.classList.remove("checked");
      }
    });
  });
});