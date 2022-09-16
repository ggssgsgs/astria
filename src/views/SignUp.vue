<template>
  <div class="singup-containt">
    <div class="singup-button">
      <button @click="fbsingup">FACEBOOK</button>
      <button @click="googlesingup">GOOGLE</button>
    </div>

    <p><span></span>或是用信箱登入<span></span></p>

    <form class="singup-form" action="">
      <input
        type="text"
        v-model="user.username.value"
        placeholder="EMAIL"
        @change="nativeValidate(user, 'username')"
        autofocus
      />
      <div class="el-form-item__error">{{ user.username.msg }}</div>

      <input
        type="password"
        v-model="user.password.value"
        @change="nativeValidate(user, 'password')"
        placeholder="密碼(含數字、字母、下底線，6~18碼)"
      />
      <div class="el-form-item__error">{{ user.password.msg }}</div>

      <input
        type="password"
        v-model="user.repassword.value"
        @change="nativeValidate(user, 'repassword')"
        placeholder="密碼確認(含數字、字母、下底線，6~18碼)"
      />
      <div class="el-form-item__error">{{ user.repassword.msg }}</div>
      <input
        type="text"
        v-model="user.code.value"
        placeholder="輸入驗證碼"
        required
      />
    </form>
    <button class="singupcode-submit" @click="onChange">{{ message }}</button>
    <br />
    <button class="singup-submit" @click="nativeSubmit" :disabled="status">
      註冊
    </button>
    <p><router-link to="/signUpForm">表單</router-link></p>
  </div>
</template>
<script>
import {reg_pwdCommon, reg_email} from "../utils/validate";
export default {
  data() {
    return {
      message: "送出驗證碼",
      remsg: "",
      retime: "",
      reMsgg: "",
      resingupmsg: "",
      user: {
        username: {value: "", msg: ""},
        password: {value: "", msg: ""},
        repassword: {value: "", msg: ""},
        code: {value: "", msg: ""},
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
        if (this.user.password.value == this.user.repassword.value) {
          let ckemail = this.user.username.value;
          let chpwd = this.user.password.value;
          let chCode = this.user.code.value;
          console.log(ckemail);
          console.log(chpwd);
          fetch("http://52.139.170.100/api/basicsignup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset =utf-8",
            },
            body: JSON.stringify({
              Email: ckemail,
              Password: chpwd,
              Code: chCode,
            }),
          })
            .then(function (response) {
              return response.json();
            })
            .then((body) => {
              console.log(body);
              this.resingupmsg = body.Status;
              if (this.resingupmsg == "1" && this.remsg == "1") {
                this.$router.push("/signUpForm");
                console.log("註冊成功");
              }
            })
            .catch(function (err) {
              console.log(err);
            });
        }
      } else {
        console.log("註冊失敗");
      }
    },
    onChange() {
      let ckemail = this.user.username.value;
      let chpwd = this.user.password.value;
      console.log(ckemail);
      console.log(chpwd);
      fetch("http://52.139.170.100/api/Confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset =utf-8",
        },
        body: JSON.stringify({
          Email: ckemail,
          Password: chpwd,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then((body) => {
          console.log(body);
          this.remsg = body.Status;
          this.retime = body.RemainingSec;
          this.reMsgg = body.Msg;
          if (this.remsg == "1" && this.retime == "0") {
            this.message = "已傳送驗證碼";
          } else if (this.remsg == "5" || this.remsg == "4") {
            this.message = `驗證碼傳送錯誤(${this.reMsgg})`;
          } else {
            this.message = `送出驗證碼(請於${this.retime}秒後再送出)`;
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },

    fbsingup() {
      this.$router.push("/");
    },
    googlesingup() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.singup-containt {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  text-align: center;
}
.singup-button {
  margin: 20px;
}
.singup-button button {
  width: 7.5%;
  margin: 20px 20px 0px 20px;
}
.singup-form {
  width: 18%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
input {
  margin: 10px;
}
.singupcode-submit {
  margin-top: 20px;
  width: 17%;
}
.singup-submit {
  margin-top: 20px;
  width: 17%;
}
</style>
