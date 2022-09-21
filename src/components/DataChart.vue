<template>
  <!-- <div><button>星座</button><button>宮位</button></div> -->
  <div class="d-flex justify-content-center">
    <div class="chartContainer">
      <table class="w-100 my-3">
        <tr class="mb-5">
          <td align="center" class="w-25">星體</td>
          <td align="center" class="w-25">落入星座</td>
          <td align="center" class="w-25">度數</td>
          <td align="center" class="w-25">落入宮位</td>
        </tr>
      </table>
      <hr />
      <table v-for="planet in planets" class="w-100 my-3">
        <tr class="">
          <td align="center" class="w-25">{{ planet }}</td>
          <td align="center" class="w-25">
            {{ this.currentSignsNames[this.planets.indexOf(planet)] }}
          </td>
          <td align="center" class="w-25">
            {{ this.currentDegrees[this.planets.indexOf(planet)] }}
          </td>
          <td align="center" class="w-25">
            {{ this.currentHousesNames[this.planets.indexOf(planet)] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
  <!-- <div>
    <table></table>
    <button @click="$store.dispatch('getMyChartData')">get data</button>
  </div> -->
</template>
<script>
// Import vuex data
import {useStore} from "vuex";
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },

  mounted() {
    console.log("DataChart mounted");
    //only need to set once in myChart.vue
    //this.$store.dispatch("getMyChartData");
    window.setTimeout(() => {
      //暫時用mySignNames
      this.currentSignsNames = this.$store.state.currentData.currentSignsNames;
      this.currentDegrees = this.$store.state.currentData.currentDegrees;
      this.currentHousesNames =
        this.$store.state.currentData.cuurrentHousesNames;
    }, 200);
  },
  data() {
    return {
      currentSigns: [],
      currentSignsNames: [
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
        "博愛座",
      ],
      currentDegrees: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      currentHouses: [],
      currentHousesNames: [
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
        "打零宮",
      ],
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
    };
  },
};
</script>
<style scoped>
td {
  margin: 100px;
}
.chartContainer {
  width: 100%;
  margin: 5px;
  background: #d9d9d9;
  border-radius: 10px;
  padding: 20px 20px;
}

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
