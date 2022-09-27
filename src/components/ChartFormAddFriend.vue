<template>
  <div class="container m-auto mt-5 d-flex justify-content-center">
    <div class="row align-items-center justify-content-center w-100">
      <div
        class="block col-12 col-md-8 d-flex flex-column align-items-center justify-content-center"
      >
        <h1 class="my-5 align-self-center">新增好友</h1>

        <!--不使用element UI 內建驗證的表單-->

        <form class="d-flex flex-column w-md-75 fs-4">
          <div class="w-100 d-flex my-3">
            <span class="flex-shrink-1 px-3 px-md-4 ps-0">姓名</span>
            <input
              class="input-style flex-fill"
              type="text"
              v-model="form.name.value"
              placeholder="請輸入姓名"
              required
            />
          </div>
          <div class="el-form-item__error">{{ form.name.msg }}</div>

          <!-- <div class="w-100 d-flex my-3">
            <span class="flex-shrink-1 px-3 px-md-4 ps-0">性別</span>
            <div class="radio-btns flex-fill d-flex justify-content-around">
              <input
                v-model="form.gender.value"
                type="radio"
                value="male"
                class="btn-check"
                name="genders"
                id="male"
                autocomplete="off"
              />
              <label class="btn btn-secondary btn-lg" for="male">男性</label>
              <input
                v-model="form.gender.value"
                value="female"
                type="radio"
                class="btn-check"
                name="genders"
                id="female"
                autocomplete="off"
              />
              <label class="btn btn-secondary btn-lg" for="female">女性</label>
              <input
                v-model="form.gender.value"
                value="others"
                type="radio"
                class="btn-check"
                name="genders"
                id="others"
                autocomplete="off"
              />
              <label class="btn btn-secondary btn-lg" for="others">其他</label>
            </div>
          </div> -->
          <!-- <div class="el-form-item__error">{{ form.gender.msg }}</div> -->
          <div class="w-100 d-flex my-3">
            <span class="flex-shrink-1 px-3 px-md-4 ps-0">出生日期</span>
            <input
              class="input-style flex-fill"
              type="date"
              v-model="form.date.value"
              name="getday"
              required
            />
            <div class="el-form-item__error">{{ form.date.msg }}</div>
          </div>
          <div class="w-100 d-flex my-3">
            <span class="flex-shrink-1 px-3 px-md-4 ps-0">出生時間</span>
            <input
              class="input-style flex-fill"
              type="time"
              v-model="form.time.value"
              name="gettime"
              required
            />
            <div class="el-form-item__error">{{ form.time.msg }}</div>
          </div>
          <div class="w-100 d-flex my-3">
            <span class="flex-shrink-1 px-3 px-md-4 ps-0">出生地點</span>
            <select class="input-style flex-fill" v-model="form.address.value">
              <option value="" disabled>-- 請選擇出生地 --</option>
              <!--<option v-for="address in addresslist" v-on:change="setplace" :key="address" :value="address">{{address}}</option>-->
              <option
                v-for="address in form.addresslist"
                :key="address"
                :value="address"
              >
                {{ address }}
              </option>
            </select>
          </div>
          <!-- <div for=""
        >電話:
        <input
          type="text"
          v-model="form.phone.value"
          @change="nativeValidate(form, 'phone')"
          placeholder="請輸入電話"
          required
        />
        <div class="el-form-item__error">{{ form.phone.msg }}</div>
      </div> -->
        </form>
        <div class="my-5 mx-auto">
          <button
            @click="submitData"
            class="btn btn-lg btn-customized btn-secondary"
          >
            新增好友星盤
          </button>
          <!-- 需要先做停止瀏覽器預設行為 -->
          <!-- <button @click.prevent="nativeSubmit" :disabled="status">送出</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {reg_phoneType2} from "../utils/validate";
import {useStore} from "vuex";

//import sweetalert
import Swal from "sweetalert2";

import logo from "../assets/img/LOGO.png";

