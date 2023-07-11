// 로컬스토리지에서 스토어 이름 가져오기

const storeName = document.querySelector("#store-name");
storeName.textContent = storeList.store[0].business.name;

//주문 시간 가능 확인
function checkTimeAndUpdate() {
  const alertElement = document.querySelector(".info-main-notice.alert");
  const infoElement = document.querySelector(".info-main-notice:not(.alert)");
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const icoClockAlert = document.querySelector(".ico-clock-alert");

  // 샐러드 성수점의 영업시간을 배열로 가져옵니다.
  const businessHours = [
    parseInt(storeList.store[0].business.open),
    parseInt(storeList.store[0].business.close),
  ];

  //영업시간 알려주기
}

// 페이지가 로드되면 함수를 처음 호출.
checkTimeAndUpdate();

///

///

//

// 메뉴 가격을 한국 원화 형식으로 표시하는 함수
function formatDate(price) {
  return price.toLocaleString("ko-KR") + "원";
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

////
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

// 메뉴 리스트를 가져와서 최근 주문한 메뉴 아이템을 표시하는 함수
const recentMenuLinks = document.querySelectorAll(".recent-menu-link");

recentMenuLinks.forEach((recentMenuLink) => {
  recentMenuLink.addEventListener("click", () => {
    const title = recentMenuLink.getAttribute("title");
    const menuItem = findMenuItemByTitle(storeList, title);
    console.log(menuItem);
  });
});

//
const linkBack = document.querySelector(".link-back");

linkBack.addEventListener("click", () => {
  history.back();
});

/////
function changeThemeColor(color) {
  // theme-color 메타 태그를 선택합니다.
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  // theme-color 메타 태그의 content 속성을 변경합니다.
  themeColorMeta.setAttribute("content", color);
}
/////
