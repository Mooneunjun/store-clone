console.log(storeList.store[0]);

const menuCategoryList = document.querySelector(".category-list");
const categoryItems = menuCategoryList.querySelectorAll(".category-item");

const categoryNames = [];

categoryItems.forEach(function (item) {
  const categoryName = item.querySelector("a").textContent.trim();

  // 추천 카테고리만 생성
  if (categoryName !== "추천") {
    return;
  }

  const menuListArea = document.createElement("div");
  menuListArea.className = "menu-list-area";
  menuListArea.id = categoryName.replace(/\s+/g, "_");

  // 이 부분에서 menuListArea에 대한 추가적인 내용을 작성할 수 있습니다.

  const orderArea = document.querySelector(".order_area");
  orderArea.appendChild(menuListArea);
});

console.log(categoryNames);
////
////
////

///
///
///
///
const recommendationCategory = document.querySelector("#추천");
const newMenuItems = storeList.store[0].menuItems.filter((item) => item.isNew);
if (newMenuItems.length > 0) {
  const newMenuList = document.createElement("div");
  newMenuList.className = "common-inner new";
  newMenuList.innerHTML = `
    <div class="menu-category">
      <p class="title">새로 나온 메뉴</p>
    </div>
    <ul class="menu-list">
    </ul>
  `;

  const newMenuListInner = newMenuList.querySelector(".menu-list");
  newMenuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    // star 값을 구하는 함수
    function calculateStar(reviewList) {
      const sum = reviewList.reduce((acc, review) => acc + review.star, 0);
      const average = sum / reviewList.length;
      return average.toFixed(1);
    }

    const reviewList = item.review || [];
    const average = calculateStar(reviewList);
    menuItem.className = "menu-item";
    menuItem.title = item.name;
    menuItem.innerHTML = `
    <a href="${
      item.link ? item.link : `store-clone/detail.html`
    }" class="menu-detail" title="${item.name}">
      <div class="menu-img-area">
        ${
          item.imageUrl
            ? ` <img src="${item.imageUrl + "type=f220_220_60_sharpen"}" alt="${
                item.name
              }" class="menu-img" width="100" height="100">`
            : `<img src="https://via.placeholder.com/100x110/ffffff/000000" alt="${item.name}" class="menu-img" width="100" height="110">`
        }
      </div>
      <div class="menu-info-area">
        <p class="menu-name-group">
          <span class="menu-name">${item.name}</span>
  
          ${
            item.isNew
              ? '<img src="./assets/images/ico-new.svg" alt="new" class="ico-new">'
              : ""
          }
          ${
            item.discount
              ? `<span class="badge badge-discount">${item.discount}%</span>`
              : ""
          }
          ${
            item.isPopular || item.orderNum > average
              ? '<span class="badge badge-popular">인기</span>'
              : ""
          }
          ${
            item.isTypical
              ? '<span class="badge badge-typical">대표</span>'
              : ""
          }
        </p>
  
        <div class="menu-info-group">
          ${
            item.review
              ? `
          <span class="menu-grade">
            <img src="./assets/images/ico-star.svg" class="ico-star" alt="">${average}
          </span>`
              : ""
          }
          ${
            item.orderNum
              ? `
          <span class="menu-number-of-order">
            주문수<em>${item.orderNum}</em>
          </span>`
              : ""
          }
        </div>
        <p class="menu-desc">
          ${item.detailTxt}
        </p>
        ${
          item.discount
            ? `<p class="menu-price">${(
                Math.floor((item.price * (100 - item.discount)) / 100 / 100) *
                100
              ).toLocaleString()}원</p>`
            : `<p class="menu-price">${(
                Math.floor(item.price / 100) * 100
              ).toLocaleString()}원</p>`
        }



      </div>
    </a>
    ${
      item.stock
        ? `
        <a href="/" class="btn-cart" title="${item.name}">
        <img class="ico-cart" src="./assets/images/ico-cart2.svg" alt="" srcset="">    </a>
      `
        : `
        <a class="btn-cart disabled" title="${item.name}">품절</a>
      `
    }
  `;

    newMenuListInner.appendChild(menuItem);
  });

  recommendationCategory.appendChild(newMenuList);
}

//
//
//
const discountCategory = document.querySelector("#추천");

const discountedMenuItems = storeList.store[0].menuItems.filter(
  (item) => item.discount > 0
);
if (discountedMenuItems.length > 0) {
  const discountMenuList = document.createElement("div");
  discountMenuList.className = "common-inner discount";
  discountMenuList.innerHTML = `
    <div class="menu-category">
      <div class="title-area">
        <p class="title">할인 메뉴</p>
        <div class="period">
          <img class="ico-period" src="./assets/images/ico-period.svg" alt="">
          [은준페이 결제시] 최대 30% 할인
        </div>
      </div>
    </div>
    <ul class="menu-list">
    </ul>
  `;

  const discountMenuListInner = discountMenuList.querySelector(".menu-list");
  discountedMenuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    // star 값을 구하는 함수
    function calculateStar(reviewList) {
      const sum = reviewList.reduce((acc, review) => acc + review.star, 0);
      const average = sum / reviewList.length;
      return average.toFixed(1);
    }

    const reviewList = item.review || [];
    const average = calculateStar(reviewList);
    menuItem.className = "menu-item";
    menuItem.title = item.name;
    menuItem.innerHTML = `
    <a href="${
      item.link ? item.link : `store-clone/detail.html`
    }" class="menu-detail" title="${item.name}">
      <div class="menu-img-area">
        ${
          item.imageUrl
            ? ` <img src="${item.imageUrl + "type=f220_220_60_sharpen"}" alt="${
                item.name
              }" class="menu-img" width="100" height="100">`
            : `<img src="https://via.placeholder.com/100x110/ffffff/000000" alt="${item.name}" class="menu-img" width="100" height="110">`
        }
      </div>
      <div class="menu-info-area">
        <p class="menu-name-group">
          <span class="menu-name">${item.name}</span>
  
          ${
            item.isNew
              ? '<img src="./assets/images/ico-new.svg" alt="new" class="ico-new">'
              : ""
          }
          ${
            item.discount
              ? `<span class="badge badge-discount">${item.discount}%</span>`
              : ""
          }
          ${
            item.isPopular || item.orderNum > average
              ? '<span class="badge badge-popular">인기</span>'
              : ""
          }
          ${
            item.isTypical
              ? '<span class="badge badge-typical">대표</span>'
              : ""
          }
        </p>
  
        <div class="menu-info-group">
          ${
            item.review
              ? `
          <span class="menu-grade">
            <img src="./assets/images/ico-star.svg" class="ico-star" alt="">${average}
          </span>`
              : ""
          }
          ${
            item.orderNum
              ? `
          <span class="menu-number-of-order">
            주문수<em>${item.orderNum}</em>
          </span>`
              : ""
          }
        </div>
        <p class="menu-desc">
          ${item.detailTxt}
        </p>
        ${
          item.discount
            ? `<p class="menu-price">${(
                Math.floor((item.price * (100 - item.discount)) / 100 / 100) *
                100
              ).toLocaleString()}원</p>`
            : `<p class="menu-price">${(
                Math.floor(item.price / 100) * 100
              ).toLocaleString()}원</p>`
        }



      </div>
    </a>
    ${
      item.stock
        ? `
        <a href="/" class="btn-cart" title="${item.name}">
        <img class="ico-cart" src="./assets/images/ico-cart2.svg" alt="" srcset="">    </a>
      `
        : `
        <a class="btn-cart disabled" title="${item.name}">품절</a>
      `
    }
  `;
    discountMenuListInner.appendChild(menuItem);
  });

  discountCategory.appendChild(discountMenuList);
}
///
////
///
///

const typicalCategory = document.querySelector("#추천");

const typicalMenuItems = storeList.store[0].menuItems.filter(
  (item) => item.isTypical
);

if (typicalMenuItems.length > 0) {
  const typicalMenuList = document.createElement("div");
  typicalMenuList.className = "common-inner typical";
  typicalMenuList.innerHTML = `
    <div class="menu-category">
      <div class="title-area">
        <p class="title">대표 메뉴</p>
      </div>
    </div>
    <ul class="menu-list">
    </ul>
  `;

  const typicalMenuListInner = typicalMenuList.querySelector(".menu-list");

  typicalMenuItems.forEach((item) => {
    const menuItem = document.createElement("li");

    // star 값을 구하는 함수
    function calculateStar(reviewList) {
      const sum = reviewList.reduce((acc, review) => acc + review.star, 0);
      const average = sum / reviewList.length;
      return average.toFixed(1);
    }

    const reviewList = item.review || [];
    const average = calculateStar(reviewList);

    menuItem.className = "menu-item";
    menuItem.title = item.name;
    menuItem.innerHTML = `
    <a href="${
      item.link ? item.link : `store-clone/detail.html`
    }" class="menu-detail" title="${item.name}">
      <div class="menu-img-area">
        ${
          item.imageUrl
            ? ` <img src="${item.imageUrl + "type=f220_220_60_sharpen"}" alt="${
                item.name
              }" class="menu-img" width="100" height="100">`
            : `<img src="https://via.placeholder.com/100x110/ffffff/000000" alt="${item.name}" class="menu-img" width="100" height="110">`
        }
      </div>
      <div class="menu-info-area">
        <p class="menu-name-group">
          <span class="menu-name">${item.name}</span>
  
          ${
            item.isNew
              ? '<img src="./assets/images/ico-new.svg" alt="new" class="ico-new">'
              : ""
          }
          ${
            item.discount
              ? `<span class="badge badge-discount">${item.discount}%</span>`
              : ""
          }
          ${
            item.isPopular || item.orderNum > average
              ? '<span class="badge badge-popular">인기</span>'
              : ""
          }
          ${
            item.isTypical
              ? '<span class="badge badge-typical">대표</span>'
              : ""
          }
        </p>
  
        <div class="menu-info-group">
          ${
            item.review
              ? `
          <span class="menu-grade">
            <img src="./assets/images/ico-star.svg" class="ico-star" alt="">${average}
          </span>`
              : ""
          }
          ${
            item.orderNum
              ? `
          <span class="menu-number-of-order">
            주문수<em>${item.orderNum}</em>
          </span>`
              : ""
          }
        </div>
        <p class="menu-desc">
          ${item.detailTxt}
        </p>
        ${
          item.discount
            ? `<p class="menu-price">${(
                Math.floor((item.price * (100 - item.discount)) / 100 / 100) *
                100
              ).toLocaleString()}원</p>`
            : `<p class="menu-price">${(
                Math.floor(item.price / 100) * 100
              ).toLocaleString()}원</p>`
        }



      </div>
    </a>
    ${
      item.stock
        ? `
        <a href="/" class="btn-cart" title="${item.name}">
        <img class="ico-cart" src="./assets/images/ico-cart2.svg" alt="" srcset="">    </a>
      `
        : `
        <a class="btn-cart disabled" title="${item.name}">품절</a>
      `
    }
  `;

    typicalMenuListInner.appendChild(menuItem);
  });

  typicalCategory.appendChild(typicalMenuList);
}

///

///
//

categoryItems.forEach(function (item) {
  const categoryName = item.querySelector("a").textContent.trim();
  categoryNames.push(categoryName);
  // 추천 카테고리는 건너뜀
  if (categoryName === "추천") {
    return;
  }

  // 카테고리별 메뉴 리스트 생성
  const menuListArea = document.createElement("div");
  menuListArea.className = "menu-list-area";
  menuListArea.id = categoryName.replace(/\s+/g, "_");
  menuListArea.classList.add("is-closed");

  // 카테고리별 메뉴 리스트 내용
  const menuListInner = document.createElement("div");
  menuListInner.className = "common-inner";
  menuListInner.innerHTML = `
    <div class="menu-category">
      <p class="title">${categoryName}</p>
      <button class="btn-toggle">
        <img src="./assets/images/ico-arrow.svg" alt="" class="ico-arrow">
      </button>
    </div>
    <ul class="menu-list">
    </ul>
  `;

  menuListArea.appendChild(menuListInner);
  const orderArea = document.querySelector(".order_area");
  orderArea.appendChild(menuListArea);
});

/////

////
///
// 각 카테고리별 메뉴 리스트에 메뉴 추가
storeList.store.forEach(function (store) {
  store.menuItems.forEach(function (menuItem) {
    const category = menuItem.category;
    if (category === "추천") {
      return;
    }
    const menuList = document.querySelector(
      `#${category.replace(/\s+/g, "_")} .menu-list`
    );
    const menuItemElem = createMenuItemElement(menuItem);
    menuList.appendChild(menuItemElem);
  });
});

