//
//
document.addEventListener("DOMContentLoaded", () => {
  const menuCategoryArea = document.querySelector(".menu-category-area");
  const menuListArea = document.querySelector(".menu-list-area");
  const initialOffsetTop = menuCategoryArea.offsetTop;
  const categoryBox = document.querySelector(".category-box");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= initialOffsetTop - 95) {
      menuCategoryArea.classList.add("fixed");
      menuListArea.style.marginTop = "62px";
      menuCategoryArea.style.borderBottom = "1px solid #f2f2f2";
      menuCategoryArea.style.boxShadow = "0 2px 2px rgba(0,0,0,.04)";
      categoryBox.style.borderBottom = "none";
    } else {
      menuCategoryArea.classList.remove("fixed");
      menuListArea.style.marginTop = "0";
      menuCategoryArea.style.borderBottom = "none";
      menuCategoryArea.style.boxShadow = "none";
      categoryBox.style.borderBottom = "1px solid #f2f2f2";
    }
  });
});

// 카테고리 탭 생성하는 함수
function createCategoryTab(textContent) {
  // li 태그 생성
  const tab = document.createElement("li");
  tab.classList.add("category-item");

  // a 태그 생성
  const link = document.createElement("a");
  link.href = "#";
  link.classList.add("category-tab");

  // 텍스트 컨텐츠 추가
  link.textContent = textContent;
  link.href = "#" + textContent.replace(/ /g, "_");
  // li 태그에 a 태그 추가 후 반환
  tab.appendChild(link);
  return tab;
}

// 카테고리 리스트 요소 가져오기
const categoryList = document.querySelector(".category-list");
// 새로운 메뉴 and 추천 할인메뉴 가 있는지 확인하는 함수
function hastypicalMenu() {
  // storeList에서 새로운 메뉴가 있는지 확인
  const hastypicalMenu = storeList.store[0].menuItems.some(
    (menuItem) =>
      menuItem.isNew === true ||
      menuItem.isTypical === true ||
      menuItem.discount !== 0
  );

  // 새로운 메뉴가 있는 경우
  if (hastypicalMenu) {
    // 추천 탭 생성
    const newTab = createCategoryTab("추천");

    // 추천 탭을 카테고리 리스트의 가장 앞에 추가
    categoryList.appendChild(newTab);
  }
}

// 모든 메뉴에서 "시즈널 메뉴"가 있는지 확인후 탭 생성 함수
function hasSeasonalMenu() {
  const hasSeasonalMenu = storeList.store[0].menuItems.some(
    (menuItem) => menuItem.category === "시즈널 메뉴"
  );

  // "시즈널 메뉴"가 있는 경우
  if (hasSeasonalMenu) {
    // "시즈널 메뉴" 탭 생성
    const seasonalMenuTab = createCategoryTab("시즈널 메뉴");
    // "시즈널 메뉴" 탭을 카테고리 리스트의 가장 마지막에 추가
    categoryList.appendChild(seasonalMenuTab);
  }
}

//모든 메뉴에서 중복없는 카테고리 네임 가져오는 함수
function getCategoryNames() {
  // 모든 카테고리를 저장할 빈 배열 생성
  const categoryNames = [];

  // storeList에서 모든 메뉴 아이템에 대해 순회하며 카테고리 이름을 배열에 추가
  storeList.store[0].menuItems.forEach((menuItem) => {
    // 시즈널 메뉴는 제외하고 카테고리 이름 추가
    if (menuItem.category !== "시즈널 메뉴") {
      categoryNames.push(menuItem.category);
    }
  });

  // 중복 제거
  const uniqueCategoryNames = [...new Set(categoryNames)];
  return uniqueCategoryNames;
}

// 페이지 로드 시 새로운 메뉴가 있는지 확인 후 추천 탭 생성
hastypicalMenu();
// 페이지 로드 시 "시즈널 메뉴"가 있는지 확인 후 탭 생성
hasSeasonalMenu();
// 페이지 로드 시 카테고리 탭 생성
getCategoryNames().forEach((categoryName) => {
  // 카테고리 리스트에 카테고리 탭 추가하는 함수
  const categoryTab = createCategoryTab(categoryName);
  categoryList.appendChild(categoryTab);
});
//
//
///
///
///
///
///

