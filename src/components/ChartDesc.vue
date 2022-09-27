<template>
  <div class="py-1">
    <swiper
      :slidesPerView="this.slidesPerView"
      :spaceBetween="0"
      :freeMode="true"
      :modules="modules"
      :navigation="true"
    >
      <swiper-slide
        v-for="planet in planets"
        @click="switchInfo(this.planets.indexOf(planet))"
        class="pe-auto"
      >
        <div class="d-flex flex-column align-items-center">
          <div class="my-2">
            <img
              :src="iconPlanet[this.planets.indexOf(planet)]"
              alt="planetIcon"
              class="iconPlanet"
            />
          </div>
          <span class="h5">{{ planet }}</span>
        </div>
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
    <div class="contentBox">
      <div class="d-flex justify-content-center align-items-center">
        <img
          class="img-planet"
          :src="this.iconPlanet[this.currentPlanetIndex]"
          alt="iconCCurrentPlanet"
        />
        <img
          :src="this.logoSigns[this.currentSign - 1]"
          alt="imgSign"
          class="logoSign"
        />
        <img
          class="img-planet"
          :src="this.iconPlanet[this.currentPlanetIndex]"
          alt="iconCCurrentPlanet"
        />
      </div>
      <div class="h5 text-center">{{ signName }}</div>
      <div class="p-2 p">
        {{ signInfo }}
      </div>
    </div>
    <div class="contentBox">
      <div class="h5 text-center mt-2">{{ houseName }}</div>
      <div class="p-2 p">{{ houseInfo }}</div>
    </div>

    <!-- <div>
    <table></table>
    <button @click="$store.dispatch('getMyChartData')">get data</button>
  </div> -->
  </div>
