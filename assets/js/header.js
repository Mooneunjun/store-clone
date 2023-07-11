// 로컬스토리지에서 스토어 이름 가져오기

const storeName = document.querySelector("#store-name");
storeName.textContent = storeList.store[0].business.name;

// 샐러드 성수점의 영업시간을 배열로 가져옵니다.
const businessHours = [
  parseInt(storeList.store[0].business.open),
  parseInt(storeList.store[0].business.close),
];
// 현재 시간이 영업시간 내에 있는지 확인합니다.
function checkTime() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  return currentHour >= businessHours[0] && currentHour < businessHours[1];
}

//주문 시간 가능 확인
function checkTimeAndUpdate() {
  const alertElement = document.querySelector(".info-main-notice.alert");
  const infoElement = document.querySelector(".info-main-notice:not(.alert)");
  const icoClockAlert = document.querySelector(".ico-clock-alert");

  //영업시간 알려주기
  if (businessHours[0] <= 12) {
    icoClockAlert.textContent = `내일 오전 ${businessHours[0]}시 이후로 다시 방문해주세요.`;
  } else {
    icoClockAlert.textContent = `내일 오후 ${businessHours[0]}시 이후로 다시 방문해주세요.`;
  }

  //

  if (checkTime()) {
    alertElement.classList.add("hidden");
    infoElement.classList.remove("hidden");
  } else {
    alertElement.classList.remove("hidden");
    infoElement.classList.add("hidden");
  }
}

// 페이지가 로드되면 함수를 처음 호출.
checkTimeAndUpdate();

// 포장 배달 팝업창 숨기기
function hidePopup() {
  document.querySelector(".order-type-popup").classList.add("hidden");
  document.querySelector(".dimmed-layer").classList.add("hidden");
}

// 탭 업데이트
function updateTabInfo(index) {
  const tabInfo = [
    "픽업하실 수 있게 포장해 드립니다.",
    "매장에서 식사하실 수 있습니다.",
    "배달 서비스를 이용하실 수 있습니다.",
  ];

  document.querySelector(".info-main-notice").textContent = tabInfo[index];
}

// 탭 상태 변경
function changeTabStatus(tabSwitches, targetTab) {
  tabSwitches.forEach((otherTab) => {
    otherTab.classList.remove("is-active");
  });

  targetTab.classList.add("is-active");
}
//
/**
 * body 요소의 'scroll-off' 클래스를 제거하여 스크롤을 활성화합니다.
 */
function enableScroll() {
  document.body.classList.remove("scroll-off");
}

//

function changeThemeColor(color) {
  // theme-color 메타 태그를 선택합니다.
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  // theme-color 메타 태그의 content 속성을 변경합니다.
  themeColorMeta.setAttribute("content", color);
}

document.addEventListener("DOMContentLoaded", function () {
  const btnSelection = document.querySelectorAll(".btn-selection");
  const tabSwitches = document.querySelectorAll(".tab-switch");

  btnSelection.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      hidePopup();
      changeTabStatus(tabSwitches, tabSwitches[index]);
      updateTabInfo(index);
      checkTimeAndUpdate();
      enableScroll();
      changeThemeColor("#fff");
      // 선택한 탭 인덱스를 로컬 스토리지에 저장합니다.
      localStorage.setItem("selectedTabIndex", index);
    });
  });

  tabSwitches.forEach((tabSwitch, index) => {
    tabSwitch.addEventListener("click", (event) => {
      event.preventDefault();
      changeTabStatus(tabSwitches, tabSwitch);
      updateTabInfo(index);
      checkTimeAndUpdate();
      // 선택한 탭 인덱스를 로컬 스토리지에 저장합니다.
      localStorage.setItem("selectedTabIndex", index);
    });
  });
  // 웹 페이지 로딩 시 저장된 탭 인덱스를 가져와서 해당 탭 상태를 업데이트합니다.
  const savedIndex = localStorage.getItem("selectedTabIndex");
  if (savedIndex !== null) {
    changeTabStatus(tabSwitches, tabSwitches[savedIndex]);
    updateTabInfo(savedIndex);
    var dimmedLayer = document.getElementsByClassName("dimmed-layer")[0];

    if (dimmedLayer && dimmedLayer.classList.contains("hidden")) {
      changeThemeColor("#fff");
      enableScroll();
    }
  }
});

///

///

//

