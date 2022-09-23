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
            <swiper-slide v-for="item in lesson">
              <div class="shopItem">
                <div class="image">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <h4>{{ item.lesson }}</h4>
                <p>{{ item.psTime }} mins NTD$1,000 起</p>
                <p class="swTxt">
                  {{ item.pscontent }}
                </p>
                <p class="swTxt1">{{ item.pstip }}</p>
                <button class="push1" @click="orderTo(lesson.indexOf(item))">點我預約</button>
              </div>
            </swiper-slide>
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
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {};
  },
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
      plesson:'',
      ptime:'',
      pcontent:'',
      ptipe:'',
    };
  },
  methods: {
    orderTo() {
      if (this.$data.logonType === "about") {
        this.$data.logonType = "order";
        alert(this.lesson[index].lesson)
        // this.$store.commit("addStoreLesson");
        this.plesson=this.lesson.lesson[0];
        this.ptime =this.lesson.psTime[0];
        this.pcontent =this.lesson.pscontent[0];
        this.ptipe =this.lesson.pstip[0]
     
        
      } else {
        this.$data.logonType = "about";
       
      }
    },
    onresize() {
      let clientWidth =
        document.documentElement.clientWidth || document.body.clientHeight;
      if (clientWidth < 992) {
        this.slidesPerView = 1;
      } else {
        this.slidesPerView = 4;
      }
    },
  },
  computed: {
    lesson() {
      return this.$store.state.psLesson;
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
.swTxt1 {
  padding: 0 80px 10px;
  /* text-align: left; */
}
button {
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
.ordershop {
  margin-bottom: 20px;
}

@media screen and (min-width: 992px) {
  .swTxt {
    padding: 0 30px 0px;
    /* text-align: left; */
  }
  .swTxt1 {
    padding: 0 30px 10px;
  }
}
</style>