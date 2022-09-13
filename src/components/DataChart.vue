<template>
  <div><button>星座</button><button>宮位</button></div>
  <div>
    <table>
      <tr>
        <td>星體</td>
        <td>落入星座</td>
        <td>度數</td>
        <td>落入宮位</td>
      </tr>
    </table>
    <table v-for="planet in planets">
      <tr>
        <td>{{ planet }}</td>
        <td>落入星座</td>
        <td>度數</td>
        <td>落入宮位</td>
      </tr>
    </table>
  </div>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
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
    this.$store.dispatch("getMyChartData");
  },
  data() {
    return {
      planets: [
        "太 陽",
        "上 升",
        "月 亮",
        "火 星",
        "水 星",
        "金 星",
        "木 星",
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
