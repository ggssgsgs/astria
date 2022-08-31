<script>
import SketchMain from "../components/P5CanvasKeyVision copy.vue";
import imgUrl from "../assets/img/starHolder.png";

export default {
  components: {
    SketchMain,
  },
  data() {
    return {
      sketchData: {
        imgStarHolderSrc: imgUrl,
      },
    };
  },

  // data() {
  //   return {
  //     sketchData: {
  //       sketchParent: "sketchParent",
  //       imgSrc: imgUrl,
  //       numRandomBytes: 50,
  //     },
  //   };
  // },
};
</script>

<template>
  <!-- <div id="me">
    <VueCanvas />
  </div> -->
  <!-- <div>
    HOME
    <div><VueCanvas></VueCanvas></div>
  </div> -->
  <!-- <div class="col-md-9">
    <SketchMain v-bind="sketchData" />
  </div> -->

  <div>
    <SketchMain v-bind="sketchData" />
  </div>
</template>
