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
// 모든 ".category-tab" 요소를 선택합니다.
// 가장 마지막 ".category-tab" 요소를 선택합니다.
const allCategoryTabs = document.querySelectorAll(".category-tab");
const lastCategoryTab = allCategoryTabs[allCategoryTabs.length - 1];

// 가장 마지막 ".category-tab" 요소에 오른쪽 마진을 18픽셀로 설정합니다.
lastCategoryTab.style.marginRight = "18px";

//
//
//

document.addEventListener("DOMContentLoaded", function () {
  function setActiveTab() {
    const firstTab = categoryList.querySelector(".category-tab:first-child");
    firstTab.classList.add("is-active");
    firstTab.classList.add("first-tab");
  }
  setActiveTab();

  const tabs = document.querySelectorAll(".category-tab");
  const activeIndicator = document.querySelector(".category_active");
  const initialActiveTab = document.querySelector(".category-tab.is-active");

  setActiveIndicatorWidth(activeIndicator, initialActiveTab);
  setActiveIndicatorPosition(activeIndicator, initialActiveTab.offsetLeft);

  function setActiveIndicatorWidth(indicator, tab) {
    indicator.style.width = `${tab.offsetWidth}px`;
  }

  function setActiveIndicatorPosition(indicator, position) {
    indicator.style.transform = `translate3d(${position}px, 0, 0)`;
  }

  function animateBackground(start, end, duration) {
    const startTime = performance.now();
    const change = end - start;
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const position = start + change * progress;
      setActiveIndicatorPosition(activeIndicator, position);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }

  let isClickEvent = false;
  function onTabClick() {
    if (this.classList.contains("is-active")) {
      event.preventDefault();
      return;
    } // is-active인 탭 클릭 시 동작 없음

    isClickEvent = true;
    document
      .querySelector(".category-tab.is-active")
      .classList.remove("is-active");
    this.classList.add("is-active");

    setActiveIndicatorWidth(activeIndicator, this);

    const containerOffsetLeft = this.closest(".category-box").offsetLeft;
    const targetPosition = this.offsetLeft - containerOffsetLeft;
    const currentPosition = parseFloat(
      activeIndicator.style.transform.match(/translate3d\(([\d.]+)px/i)[1]
    );

    animateBackground(currentPosition, targetPosition, 300);

    const scrollableList = this.closest(".category-list.scroll-x");
    const tabOffsetLeft = this.offsetLeft;

    if (scrollableList.scrollWidth > scrollableList.clientWidth) {
      scrollToPosition(scrollableList, tabOffsetLeft - 18, 300);
    } else {
      const targetPositionNoScroll = this.offsetLeft;
      animateBackground(currentPosition, targetPositionNoScroll, 300);
    }

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    smoothScrollTo(document.documentElement, targetElement, 500, () => {
      isClickEvent = false;
    });
    smoothScrollTo(document.body, targetElement, 500, () => {
      isClickEvent = false;
    });
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

  tabs.forEach((tab) => {
    tab.addEventListener("click", onTabClick);
  });

  function onScroll() {
    if (isClickEvent) {
      return;
    }

    const threshold = 146;
    const menuListAreas = document.querySelectorAll(".menu-list-area");

    menuListAreas.forEach((area) => {
      const areaTop = area.getBoundingClientRect().top;
      const areaBottom = areaTop + area.offsetHeight;
      const isInThreshold = areaTop <= threshold && areaBottom >= threshold;

      if (isInThreshold) {
        const tabId = area.id;
        const targetTab = document.querySelector(
          `.category-tab[href="#${tabId}"]`
        );

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

          const scrollableList = targetTab.closest(".category-list.scroll-x");
          const tabOffsetLeft = targetTab.offsetLeft;

          if (scrollableList.scrollWidth > scrollableList.clientWidth) {
            scrollToPosition(scrollableList, tabOffsetLeft - 18, 300);
          }
        }
      }
    });
  }

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
