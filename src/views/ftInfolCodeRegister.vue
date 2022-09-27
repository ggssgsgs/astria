<template>
  <div class="pic">
    <img :src="imgsrc" />
  </div>
  <div @click="changepic" class="btn my-3"><h5>選擇圖片</h5></div>
  <div class="card mx-1 mx-md-5">
    <div class="d-flex inputForm">
      <div class="d-flex input-item">
        <label class="l1">姓名 </label>
        <input
          type="text"
          class="t1 text-center"
          v-model="form.name.value"
          :placeholder="this.$store.state.myName"
          required
          autofocus
        />
        <div class="el-form-item__error">{{ form.name.msg }}</div>
      </div>
      <div
        class="d-flex input-item flex-wrap flex-md-nowrap justify-content-between"
      >
        <label class="l1">性別 </label>
        <!-- <input v-model="gender" class="t2" type="radio" value="male" /> -->
        <!-- <p class="radioTxt">Male</p> -->
        <!-- <input v-model="gender" class="t2" type="radio" value="female" /> -->
        <!-- <p class="radioTxt">Female</p> -->
        <!-- <input v-model="gender" class="t2" type="radio" value="others" /> -->
        <!-- <p class="radioTxt">Others</p> -->
        <div class="radio-btns d-flex justify-content-around">
          <input
            v-model="form.gender.value"
            type="radio"
            value="1"
            class="btn-check"
            name="genders"
            id="male"
            autocomplete="off"
          />
          <label class="btn btn-secondary" for="male" @click="changeGender(1)"
            >男性</label
          >
          <input
            v-model="form.gender.value"
            value="2"
            type="radio"
            class="btn-check"
            name="genders"
            id="female"
            autocomplete="off"
          />
          <label class="btn btn-secondary" for="female" @click="changeGender(2)"
            >女性</label
          >
          <input
            v-model="form.gender.value"
            value="0"
            type="radio"
            class="btn-check"
            name="genders"
            id="others"
            autocomplete="off"
          />
          <label class="btn btn-secondary" for="others" @click="changeGender(0)"
            >其他</label
          >
        </div>
        <div class="el-form-item__error">{{ form.gender.msg }}</div>
      </div>
      <div class="d-flex input-item">
        <label class="l1">專長</label>
        <select v-model="form.skill.value" class="t1 text-center" required>
          <option v-if="form.skill.value != null" disabled>請選擇專長</option>
          <option v-for="skill in form.Selectlist" :key="skill" :value="skill">
            {{ skill }}
          </option>
        </select>
      </div>
      <!-- <div class="d-flex input-item">
        <label class="l1">收費</label>
        <select v-model="form.pay.value" class="t1 text-center">
          <option value="" disabled>請選擇收費選項</option>
          <option
            v-for="address in addresslist"
            v-on:change="setplace"
            :key="address"
            :value="address"
          >
            {{ address }}
          </option>
          <option v-for="pay in form.paylist" :key="pay" :value="pay">
            {{ pay }}
          </option>
        </select>
      </div> -->
      <div class="d-flex input-item">
        <label class="l1">居住地</label>
        <select v-model="form.address.value" class="t1 text-center" required>
          <option value="" disabled>請選擇居住地</option>
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
      <div class="d-flex input-item">
        <label class="l1">電話號碼</label>
        <input
          type="text"
          class="t1 text-center"
          v-model="form.phone.value"
          @change="nativeValidate(form, 'phone')"
          placeholder="請輸入電話"
          required
        />
        <div class="el-form-item__error">{{ form.phone.msg }}</div>
      </div>
      <div class="d-flex input-item flex-wrap flex-md-nowrap">
        <label class="l1">商店簡介</label>
        <textarea
          class="my-4"
          v-model="form.textmsg.value"
          cols="50"
          rows="10"
          required
        ></textarea>
      </div>
    </div>
  </div>
  <!-- <div class="card outLink mx-1 mx-md-5">
    <h3>快速登入</h3>
    <div class="d-flex outLink-d">
      <div class="outlink-item">
        <span
          ><div class="image">
            <img src="../assets/img/icons/google.png" alt="google" /></div
        ></span>
        <p>綁定成功</p>
      </div>
      <div class="outlink-item">
        <span
          ><div class="image">
            <img src="../assets/img/icons/facebook.png" alt="google" /></div
        ></span>
        <p>綁定成功</p>
      </div>
    </div>
  </div>
  <div class="card infolBtnContent mx-1 mx-md-5">
    <h3>推播通知設定</h3>
    <div class="infolBtn">
      <div class="d-flex inforpaper-d flex-wrap flex-md-nowrap">
        <div class="d-flex">
          <div class="btn">願意</div>
          <div class="btn">不願意</div>
        </div>

        <p class="infoTxt">收到Astria藏星電子報</p>
      </div>
      <div class="d-flex inforphone-d flex-wrap flex-md-nowrap">
        <div class="d-flex">
          <div class="btn">願意</div>
          <div class="btn">不願意</div>
        </div>

        <p class="infoTxt">收到Astria藏星電話通知</p>
      </div>
    </div>
  </div> -->
  <div class="card onsubmitcontent mx-1 mx-md-5">
    <button
      class="onsubmit btn"
      @click.prevent="nativeSubmit"
      :disabled="status"
    >
      <h5>註冊成為占星師</h5>
    </button>
  </div>
