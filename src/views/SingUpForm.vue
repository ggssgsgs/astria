<template>
  <div class="page">
    <h1>基本資料</h1>
    <br />
    <!--不使用element UI 內建驗證的表單-->

    <form>
      <label for=""
        >姓名:
        <input
          type="text"
          v-model="form.name.value"
          placeholder="請輸入姓名"
          required
          autofocus
        />
        <div class="el-form-item__error">{{ form.name.msg }}</div>
      </label>
      <label for=""
        >性別:
        <input v-model="form.gender.value" type="radio" value="male" />Male
        <input v-model="form.gender.value" type="radio" value="female" />Female
        <input v-model="form.gender.value" type="radio" value="others" />Others
        <div class="el-form-item__error">{{ form.gender.msg }}</div>
      </label>
      <label for=""
        >生日:
        <input type="date" v-model="form.date.value" name="getday" required />
        <div class="el-form-item__error">{{ form.date.msg }}</div>
      </label>
      <label for=""
        >出生時間:
        <input type="time" v-model="form.time.value" name="gettime" required />
        <div class="el-form-item__error">{{ form.time.msg }}</div>
      </label>
      <label for=""
        >出生地:
        <select v-model="form.address.value">
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
      </label>
      <label for=""
        >電話:
        <input
          type="text"
          v-model="form.phone.value"
          @change="nativeValidate(form, 'phone')"
          placeholder="請輸入電話"
          required
        />
        <div class="el-form-item__error">{{ form.phone.msg }}</div>
      </label>
      <label for=""
        >電子郵件:
        <input
          type="text"
          v-model="form.email.value"
          @change="nativeValidate(form, 'email')"
          placeholder="請輸入Email"
          required
        />
        
        <div class="el-form-item__error">{{ form.email.msg }}</div>
      </label>

      <div>
        <!-- 需要先做停止瀏覽器預設行為 -->
        <button @click.prevent="nativeSubmit" :disabled="status">送出</button>
      </div>
    </form>
  </div>
</template>
<script>
import { reg_phoneType2 } from "../utils/validate";
import { reg_email } from "../utils/validate";
export default {
  data() {
    return {
      remsg: "",
      remsgg: "",
      form: {
        name: { value: "", msg: "" },
        gender: { value: "male", msg: "" },
        date: { value: "", msg: "" },
        time: { value: "", msg: "" },
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
        phone: { value: "", msg: "" },
        email: { value: "", msg: "" },
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
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chDate = this.form.date.value;
        let chTime = this.form.time.value;
        let chadress = this.form.address.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;

        fetch("http://52.139.170.100/api/secondsignup", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Name: chName,
            Sex: chGender,
            Birth: chDate,
            BirthTime: chTime,
            BirthPlace: chadress,
            Phone: chPhone,
            Email: chEmail,
          }),
        })
          .then(function (response) {
            alert("Fetch");
            return response.json();
          })
          .then((body) => {
            console.log(body);
            this.remsg = body.Status;
            this.remsgg = body.Msg;
            alert(this.remsg + this.remsgg);
            if (this.remsg != 1) {
              alert("失敗");
            } else {
              alert("成功");
              localStorage.setItem("token", "ImLogin");
              this.$router.push("/");
            }
          })
          .catch(function (err) {
            alert("Fetch失敗");
            console.log(err);
          });
       

        // 接下來就是進入表單下一步動作，反之阻擋住
      } else {
        alert("沒進FETCH");
        let chName = this.form.name.value;
        let chGender = this.form.gender.value;
        let chDate = this.form.date.value;
        let chTime = this.form.time.value;
        let chadress = this.form.address.value;
        let chPhone = this.form.phone.value;
        let chEmail = this.form.email.value;
        console.log(chName);
        console.log(chGender);
        console.log(chDate);
        console.log(chTime);
        console.log(chadress);
        console.log(chPhone);
        console.log(chEmail);
        console.log("表單註冊失敗");
      }
    },
  },
};
</script>

<style scoped>
.page {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
input {
  margin: 15px;
}
</style>