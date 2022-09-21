<template>
  <div class="BG">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="row shop">
          <div class="col shopGroup">
            <h2>上課課程預覽</h2>
            <swiper
              :modules="modules"
              :slides-per-view="3"
              :space-between="20"
              navigation
              :pagination="{ clickable: true }"
              :scrollbar="{ draggable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide>
                <div class="shopItem">
                  <div class="image">
                    <img src="https://picsum.photos/300/300?random=1" />
                  </div>
                  <h5>塔羅牌真命天子陣</h5>
                  <h5>{{ form.lesson.msg }}</h5>
                  <p>{{ form.time.msg }} NTD$ {{ form.cost.msg }} 起</p>
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
                  <!-- <h5>塔羅牌真命天子陣</h5> -->
                  <h5>{{ form.lesson.msg }}</h5>
                  <p>{{ form.time.msg }} NTD$ {{ form.cost.msg }} 起</p>
                  <!-- <p>30 mins NTD$1,000 起</p> -->
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
                </div></swiper-slide
              >
            </swiper>
          </div>
        </div>

        <h2>新增課程</h2>
        <div class="card">
          <div class="d-flex inputForm">
            <div class="d-flex input-item">
              <label class="l1">課程名稱 </label>
              <select v-model="form.address.value" class="t1">
                <option value="" disabled>請選擇課程</option>
                <!--<option v-for="address in addresslist" v-on:change="setplace" :key="address" :value="address">{{address}}</option>-->
                <option
                  v-for="lesson in form.Selectlist"
                  :key="lesson"
                  :value="lesson"
                >
                  {{ lesson }}
                </option>
              </select>
              <!-- <div class="el-form-item__error">{{ form.lesson.msg }}</div> -->
            </div>
            <div class="d-flex input-item">
              <label class="l1">課程安排 </label>
              <input
                v-model="form.select.value"
                class="t2"
                type="radio"
                value="線上"
              />
              <p class="radioTxt">線上</p>
              <input
                v-model="form.select.value"
                class="t2"
                type="radio"
                value="實體"
              />
              <p class="radioTxt">實體</p>
              <input
                v-model="form.select.value"
                class="t2"
                type="radio"
                value="其他"
              />
              <p class="radioTxt">其他</p>
              <div class="el-form-item__error">{{ form.select.msg }}</div>
            </div>
            <div class="d-flex input-item">
              <label class="l1">課程介紹 </label>
              <input
                type="text"
                class="t1"
                v-model="form.lesdes.value"
                name="getday"
                multiple
                required
              />
              <div class="el-form-item__error">{{ form.lesdes.msg }}</div>
            </div>
            <div class="d-flex input-item">
              <label class="l1">時數與價格</label>
              <input
                v-model="form.time.value"
                class="t2"
                type="radio"
                value="30分鐘"
              />
              <input
                type="text"
                class="t1"
                v-model="form.cost.value"
                placeholder="請輸入價錢"
                required
                autofocus
              />

              <input
                v-model="form.time.value"
                class="t2"
                type="radio"
                value="60分鐘"
              />
              <input
                type="text"
                class="t1"
                v-model="form.cost.value"
                placeholder="請輸入價錢"
                required
                autofocus
              />
              <!-- <p class="radioTxt">
              <span>60分鐘</span>
              <span>NT $ 1000 元</span>
            </p> -->

              <input
                v-model="form.time.value"
                class="t2"
                type="radio"
                value="90分鐘"
              />
              <input
                type="text"
                class="t1"
                v-model="form.cost.value"
                placeholder="請輸入價錢"
                required
                autofocus
              />
              <!-- <p class="radioTxt">
              <span>90分鐘</span>
              <span>NT $ 1500 元</span>
            </p> -->
              <input
                v-model="form.time.value"
                class="t2"
                type="radio"
                value="120分鐘"
              />
              <input
                type="text"
                class="t1"
                v-model="form.cost.value"
                placeholder="請輸入價錢"
                required
                autofocus
              />
              <!-- <p class="radioTxt">
              <span>120分鐘</span>
              <span>NT $ 2000 元</span>
            </p> -->
              <div class="el-form-item__error">{{ form.time.msg }}</div>
              <div class="el-form-item__error">{{ form.cost.msg }}</div>
            </div>

            <!-- <div class="d-flex input-item">
            <label class="l1">課程其他備註</label>
            <input
              type="text"
              class="t1"
              v-model="form.email.value"
              @change="nativeValidate(form, 'email')"
              placeholder="備註"
              multiple
            />
            <div class="el-form-item__error">{{ form.memo.msg }}</div>
          </div> -->
          </div>
        </div>
        <div>
          <button
            class="onsubmit"
            @click.prevent="nativeSubmit"
            :disabled="status"
          >
            確定新增
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reg_phoneType2 } from "../utils/validate";
import { reg_email } from "../utils/validate";
export default {
  name: "InfolProduct",
  components: {},
  data() {
    return {
      remsg: "",
      remsgg: "",
      form: {
        // ID: { value: "", msg: "" }, //訂單編號
        lesson: { value: "", msg: "" }, //課程
        select: ["", "實體", "線上"],
        lesdes: { value: "", msg: "" },
        time: { value: "", msg: "" }, //時數
        cost: { value: "", msg: "" },
        Selectlist: [
          "",
          "八字",
          "人類圖",
          "塔羅占卜",
          "生命靈數",
          "星座命盤",
          "紫微斗數",
        ],
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用
    };
  },
  methods: {
    nativeValidate(target, key) {
      let checkPhone = reg_phoneType2(target.phone.value);
      let checkEmail = reg_email(target.email.value);
      const arr = [checkPhone, checkEmail];

      // 驗證未通過則顯示msg內的訊息
      switch (key) {
        case "phone":
          checkPhone == true
            ? (target.phone.msg = "")
            : (target.phone.msg = "手機號碼格式錯誤或未輸入");
          break;
        case "email":
          checkPhone == true
            ? (target.email.msg = "")
            : (target.email.msg = "信箱號碼格式錯誤或未輸入");
          break;
      }
      // 用find只會撈回符合條件第一個值的特性，任何一個驗證規則沒通過就不能讓送出表單的按鈕被啟用
      let result = arr.find((item) => {
        return item == false; // 尋找array中的false
      });

      // 當滿足所有條件後，result已經找不到false，會返回一個undefined，利用來判別此時要不要啟用Button
      result == undefined
        ? (this.submitDisabled = false)
        : (this.submitDisabled = true);

      console.log("form: ", arr, result);
    },
    nativeSubmit() {
      if (!this.submitDisabled) {
        alert("進入if");
        let chLesson = this.form.lesson.value;
        let chLesDes = this.form.lesdes.value;
        let chSelect = this.form.select.value;
        let chTime = this.form.time.value;
        let chCost = this.form.cost.value;
        let chEmail = this.form.email.value;
        fetch("http://52.139.170.100/api/ReserveList", {
          method: "post",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Lesson: chLesson,
            LesDes: chLesDes,
            Select: chSelect,
            Time: chTime,
            Cost: chCost,
            Email: chEmail,
          }),
        })
          .then(function (response) {
            // alert("Fetch");
            return response.json();
          })
          .then((body) => {
            console.log(body);
            this.remsg = body.Status;
            this.remsgg = body.Msg;
            alert(this.remsg + this.remsgg);
            if (this.remsg != 1) {
              //   alert("失敗");
            } else {
              //   alert("成功");
              localStorage.setItem("token", "ImLogin");
              this.$router.push("/myInfo");
            }
          })
          .catch(function (err) {
            // alert("Fetch失敗");
            console.log(err);
          });

        // 接下來就是進入表單下一步動作，反之阻擋住
      } else {
        // alert("沒進FETCH");
        let chLesson = this.form.lesson.value;
        let chLesDes = this.form.lesdes.value;
        let chSelect = this.form.select.value;
        let chTime = this.form.time.value;
        let chCost = this.form.cost.value;
        let chEmail = this.form.email.value;
        console.log(chLesson);
        console.log(chLesDes);
        console.log(chSelect);
        console.log(chTime);
        console.log(chCost);
        console.log(chEmail);
        console.log("新增失敗");
      }
    },
  },
};
</script>

