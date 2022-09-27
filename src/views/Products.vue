<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center hotProduct">
        <h2>熱門占卜師</h2>
        <swiper
          :slidesPerView="this.slidesPerView"
          :spaceBetween="0"
          :freeMode="true"
          :modules="modules"
          :navigation="true"
        >
          <swiper-slide
            v-for="astrologist in this.$store.state.allAstrologists"
            class="pe-auto"
          >
            <div class="d-flex flex-column align-items-center">
              <div class="my-5">
                <img
                  :src="this.imgRoot + astrologist.ProImg"
                  alt="astrologistLogo"
                  class="imgSize"
                />
              </div>
              <span
                ><h3>{{ astrologist.ProName }}</h3></span
              >
              <div>
                <h6>{{ astrologist.Select }}</h6>
              </div>
              <div class="btn my-4">
                <h5
                  @click="
                    setCurrentAstrologist(
                      this.$store.state.allAstrologists,
                      this.$store.state.allAstrologists.indexOf(astrologist)
                    )
                  "
                >
                  進入商店
                </h5>
              </div>
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
      </div>
      <div class="row justify-content-center mt-5">
        <div class="searchGroup">
          <h2>依分類選擇</h2>
          <div class="mx-4 inputSearch">
            <select
              class="custom-select"
              id="inputGroupSelect02"
              v-model="selected"
            >
              <option selected>分類搜尋</option>
              <option value="八字">八字</option>
              <option value="人類圖">人類圖</option>
              <option value="紫微斗數">紫微斗數</option>
              <option value="塔羅占卜">塔羅占卜</option>
              <option value="生命靈數">生命靈數</option>
              <option value="星座命盤">星座命盤</option>
              <option value="星盤">星盤</option>
            </select>
          </div>
        </div>

        <!--  -->
        <swiper
          :slidesPerView="this.slidesPerView"
          :spaceBetween="0"
          :freeMode="true"
          :modules="modules"
          :navigation="true"
        >
          <swiper-slide
            v-for="astrologist in selectedAstrologists"
            class="pe-auto"
          >
            <div class="d-flex flex-column align-items-center">
              <div class="my-5">
                <img
                  :src="this.imgRoot + astrologist.ProImg"
                  alt="astrologistLogo"
                  class="imgSize"
                />
              </div>
              <span
                ><h3>{{ astrologist.ProName }}</h3></span
              >
              <div>
                <h6>{{ astrologist.Select }}</h6>
              </div>
              <div class="btn my-4">
                <h5
                  @click="
                    setCurrentAstrologist(
                      selectedAstrologists,
                      selectedAstrologists.indexOf(astrologist)
                    )
                  "
                >
                  進入商店
                </h5>
              </div>
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
      </div>
    </div>
  </div>
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
  mounted() {
    if (window.innerWidth < 992) {
      this.slidesPerView = 1.2;
    } else {
      this.slidesPerView = 4.5;
    }

    this.$store.dispatch("getReserationInfo", this.$store.state.myEmail);
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
  data() {
    return {
      selected: 2,
      //
      imgRoot: "../src/assets/img/",
      //
      slidesPerView: 4.5,
      //

      msgt1: ["唐綺陽占星幫", "唐綺陽", "占星幫"],
      msgt2: "塔羅及西洋占星",
      count: [0, 1, 2, 3],
      // selectedAstrologists: [],
    };
  },
  computed: {
    selectedAstrologists() {
      for (let i = 0; i < 7; i++) {
        if (this.selected == this.$store.state.psSkill[i]) {
          return this.$store.state.astrologistsByCat[i];
        }
      }
    },
  },
  methods: {
    setCurrentAstrologist(astrologists, index) {
      this.$store.commit("setCurrentAstrologist", astrologists[index]);
      this.$router.push("/productShop");
    },
    //
    changeSlidesAmount(e) {
      //change size
      if (window.innerWidth < 992) {
        this.slidesPerView = 1;
      } else {
        this.slidesPerView = 4.5;
      }
    },
    //
    onsubmit() {
      this.$router.push("/productShop");
    },
    shop() {
      this.$router.push("/productShop");
    },
  },
};
</script>

<style scoped>
/* .hotProduct {
  margin: 10px 0 0;
} */

h2 {
  margin: 0;
}
.anyChoice {
  margin: 20px 0;
}
.mycard {
  margin: 0 30px;
}
.item {
  text-align: center;
}
.evaluate {
  justify-content: center;
  margin-bottom: 10px;
}

.anyChoice h2 {
  padding: 20px 20px 0px 30px;
  color: #62ff36;
}

.picture {
  width: 300px;
  height: 300px;
}
rgb(42, 55, 38) .anyChoice button {
  background: rgba(217, 217, 217, 0.25);
  width: 240px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.anyChoice img {
  /* border-radius: 50%;
  width: 100%;
  padding: 60px 60px 40px; */
}

.anyChoice h3 {
  margin: 0px 0 10px;
}

.anyChoice span {
  margin: 0 30px;
}

.custom-select {
  width: 150px;
  height: 35px;
}
.searchGroup {
  align-items: center;
  display: flex;
}
.btnshop {
  text-align: center;
}

@media screen and (max-width: 992px) {
  h2 {
    text-align: center;
    padding: 20px 0 0;
    margin-bottom: 20px;
  }
  .searchGroup {
    flex-direction: column;
    text-align: center;
  }

  .anyChoice img {
    border-radius: 50%;

    /* padding: 60px 50px 40px; */
  }
}

.imgSize {
  width: 200px;
  border-radius: 50%;
  /* width: 300px; */
  /* display: inline; */
  /* margin: 0 auto;
  height: 300px;
  width: auto; */
}

.btn {
  width: 150px;
  padding: 10px 0px;

  border-radius: 10px;
  background: #999;
  color: #fff;
  border: none;
}
.btn h5 {
  color: #fff;
  margin: 0px;
}
.btn:hover {
  background: #555;
  border: none;
}
select {
  color: #555;
}
</style>