// 메뉴 가격을 한국 원화 형식으로 표시하는 함수
function formatDate(price) {
  return price.toLocaleString("ko-KR") + "원";
}
// 메뉴 객체를 기반으로 메뉴 아이템 엘리먼트를 생성하는 함수
function createMenuItem(menu) {
  // "recent-menu-item"과 "is-ordered" 클래스를 가진 리스트 아이템 엘리먼트 생성
  const menuItem = document.createElement("li");
  menuItem.classList.add("recent-menu-item");
  menuItem.title = menu.name;

  const menuLink = document.createElement("a");
  menuLink.classList.add("recent-menu-link");

  if (!menu.link) {
    menuLink.href = "detail.html";
    menuLink.title = menu.name;
  } else {
    menuLink.href = menu.link;
    menuLink.title = menu.name;
  }

  // "menu-img-area" 클래스를 가진 div 엘리먼트 생성
  const menuImgArea = document.createElement("div");
  menuImgArea.classList.add("menu-img-area");

  // 메뉴가 인기 있는 경우 "badge-popular" 클래스를 가진 span 엘리먼트와 "인기" 뱃지와 텍스트 추가
  if (menu.isPopular) {
    const badgePopular = document.createElement("span");
    badgePopular.classList.add("badge-popular");
    badgePopular.textContent = "인기";
    menuImgArea.appendChild(badgePopular);
  }

  // 메뉴 이미지를 표시하는 img 엘리먼트 생성
  const menuImg = document.createElement("img");
  menuImg.classList.add("menu-img");

  if (!menu.imageUrl) {
    menuImg.src = "https://via.placeholder.com/80";
    menuImgArea.appendChild(menuImg);
    menuImg.alt = menu.name;
  } else {
    menuImg.src = menu.imageUrl + "?type=f220_220_60_sharpen";
    menuImgArea.appendChild(menuImg);
    menuImg.alt = menu.name;
  }

  // "badge-cart" 클래스를 가진 span 엘리먼트와 "ico-cart" 클래스를 가진 img 엘리먼트 추가
  const badgeCart = document.createElement("span");
  badgeCart.classList.add("badge-cart");
  badgeCart.title = menu.name;
  const icoCart = document.createElement("img");
  icoCart.src = "./assets/images/ico-cart.svg";
  icoCart.alt = "주문하기";
  icoCart.classList.add("ico-cart");
  badgeCart.appendChild(icoCart);
  menuItem.appendChild(badgeCart);

  // 메뉴 이름을 표시하는 p 엘리먼트 생성
  const menuName = document.createElement("p");
  menuName.classList.add("menu-name");
  menuName.textContent = menu.name;

  // 메뉴 가격을 표시하는 p 엘리먼트 생성
  const menuPrice = document.createElement("p");
  menuPrice.classList.add("menu-price");

  if (!menu.price) {
    menuPrice.textContent = "판매제한";
  } else if (!menu.discount) {
    menuPrice.textContent = formatDate(menu.price);
  } else {
    // 메뉴가 힐인 있는 경우 "badge-popular" 클래스를 가진 span 엘리먼트와 "인기" 뱃지와 텍스트 추가
    const badgeDiscount = document.createElement("span");
    badgeDiscount.classList.add("badge-discount");
    badgeDiscount.textContent = menu.discount + "%";
    menuImgArea.appendChild(badgeDiscount);
    // 할인 금액을 계산합니다.
    // 할인율을 백분율로 변환합니다.
    const discountRate = menu.discount / 100;
    const discountAmount = menu.price * discountRate;
    // 할인된 가격을 계산합니다.
    const discountedPrice =
      Math.floor((menu.price - discountAmount) / 100) * 100;
    menuPrice.textContent = formatDate(discountedPrice);
  }

  // 메뉴 아이템 엘리먼트에 자식 엘리먼트 추가
  menuItem.appendChild(menuLink);
  menuLink.appendChild(menuImgArea);
  menuLink.appendChild(menuName);
  menuLink.appendChild(menuPrice);

  return menuItem;
}

// 현재 날짜를 YYYY-MM-DD 형식의 문자열로 반환하는 함수
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

let menuList = [];
// storeList의 모든 매장의 메뉴 리스트를 하나의 배열로 만듭니다.
for (let storeMenu of Object.values(storeList)) {
  menuList = menuList.concat(storeMenu[0].menuItems);
}
//
// 모든 orderNum의 합을 구합니다.
let sum = 0;
menuList.forEach((item) => {
  sum += item.orderNum;
});

