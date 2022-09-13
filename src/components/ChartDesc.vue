<template>
  <swiper
    :slidesPerView="8"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-sun-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
            />
          </svg>
        </div>
        <span>{{ planet }}</span>
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
  <div>{{ signName }}</div>
  <div>{{ signInfo }}</div>
  <!-- <div>
    <table></table>
    <button @click="$store.dispatch('getMyChartData')">get data</button>
  </div> -->
</template>
<script>
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

  mounted() {
    console.log("chartDesc mounted");
    this.$store.dispatch("getMyChartData");

    window.setTimeout(() => {
      // load into local data from vuex
      this.mySigns = this.$store.state.mySigns;
      this.mySignsNames = this.$store.state.mySignsNames;

      console.log("mysign", this.$store.state.mySigns);
      console.log("mysign", this.mySigns);

      //傳到veux裡 （用 vuex 的 mutation 編輯
      for (let i = 0; i < this.mySigns.length; i++) {
        this.$store.commit("getDescBySign", {
          planet: this.planetsWithoutSpace[i],
          sign: this.mySignsNames[i],
          index: i,
        });
      }

      // load into local data from vuex
      this.l_mySignInfo = this.$store.state.mySignInfo;

      // this.mySigns.forEach((element) => {
      //   console.log(element);
      // });
    }, 200);

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
    switchInfo(index) {
      this.signInfo = this.l_mySignInfo[index];
      this.signName = this.mySignsNames[index];
      //console.log("triggered");
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
      //for test
      signInfo: "禮讓老弱婦孺",
      signName: "博愛座",
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

      mySigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      mySignsNames: [],
      //l_mySignInfo: [],
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
  background: #fff;
  border-radius: 10px;
}
</style>