export default {
  setup() {
    const store = useStore();

    return {};
  },
  mounted() {
    this.form.email.value = localStorage.getItem("myemail");
    // console.log(localStorage.getItem('myemail'));
  },
  data() {
    return {
      remsg: "",
      remsgg: "",
      form: {
        name: {value: "", msg: ""},
        gender: {value: "male", msg: ""},
        date: {value: "1990-01-01", msg: ""},
        time: {value: "12:00", msg: ""},
        address: {value: "", msg: ""},
        addresslist: [
          "台北市",
          "新北市",
          "基隆市",
          "桃園市",
          "新竹市",
          "新竹縣",
          "苗栗縣",
          "台中市",
          "彰化縣",
          "南投縣",
          "雲林縣",
          "嘉義市",
          "嘉義縣",
          "台南市",
          "高雄市",
          "屏東縣",
          "宜蘭縣",
          "花蓮縣",
          "台東縣",
          "澎湖縣",
          "金門縣",
          "馬祖縣",
        ],
        phone: {value: "", msg: ""},
        email: {value: ""},
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用
    };
  },
  methods: {
    submitData() {
      if (
        this.form.name.value != "" &&
        this.form.date.value != "" &&
        this.form.time.value != "" &&
        this.form.address.value != ""
      ) {
        this.$store.commit("setCurrentData", {
          name: this.form.name.value,
          birthday: this.form.date.value,
          birthTime: this.form.time.value,
          location: this.form.address.value,
        });
        this.$store.commit("setCurrentUTCtime");

        this.$store.dispatch("addFriend", {
          email: localStorage.getItem("myemail"),
          name: this.form.name.value,
          birthday: this.form.date.value,
          birthTime: this.form.time.value,
          birthPlace: this.form.address.value,
        });

        this.$router.push("/currentChart");
      } else {
        Swal.fire({
          title: "缺一不可！",
          text: "請輸入完整資料",
          // icon: "warning",
          iconColor: "rgba(0,2,53,0.3)",
          showCancelButton: false,
          confirmButtonColor: "rgba(0,2,53,0.5)",
          //cancelButtonColor: "rgba(0,2,53,0.5)",
          confirmButtonText: "繼續輸入",
          allowOutsideClick: false,
          imageUrl: logo,
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "Astria Logo",
        }).then((result) => {
          if (result.isConfirmed) {
            //this.$router.push("/logIn");
          }
        });
      }
    },
    nativeValidate(target, key) {
      let checkPhone = reg_phoneType2(target.phone.value);
      const arr = [checkPhone];
      // 驗證未通過則顯示msg內的訊息
      switch (key) {
        case "phone":
          checkPhone == true
            ? (target.phone.msg = "")
            : (target.phone.msg = "手機號碼格式錯誤或未輸入");
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
    // nativeSubmit() {
    //   if (!this.submitDisabled) {
    //     alert("進入if");
    //     let chName = this.form.name.value;
    //     let chGender = this.form.gender.value;
    //     let chDate = this.form.date.value;
    //     let chTime = this.form.time.value;
    //     let chadress = this.form.address.value;
    //     let chPhone = this.form.phone.value;
    //     let chEmail = this.form.email.value;
    //     fetch("http://52.139.170.100/api/secondsignup", {
    //       method: "post",
    //       headers: {
    //         "Content-Type": "application/json;charset =utf-8",
    //       },
    //       body: JSON.stringify({
    //         Name: chName,
    //         Sex: chGender,
    //         Birth: chDate,
    //         BirthTime: chTime,
    //         BirthPlace: chadress,
    //         Phone: chPhone,
    //         Email: chEmail,
    //       }),
    //     })
    //       .then(function (response) {
    //         alert("Fetch");
    //         return response.json();
    //       })
    //       .then((body) => {
    //         console.log(body);
    //         this.remsg = body.Status;
    //         this.remsgg = body.Msg;
    //         alert(this.remsg + this.remsgg);
    //         if (this.remsg != 1) {
    //           alert("失敗");
    //         } else {
    //           alert("成功");
    //           localStorage.setItem("token", "ImLogin");
    //           localStorage.removeItem("myemail");
    //           this.$router.push("/");
    //         }
    //       })
    //       .catch(function (err) {
    //         alert("Fetch失敗");
    //         console.log(err);
    //       });
    //     // 接下來就是進入表單下一步動作，反之阻擋住
    //   } else {
    //     alert("沒進FETCH");
    //     let chName = this.form.name.value;
    //     let chGender = this.form.gender.value;
    //     let chDate = this.form.date.value;
    //     let chTime = this.form.time.value;
    //     let chadress = this.form.address.value;
    //     let chPhone = this.form.phone.value;
    //     let chEmail = this.form.email.value;
    //     console.log(chName);
    //     console.log(chGender);
    //     console.log(chDate);
    //     console.log(chTime);
    //     console.log(chadress);
    //     console.log(chPhone);
    //     console.log(chEmail);
    //     console.log("表單註冊失敗");
    //   }
    // },
  },
};
</script>

<style scoped>
/* .page {
  text-align: center;
} */

.block {
  padding: 30px;
  /* height: 200px; */
  border-radius: 5px;
  background-color: #36385e;
}
.input-style {
  text-decoration: none;
  background: transparent;
  border-style: none;
  border-bottom: solid white 0.5px;
  /* width: 75%; */
  text-align: center;
}
.btn-customized {
  font-size: 24px;
  padding: 15px 25px;
}

@media screen and (max-width: 400px) {
  .radio-btns .btn {
    padding: 10px;
  }
}
</style>
