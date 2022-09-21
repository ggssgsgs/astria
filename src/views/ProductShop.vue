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
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>塔羅牌真命天子陣</h4>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                </p>
                <p class="swTxt1">⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>塔羅牌真命天子陣</h4>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                </p>
                <p class="swTxt1">⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>塔羅牌真命天子陣</h4>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                </p>
                <p class="swTxt1">⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>塔羅牌真命天子陣</h4>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                </p>
                <p class="swTxt1">⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>
                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>塔羅牌真命天子陣</h4>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                </p>
                <p class="swTxt1">⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>

                <button class="orderbtn" @click="orderTo">點我預約</button>
              </div></swiper-slide
            >
            <swiper-slide
              ><div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>塔羅牌真命天子陣</h4>
                <p>30 mins NTD$1,000 起</p>
                <p class="swTxt">
                  透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
                </p>
                <p class="swTxt1">⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>
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
      slidesPerView: 4,
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
        this.slidesPerView=4;
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
  padding: 20px 20px 40px;
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

h3 {
  margin-bottom: 10px;
}
p {
 
  margin-bottom: 0.5rem;
  
}
.card {
  height: 300px;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0 0.5rem;
}

.shopItem {
  text-align: center;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 40px;
  border-radius: 5px;
}
.shopGroup h2 {
  margin: 30px 0 20px;
}
.image img {
  padding: 30px;
}
.swTxt {
  padding: 0 80px 0px;
  
  /* text-align: left; */
}
.swTxt1{
 padding: 0 80px 10px;
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
  margin: 0 0 40px;
}
.ordershop{
  margin-bottom: 20px;
}

@media screen and (min-width: 992px) {
  .swTxt {
  padding: 0 30px 0px;
  /* text-align: left; */
}
.swTxt1{
 padding: 0 30px 10px;
}
}
</style>