console.log(menuList);
// 평균을 구합니다.
let average = (sum / menuList.length) * 1.5;

// orderNum이 평균값보다 큰 경우, isPopular을 true로 설정합니다.
menuList.forEach((item) => {
  //orderNum이 평균값보다 큰 경우, isPopular을 true로 설정합니다
  if (item.orderNum > average) {
    item.isPopular = item.orderNum > average;
  }
  //orderNum이 평균값보다 큰 경우, isPopular을 true로 설정합니다 아닌 경우 false로 설정
  //   item.isPopular = item.orderNum > average;
});

// 최근 메뉴 리스트와 최근 메뉴 영역을 선택합니다.
const recentMenuList = document.querySelector(".recent-menu-list");
const recentOrderArea = document.querySelector(".recent-order-area");
// 오늘 날짜를 가져옵니다.
const todayDate = getTodayDate();
// 최근에 주문된 메뉴와 해당 날짜를 저장할 변수를 초기화합니다.
let mostRecentMenu = null;
let mostRecentMenuDate = null;

// menuList 배열의 각 요소를 반복하면서 가장 최근에 주문된 메뉴를 찾습니다.
menuList.forEach((menu) => {
  // 주문 날짜(orderDate)가 오늘(todayDate)보다 이전인 요소만 처리합니다.
  if (menu.orderDate && new Date(menu.orderDate) <= new Date(todayDate)) {
    // mostRecentMenuDate 변수가 비어 있거나, 현재 요소의 주문 날짜가 더 최근인 경우
    if (
      !mostRecentMenuDate ||
      new Date(menu.orderDate) > new Date(mostRecentMenuDate)
    ) {
      // mostRecentMenuDate와 mostRecentMenu 변수를 갱신합니다.
      mostRecentMenuDate = menu.orderDate;
      mostRecentMenu = menu;
    }
  }
});

// 최근에 주문된 메뉴가 있는 경우에만 메뉴 아이템을 생성하여 추가합니다.
if (mostRecentMenu) {
  const menuItem = createMenuItem(mostRecentMenu);

  recentMenuList.appendChild(menuItem);

  // 최근 메뉴 아이템 중 첫 번째 요소를 선택합니다.
  const recentMenuItem = document.querySelector(".recent-menu-item");

  // 선택한 요소에 "is-ordered" 클래스를 추가합니다.
  recentMenuItem.classList.add("is-ordered");
} else {
  // 최근에 주문된 메뉴가 없는 경우, 최근 메뉴 영역을 숨깁니다.
  recentOrderArea.classList.add("hidden");
}
//최근 주문 옆에 할인메뉴를 추천하는 식으로 뛰워줌
const filteredDiscountMenus = menuList.filter(
  (menu) => menu != mostRecentMenu && menu.discount && menu.stock
);
// menuList 배열의 각 요소를 반복하면서 "orderNum" 값이 평균보다 크고 "mostRecentMenu"가 아닌 메뉴를 filteredMenus 배열에 추가합니다.
const filteredMenus = menuList.filter(
  (menu) =>
    menu != mostRecentMenu &&
    !menu.discount &&
    menu.stock &&
    menu.isPopular &&
    menu.category != "음료"
);

// 할인 메뉴를 먼저 추가해줌
filteredDiscountMenus.forEach((menu) => {
  // 메뉴 아이템을 생성하여 "recent-menu-list"에 추가합니다.
  const menuItem = createMenuItem(menu);
  recentMenuList.appendChild(menuItem);
});
// 이닉 메뉴를 추가해줌
filteredMenus.forEach((menu) => {
  // 메뉴 아이템을 생성하여 "recent-menu-list"에 추가합니다.
  const menuItem = createMenuItem(menu);
  recentMenuList.appendChild(menuItem);
});

////

// HTML 요소를 선택합니다.
const badgeCarts = document.querySelectorAll(".badge-cart");
// 첫 번째 .badge-cart에 클래스를 추가합니다.
badgeCarts[0].classList.add("first-badge");
// 마지막 .badge-cart에 클래스를 추가합니다.
badgeCarts[badgeCarts.length - 1].classList.add("last-badge");

////

// title로 해당 메뉴 아이템을 찾는 함수
function findMenuItemByTitle(menuList, title) {
  for (const store of Object.values(menuList)) {
    for (const menu of store) {
      for (const menuItem of menu.menuItems) {
        if (menuItem.name === title) {
          return menuItem;
        }
      }
    }
  }
}
