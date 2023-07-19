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

const badegeCarts = document.querySelectorAll(".badge-cart");
// 현재 영업시간 아닌경우 badegeCart 숨기기
if (!checkTime()) {
  badegeCarts.forEach((badegeCart) => {
    badegeCart.classList.add("hidden");
  });
}

//페이지 로딩 시 실행되는 함수

function checkOrderList() {
  let orderList = localStorage.getItem("orderList");

  if (orderList) {
    orderList = JSON.parse(orderList);
  } else {
    orderList = [];
  }

  // 가격을 원화(₩) 형식으로 포맷하는 함수
  function formatPrice(price) {
    var formattedNumber = price.toLocaleString("ko-KR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formattedNumber + "원";
  }
  let container = document.querySelector(".container");
  let orderBoxArea = document.querySelector(".order-box-area");

  let OrderBoxName = document.querySelector(".order-box-area .menu-name");
  let OrderBoxPrice = document.querySelector(".order-box-area .menu-price");
  let OrderBoxNum = document.querySelector(".order-box-area .num");
  // orderList에 메뉴 있는지 확인

  container.classList.remove("order");
  orderBoxArea.classList.add("hidden");
  console.log(orderList.length);
  if (orderList.length > 0) {
    container.classList.add("order");

    orderBoxArea.classList.remove("hidden");

    // 모든 price를 합치기
    let total = orderList.reduce((sum, item) => sum + item.price, 0);
    OrderBoxPrice.textContent = formatPrice(total);

    // 모든 Name을 하나의 문자열로 가져오기
    let menuNames = orderList.map((item) => item.Name).join(", ");
    OrderBoxName.textContent = menuNames;

    // 모든 amount를 합치기
    OrderBoxNum.textContent = orderList.reduce(
      (sum, item) => sum + item.amount,
      0
    );
  }
}

window.addEventListener("pageshow", function (event) {
  // 뒤로 가기 동작 후에 페이지가 다시 표시되었을 때 실행할 함수를 여기에 작성합니다.
  checkOrderList();
});
