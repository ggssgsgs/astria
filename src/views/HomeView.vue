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
  <!-- 很長的 bg -->
  <div class="bg-color"></div>
  <div>
    <SketchMain v-bind="sketchData" />
    <!-- <img :src="sketchData.imgStarHolderSrc" alt="" /> -->
    <div style="height: 500px"></div>
    <hello></hello>

    <horoscope></horoscope>

    <!-- <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card border-light bg-transparent h-100">
            <img :src="sketchData.src2" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img :src="sketchData.src2" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img :src="sketchData.src2" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <chartForm class="my-5"></chartForm>
  </div>
</template>
<style scoped>
.bg-color {
  width: 100%;
  height: 4000px;
  position: absolute;
  z-index: -3;
  background: rgb(0, 2, 53);
}
</style>