// 메뉴 아이템 요소 생성 함수
function createMenuItemElement(menuItemElem) {
  const menuItem = document.createElement("li");
  item = menuItemElem;
  // star 값을 구하는 함수
  function calculateStar(reviewList) {
    const sum = reviewList.reduce((acc, review) => acc + review.star, 0);
    const average = sum / reviewList.length;
    return average.toFixed(1);
  }

  const reviewList = item.review || [];
  const average = calculateStar(reviewList);

  menuItem.className = "menu-item";
  menuItem.title = item.name;
  menuItem.innerHTML = `
  <a href="${
    item.link ? item.link : `store-clone/detail.html`
  }" class="menu-detail" title="${item.name}">
    <div class="menu-img-area">
      ${
        item.imageUrl
          ? ` <img src="${item.imageUrl}" alt="${item.name}" class="menu-img" width="100" height="100">`
          : `<img src="https://via.placeholder.com/100x110/ffffff/000000" alt="${item.name}" class="menu-img" width="100" height="110">`
      }
    </div>
    <div class="menu-info-area">
      <p class="menu-name-group">
        <span class="menu-name">${item.name}</span>

        ${
          item.isNew
            ? '<img src="./assets/images/ico-new.svg" alt="new" class="ico-new">'
            : ""
        }
        ${
          item.discount
            ? `<span class="badge badge-discount">${item.discount}%</span>`
            : ""
        }
        ${
          item.isPopular || item.orderNum > average
            ? '<span class="badge badge-popular">인기</span>'
            : ""
        }
        ${item.isTypical ? '<span class="badge badge-typical">대표</span>' : ""}
      </p>

      <div class="menu-info-group">
        ${
          item.review
            ? `
        <span class="menu-grade">
          <img src="./assets/images/ico-star.svg" class="ico-star" alt="">${average}
        </span>`
            : ""
        }
        ${
          item.orderNum
            ? `
        <span class="menu-number-of-order">
          주문수<em>${item.orderNum}</em>
        </span>`
            : ""
        }
      </div>
      <p class="menu-desc">
        ${item.detailTxt}
      </p>
      ${
        item.discount
          ? `<p class="menu-price">${(
              Math.floor((item.price * (100 - item.discount)) / 100 / 100) * 100
            ).toLocaleString()}원</p>`
          : `<p class="menu-price">${(
              Math.floor(item.price / 100) * 100
            ).toLocaleString()}원</p>`
      }



    </div>
  </a>
  ${
    item.stock
      ? `
      <a href="/" class="btn-cart" title="${item.name}">
      <img class="ico-cart" src="./assets/images/ico-cart2.svg" alt="" srcset="">    </a>
    `
      : `
      <a class="btn-cart disabled" title="${item.name}">품절</a>
    `
  }
`;
  return menuItem;
}

