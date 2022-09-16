<template>
  <div class="login-containt">
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
    <button id="login" class="login-button" @click="onSubmit">{{ msg }}</button>
    <br />
    <div class="login-bottom-containt">
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
      <br />
      <span>還不是會員</span>
      <span><RouterLink to="/signUp">立即註冊</RouterLink></span>
      <!-- <p>{{ datsas[0]}}</p> -->
    </div>
    <div>
      <p>{{ datas }}</p>
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
    pdeleted() {
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
        fetch("http://52.139.170.100/api/LoginIn", {
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
            console.log(body.Msg);
            this.a = body.Msg;
            console.log(this.a);
            if (this.a == "登入成功") {
              localStorage.setItem("token", "ImLogin");
              this.$store.commit("testChangeFriendsName", {name: this.a});
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

        fetch("http://52.139.170.100/api/RePWD", {
          method: "PUT",
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
      } else {
        this.$data.logonType = "pwd";
        this.msg = "登入";
      }
      console.log("切換登入方式");
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
.login-containt {
  text-align: center;
}

.logo {
  margin-top: 40%;
  width: 100px;
  height: 100px;
}
.login-bottom-containt {
  text-align: center;
}
.login-button {
  margin-top: 40px;
}
.change-login-type {
  text-align: right;
  margin-top: 40px;
}
</style>
