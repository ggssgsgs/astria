<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row about">
        <product-shop-about
          v-show="logonType === 'about'"
          :the-shop="msgt1"
          :the-location="msglocation"
          :the-pcontent="msgp1"
        ></product-shop-about>
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
            <swiper-slide v-for="item in pslessons">
              <div class="shopItem">
                <div class="image">
                  <img :src="item.Photo">
                </div>
                <h4>{{ item.Lesson }}</h4>
                <p>{{ item.Time }} mins NTD${{ item.Cost }} 起</p>
                <p class="swTxt">
                  {{ item.Des }}
                </p>
                <p class="swTxt1">{{ pTip }}</p>
                <button
                  class="push1"
                  @click="orderTo(this.pslessons.indexOf(item))"
                >
                  點我預約
                </button>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="row ordershop">
        <product-shop-order
          v-show="logonType === 'order'"
          :the-lesson="pLesson"
          :the-time="pTime"
          :the-content="pContent"
          :the-cost="pCost"
          :the-tip="pTip"
        ></product-shop-order>
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

//import sweetalert
import Swal from "sweetalert2";

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
  mounted() {
    // alert(this.$store.state.currentData.currentAstrologist.PID)
    fetch("https://astria.sutsanyuan.com/Astria_api/showlesson", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset =utf-8",
      },
      body: JSON.stringify({
        
        pid: this.$store.state.currentData.currentAstrologist.PID,
      }),
    })
      .then(function (re) {
        return re.json();
      })
      .then((body) => {
        console.log(body);
        this.msgt1 = body.Name;
        this.msglocation = body.Address;
        this.msgp1 = body.Experience;
        this.pslessons = body.LessonTC;
       

      })
      .catch(function (err) {
        console.log(err);
      });
  },
  data() {
    return {
      logonType: "about",
      slidesPerView: 4,
      pLesson: "",
      pTime: "",
      pContent: "",
      pCost: "",
      pTip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      msgt1: "",
      msglocation: "",
      msgp1: "",
      pslessons: [],
 
    };
  },
  methods: {
    orderTo(index) {
      if (this.$data.logonType === "about") {
        this.$data.logonType = "order";

        this.pLesson = this.pslessons[index].Lesson;
        this.pTime = this.pslessons[index].Time;
        this.pCost = this.pslessons[index].Cost;
        this.pContent = this.pslessons[index].Des;
        if (!this.$store.state.isLogIn) {
          console.log("not log in");
          Swal.fire({
            title: "您尚未登入",
            text: "請登入以進入訂單",
            // icon: "warning",
            iconColor: "rgba(0,2,53,0.3)",
            showCancelButton: false,
            confirmButtonColor: "rgba(0,2,53,0.5)",
            //cancelButtonColor: "rgba(0,2,53,0.5)",
            confirmButtonText: "登入以繼續",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/logIn");
            }
          });
        }
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
  padding: 0 40px 0px;

  /* text-align: left; */
}
.swTxt1 {
  padding: 0 40px 10px;
  /* text-align: left; */
}
button {
  width: 120px;
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