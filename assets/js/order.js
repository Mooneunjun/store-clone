// "page-title-area" 요소 가져오기
const pageTitleArea = document.querySelector(".page-title-area .title");

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", function () {
  // 스크롤 거리 가져오기
  const scrollDistance =
    window.pageYOffset || document.documentElement.scrollTop;

  // 스크롤 거리가 56px를 초과하는지 확인
  if (scrollDistance > 2) {
    // "fixed" 클래스 추가
    pageTitleArea.classList.add("fixed");
  } else {
    // "fixed" 클래스 제거
    pageTitleArea.classList.remove("fixed");
  }
});

//
///
// .btn-delete 클래스를 가진 요소에 이벤트 리스너를 추가합니다.
document.querySelector(".btn-close").addEventListener("click", function () {
  // 이벤트가 발생하면 브라우저의 이전 페이지로 돌아갑니다.
  window.history.back();
});

// 페이지 로드 시 실행
window.addEventListener("load", function () {
  let storeListData = localStorage.getItem("storeList");
  let storeList = JSON.parse(storeListData);
  let BusinessName = storeList.store[0].business.name;
  const orderContentTopTitle = document.querySelector(
    ".order-content-top .title"
  );
  orderContentTopTitle.innerText = BusinessName;
  orderContentTopTitle.innerHTML += ` <span class="label">매장/포장</span>`;

  // 로컬스토리지에 selectedTabIndex 의 값이 있으면 가져오고 없으면 0을 가져옵니다.
  const selectedTabIndex = localStorage.getItem("selectedTabIndex") || 0;
  //order-content-top
  const orderContentTopLabel = document.querySelector(
    ".order-content-top .label"
  );

  const orderContentTopDesc = document.querySelector(
    ".order-content-top .desc"
  );
  if (selectedTabIndex == 0) {
    orderContentTopLabel.innerText = "포장";
    orderContentTopDesc.innerText = "픽업하실 수 있게 포장해 드립니다.";
  } else if (selectedTabIndex == 1) {
    orderContentTopLabel.innerText = "매장";
    orderContentTopDesc.innerText = "매장에서 식사하실 수 있습니다.";
  }
  let orderListData = localStorage.getItem("orderList");
  let noOrder = document.querySelector(".no-order");
  if (orderListData) {
    noOrder.classList.add("hidden");
    // 함수 호출
    createOrderList();
  } else {
    noOrder.classList.remove("hidden");
  }

  /// 더하기 빼기 버튼 클릭 이벤트
  registerMenuEventListeners();
});

