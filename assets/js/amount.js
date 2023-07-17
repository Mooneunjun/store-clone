// amount 값 설정
let amount = 1;

// .btn-minus 요소 선택
const btnMinus = document.querySelectorAll(".btn-minus");

// .btn-plus 요소 선택
const btnPlus = document.querySelectorAll(".btn-plus");

// 주문 버튼 선택
const btnOrder = document.querySelector(".btn-order");
// .amount 요소 선택
const amountElement1 = document
  .getElementById("amount-select-1")
  .querySelector(".amount");
const amountElement2 = document
  .getElementById("amount-select-2")
  .querySelector(".amount");

// 영업 시간 체크 함수
function checkBusinessHours() {
  // 현재 시간 구하기
  const now = new Date();
  const currentHour = now.getHours();

  // storeList의 첫 번째 가게의 영업 시간 가져오기
  const openHour = parseInt(storeList.store[0].business.open);
  const closeHour = parseInt(storeList.store[0].business.close);

  // 영업 시간이 아닌 경우
  if (currentHour < openHour || currentHour >= closeHour) {
    // 더하기 버튼 비활성화
    btnPlus.disabled = true;
    // 주문버튼 비활성화 및 텍스트 업데이트
    btnOrder.disabled = true;
    btnOrder.textContent = "지금 주문 가능한 시간이 아닙니다";
  }
}

// 페이지 로딩 시 실행
window.addEventListener("DOMContentLoaded", () => {
  //주문버튼 텍스트 값 설정
  // 모든 주문 버튼 요소에 대해 반복
  const btnOrders = document.querySelectorAll(".btn-order");
  btnOrders.forEach((btnOrder) => {
    // amount 값을 가져와서 정수로 변환
    let amount = parseInt(document.querySelector(".amount").innerText, 10);

    // 주문 버튼의 텍스트 값 설정
    if (!menuDetail.stock) {
      btnOrder.setAttribute("disabled", true);
      btnOrder.textContent = "일시 품절";
    } else {
      btnOrder.textContent =
        amount + "개 담기 " + formatPrice(calculateTotal());
    }
  });

  var btnPlus = document.querySelectorAll(".btn-plus");
  if (!menuDetail.stock) {
    btnPlus.forEach(function (button) {
      button.setAttribute("disabled", true);
    });
  }

  // 영업 시간 체크
  checkBusinessHours();

  // .amount이 1이 아닐 경우, 빼기 버튼의 disabled 속성 제거
  if (amount !== 1) {
    btnMinus.disabled = false;

    //주문버튼 텍스트 값 설정
    // 모든 주문 버튼 요소에 대해 반복
    const btnOrders = document.querySelectorAll(".btn-order");
    btnOrders.forEach((btnOrder) => {
      // amount 값을 가져와서 정수로 변환
      let amount = parseInt(document.querySelector(".amount").innerText, 10);

      // 주문 버튼의 텍스트 값 설정
      btnOrder.textContent =
        amount + "개 담기 " + formatPrice(calculateTotal());
    });
  }
});

// 더하기 버튼 클릭 이벤트 핸들러
btnPlus.forEach((btn, index) => {
  // 첫 번째와 두 번째 버튼에 대해서만 이벤트 핸들러 등록
  if (index === 0 || index === 1) {
    btn.addEventListener("click", () => {
      // amount 값 1 증가
      amount += 1;

      // amount 값 업데이트
      amountElement1.textContent = amount;
      amountElement2.textContent = amount;

      // 주문버튼 텍스트 값 설정
      // 모든 주문 버튼 요소에 대해 반복
      const btnOrders = document.querySelectorAll(".btn-order");
      btnOrders.forEach((btnOrder) => {
        // amount 값을 가져와서 정수로 변환
        let amount = parseInt(document.querySelector(".amount").innerText, 10);

        // 주문 버튼의 텍스트 값 설정
        btnOrder.textContent =
          amount + "개 담기 " + formatPrice(calculateTotal());
      });

      // 첫 번째 요소에 대해 연산 수행
      if (btnMinus.length > 0) {
        btnMinus[0].disabled = false;
      }

      // 두 번째 요소에 대해 연산 수행
      if (btnMinus.length > 1) {
        btnMinus[1].disabled = false;
      }
    });
  }
});

// 빼기 버튼 클릭 이벤트 핸들러
btnMinus.forEach((btn, index) => {
  // 첫 번째와 두 번째 버튼에 대해서만 이벤트 핸들러 등록
  if (index === 0 || index === 1) {
    btn.addEventListener("click", () => {
      // amount 값 1 감소
      amount -= 1;

      // amount 값 업데이트
      amountElement1.textContent = amount;
      amountElement2.textContent = amount;

      // 주문버튼 텍스트 값 설정
      const btnOrders = document.querySelectorAll(".btn-order");
      btnOrders.forEach((btnOrder) => {
        // amount 값을 가져와서 정수로 변환
        let amount = parseInt(document.querySelector(".amount").innerText, 10);

        // 주문 버튼의 텍스트 값 설정
        btnOrder.textContent =
          amount + "개 담기 " + formatPrice(calculateTotal());
      });

      // amount 값이 1 이하인 경우 모든 버튼의 disabled 속성 추가
      if (amount <= 1) {
        // 첫 번째 요소에 대해 연산 수행
        if (btnMinus.length > 0) {
          btnMinus[0].disabled = true;
        }

        // 두 번째 요소에 대해 연산 수행
        if (btnMinus.length > 1) {
          btnMinus[1].disabled = true;
        }
      }
    });
  }
});
///
///
///
window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".option-group2 .option-item").forEach((item) => {
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
///
///
///
