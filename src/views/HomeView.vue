<script>
import SketchMain from "../components/P5CanvasKeyVision copy.vue";
import imgUrl from "../assets/img/starHolder.png";
import imgUrl2 from "../assets/img/0728.jpg";

//chartForm
import chartForm from "../components/ChartForm.vue";

//Horoscope
import horoscope from "../components/Horoscope.vue";
//
import hello from "../components/Hello.vue";
export default {
  components: {
    SketchMain,
    chartForm,
    horoscope,
    hello,
  },
  data() {
    return {
      sketchData: {
        imgStarHolderSrc: imgUrl,
        src2: imgUrl2,
      },
    };
  },
};
</script>

<template>
  <!-- 很長的 bg -->
  <div class="bg-color"></div>
  <div>
    <SketchMain v-bind="sketchData" class="fixed" />
    <!-- <img :src="sketchData.imgStarHolderSrc" alt="" /> -->
    <div style="height: 500px"></div>

    <hello></hello>

    <horoscope></horoscope>

    <chartForm class="my-5" ref="chartForm"></chartForm>
  </div>
</template>
<style scoped>
.bg-color {
  width: 100%;
  height: 100vw;
  position: fixed;
  top: 0px;
  z-index: -3;
  background: rgb(0, 2, 53);
  /* clear: both; */
}
.fixed {
  width: 100%;
  height: 100vw;
  position: fixed;
  /* top: 0px; */
}
</style>