</template>

<script>
import google from "../assets/img/icons/google.png";
import {reg_phoneType2} from "../utils/validate";
export default {
  name: "InfolCode",
  components: {
    google,
  },
  computed: {
    gender() {
      if (this.$store.state.myGender == 1) {
        return "male";
      } else if (this.$store.state.myGender == 2) {
        return "female";
      } else if (this.$store.state.myGender == 0) {
        return "others";
      }
    },
  },
  data() {
    return {
      i: 0,
      imgsrc2: "require('../assets/img/icons/facebook.png')",
      imgsrc: "https://picsum.photos/200/200?",
      imgsrc1:
        "http://photos1.blogger.com/blogger/6857/1451/320/James.Pond.1.jpg",
      remsg: "",
      remsgg: "",
      form: {
        name: {value: this.$store.state.myProName, msg: ""},
        gender: {value: this.$store.state.myGender, msg: ""},
        skill: {value: this.$store.state.mySkill, msg: ""},
        Selectlist: [
          "八字",
          "人類圖",
          "塔羅占卜",
          "生命靈數",
          "星座命盤",
          "紫微斗數",
          "星盤",
        ],
        address: {value: this.$store.state.myAddress, msg: ""},
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
        // pay: {value: "", msg: ""},
        //paylist: ["", "500", "1000", "1500", "2000"],
        phone: {value: this.$store.state.myProPhone, msg: ""},
        email: {value: this.$store.state.myEmail, msg: ""},
        textmsg: {value: this.$store.state.myExperience},
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用 // 粲淵改成false 否則依定需要更改電話號碼才能送
    };
  },
  methods: {
    changeGender(sexNum) {
      this.$store.state.myGender = sexNum;
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
    nativeSubmit() {
      if (!this.submitDisabled) {
        alert("進入if");

        // let chName = this.form.name.value;
        // let chGender = this.form.gender.value;
        // let chDate = this.form.date.value;
        // let chTime = this.form.time.value;
        // let chadress = this.form.address.value;
        // let chPhone = this.form.phone.value;
        // let chEmail = this.form.email.value;
        // let formdata = new FormData();
        // formdata.append("Email", chEmail);
        // formdata.append("Name", chName);
        // formdata.append("Sex", chGender);
        // formdata.append("Birth", chDate);
        // formdata.append("BirthTime", chTime);
        // formdata.append("BirthPlace", chadress);
        // formdata.append("Phone", chPhone);
        // let requestOptions = {
        //   method: "POST",
        //   body: formdata,
        //   redirect: "follow",

        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chSelect = this.form.skill.value;
        let chAddress = this.form.address.value;
        // let chpay = this.form.pay.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;
        let chtextmsg = this.form.textmsg.value;

        let formdata = new FormData();
        formdata.append("Name", chName);
        formdata.append("Sex", chGender);
        formdata.append("Experience", chtextmsg);
        formdata.append("Select", chSelect);
        formdata.append("Phone", chPhone);
        formdata.append("Address", chAddress);
        formdata.append("Email", chEmail);
        formdata.append("Photo", this.$store.state.myPhoto);

        let requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        console.log(chName);
        console.log(chGender);
        console.log(chSelect);
        console.log(chAddress);
        // console.log(chpay);
        console.log(chPhone);
        console.log(chEmail);
        console.log(chtextmsg);
        console.log(this.$store.state.myPhoto);

        fetch(
          "https://astria.sutsanyuan.com/Astria_api/AdvSignup",
          requestOptions
        )
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
              localStorage.setItem("isPro", "True");
            }
          })
          .catch(function (err) {
            // alert("Fetch失敗");
            console.log(err);
          });

        // 接下來就是進入表單下一步動作，反之阻擋住
      } else {
        alert("沒進FETCH");
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chSelect = this.form.skill.value;
        let chAddress = this.form.address.value;
        // let chpay =this.form.pay.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;
        let chtextmsg = this.form.textmsg.value;

        console.log(chName);
        console.log(chGender);
        console.log(chSelect);
        console.log(chAddress);
        console.log(chPhone);
        console.log(chEmail);
        console.log(chtextmsg);
      }
    },
  },
};
</script>