// 모든 ".category-tab" 요소를 선택합니다.
// 가장 마지막 ".category-tab" 요소를 선택합니다.
const allCategoryTabs = document.querySelectorAll(".category-tab");
const lastCategoryTab = allCategoryTabs[allCategoryTabs.length - 1];

// 가장 마지막 ".category-tab" 요소에 오른쪽 마진을 18픽셀로 설정합니다.
lastCategoryTab.style.marginRight = "18px";

//
//
//
// 페이지 로딩이 완료되면 실행되는 코드입니다.
document.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드되면 첫 번째 탭을 활성화합니다.
  function setActiveTab() {
    const firstTab = categoryList.querySelector(".category-tab:first-child");
    firstTab.classList.add("is-active"); // 활성화된 탭으로 표시합니다.
    firstTab.classList.add("first-tab"); // 첫 번째 탭임을 표시합니다.
  }
  setActiveTab();
  // 모든 탭과 활성 탭 표시기, 초기 활성 탭을 선택합니다.
  const tabs = document.querySelectorAll(".category-tab");
  const activeIndicator = document.querySelector(".category_active");
  const initialActiveTab = document.querySelector(".category-tab.is-active");
  // 초기 활성 탭의 너비와 위치를 활성 탭 표시기에 적용합니다.
  setActiveIndicatorWidth(activeIndicator, initialActiveTab);
  setActiveIndicatorPosition(activeIndicator, initialActiveTab.offsetLeft);
  // 활성 탭 표시기의 너비를 설정하는 함수입니다.
  function setActiveIndicatorWidth(indicator, tab) {
    indicator.style.width = `${tab.offsetWidth}px`;
  }
  // 활성 탭 표시기의 위치를 설정하는 함수입니다.
  function setActiveIndicatorPosition(indicator, position) {
    indicator.style.transform = `translate3d(${position}px, 0, 0)`;
  }
  // 활성 탭 표시기를 이동하는 애니메이션 함수입니다.
  function animateBackground(start, end, duration) {
    const startTime = performance.now(); // 애니메이션 시작 시간
    const change = end - start; // 시작 위치와 끝 위치의 차이
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1); // 진행률 (최대 1)
      const position = start + change * progress; // 현재 위치 계산
      setActiveIndicatorPosition(activeIndicator, position); // 현재 위치를 적용

      if (progress < 1) {
        // 진행률이 1보다 작으면 애니메이션 계속
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }

  function scrollToPosition(element, to, duration) {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const position = start + change * progress;
      element.scrollLeft = position;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }

  // 탭이 클릭되었는지 아닌지를 표시하는 변수입니다.
  let isClickEvent = false;

  // 탭 클릭 이벤트 핸들러입니다.
  function onTabClick() {
    // 이미 활성화된 탭을 클릭하면 아무런 동작도 하지 않습니다.
    if (this.classList.contains("is-active")) {
      event.preventDefault();
      return;
    } // is-active인 탭 클릭 시 동작 없음

    // 클릭 이벤트가 발생했다는 표시를 합니다.
    isClickEvent = true;

    // 이전에 활성화되었던 탭의 활성화를 해제하고, 현재 클릭된 탭을 활성화합니다.
    document
      .querySelector(".category-tab.is-active")
      .classList.remove("is-active");
    this.classList.add("is-active");

    // 클릭된 탭의 너비를 활성 탭 표시기에 적용합니다.
    setActiveIndicatorWidth(activeIndicator, this);
    // 클릭된 탭의 위치를 활성 탭 표시기에 적용하기 위한 준비를 합니다.
    const containerOffsetLeft = this.closest(".category-box").offsetLeft;
    const targetPosition = this.offsetLeft - containerOffsetLeft;
    const currentPosition = parseFloat(
      activeIndicator.style.transform.match(/translate3d\(([\d.]+)px/i)[1]
    );
    // 활성 탭 표시기를 이동시키는 애니메이션을 시작합니다.
    animateBackground(currentPosition, targetPosition, 300);
    // 스크롤 가능한 리스트를 구하고, 탭의 왼쪽 오프셋을 구합니다.
    const scrollableList = this.closest(".category-list.scroll-x");
    const tabOffsetLeft = this.offsetLeft;
    // 스크롤이 가능하면, 스크롤 위치를 이동시킵니다.
    if (scrollableList.scrollWidth > scrollableList.clientWidth) {
      scrollToPosition(scrollableList, tabOffsetLeft - 18, 300);
    } else {
      // 스크롤이 불가능하면, 활성 탭 표시기만 이동시킵니다.
      const targetPositionNoScroll = this.offsetLeft;
      animateBackground(currentPosition, targetPositionNoScroll, 300);
    }

    // 탭에 연결된 콘텐츠의 ID를 가져옵니다.
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // 스크롤을 부드럽게 움직이도록 합니다.

    smoothScrollTo(document.body, targetElement, 500, () => {
      // isClickEvent = false; // 스크롤 이동이 끝나면, 클릭 이벤트가 끝났다는 표시를 합니다.
    });
    smoothScrollTo(document.documentElement, targetElement, 500, () => {
      // 延迟500毫秒后将 isClickEvent 设置为 false
      setTimeout(() => {
        isClickEvent = false;
      }, 100); // 스크롤 이동이 끝나면, 클릭 이벤트가 끝났다는 표시를 합니다.
    });
  }

  // 탭에 클릭 이벤트 핸들러를 설정합니다.
  tabs.forEach((tab) => {
    tab.addEventListener("click", onTabClick);
  });
  // 스크롤 위치에 따라 활성 탭을 업데이트하는 함수입니다.
  function onScroll() {
    // 클릭 이벤트가 발생했을 때는 실행되지 않습니다.

    if (isClickEvent) {
      return;
    }

    // 화면 내의 특정 위치를 기준으로 설정합니다.
    const threshold = 146;
    // 모든 메뉴 영역을 가져옵니다.
    const menuListAreas = document.querySelectorAll(".menu-list-area");
    // 각 메뉴 영역에 대해 실행될 함수입니다.
    menuListAreas.forEach((area) => {
      const areaTop = area.getBoundingClientRect().top;
      const areaBottom = areaTop + area.offsetHeight;
      // 메뉴 영역이 화면 내의 특정 위치에 있는지를 확인합니다.
      const isInThreshold = areaTop <= threshold && areaBottom >= threshold;

      // 메뉴 영역이 화면 내의 특정 위치에 있으면, 해당 메뉴에 대한 탭을 활성화합니다.
      if (isInThreshold) {
        // 메뉴 영역의 ID를 이용해 연결된 탭을 선택합니다.
        const tabId = area.id;
        const targetTab = document.querySelector(
          `.category-tab[href="#${tabId}"]`
        );
        // 만약 해당 탭이 이미 활성화된 상태가 아니라면, 탭을 활성화하고 활성 탭 표시기를 업데이트합니다.
        if (!targetTab.classList.contains("is-active")) {
          const activeTab = document.querySelector(".category-tab.is-active");
          activeTab.classList.remove("is-active");
          targetTab.classList.add("is-active");

          const activeIndicator = document.querySelector(".category_active");
          setActiveIndicatorWidth(activeIndicator, targetTab);
          const containerOffsetLeft =
            targetTab.closest(".category-box").offsetLeft;

          const targetPosition =
            window.innerWidth > 767
              ? targetTab.offsetLeft
              : targetTab.offsetLeft - containerOffsetLeft;

          const transformMatch = activeIndicator.style.transform.match(
            /translate3d\(([\d.]+)px/i
          );
          const currentPosition = transformMatch
            ? parseFloat(transformMatch[1])
            : 0;

          animateBackground(currentPosition, targetPosition, 300);

          // 활성 탭이 있는 위치로 스크롤합니다.
          const scrollableList = targetTab.closest(".category-list.scroll-x");
          const tabOffsetLeft = targetTab.offsetLeft;

          if (scrollableList.scrollWidth > scrollableList.clientWidth) {
            scrollToPosition(scrollableList, tabOffsetLeft - 18, 300);
          }
        }
      }
    });
  }

  // 스크롤 이벤트에 이벤트 핸들러를 설정합니다.
  window.addEventListener("scroll", onScroll);

  function smoothScrollTo(element, target, duration, callback) {
    const start = element.scrollTop;
    const change = target.getBoundingClientRect().top - 145;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const position = start + change * progress;
      element.scrollTop = position;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        if (callback) {
          callback();
        }
      }
    };

    requestAnimationFrame(animateScroll);
  }
});

//
