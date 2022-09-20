<template>
  <div class="pic">
    <img :src="imgsrc">
  </div>

  <div class="card">
    <div class="d-flex inputForm">
      <div class="d-flex input-item">
        <label class="l1">商店名稱</label>
        <input
          type="text"
          class="t1"
          v-model="form.name.value"
          placeholder="請輸入商店名稱"
          required
          autofocus
        />
        <div class="el-form-item__error">{{ form.name.msg }}</div>
      </div>
      <div class="d-flex input-item">
        <label class="l1">性別 </label>
        <input
          v-model="form.gender.value"
          class="t2"
          type="radio"
          value="male"
        />
        <p class="radioTxt">Male</p>
        <input
          v-model="form.gender.value"
          class="t2"
          type="radio"
          value="female"
        />
        <p class="radioTxt">Female</p>
        <input
          v-model="form.gender.value"
          class="t2"
          type="radio"
          value="others"
        />
        <p class="radioTxt">Others</p>
        <div class="el-form-item__error">{{ form.gender.msg }}</div>
      </div>
      <div class="d-flex input-item">
        <label class="l1">專長</label>
        <select v-model="form.skill.value" class="t1">
          <option value="" disabled>請選擇專長</option>
          <option v-for="skill in form.Selectlist" :key="skill" :value="skill">
            {{ skill }}
          </option>
        </select>
      </div>
      <div class="d-flex input-item">
        <label class="l1">收費</label>
        <select v-model="form.pay.value" class="t1">
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
      </div>
      <div class="d-flex input-item">
        <label class="l1">服務地</label>
        <select v-model="form.address.value" class="t1">
          <option value="" disabled>請選擇服務地</option>
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
          class="t1"
          v-model="form.phone.value"
          @change="nativeValidate(form, 'phone')"
          placeholder="請輸入電話"
          required
        />
        <div class="el-form-item__error">{{ form.phone.msg }}</div>
      </div>
      <div class="d-flex input-item">
        <label class="l1">商店簡介</label>
        <textarea v-model="form.textmsg.value" cols="50" rows="10"></textarea>
      </div>
    </div>
  </div>
  <div class="card outLink">
    <h3>快速登入</h3>
    <div class="d-flex outLink-d">
      <div class="outlink-item">
        <span
          ><div class="image">
            <img src="../assets/img/icons/google.png" alt="google" /></div
        ></span>
        <P>綁定成功</P>
      </div>
      <div class="outlink-item">
        <span
          ><div class="image">
            <img src="../assets/img/icons/facebook.png" alt="google" /></div
        ></span>
        <P>綁定成功</P>
      </div>
    </div>
  </div>
  <div class="card infolBtnContent">
    <h3>推播通知設定</h3>
    <div class="infolBtn">
      <div class="d-flex inforpaper-d">
        <button>願意</button>
        <button>不願意</button>
        <p class="infoTxt">收到Astria藏星電子報</p>
      </div>
      <div class="d-flex inforphone-d">
        <button>願意</button>
        <button>不願意</button>
        <p class="infoTxt">收到Astria藏星電話通知</p>
      </div>
    </div>
  </div>
  <duv class="card onsubmitcontent">
    <button class="onsubmit" @click.prevent="nativeSubmit" :disabled="status">
      送出
    </button>
  </duv>
</template>

<script>
import google from "../assets/img/icons/google.png";
import { reg_phoneType2 } from "../utils/validate";
export default {
  name: "InfolCode",
  components: {
    google,
  },
  data() {
    return {
      i: 0,
      imgsrc2:"require('../assets/img/icons/facebook.png')",
      imgsrc: "https://picsum.photos/200/200?",
      imgsrc1:
        "http://photos1.blogger.com/blogger/6857/1451/320/James.Pond.1.jpg",
      remsg: "",
      remsgg: "",
      form: {
        name: { value: "", msg: "" },
        gender: { value: "male", msg: "" },
        skill: { value: "", msg: "" },
        Selectlist: [
          "",
          "八字",
          "人類圖",
          "塔羅占卜",
          "生命靈數",
          "星座命盤",
          "紫微斗數",
        ],
        address: { value: "", msg: "" },
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
        pay: { value: "", msg: "" },
        paylist: ["", "500", "1000", "1500", "2000"],
        phone: { value: "", msg: "" },
        email: { value: "aa@gmail.com", msg: "" },
        textmsg: { value: "" },
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用
    };
  },
  methods: {
    
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
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chSelect = this.form.skill.value;
        let chadress = this.form.address.value;
        let chpay = this.form.pay.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;
        let chtextmsg = this.form.textmsg.value;

        console.log(chName);
        console.log(chGender);
        console.log(chSelect);
        console.log(chadress);
        console.log(chpay);
        console.log(chPhone);
        console.log(chEmail);
        console.log(chtextmsg);

        fetch("http://52.139.170.100/api/ProInfo", {
          method: "post",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Name: chName,
            Sex: chGender,
            Experience: chtextmsg,
            Select: chSelect,
            Cost: chpay,
            Phone: chPhone,
            Email: chEmail,
            Address: chadress,
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
        alert("沒進FETCH");
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chSelect = this.form.skill.value;
        let chadress = this.form.address.value;
        // let chpay =this.form.pay.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;
        let chtextmsg = this.form.textmsg.value;

        console.log(chName);
        console.log(chGender);
        console.log(chSelect);
        console.log(chadress);
        console.log(chPhone);
        console.log(chEmail);
        console.log(chtextmsg);
      }
    },
  },
};
</script>

<style scoped>
.myInfor img {
  border-radius: 50%;
}
.myInfor .pic {
  margin: 40px 0 30px;
}
.inputForm {
  flex-direction: column;
  padding: 40px 100px;
}
.card {
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0 0.5rem;
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
  width: 20%;
  padding: 20px 0 0;
  letter-spacing: 1rem;
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
textarea {
  width: 75%;
  background: rgba(217, 217, 217, 0.25);
  border: none;
  margin-top: 2 0px;
}
@media screen and (min-width: 992px) {
}
</style>