function createOrderList() {
  let orderListData = localStorage.getItem("orderList");
  let orderList = JSON.parse(orderListData);

  let menuListElement = document.querySelector(".menu-list");

  orderList.forEach(function (order) {
    let menuItemElement = document.createElement("li");
    menuItemElement.classList.add("menu-item");

    let menuImgAreaElement = document.createElement("div");
    menuImgAreaElement.classList.add("menu-img-area");

    let menuImgElement = document.createElement("img");
    menuImgElement.src = order.imageUrl;
    menuImgElement.alt = order.Name;
    menuImgElement.classList.add("menu-img");
    menuImgElement.width = 64;
    menuImgElement.height = 64;

    menuImgAreaElement.appendChild(menuImgElement);
    menuItemElement.appendChild(menuImgAreaElement);

    let menuInfoAreaElement = document.createElement("div");
    menuInfoAreaElement.classList.add("menu-info-area");

    let menuNameGroupElement = document.createElement("p");
    menuNameGroupElement.classList.add("menu-name-group");

    let menuNameElement = document.createElement("span");
    menuNameElement.classList.add("menu-name");
    menuNameElement.textContent = order.Name;

    let btnDeleteElement = document.createElement("button");
    btnDeleteElement.classList.add("btn-delete");

    let icoDeleteElement = document.createElement("img");
    icoDeleteElement.classList.add("ico-delete");
    icoDeleteElement.src = "../assets/images/ico-close.svg";
    icoDeleteElement.alt = "삭제";

    btnDeleteElement.appendChild(icoDeleteElement);
    menuNameGroupElement.appendChild(menuNameElement);
    menuNameGroupElement.appendChild(btnDeleteElement);
    menuInfoAreaElement.appendChild(menuNameGroupElement);

    let optionDescElement = document.createElement("p");
    optionDescElement.classList.add("option-desc");
    optionDescElement.textContent = order.option;

    let btnOptionElement = document.createElement("button");
    btnOptionElement.classList.add("btn-option");
    btnOptionElement.textContent = "옵션변경";

    let amountAndPriceElement = document.createElement("div");
    amountAndPriceElement.classList.add("amount-and-price");

    let amountSelectElement = document.createElement("div");
    amountSelectElement.classList.add("amount-select");

    let btnMinusElement = document.createElement("button");
    btnMinusElement.classList.add("btn-minus");
    btnMinusElement.setAttribute("aria-label", "빼기");
    if (order.amount == 1) {
      btnMinusElement.disabled = true;
    } else {
      btnMinusElement.disabled = false;
      btnMinusElement.classList.add("enabled");
    }

    let amountElement = document.createElement("span");
    amountElement.classList.add("amount");
    amountElement.textContent = order.amount;

    let btnPlusElement = document.createElement("button");
    btnPlusElement.classList.add("btn-plus");
    btnPlusElement.classList.add("enabled");
    btnPlusElement.setAttribute("aria-label", "더하기");

    let menuPriceElement = document.createElement("p");
    menuPriceElement.classList.add("menu-price");
    menuPriceElement.textContent = order.price.toLocaleString() + "원";

    amountSelectElement.appendChild(btnMinusElement);
    amountSelectElement.appendChild(amountElement);
    amountSelectElement.appendChild(btnPlusElement);
    amountAndPriceElement.appendChild(amountSelectElement);
    amountAndPriceElement.appendChild(menuPriceElement);

    menuInfoAreaElement.appendChild(optionDescElement);
    // menuInfoAreaElement.appendChild(btnOptionElement);
    menuInfoAreaElement.appendChild(amountAndPriceElement);

    menuItemElement.appendChild(menuInfoAreaElement);
    menuListElement.appendChild(menuItemElement);
  });
}

