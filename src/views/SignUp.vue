<template>
  <div class="BG">
    <div class="container-xl my-5">
      <div class="singup-containt">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-4">
            <div class="card pic">
              <img src="../assets/img/LoginLogo.png" alt="logo" />
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <div class="card singup-form">
              <h2>{{ msg1 }}</h2>
              <input
                type="text"
                v-model="user.username.value"
                placeholder="EMAIL"
                @change="nativeValidate(user, 'username'), pushStore"
                autofocus
              />
              <div class="el-form-item__error">{{ user.username.msg }}</div>

              <input
                type="password"
                v-model="user.password.value"
                @change="nativeValidate(user, 'password')"
                placeholder="密碼(字母開頭含數字、6~18碼)"
              />
              <div class="el-form-item__error">{{ user.password.msg }}</div>

              <input
                type="password"
                v-model="user.repassword.value"
                @change="nativeValidate(user, 'repassword')"
                placeholder="密碼確認(字母開頭含數字、6~18碼)"
              />
              <div class="el-form-item__error">{{ user.repassword.msg }}</div>
              <div class="d-flex login-bottom-containt">
                <button class="singupcode-submit m-2" @click="onChange">
                  <h5>{{ message }}</h5>
                </button>

                <input
                  type="text"
                  v-model="user.code.value"
                  placeholder="輸入驗證碼"
                  required
                />

                <button
                  class="singup-submit m-2"
                  @click="nativeSubmit"
                  :disabled="status"
                >
                  <h5>註冊</h5>
                </button>
              </div>
              <div class="d-flex txt">
                <div class="sign-up d-flex justify-content-between">
                  <span class="h5 m-4">已經是會員</span>
                  <span class="t1 h5 m-4" @click="loginTo">立即登入</span>
                </div>
                <div class="outlink">
                  <hr />
                  <p><span>或請使用以下方式登入</span></p>
                  <div class="d-flex img-d">
                    <div class="image" @click="fbsingup">
                      <img src="../assets/img/icons/google.png" alt="google" />
                    </div>
                    <div class="image" @click="googlesingup">
                      <img
                        src="../assets/img/icons/facebook.png"
                        alt="facebook"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {reg_pwdCommon, reg_email} from "../utils/validate";
import SketchMain from "../components/P5CanvasKeyVision_half.vue";
import imgUrl from "../assets/img/starHolder.png";
import imgUrl2 from "../assets/img/0728.jpg";

export default {
  data() {
    return {
      sketchData: {
        imgStarHolderSrc: imgUrl,
        src2: imgUrl2,
      },
      message: "送出驗證碼",
      msg1: "註冊",
      remsg: "",
      retime: "",
      reMsgg: "",
      resingupmsg: "",
      resingupmsg1: "",

      user: {
        username: {value: "", msg: ""},
        password: {value: "", msg: ""},
        repassword: {value: "", msg: ""},
        code: {value: "", msg: ""},
      },
      submitDisabled: true, // 送出按鈕的disabled狀態，true為禁用
    };
  },
  components: {
    SketchMain,
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
          // console.log(ckemail);
          // console.log(chpwd);
          fetch("https://astria.sutsanyuan.com/Astria_api/FirstSignUp", {
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
              // console.log(body);
              this.resingupmsg = body.Status;
              this.resingupmsg1 = body.Msg;
              if (this.resingupmsg == "1") {
                localStorage.setItem("myemail", `${this.user.username.value}`);
                localStorage.setItem("mymsg", `${this.resingupmsg1}`);
                this.$router.push("/signUpForm");
                console.log("註冊成功");
              }
            })
            .catch(function (err) {
              // console.log(err);
            });
        }
      } else {
        console.log("註冊失敗");
      }
    },
    onChange() {
      let ckemail = this.user.username.value;
      let chpwd = this.user.password.value;
      // console.log(ckemail);
      // console.log(chpwd);
      fetch("https://astria.sutsanyuan.com/Astria_api/CreateVCode", {
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
          // console.log(body);
          this.remsg = body.Status;
          this.retime = body.RemainingSec;
          this.reMsgg = body.Msg;
          if (this.remsg == "1" && this.reMsgg == "帳號存在") {
            this.message = "帳號已存在";
          } else if (this.remsg == "1") {
            this.message = "已傳送驗證碼";
          } else if (this.submitDisabled == true) {
            this.message = "輸入格式不符";
          } else if (this.remsg == "2") {
            this.message = `已送出驗證碼(請於${this.retime}秒後再點擊)`;
          }
        })
        .catch(function (err) {
          // console.log(err);
        });
    },

    fbsingup() {
      this.$router.push("/");
    },
    googlesingup() {
      this.$router.push("/");
    },
    loginTo() {
      this.$router.push("/logIn");
    },
  },
};
</script>

<style scoped>
* {
  color: #666;
}
input {
  width: 100%;
  height: 50px;
  margin: 20px 0;
  padding-left: 10px;
  border-radius: 10px;
}
.singup-form {
  padding: 30px 80px;
  background: rgba(255, 255, 255, 0.25);
}
h2 {
  text-align: center;
  margin: 30px 0 20px;
  color: #eee;
}
img {
  width: 100%;
}
.pic {
  padding: 50px;
  background: #000235;
}
.pic img {
  margin: auto;
  width: 20vw;
}
.login-bottom-containt {
  flex-direction: column;
  align-items: center;
}

.singupcode-submit h5,
.singup-submit h5 {
  margin: 0px;
  color: #fff;
}
.singupcode-submit {
  width: 150px;
  /* height: 30px; */
  padding: 10px;
  margin-top: 30px;
  margin: 20px auto 0;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  border: none;
  color: #fff;
  /* text-align: center; */
}
.singup-submit {
  width: 150px;
  /* height: 30px; */
  padding: 10px;
  margin: 0px auto 0;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  border: none;
  color: #eee;
}
.outlink {
  padding: 20px 30px;
}
.outlink span {
  display: block; /*設定為塊級元素會獨佔一行形成上下居中的效果*/
  color: gray;
  position: relative;
}
hr {
  color: #eee;
}
.outlink p {
  color: gray;
  margin: 20px 0 30px;
}

.image img {
  width: 5vw;
  margin: 40px 40px;
  margin-bottom: 40px;
}
.txt {
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
}
.sign-up span {
  color: #eee;
  margin-top: 10px;
}
.sign-up .t1 {
  /* margin: 0px 0 0 10px; */

  color: #eee;
}
.sign-up .t1:hover {
  color: #62ff36;
  cursor: pointer;
}
.el-form-item__error {
  color: #eee;
}

@media screen and (max-width: 992px) {
  .pic img {
    margin: 0px auto;
    width: 60vw;
  }
  .image img {
    width: 15vw;
    margin: 0px 40px;
    margin-bottom: 40px;
  }
  .img-d {
    padding: 0px;
  }
}
</style>