</template>
<script>
//import planets icon
import iSun from "../assets/img/icons/Sun.png";
import iAsc from "../assets/img/icons/Asc.png";
import iMoon from "../assets/img/icons/Moon.png";
import iMars from "../assets/img/icons/Mars.png";
import iMercury from "../assets/img/icons/Mercury.png";
import iVenus from "../assets/img/icons/Venus.png";
import iJupiter from "../assets/img/icons/Jupiter.png";
import iSaturn from "../assets/img/icons/Saturn.png";
import iUranus from "../assets/img/icons/Uranus.png";
import iNaptune from "../assets/img/icons/Naptune.png";
import iPluto from "../assets/img/icons/Pluto.png";
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
  created() {
    window.addEventListener("resize", this.changeSlidesAmount);
  },

  destroyed() {
    window.removeEventListener("resize", this.changeSlidesAmount);
  },

  mounted() {
    if (window.innerWidth < 400) {
      this.slidesPerView = 4;
    } else {
      this.slidesPerView = 8;
    }
    console.log("chartDesc mounted");
    //only need to set once in myChart.vue
    //this.$store.dispatch("getMyChartData");

    window.setTimeout(() => {
      // load into local data from vuex
      console.log(this.$store.state.currentData.currentSigns);
      this.currentSigns = this.$store.state.currentData.currentSigns;

      this.currentSignsNames = this.$store.state.currentData.currentSignsNames;
      console.log(this.$store.state.currentData.currentSignsNames);
      this.currentHouses = this.$store.state.currentData.currentHouses;
      this.currentHousesNames =
        this.$store.state.currentData.currentHousesNames;

      console.log("currentData.currentsign", this.$store.state.mySigns);
      console.log("currentsign", this.currentSigns);

      //傳到veux裡 （用 vuex 的 mutation 編輯
      for (let i = 0; i < this.currentSigns.length; i++) {
        this.$store.commit("getDescBySign", {
          planet: this.planetsWithoutSpace[i],
          sign: this.currentSignsNames[i],
          index: i,
        });
      }

      // load into local data from vuex
      this.l_currentSignInfo = this.$store.state.currentData.currentSignInfo;

      // this.currentSigns.forEach((element) => {
      //   console.log(element);

      // });
      for (let i = 0; i < this.currentHouses.length; i++) {
        this.$store.commit("getDescByHouse", {
          planet: this.planetsWithoutSpace[i],
          house: this.currentHousesNames[i],
          index: i,
        });
      }
      // load into local data from vuex
      this.l_currentHouseInfo = this.$store.state.currentData.currentHouseInfo;

      //初始顯示太陽
      this.switchInfo(0);
    }, 800);

    // window.setTimeout(() => {
    //   this.signs = [
    //     this.$store.state.myChartDataOrigin.astros.sun.sign,
    //     this.$store.state.myChartDataOrigin.axes.asc.sign,
    //     this.$store.state.myChartDataOrigin.astros.moon.sign,
    //     this.$store.state.myChartDataOrigin.astros.mars.sign,
    //     this.$store.state.myChartDataOrigin.astros.mercury.sign,
    //     this.$store.state.myChartDataOrigin.astros.venus.sign,
    //     this.$store.state.myChartDataOrigin.astros.jupiter.sign,
    //     this.$store.state.myChartDataOrigin.astros.saturn.sign,
    //     this.$store.state.myChartDataOrigin.astros.uranus.sign,
    //     this.$store.state.myChartDataOrigin.astros.neptune.sign,
    //     this.$store.state.myChartDataOrigin.astros.pluto.sign,
    //   ];
    // }, 200);

    // for (let i = 0; i < this.signsNames.length; i++) {
    //   this.signsNames[i] = this.signNumberToName(this.signs[i]);
    // }
    // console.log(this.signsNames);
  },
  methods: {
    changeSlidesAmount(e) {
      //change size
      if (window.innerWidth < 400) {
        this.slidesPerView = 4;
      } else {
        this.slidesPerView = 8;
      }
    },
    switchInfo(index) {
      this.signInfo = this.l_currentSignInfo[index];
      this.signName = this.currentSignsNames[index];
      //console.log("triggered");
      this.houseInfo = this.l_currentHouseInfo[index];
      this.houseName = this.currentHousesNames[index];

      //set currentSign for logo
      this.currentSign = this.currentSigns[index];
      this.currentPlanetIndex = index;
    },

    // signNumberToName(signNumber) {
    //   if (signNumber == 1) {
    //     return "牡羊座";
    //   } else if (signNumber == 2) {
    //     return "金牛座";
    //   } else if (signNumber == 3) {
    //     return "雙子座";
    //   } else if (signNumber == 4) {
    //     return "巨蟹座";
    //   } else if (signNumber == 5) {
    //     return "獅子座";
    //   } else if (signNumber == 6) {
    //     return "處女座";
    //   } else if (signNumber == 7) {
    //     return "天秤座";
    //   } else if (signNumber == 8) {
    //     return "天蠍座";
    //   } else if (signNumber == 9) {
    //     return "射手座";
    //   } else if (signNumber == 10) {
    //     return "摩羯座";
    //   } else if (signNumber == 11) {
    //     return "水瓶座";
    //   } else if (signNumber == 12) {
    //     return "雙魚座";
    //   }
    // },
  },
  computed: {},
  data() {
    return {
      slidesPerView: 8,
      //icon
      iconPlanet: [
        iSun,
        iAsc,
        iMoon,
        iMars,
        iMercury,
        iVenus,
        iJupiter,
        iSaturn,
        iUranus,
        iNaptune,
        iPluto,
      ],
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
      signInfo: "請點選上方行星，查看星座資訊。",
      signName: "行星星座",
      houseInfo: "請點選上方行星，查看宮位資訊。",
      houseName: "行星宮位",
      planets: [
        "太 陽",
        "上 升",
        "月 亮",
        "火 星",
        "水 星",
        "金 星",
        "木 星",
        "土 星",
        "天王星",
        "海王星",
        "冥王星",
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
      signs: [],
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
  margin: 5px;
  width: 55px;
  height: 99px;
  background: #d9d9d9;
  border-radius: 10px;
}
.contentBox {
  margin: 10px;
  background: #d9d9d9;
  border-radius: 10px;
  padding: 10px;
}
.h5 {
  color: #555;
}
.p {
  color: #555;
}
.iconPlanet {
  width: 50px;
}
.logoSign {
  width: 200px;
}

@media screen and (max-width: 555px) {
  .img-planet {
    width: 15vw;
  }
}
</style>
