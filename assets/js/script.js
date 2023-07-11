const storeDate = {
  store: [
    {
      business: {
        name: "샐러드 은준점",
        open: "00",
        close: "24",
      },
      menuItems: [
        {
          name: "팔도비빔 메밀면 샐러드",
          category: "시즈널 메뉴",
          price: 8800,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230503_281/1683070058215pAuJu_PNG/%C6%C8%B5%B5%BA%F1%BA%F6%B8%DE%B9%D0%B8%E9%BB%F8%B7%AF%B5%F0.png",
          link: "",
          orderNum: 53,
          orderDate: "",
          detailTxt:
            "담백하고 고소한 치킨과 에그, 탱글한 메밀면을 매콤달콤 팔도비빔장에 비벼먹는 여름 시즈널 메뉴 (기본 드레싱: 팔도비빔장)",
          isNew: true,
          isPopular: false,
          isTypical: false,
          stock: 0,
          discount: 0,
        },
        {
          name: "팔도비빔 우삼겹 웜볼",
          category: "시즈널 메뉴",
          price: 8800,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230503_297/1683070825632bniRT_PNG/%C6%C8%B5%B5%BA%F1%BA%F6%BF%EC%BB%EF%B0%E3%BF%FA%BA%BC.png",
          link: "",
          orderNum: 45,
          orderDate: "",
          detailTxt:
            "달콤짭짤한 우삼겹과 풍미가득 버섯, 든든한 곡물을 매콤달콤 팔도비빔장에 비벼먹는 여름 시즈널 메뉴 (기본 드레싱: 팔도비빔장)",
          isNew: true,
          isPopular: false,
          isTypical: false,
          stock: 10,
          discount: 0,
        },
        {
          name: "칠리베이컨 윔볼",
          category: "윔볼",
          price: 7900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_88/1675816332727Haf1f_PNG/%BF%FA%BA%BC_%C4%A5%B8%AE%BA%A3%C0%CC%C4%C1.png",
          link: "",
          orderNum: 61,
          orderDate: "",
          detailTxt:
            "베이컨, 에그, 옥수수, 양파플레이크, 매콤달콤한 감칠맛이 매력적인 샐러디 NO.1 베스트 메뉴 (추천 드레싱: 크리미칠리)",
          isNew: false,
          isPopular: false,
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
          name: "로스트닭다리살 샐러드",
          category: "샐러드",
          price: 9500,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_110/1675816243167tfhau_PNG/%BB%F8%B7%AF%B5%F0_%B7%CE%BD%BA%C6%AE%B4%DF%B4%D9%B8%AE%BB%EC.png",
          link: "",
          orderNum: 70,
          orderDate: "",
          detailTxt: "",
          isNew: false,
          isPopular: false,
          isTypical: false,
          stock: 10,
          discount: 0,
        },
        {
          name: "멕시칸 랩 샌드위치",
          category: "랩 샌드위치",
          price: 6700,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20220218_276/1645168376384va0sc_PNG/%B8%DF%BD%C3%C4%AD%B7%A6.png",
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
          name: "시저치킨 샌드위치",
          category: "랩 샌드위치",
          price: 6700,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20220218_208/1645168344955IKcg8_PNG/%BD%C3%C0%FA%C4%A1%C5%B2%B7%A6.png",
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
          name: "바베큐치킨 웜랩 샌드위치",
          category: "웜랩 샌드위치",
          price: 7900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_161/1675816160785B4Szf_PNG/%BF%FA%B7%A6_%B9%D9%BA%A3%C5%A5%C4%A1%C5%B2.png",
          link: "",
          orderNum: 50,
          orderDate: "2022-04-01",
          detailTxt:
            "담백한 닭다리살에 매콤달콤한 바베큐소스가 곡물밥과 조화를 이루는 매력적인 웜랩 샌드위치  (포함 드레싱: 허니머스타드)",
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
          name: "치킨토마토 샌드위치",
          category: "샌드위치",
          price: 6900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_59/1675816363836QIGY7_PNG/%BB%F7%B5%E5_%C4%A1%C5%B2%C5%E4%B8%B6%C5%E4.png",
          link: "",
          orderNum: 12,
          orderDate: "",
          detailTxt:
            "담백한 닭가슴살과 고소한 체다치즈, 상큼한 크랜베리, 신선한 채소 및 토마토, 여기에 크림치즈의 풍미를 듬뿍 더한 귀리번 샌드위치!(포함 드레싱: 시저)",
          isNew: false,
          isPopular: false,
          stock: 20,
          discount: 0,
        },
        {
          name: "바질치킨 브레드",
          category: "브레드",
          price: 8200,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230208_246/1675813643017sbWSo_PNG/%BA%EA%B7%B9%B5%E5_%B9%D9%C1%FA%C4%A1%C5%B2.png",
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
          stock: 10,
          discount: 0,
        },
        {
          name: "양송이 크림스프",
          category: "스프",
          price: 3500,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20220218_261/1645169219731T8uQL_PNG/%BE%E7%BC%DB%C0%CC_%C5%A9%B8%B2%BD%BA%C7%C1.png",
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
          name: "콘치즈 스프",
          category: "스프",
          price: 3500,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20220218_240/16451692495310fvpL_PNG/%C4%DC%C4%A1%C1%EE_%BD%BA%C7%C1.png",
          link: "",
          orderNum: 3,
          orderDate: "",
          detailTxt:
            "옥수수와 네 가지 치즈가 만나 달콤함과 고소함이 어우러진 스프 (*세트 가격으로 구매를 원할 시 메인 메뉴 옵션에서 선택해주세요)",
          isNew: false,
          isPopular: false,
          isTypical: false,
          stock: 0,
          discount: 30,
        },
        {
          name: "아메리카노 (HOT)",
          category: "음료",
          price: 2400,
          imageUrl:
            "https://ldb-phinf.pstatic.net/20220218_284/1645169353812C0HyS_JPEG/%C7%D6-%BE%C6%B8%DE%B8%AE%C4%AB%B3%EB.jpg",
          link: "",
          orderNum: 21,
          orderDate: "",
          detailTxt: "",
          isNew: false,
          isPopular: false,
          stock: 10,
          discount: 0,
        },
        {
          name: "아메리카노 (ICE)",
          category: "음료",
          price: 2400,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230209_70/16759240041608GQ3z_PNG/%C0%BD%B7%E1_%BE%C6%C0%CC%BD%BA%BE%C6%B8%DE%B8%AE%C4%AB%B3%EB_%C1%A4%B9%E6%C7%E2.png",
          link: "",
          orderNum: 5,
          orderDate: "",
          detailTxt: "",
          isNew: false,
          isPopular: false,
          stock: 10,
          discount: 0,
        },
        {
          name: "콜라제로 355ml",
          category: "음료",
          price: 1900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230209_226/1675924020650XfA2n_PNG/%C4%DA%C5%A9%C1%A6%B7%CE_%C1%A4%B9%E6%C7%E2.png",
          link: "",
          orderNum: 21,
          orderDate: "",
          detailTxt: "설탕이 들어가지 않은 0kcal 콜라",
          isNew: false,
          isPopular: false,
          stock: 10,
          discount: 0,
        },
        {
          name: "스프라이트제로 355ml",
          category: "음료",
          price: 1900,
          imageUrl:
            "https://naverbooking-phinf.pstatic.net/20230209_259/1675924031699HXHcT_PNG/%BD%BA%C7%C1%B6%F3%C0%CC%C6%AE%C1%A6%B7%CE_%C1%A4%B9%E6%C7%E2.png",
          link: "",
          orderNum: 10,
          orderDate: "",
          detailTxt: "설탕이 들어가지 않은 0kcal 탄산수",
          isNew: false,
          isPopular: false,
          stock: 10,
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