///
///
///
//수량 변경 버튼 더하기 뺴기 이벤트
// 버튼 요소들 선택
// HTML 요소 선택
function registerMenuEventListeners() {
  const menuItems = document.querySelectorAll(".menu-item");

  // 각 메뉴 아이템에 대해 이벤트 리스너 등록
  menuItems.forEach((menuItem) => {
    const btnMinus = menuItem.querySelector(".btn-minus");
    const btnPlus = menuItem.querySelector(".btn-plus");
    const amountElement = menuItem.querySelector(".amount");
    const menuNameElement = menuItem.querySelector(".menu-name");
    const optionDescElement = menuItem.querySelector(".option-desc");

    // 빼기 버튼 클릭 시
    btnMinus.addEventListener("click", () => {
      let amount = parseInt(amountElement.textContent);
      const priceElement = menuItem.querySelector(".menu-price");
      const priceText = priceElement.textContent;
      const price = parseInt(priceText.replace(/[^0-9]/g, ""));

      if (amount > 1) {
        let onePrice = price / amount;
        let newPrice = price - onePrice;
        priceElement.textContent = newPrice.toLocaleString() + "원";

        amount--;
        amountElement.textContent = amount;

        ///
        // 로컬스토리지에서 orderList 가져오기
        const orderListData = localStorage.getItem("orderList");
        const orderList = JSON.parse(orderListData);

        // 찾을 메뉴 정보
        const targetName = menuNameElement.textContent;
        const targetOption = optionDescElement.textContent;

        const matchedNameMenu = orderList.find(
          (menu) => menu.Name === targetName
        );
        if (
          matchedNameMenu.category === "음료" ||
          matchedNameMenu.category === "스프"
        ) {
          // 일치하는 메뉴를 찾았을 때의 동작
          matchedNameMenu.price = newPrice;
          matchedNameMenu.amount = amount;

          // 로컬스토리지에 변경된 orderList 저장
          // 로컬스토리지에 변경된 orderList 저장
          localStorage.setItem("orderList", JSON.stringify(orderList));

          // // 로컬스토리지에서 orderList 가져오기
          // const orderListData = localStorage.getItem("orderList");
          // const orderList = JSON.parse(orderListData);

          // // price 합계 초기값 설정
          // let totalPrice = 0;

          // // orderList의 각 메뉴에 대해 price 합산
          // orderList.forEach((menu) => {
          //   // 메뉴의 price와 amount 값을 곱하여 합산
          //   totalPrice += menu.price * menu.amount;
          // });

          // console.log(totalPrice); // 합계 출력
        } else {
          // option 값이 일치하는 메뉴 찾기
          const matchedMenu = orderList.find(
            (menu) => menu.Name === targetName && menu.option === targetOption
          );

          // matchedMenu을 사용하여 원하는 작업 수행
          if (matchedMenu) {
            // 일치하는 메뉴를 찾았을 때의 동작
            // 일치하는 메뉴를 찾았을 때의 동작
            matchedMenu.price = newPrice;
            matchedMenu.amount = amount;
            // 로컬스토리지에 변경된 orderList 저장
            localStorage.setItem("orderList", JSON.stringify(orderList));
          }
        }

        ///
        ///

        if (amount == 1) {
          btnMinus.disabled = true;
          btnMinus.classList.remove("enabled");
        }
      }
    });

    // 더하기 버튼 클릭 시
    btnPlus.addEventListener("click", () => {
      let amount = parseInt(amountElement.textContent);
      const priceElement = menuItem.querySelector(".menu-price");
      const priceText = priceElement.textContent;
      const price = parseInt(priceText.replace(/[^0-9]/g, ""));

      let onePrice = price / amount;
      let newPrice = price + onePrice;
      priceElement.textContent = newPrice.toLocaleString() + "원";

      amount++;
      amountElement.textContent = amount;
      //
      //
      // 로컬스토리지에서 orderList 가져오기
      const orderListData = localStorage.getItem("orderList");
      const orderList = JSON.parse(orderListData);

      // 찾을 메뉴 정보
      const targetName = menuNameElement.textContent;
      const targetOption = optionDescElement.textContent;

      const matchedNameMenu = orderList.find(
        (menu) => menu.Name === targetName
      );
      if (
        matchedNameMenu.category === "음료" ||
        matchedNameMenu.category === "스프"
      ) {
        // 일치하는 메뉴를 찾았을 때의 동작
        matchedNameMenu.price = newPrice;
        matchedNameMenu.amount = amount;

        // 로컬스토리지에 변경된 orderList 저장
        localStorage.setItem("orderList", JSON.stringify(orderList));
      } else {
        // option 값이 일치하는 메뉴 찾기
        const matchedMenu = orderList.find(
          (menu) => menu.Name === targetName && menu.option === targetOption
        );

        // matchedMenu을 사용하여 원하는 작업 수행
        if (matchedMenu) {
          // 일치하는 메뉴를 찾았을 때의 동작
          // 일치하는 메뉴를 찾았을 때의 동작
          matchedMenu.price = newPrice;
          matchedMenu.amount = amount;
          // 로컬스토리지에 변경된 orderList 저장
          localStorage.setItem("orderList", JSON.stringify(orderList));
        } else {
          console.log("일치하는 메뉴가 없습니다.");
        }
      }

      if (amount > 1) {
        btnMinus.disabled = false;
        btnMinus.classList.add("enabled");
      }
    });
  });
}
//
//
//
//