<style scoped>
* {
  color: gray;
}

.card {
  background: #dadada !important;
  border: none;
  margin: 0 0 0.5rem;
}
.myInfo img {
  border-radius: 50%;
}
.myInfo .pic {
  margin: 40px 0 30px;
}
.inputForm {
  flex-direction: column;
  padding: 40px 100px;
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
  width: 76%;
  padding-left: 1rem;
}
.t2 {
  width: 10%;
}
.radioTxt {
  padding: 20px 0 0 0;
}

.l1 {
  margin: auto 0;
  width: 150px;
  padding: auto 0;
  letter-spacing: 0.5rem;
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
  margin: 10px auto;
}
.outLink h3 {
  margin: 30px 0;
}
.infolBtnContent h3 {
  margin: 30px 0 0;
}
.infolBtn .btn {
  width: 100px;
  height: 40px;
  /* background: rgba(217, 217, 217, 0.25); */
  color: #fff;
  border: none;
  margin: 0 0 10px 10px;
  border-radius: 10px;
}
.infolBtn .infoTxt {
  text-align: left;
  width: 200px;
  padding: 10px 0 0 10px;
}
.infolBtn {
  margin: 30px;
}
.onsubmit {
  width: 200px;

  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  color: #fff;
  margin: 10px auto;
}

.btn {
  width: 200px;

  border-radius: 10px;
  background: #999;
  color: #fff;
  border: none;
}

.btn h5 {
  color: #fff;
}
.btn:hover {
  background: #555;
  border: none;
}
.radio-btns .btn {
  width: 80px;
  margin: 0px 10px;
  /* padding-top: 10px; */
}

.onsubmitcontent {
  background: #000235;
}
h5 {
  margin: 0;
}

textarea {
  border: none;
}

@media screen and (max-width: 555px) {
  /* .btn {
    width: 25vw;
  } */
  .image {
    width: 10vw;
    margin: 10px auto;
  }
  .radio-btns {
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    /* justify-content: flex-start !important; */
    flex-wrap: wrap;
  }
  .radio-btns .btn {
    width: 70px;
    margin: 0px 5px;
  }
  .inputForm {
    flex-direction: column;
    padding: 20px 10vw;
  }
  .l1 {
    width: 150px;
    padding: auto 0;
    letter-spacing: 0.2rem;
    text-align: left;
  }
}
</style>
