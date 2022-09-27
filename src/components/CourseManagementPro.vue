<template>
  <div>
    <div class="box my-5 mx-1 mx-md-5">
      <div class="row topPart">
        <h2>上架課程預覽</h2>
        <swiper
          :modules="modules"
          navigation
          :slides-per-view="slidesPerView"
          :space-between="25"
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
              <p>{{ item.psTime }} mins NTD$起</p>
              <p class="swTxt">
                {{ item.pscontent }}
              </p>
              <p class="swTxt1">{{ pTip }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="row content">
        <div class="col-12 col-lg-5 shop">
          <div class="image">
            <img src="https://picsum.photos/200/200?random=1" />
          </div>
          <h4>{{ lessonName }}</h4>
          <p>{{ lessonTime }} mins NTD${{ lessonPrice }}起</p>
          <p class="swTxt">
            {{ des }}
          </p>
          <p class="swTxt1">{{ pTip }}</p>
        </div>
        <div class="col-12 col-lg-7 itemGroup">
          <div class="d-flex inputGroup">
            <div class="d-flex t1">
              <label>課程名稱</label>
              <select v-model="lessonName" class="t1">
                <option disabled>-- 請選擇出生地 --</option>
                <option
                  v-for="lessonName in lessonNameList"
                  :key="lessonName"
                  :value="lessonName"
                >
                  {{ lessonName }}
                </option>
              </select>
            </div>

            <div class="radio-btns d-flex">
              <label>課程安排</label>
              <input
                v-model="location"
                type="radio"
                value="線上"
                class="btn-check"
                name="locations"
                id="online"
                autocomplete="off"
              />
              <label class="btn btn-secondary" for="online">線上</label>
              <input
                v-model="location"
                value="實體"
                type="radio"
                class="btn-check"
                name="locations"
                id="local"
                autocomplete="off"
              />
              <label class="btn btn-secondary" for="local">實體</label>
              <input
                v-model="location"
                value="其他"
                type="radio"
                class="btn-check"
                name="locations"
                id="others"
                autocomplete="off"
              />
              <label class="btn btn-secondary" for="others">其他</label>
            </div>
            <div class="d-flex t1">
              <label for="des">課程介紹</label>
              <textarea
                name="dess"
                id="des"
                v-model="des"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div class="timeWrap d-flex">
            <label>起始時數</label>
            <div class="timeGroup">
              <div class="timeItem d-flex">
                <input
                  v-model="lessonTime"
                  type="radio"
                  value="30"
                  class="btn-check"
                  name="lessonTimes"
                  id="30"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="30">30</label>
                <input
                  v-model="lessonTime"
                  type="radio"
                  value="60"
                  class="btn-check"
                  name="lessonTimes"
                  id="60"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="60">60</label>
                <input
                  v-model="lessonTime"
                  type="radio"
                  value="90"
                  class="btn-check"
                  name="lessonTimes"
                  id="90"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="90">90</label>
                <input
                  v-model="lessonTime"
                  type="radio"
                  value="120"
                  class="btn-check"
                  name="lessonTimes"
                  id="120"
                  autocomplete="off"
                />
                <label class="btn btn-secondary" for="120">120</label>
              </div>
            </div>
          </div>
          <div class="priceGroup d-flex">
            <label>起始價格</label>
            <input type="text" v-model="lessonPrice" />
          </div>
          <div class="btngRoup">
            <button @click="onclick">新增</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useStore } from "vuex";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.email = localStorage.getItem("myemail");

    fetch("https://astria.sutsanyuan.com/Astria_api/showlesson", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset =utf-8",
      },
      body: JSON.stringify({
        Email: this.email,
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
      slidesPerView: 2.5,
      pLesson: "",
      pTime: "",
      pContent: "",
      pCost: "",
      pTip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      email: "",
      pslessons: [],
      lessonName: "",
      location: "",
      des: "",
      lessonTime: "",
      lessonPrice: "",
      lessonNameList: [
        "塔羅占卜",
        "星座命盤",
        "紫微斗數",
        "八字",
        "生命靈數",
        "人類圖",
      ],
    };
  },
  methods: {
    onresize() {
      let clientWidth =
        document.documentElement.clientWidth || document.body.clientHeight;
      if (clientWidth < 992) {
        this.slidesPerView = 1;
      } else {
        this.slidesPerView = 2.5;
      }
    },
    onclick() {
      let formdata = new FormData();
      formdata.append("Photo", "");
      formdata.append("Lesson", this.lessonName);
      formdata.append("LessonDes", this.des);
      formdata.append("LessonMem", "");
      formdata.append("Select", this.location);
      formdata.append("Time", this.lessonTime);
      formdata.append("ProCost", this.lessonPrice);
      formdata.append("Email", this.email);
      formdata.append("Status", "新增");

      fetch("https://astria.sutsanyuan.com/Astria_api/LessonChange", {
        method: "post",

        body: formdata,
      })
        .then(function (re) {
          return re.json();
        })
        .then((body) => {
          console.log(body);
        })
        .catch(function (err) {
          console.log(err);
        });
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
.topPart {
  border-radius: 10px 10px 0px 0px;
  /* background: #999; */
}
.shopItem {
  background: #999;
}
.item {
  flex-direction: column;
}

.inputGroup {
  flex-direction: column;
}
.itemGroup {
  margin: 30px auto;
  padding: 0 20px;
  /* text-align: center; */
}
.shop {
  background: #999;
}

.btn-secondary {
  width: 60px;
  height: 40px;
  color: #aaa;
}
.content {
  margin-top: 20px;
  border-radius: 0px 0px 10px 10px;
  background: #dadada;
  padding: 0 10px;
}

img {
  border-radius: 50%;
  margin: 30px 0 20px;
}
.fs-6 {
  font-size: 14px !important;
}
h2 {
  color: #999;
  margin-bottom: 20px;
}
h5 {
  font-size: 18px;
  color: #000235;
}
h6 {
  font-size: 14px;
  color: #000235;
  font-weight: 350;
}
.color-navy {
  color: #000235;
}

input {
  width: 55%;
  height: 30px;
  margin: 0px 0px 20px;
  color: gray;
  border-radius: 5px;
  padding-left: 10px;
}
textarea {
  width: 55%;
  margin: 20px 20px 20px 0;
  border: none;
  color: gray;
  border-radius: 5px;
  padding: 0 10px;
}
select {
  width: 55%;
  height: 30px;
  color: #999;
}
option {
  color: #999;
}
.timeWrap input {
  margin-left: 20px;
}
span {
  background: #999;
  margin: 10px;
  border-radius: 5px;
}
label {
  color: gray;
  margin: 0px 20px 20px 0;
}
.t1 label {
}
button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background: #999;
}
.timeWrap {
  flex-direction: column;
}
@media screen and (min-width: 992px) {
  .content {
    margin-top: 20px;
    border-radius: 0px 0px 10px 10px;
    background: #dadada;
    padding: 0;
  }
  .timeWrap {
    flex-direction: row;
  }
  .timeWrap label {
  }
}
</style>
