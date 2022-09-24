<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="login-containt">
        <div class="row justify-content-center">
          <div class="col">
            <div class="card pic">
              <img src="../assets/img/LoginLogo.png" alt="logo" />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="card inputform">
              <h2>{{ msg1 }}</h2>
              <!-- 忘記密碼 -->
              <login-by-code
                @pchecked="paddchick"
                @pdeleted="pdeletechick"
                v-show="logonType === 'code'"
              >
              </login-by-code>
              <!-- 登入頁面 -->
              <login-by-pwd
                @checked="addchick"
                @deleted="deletechick"
                v-show="logonType === 'pwd'"
              >
              </login-by-pwd>

              <div class="d-flex login-bottom-containt">
                <button id="login" class="login-button" @click="onSubmit">
                  {{ msg }}
                </button>
                <button
                  class="change-login-type"
                  @click="onChangeLoginType"
                  v-show="logonType === 'pwd'"
                >
                  忘記密碼
                </button>
                <button
                  class="change-login-type"
                  @click="onChangeLoginType"
                  v-show="logonType === 'code'"
                >
                  回上一頁
                </button>
              </div>
              <div class="d-flex txt">
                <div class="sinup">
                  <span>還不是會員</span>
                  <span class="t1" @click="singupTo">立即註冊</span>
                </div>
                <div class="outlink">
                  <p><span>或請使用以下方式登入</span></p>
                  <div class="d-flex img-d">
                    <div class="image">
                      <img src="../assets/img/icons/google.png" alt="google" />
                    </div>
                    <div class="image">
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
import LoginByCode from "./LoginByCode.vue";
import LoginByPwd from "./LoginByPwd.vue";
//import axios from "axios";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();

    return {};
  },
  components: {
    LoginByCode,
    LoginByPwd,
  },
  name: "LogIn",
  data() {
    return {
      logonType: "pwd",
      msg: "登入",
      msg1: "登入",
      a: "",
      b: "",
      info: null,

      // 登入
      users: [],
      passwords: [],

      // 修改密碼
      chemail: [],
      token: "",
    };
  },
  methods: {
    //忘記密碼，觸發事件，抓取子物件回傳
    paddchick(item) {
      // console.log(item);
      this.chemail.push(item.email);
    },
    //忘記密碼，觸發事件，刪除資料
    pdeletechick() {
      this.chemail.splice(0);
    },
    //登入頁面,，觸發事件，抓取子物件回傳
    addchick(item) {
      console.log(item.username, item.password);
      this.users.push(item.username);
      this.passwords.push(item.password);
    },
    //登入頁面,，觸發事件，刪除資料
    deletechick() {
      this.users.splice(0);
      this.passwords.splice(0);
    },
    //按鈕click後，判斷是否能進入登入
    onSubmit() {
      //   const token = "asds32adsavrAS3Fadf5567"; // token本身就是加密過的字串，隨意
      let username = this.users[this.users.length - 1];
      let password = this.passwords[this.passwords.length - 1];

      //判斷是登入頁面還是忘記密碼
      if (this.$data.logonType === "pwd") {
        fetch("https://astria.sutsanyuan.com/Astria_api/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Email: username,
            Password: password,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then((body) => {
            console.log(body);
            console.log(body.Msg);
            this.a = body.Msg;
            console.log(this.a);
            if (this.a == "登入成功") {
              localStorage.setItem("token", "ImLogin");
              this.$store.commit("testChangeFriendsName", {name: this.a});
              localStorage.setItem("myemail", `${this.users}`);
              localStorage.setItem("mymsg", `${this.a}`);

              //更改vuex狀態
              this.$store.commit("loginSet", body.Req);

              this.$store.state.isLogIn = true;
              this.$router.push("/");
            }
          })
          // .then(body => this.datas = body.Msg
          // )
          .catch(function (err) {
            console.log(err);
          });
      } else {
        // 忘記密碼
        // this.$router.push('/');
        let chemaillen = this.chemail.length;
        let chemails = this.chemail[chemaillen - 1];
        console.log(chemails);

        fetch("https://astria.sutsanyuan.com/Astria_api/ForgottenPWD", {
          method: "post",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            Email: chemails,
          }),
        })
          .then(function (re) {
            return re.json();
          })
          .then((body) => {
            console.log(body);
            this.b = body.Status;
            if (this.b == "1") {
              this.$data.logonType = "pwd";
              console.log("忘記密碼");
              this.msg1 = "登入";
              this.msg = "登入";
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    },

    onChangeLoginType() {
      if (this.$data.logonType === "pwd") {
        this.$data.logonType = "code";
        this.msg = "送出";
        this.msg1 = "忘記密碼";
      } else {
        this.$data.logonType = "pwd";
        this.msg = "登入";
        this.msg1 = "登入";
      }
      console.log("切換登入方式");
    },
    singupTo() {
      this.$router.push("/signUp");
    },
  },
  // mounted: function () {
  //   axios
  //     //   .get("https://randomuser.me/api/?results=100") //測試api發出請求
  //     .get("http://localhost/api/Our") //發出請求
  //     //   .then((res) => console.log(res.data))
  //     .then((res) => (this.datas = res.data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>

<style scoped>
/* .logo {
  margin-top: 40%;
  width: 100px;
  height: 100px;
} */
* {
  list-style: none;
}
.BG {
  background: rgb(0, 2, 53);
}
img {
  width: 100%;
}
.pic {
  padding: 50px 50px 50px 0;
  background: #000235;
}
.pic img {
  padding: 70px;
}
.inputform {
  height: 740px;
  background: rgba(255, 255, 255, 0.25);
  padding-top: 30px;
}
.login-bottom-containt {
  flex-direction: column;
  align-items: center;
}
.login-button {
  width: 160px;
  height: 30px;
  margin-top: 30px;
  margin: 20px auto 0;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  border: none;
  color: #fff;
  /* text-align: center; */
}
.change-login-type {
  width: 160px;
  height: 30px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  border: none;
  color: #fff;
  margin: 20px 0 5px;
}
h2 {
  text-align: center;
  margin: 30px 0 20px;
}
.outlink {
  padding: 20px 30px;
}
.outlink span {
  display: block; /*設定為塊級元素會獨佔一行形成上下居中的效果*/
  color: gray;
  position: relative;
}

.outlink p {
  color: gray;
  margin: 20px 0 30px;
}

.image {
  width: 18%;
  margin: 20px auto;
}
.img-d {
  padding: 0 80px;
}

.txt {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.oltxt {
  margin: 10px;
}
.sinup .t1 {
  margin-left: 10px;
}
.sinup .t1:hover {
  margin-left: 10px;
  color: #62ff36;
}

@media screen and (min-width: 992px) {
}
</style>