function updateCartVisibility() {
  // 샐러드 성수점의 영업시간을 배열로 가져옵니다.
  const businessHours = [
    parseInt(storeList.store[0].business.open),
    parseInt(storeList.store[0].business.close),
  ];

  // 현재 시간을 가져옵니다.
  const now = new Date();
  const currentHour = now.getHours();

  // 현재 시간이 영업 시간 내에 있는지 확인합니다.
  const isOpen =
    currentHour >= businessHours[0] && currentHour < businessHours[1];

  // 모든 .btn-cart 요소를 가져와서 hidden 클래스를 추가합니다.
  const btnCarts = document.querySelectorAll(".btn-cart");
  btnCarts.forEach((btnCart) => {
    if (!isOpen) {
      btnCart.classList.add("hidden");
    } else {
      btnCart.classList.remove("hidden");
    }
  });
}

// 페이지가 처음 로딩될 때 카트를 업데이트합니다.
updateCartVisibility();

// .tab-switch 요소를 가져옵니다.
const tabSwitch = document.querySelector(".tab-switch");

// .tab-switch 요소가 클릭될 때 카트를 업데이트합니다.
tabSwitch.addEventListener("click", () => {
  updateCartVisibility();
});

////
// 메뉴 리스트를 가져와서 최근 주문한 메뉴 아이템을 표시하는 함수

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((recentMenuLink) => {
  recentMenuLink.addEventListener("click", () => {
    const title = recentMenuLink.getAttribute("title");
    menuItem = findMenuItemByTitle(storeList, title);
    // menuItem을 로컬 스토리지에 menuDetail로 저장
    localStorage.setItem("menuDetail", JSON.stringify(menuItem));
  });
});

const recentMenuItems = document.querySelectorAll(".recent-menu-item");

recentMenuItems.forEach((recentMenuLink) => {
  recentMenuLink.addEventListener("click", () => {
    const title = recentMenuLink.getAttribute("title");
    menuItem = findMenuItemByTitle(storeList, title);
    // menuItem을 로컬 스토리지에 menuDetail로 저장
    localStorage.setItem("menuDetail", JSON.stringify(menuItem));
  });
});
