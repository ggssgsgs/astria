<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row about">
        <product-shop-about v-show="logonType === 'about'"></product-shop-about>
      </div>
      <div class="row shop">
        <div class="col shopGroup">
          <h2>販售課程介紹</h2>
          <swiper
            :modules="modules"
            navigation
            :slides-per-view="slidesPerView"
            :space-between="20"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            :options="swiperOption"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            @resize="onresize"
          >
            <swiper-slide>
              <div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/300/300?random=1" />
                </div>
                <h5>塔羅牌真命天子陣</h5>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                  ⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠
                </p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/300/300?random=1" />
                </div>
                <h5>塔羅牌真命天子陣</h5>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                  ⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠
                </p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/300/300?random=1" />
                </div>
                <h5>塔羅牌真命天子陣</h5>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                  ⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠
                </p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div></swiper-slide
            >
            <swiper-slide
              ><div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/300/300?random=1" />
                </div>
                <h5>塔羅牌真命天子陣</h5>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                  ⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠
                </p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div></swiper-slide
            >
          </swiper>
        </div>
      </div>
      <div class="row ordershop">
        <product-shop-order v-show="logonType === 'order'"></product-shop-order>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import ProductShopOrder from "../components/ProductShopOrder.vue";
import ProductShopAbout from "../components/ProductShopAbout.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductShopOrder,
    ProductShopAbout,
  },
  data() {
    return {
      logonType: "about",
      msgt1: "思妤塔羅占卜工作坊",
      msglocation: "台北",
      msgp1:
        "世新大學行政管理所 碩士畢業，大學一入學就加入占星社，開始不務正業，大三大四擔任社長，畢業後還身兼社團指導老師一職。對西洋星盤、塔羅、瑜珈感到興趣，師承唐綺陽，期待在亂世中透過占星神秘學，為在亂流中的大家帶來一根浮木。",
      slidesPerView: 3,
    };
  },
  methods: {
    orderTo() {
      if (this.$data.logonType === "about") {
        this.$data.logonType = "order";
      } else {
        this.$data.logonType = "about";
      }
    },
    onresize() {
      let clientWidth =
        document.documentElement.clientWidth || document.body.clientHeight;
      if (clientWidth <992) {
        this.slidesPerView = 1;
      }
      else{
        this.slidesPerView=3;
      }
      
    },
  },
};
</script>
<style scoped>
* {
  color: #eee;
}
.pic img {
  width: 100%;
  border-radius: 50%;
}
.about {
  border-bottom: 1px solid #eee;
  padding: 20px;
}
.itemPic {
  padding: 30px 50px;
}
.txt {
  padding: 40px 50px;
}
.title {
  justify-content: Space-between;
}
.p1 {
  padding: 20px 0 0;
}
h2 {
  margin-bottom: 15px;
}
h3 {
  margin-bottom: 15px;
}
p {
  letter-spacing: 0.1rem;
}
.card {
  height: 300px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0 0.5rem;
}

.shopItem {
  text-align: center;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 20px;
  border-radius: 5px;
}
.shopGroup h2 {
  margin: 20px;
}
.image img {
  padding: 30px;
}
.swTxt {
  padding: 0 50px;
  /* text-align: left; */
}
.orderbtn {
  width: 150px;
  height: 50px;
  background: rgba(217, 217, 217, 0.25);
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
}
.shop {
  border-bottom: 1px solid #eee;
  margin: 0 0 20px;
}
@media screen and (min-width: 992px) {
}
</style>