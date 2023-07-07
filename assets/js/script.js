const storeDate = {
  store: [
    {
      business: {
        name: "샐러드 은준점",
        open: "00",
        close: "22",
      },
      menuItems: [
        {
          name: "바베큐치킨 샌드위치",
          category: "샌드위치",
          price: 7900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_161/1675816160785B4Szf_PNG/%BF%FA%B7%A6_%B9%D9%BA%A3%C5%A5%C4%A1%C5%B2.png?type=f220_220_60_sharpen",
          link: "",
          orderNum: 50,
          orderDate: "2022-04-01",
          detailTxt: "안녕하세요",
          isNew: false,
          isPopular: false,
          isTypical: true,
          stock: 2,
          discount: 0,
          review: [
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
              date: "2022.11.21",
            },
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
            },
          ],
        },
        {
          name: "로스트닭다리살 샐러드",
          category: "샐러드",
          price: 9500,
          imageUrl: "",
          link: "",
          orderNum: 70,
          orderDate: "",
          detailTxt: "",
          isNew: false,
          isPopular: "",
          isTypical: false,
          stock: 0,
          discount: 0,
        },
        {
          name: "양송이 크림스프",
          category: "스프",
          price: 4000,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20220218_261/1645169219731T8uQL_PNG/%BE%E7%BC%DB%C0%CC_%C5%A9%B8%B2%BD%BA%C7%C1.png?type=f220_220_60_sharpen",
          detailImg:
            "https://naverbooking-phinf.pstatic.net/20220218_261/1645169219731T8uQL_PNG/%BE%E7%BC%DB%C0%CC_%C5%A9%B8%B2%BD%BA%C7%C1.png?type=f459_345_60_sharpen",
          link: "",
          orderNum: 20,
          orderDate: "",
          detailTxt: "양송이의 풍미가 살아있는 부드럽고 담백한 스프",
          isNew: false,
          isPopular: false,
          isTypical: false,
          stock: 2,
          discount: 30,
        },
        {
          name: "바질치킨 브레드",
          category: "시즈널 메뉴",
          price: 8200,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_246/1675813643017sbWSo_PNG/%BA%EA%B7%B9%B5%E5_%B9%D9%C1%FA%C4%A1%C5%B2.png?type=f220_220_60_sharpen",
          link: "",

          orderNum: 55,
          orderDate: "",
          detailTxt:
            "쫄깃한 포카치아 빵 안에 향긋한 바질페스토와 담백한 닭가슴살을 넣어 만든 향긋하고 고소한 랩 샌드위치 (포함 드레싱: 시저)",
          isNew: true,
          isPopular: false,
          isTypical: false,
          review: [
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
            },
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
            },
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
            },
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
            },
          ],
          stock: 0,
          discount: 0,
        },
        {
          name: "멕시칸 랩 샌드위치",
          category: "샌드위치",
          price: 6700,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20220218_276/1645168376384va0sc_PNG/%B8%DF%BD%C3%C4%AD%B7%A6.png?type=f220_220_60_sharpen",
          link: "",
          orderNum: 61,
          orderDate: "",
          detailTxt:
            "쫄깃한 또띠아 속에, 그라운드비프의 고소함과 나쵸칩의 바삭함이 신선한 채소를 만나 사워크림과 조화를 이루는 매력적인 랩 샌드위치! (포함 드레싱: 크리미칠리)",
          isNew: false,
          isPopular: false,
          isTypical: true,
          stock: 2,
          discount: 0,
        },
        {
          name: "칠리베이컨 윔볼",
          category: "윔볼",
          price: 7900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_88/1675816332727Haf1f_PNG/%BF%FA%BA%BC_%C4%A5%B8%AE%BA%A3%C0%CC%C4%C1.png?type=f220_220_60_sharpen",
          link: "",
          orderNum: 61,
          orderDate: "",
          detailTxt:
            "베이컨, 에그, 옥수수, 양파플레이크, 매콤달콤한 감칠맛이 매력적인 샐러디 NO.1 베스트 메뉴 (추천 드레싱: 크리미칠리)",
          isNew: false,
          isPopular: true,
          isTypical: true,
          review: [
            {
              name: "rose",
              star: 4.8,
              Image: "",
              Text: "너무 맛있다네요",
            },
          ],
          stock: 2,
          discount: 0,
        },
        {
          name: "시저치킨 샌드위치",
          category: "랩 샌드위치",
          price: 6700,
          imageUrl: "",
          link: "",
          orderNum: 61,
          orderDate: "",
          detailTxt: "",
          isNew: false,
          isPopular: false,
          stock: 2,
          discount: 0,
        },
        {
          name: "아메리카노 (HOT)",
          category: "음료",
          price: 2400,
          imageUrl: "",
          link: "",
          orderNum: 21,
          orderDate: "",
          detailTxt: "",
          isNew: false,
          isPopular: false,
          stock: 0,
          discount: 0,
        },
      ],
    },
  ],
};

localStorage.removeItem("storeList");
localStorage.setItem("storeList", JSON.stringify(storeDate));

const storedStoreList = localStorage.getItem("storeList");
let storeList = JSON.parse(storedStoreList);

//go-to-top 부드럽게 이동
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".link");

  link.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
