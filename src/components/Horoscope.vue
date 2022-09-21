<template>
  <div class="container">
    <swiper
      :slidesPerView="4.5"
      :spaceBetween="0"
      :freeMode="true"
      :modules="modules"
      :navigation="true"
    >
      <swiper-slide v-for="sign in signs" class="pe-auto">
        <div class="d-flex flex-column align-items-center">
          <div class="my-2">
            <img
              :src="logoSigns[this.signs.indexOf(sign)]"
              alt="signLogo"
              class="logoSign"
            />
          </div>
          <span>{{ sign }}</span>
        </div>
        <hr />
        <div>{{ horoscopes[this.signs.indexOf(sign)] }}</div>
      </swiper-slide>
      <!-- 記得最後可以複製一遍 -->
      <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide> -->
    </swiper>
  </div>
</template>
<script>
//import sign logos
import lAries from "../assets/img/signLogos/Aries_pink_400p.png";
import lTarus from "../assets/img/signLogos/Tarus_pink_400p.png";
import lGemini from "../assets/img/signLogos/Gemini_pink_400p.png";
import lCancer from "../assets/img/signLogos/Cancer_pink_400p.png";
import lLeo from "../assets/img/signLogos/Leo_pink_400p.png";
import lVirgo from "../assets/img/signLogos/Virgo_pink_400p.png";
import lLibra from "../assets/img/signLogos/Libra_pink_400p.png";
import lScorpio from "../assets/img/signLogos/Scorpio_pink_400p.png";
import lSagitarius from "../assets/img/signLogos/Sagitarius_pink_400p.png";
import lCapricorn from "../assets/img/signLogos/Capricorn_pink_400p.png";
import lAquarius from "../assets/img/signLogos/Aquarius_pink_400p.png";
import lPisces from "../assets/img/signLogos/Pisces_pink_400p.png";

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
//import "swiper/css/pagination";
//import "swiper/css/navigation";
//import "./style.css";

// import required modules
import {FreeMode} from "swiper";

import {useStore} from "vuex";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = () => {
    //   console.log("slide change");
    // };
    return {
      // onSwiper,
      // onSlideChange,
      modules: [FreeMode],
    };
  },
  data() {
    return {
      //icon

      logoSigns: [
        lAries,
        lTarus,
        lGemini,
        lCancer,
        lLeo,
        lVirgo,
        lLibra,
        lScorpio,
        lSagitarius,
        lCapricorn,
        lAquarius,
        lPisces,
      ],
      //for test
      currentSign: 1,
      currentPlanetIndex: 0,
      signInfo: "禮讓老弱婦孺",
      signName: "博愛座",
      houseInfo: "每個人的上升都在第一宮",
      houseName: "打零工",
      signs: [
        "牡羊座",
        "金牛座",
        "雙子座",
        "巨蟹座",
        "獅子座",
        "處女座",
        "天秤座",
        "天蠍座",
        "射手座",
        "摩羯座",
        "水瓶座",
        "雙魚座",
      ],
      planetsWithoutSpace: [
        "太陽",
        "上升",
        "月亮",
        "火星",
        "水星",
        "金星",
        "木星",
        "土星",
        "天王星",
        "海王星",
        "冥王星",
      ],

      horoscopes: [
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
        "中秋連假若浮現某件特別有感的事，不論有沒有人陪你成行，在太陽與守護天王的助力之下，想做就去做吧！你有一周時間去落實它，周末可初見成效。但記得水逆要開始，這冒出來的渴望最好在你能力範圍之內、是你清楚怎麼進行的，就可叛逆一下、用不同以往的方式去嘗試；但若是些鬧脾氣、口袋不夠深還硬買的情形，那就算了吧。喜歡的新對象好像有點不一樣。",
      ],

      signsNames: [],

      currentSigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentSignsNames: [],
      l_currentSignInfo: [],

      currentHouses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentHousesNames: [],
      l_currentHouseInfo: [],
    };
  },
};
</script>

<style scoped>
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  width: 700px;
  height: 100%;
  z-index: 1;

  display: flex;
}
.swiper-slide {
  padding: 20px 20px;
  margin: 5px;
  width: 100px;

  background: rgb(58, 60, 104);
  border-radius: 10px;
}
.contentBox {
  margin: 5px;
  background: #d9d9d9;
  border-radius: 10px;
  padding: 10px;
}

.logoSign {
  width: 100px;
}
</style>
