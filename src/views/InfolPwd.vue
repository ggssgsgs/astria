<template>
  <div class="card infoContaint">
    <div class="d-flex inputForm">
      <h3>修改密碼</h3>
      <div class="d-flex input-item">
        <label for="">電子郵件</label>
        <input
          type="text"
          v-model="user.username.value"
          placeholder="EMAIL"
          @change="nativeValidate(user, 'username'), pushStore"
          autofocus
        />
        <div class="el-form-item__error">{{ user.username.msg }}</div>
      </div>
      <div class="d-flex input-item">
        <label for="">原本密碼</label>
        <input
          type="password"
          v-model="user.password.value"
          @change="nativeValidate(user, 'password')"
          placeholder="(字母開頭含數字、6~18碼)"
        />
        <div class="el-form-item__error">{{ user.password.msg }}</div>
      </div>
      <div class="d-flex input-item">
        <label for="">更新密碼</label>
        <input
          type="password"
          v-model="user.repassword.value"
          @change="nativeValidate(user, 'repassword')"
          placeholder="(字母開頭含數字、6~18碼)"
        />

        <div class="el-form-item__error">{{ user.repassword.msg }}</div>
      </div>
    </div>
  </div>
  <div class="card onsubmitcontent">
    <button class="onsubmit" @click.prevent="nativeSubmit" :disabled="status">
      更新
    </button>
  </div>
</template>
<script>
import { reg_pwdCommon, reg_email } from "../utils/validate";
export default {
  name: "InfolPwd",
  data() {
    return {
      resingupmsg: "",
      user: {
        username: { value: "", msg: "" },
        password: { value: "", msg: "" },
        repassword: { value: "", msg: "" },
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用
    };
  },
  methods: {
    nativeValidate(target, key) {
      let checkEmail = reg_email(target.username.value);
      let checkPassword = reg_pwdCommon(target.password.value);
      let checkRePassword = reg_pwdCommon(target.repassword.value);
      const arr = [checkEmail, checkPassword, checkRePassword];

      // 驗證未通過則顯示msg內的訊息
      switch (key) {
        case "username":
          checkEmail == true
            ? (target.username.msg = "")
            : (target.username.msg = "Email格式錯誤或未輸入");
          break;
        case "password":
          checkPassword == true
            ? (target.password.msg = "")
            : (target.password.msg = "密碼格式錯誤或未輸入");
          break;
        case "repassword":
          checkRePassword == true
            ? (target.repassword.msg = "")
            : (target.repassword.msg = "密碼格式錯誤或未輸入");
          break;
      }
      // 用find只會撈回符合條件第一個值的特性，任何一個驗證規則沒通過就不能讓送出表單的按鈕被啟用
      let result = arr.find((item) => {
        return item == false; //尋找array中的false
      });

      // 當滿足所有條件後，result已經找不到false，會返回一個undefined，利用來判別此時要不要啟用Button

      result == undefined
        ? (this.submitDisabled = false)
        : (this.submitDisabled = true);

      console.log("form: ", arr, result);
    },
    nativeSubmit() {
      if (!this.submitDisabled) {
        let ckemail = this.user.username.value;
        let chpwd = this.user.password.value;
        let chrepwd = this.user.repassword.value;
        fetch("http://52.139.170.100/api/MemRePWD", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Email: ckemail,
            Password: chpwd,
            RePassword: chrepwd,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then((body) => {
            console.log(body);
            this.resingupmsg = body.Status;

            if (this.resingupmsg == "1") {
              console.log(this.resingupmsg);
              this.user.username = "";
              this.user.password = "";
              this.user.repassword = "";
              console.log("密碼更新成功");
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      } else {
        console.log("密碼更新失敗");
      }
    },
  },
};
</script>

<style scoped>
.infoContaint {
  height: 500px;
}
.inputForm {
  flex-direction: column;
  padding: 100px 90px;
}
.card {
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0 1rem;
}

input {
  width: 78%;
  background: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  padding: 0 20px 0;
  margin: 20px 0;
}
label {
  width: 22%;
  padding: 20px 0 0;
  letter-spacing: 1rem;
  text-align: left;
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
h3{
  margin-bottom: 10px;
}
</style>