<style scoped>
* {
  color: gray;
}
.myInfor img {
  border-radius: 50%;
}
.myInfor .pic {
  margin: 40px 0 30px;
}
.inputForm {
  flex-direction: column;
  padding: 40px 90px;
}
.label3 {
  flex-direction: row;
  justify-content: space-evenly;
}
.label1 {
  flex-direction: row;
  justify-content: space-between;
}
.label2 {
  flex-direction: column;
  justify-content: flex-start;
}
.card {
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0 1rem;
}
.outLink {
  padding: 0 80px;
}
.outlink-item {
  margin: 10px 10px 30px;
}
.inforpaper-d,
.inforphone-d {
  justify-content: center;
}
input {
  /* width: 70%; */
  background: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 0 10px 0;
  margin: 20px 0;
}
.t1 {
  width: 78%;
  padding-left: 1rem;
}
.t2 {
  width: 10%;
}
.radioTxt {
  padding: 20px 0 0 0;
}

.l1 {
  width: 100%;

  padding: 5px 10px;
  /* letter-spacing: 1rem; */
  text-align: left;
}

select {
  background: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 0 10px 0;
  margin: 20px 0;
}
.image img {
  width: 100%;
}
.image {
  width: 20%;
  margin: 0 auto 10px;
}
.outLink h3 {
  margin: 30px 0;
}
.infolBtnContent h3 {
  margin: 30px 0 0;
}
.infolBtn button {
  width: 15%;
  height: 40px;
  background: rgba(217, 217, 217, 0.25);
  color: #fff;
  border: none;
  margin: 0 0 10px 10px;
  border-radius: 10px;
}
.infolBtn .infoTxt {
  text-align: left;
  width: 25%;
  padding: 10px 0 0 10px;
}
.infolBtn {
  margin: 30px;
}
.onsubmit {
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  color: #fff;
  margin: auto;
}
.onsubmitcontent {
  background: #000235;
}
.pic {
  display: flex;
}
</style>
