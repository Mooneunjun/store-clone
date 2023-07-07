// 웹 페이지 로딩이 완료되었을 때 실행되는 함수
// 로컬스토리지에서 메뉴 정보 가져오기
var menuDetail = JSON.parse(localStorage.getItem("menuDetail"));

// detailImg 확인 후 이미지 추가
if (menuDetail.detailImg) {
  var menuImgElement = document.querySelector(".menu-img");
  menuImgElement.style.backgroundImage = "url('" + menuDetail.detailImg + "')";
}

// 메뉴 이름 엘리먼트 찾기
var menuNameElement = document.querySelector(".menu-name");

// 메뉴 이름 설정
menuNameElement.textContent = menuDetail.name;

////

/////
// isNew 확인 후 새로운 메뉴 표시
if (menuDetail.isNew) {
  var menuNameGroupElement = document.querySelector(".menu-name-group");

  // 새로운 메뉴를 나타내는 이미지 요소 생성
  var newIconElement = document.createElement("img");
  newIconElement.src = "./assets/images/ico-new.svg";
  newIconElement.alt = "new";
  newIconElement.className = "ico-new";

  // .menu-name-group에 새로운 메뉴 아이콘 추가
  menuNameGroupElement.appendChild(newIconElement);
}
/////
/////
// discount 확인 후 할인 정보 표시
if (menuDetail.discount) {
  var menuNameGroupElement = document.querySelector(".menu-name-group");

  // 할인 정보를 나타내는 요소 생성
  var discountElement = document.createElement("span");
  discountElement.className = "badge badge-discount";
  discountElement.textContent = menuDetail.discount + "%";

  // .menu-name-group에 할인 정보 추가
  menuNameGroupElement.appendChild(discountElement);
}
/////
/////
// orderNum의 합을 구하기 위한 변수 선언
var sumOrderNum = 0;
var count = 0;

// storeList에서 menuItems 배열 순회
for (var i = 0; i < storeList.store[0].menuItems.length; i++) {
  var menuItem = storeList.store[0].menuItems[i];

  // orderNum이 존재하는 경우에만 합산
  if (menuItem.hasOwnProperty("orderNum")) {
    sumOrderNum += menuItem.orderNum;
    count++;
  }
}

// orderNum의 평균 계산
var averageOrderNum = count > 0 ? sumOrderNum / count : 0;

// 로컬스토리지에서 menuDetail 가져오기
var menuDetail = JSON.parse(localStorage.getItem("menuDetail"));

// orderNum 비교 후 인기 여부 설정
if (menuDetail.orderNum > averageOrderNum || menuDetail.isPopular) {
  var menuNameGroupElement = document.querySelector(".menu-name-group");

  // 인기를 나타내는 요소 추가
  var popularBadgeElement = document.createElement("span");
  popularBadgeElement.className = "badge badge-popular";
  popularBadgeElement.textContent = "인기";

  // .menu-name-group에 인기 요소 추가
  menuNameGroupElement.appendChild(popularBadgeElement);
}
//
//
////
////
// isTypical 확인 후 대표 정보 표시
if (menuDetail.isTypical) {
  var menuNameGroupElement = document.querySelector(".menu-name-group");

  // 대표 정보를 나타내는 요소 생성
  var typicalElement = document.createElement("span");
  typicalElement.className = "badge badge-typical";
  typicalElement.textContent = "대표";

  // .menu-name-group에 대표 정보 추가
  menuNameGroupElement.appendChild(typicalElement);
}
///
///

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
var menuPriceElement = document.querySelector(".menu-price");
menuPriceElement.textContent = formattedPrice;

// 가격을 원화(₩) 형식으로 포맷하는 함수
function formatPrice(price) {
  var formattedNumber = price.toLocaleString("ko-KR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formattedNumber + "원";
}
//
///

///
// 리뷰가 있는 경우에만 처리
if (menuDetail.review && menuDetail.review.length > 0) {
  // review의 모든 star 평점 합 구하기
  const reviews = menuDetail.review;
  let totalStars = 0;
  for (let i = 0; i < reviews.length; i++) {
    totalStars += reviews[i].star;
  }

  // 평균 계산
  const averageStars = totalStars / reviews.length;

  // .menu-grade에 별 아이콘과 평균 평점 넣어주기
  const menuGradeElement = document.querySelector(".menu-grade");
  menuGradeElement.innerHTML = `<img src="./assets/images/ico-star.svg" alt="" srcset="" class="ico-star"> ${averageStars.toFixed(
    1
  )}`;
} else {
  // 리뷰가 없는 경우 .menu-grade 태그 삭제
  const menuGradeElement = document.querySelector(".menu-grade");

  menuGradeElement.remove();
}

//
////
////
const orderNumValue = menuDetail.orderNum;
if (orderNumValue != 0) {
  const orderNumElement = document.querySelector(".menu-number-of-order");
  orderNumElement.innerHTML = `주문수<em>${orderNumValue}</em>`;
} else {
  // 주문수가 없는 경우 menu-number-of-order 태그 삭제
  const menuGradeElement = document.querySelector(".menu-number-of-order");
  menuGradeElement.remove();
}

///
///
///
const detailTxtValue = menuDetail.detailTxt;
const menuDescElement = document.querySelector(".menu-desc");
menuDescElement.textContent = detailTxtValue;
///
///
document.addEventListener("DOMContentLoaded", function () {
  const tabSwitches = document.querySelectorAll(".tab-switch");

  // 페이지 로딩 시 로컬 스토리지에서 선택한 탭 인덱스를 가져옵니다.
  const savedIndex = localStorage.getItem("selectedTabIndex");

  // 기본적으로 첫 번째 탭을 활성화합니다.
  let activeIndex = 0;

  // 가져온 값이 0 또는 1이라면 해당 값을 사용하여 탭 상태를 업데이트합니다.
  if (savedIndex === "0" || savedIndex === "1") {
    activeIndex = parseInt(savedIndex, 10);
  }

  // 선택한 탭 인덱스에 따라 탭 상태를 업데이트합니다.
  changeTabStatus(tabSwitches, activeIndex);

  // 탭 클릭 이벤트 핸들러를 등록합니다.
  tabSwitches.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      changeTabStatus(tabSwitches, index);

      // 선택한 탭 인덱스를 로컬 스토리지에 저장합니다.
      localStorage.setItem("selectedTabIndex", index.toString());
    });
  });
});

// 탭 상태 변경
function changeTabStatus(tabSwitches, activeIndex) {
  tabSwitches.forEach((tab, index) => {
    if (index === activeIndex) {
      tab.classList.add("is-active");
    } else {
      tab.classList.remove("is-active");
    }
  });
}

////

////
////
// .point 요소 선택
const pointElement = document.querySelector(".point");
// .point 요소에 store 이름 설정
pointElement.textContent = storeList.store[0].business.name;
