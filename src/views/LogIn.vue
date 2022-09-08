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
    <button class="login-button" @click="onSubmit">登入</button>
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
    <button @click="logOut">登出</button>
    <!-- <div>
        <p v-for="(value,key) in datas">{{value.MemberEmail}}</p>
    </div> -->
  </div>
</template>

<script>
import LoginByCode from "../views/LoginByCode.vue";
import LoginByPwd from "../views/LoginByPwd.vue";
import axios from "axios";

export default {
  components: {
    LoginByCode,
    LoginByPwd,
  },
  name: "LogIn",
  data() {
    return {
      logonType: "pwd",
      datas: [],
      info: null,

      // 登入
      users: [],
      passwords: [],

      // 修改密碼
      userpassword: {
        ppasswords: [],
        prepasswords: [],
      },

      token: "",
    };
  },
  methods: {
    //忘記密碼，觸發事件，抓取子物件回傳
    paddchick(item) {
      // console.log(item);
      this.userpassword.ppasswords.push(item.password);
      this.userpassword.prepasswords.push(item.repassword);
    },
    //忘記密碼，觸發事件，刪除資料
    pdeleted() {
      this.userpassword.ppasswords.splice(0);
      this.userpassword.prepasswords.splice(0);
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
      let usernameImfor = this.datas[0].MemberEmail;
      let passwordImfor = this.datas[0].MemberAccount;

      console.log(username);
      console.log(password);

      // for (let i = 0; i < this.datas.length; i++) {
      //   console.log(this.datas[i]);
      // }
      // console.log(this.datas[0].MemberEmail);
      // console.log(this.datas[0].MemberAccount);

      //判斷是登入頁面還是忘記密碼
      if (this.$data.logonType === "pwd") {
        // this.$router.push("/");
        //Email :ss@gmail.com
        //Password: ourss1

        if (username == usernameImfor && password == passwordImfor) {
          //  fetch("http://20.41.120.3/api/Login", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json;charset =utf-8",
          //   },
          //   body: JSON.stringify({
          //     'Email': username,
          //     'Password': password,
          //   }),
          // })
          //   .then(function (response) {
          //     return response.json();
          //   })
          //   .then(function (body) {
          //     console.log(body);
          //     console.log(body.length);
          //   })
          //   .catch(function (err) {
          //     console.log(err);
          //   });
          localStorage.setItem("token", "ImLogin");
          this.$router.push("/");
          // 密碼登入
          console.log("密碼登入");
        } else {
          alert("login failed");
          //   console.log(username);
          //   console.log(password);
        }
      } else {
        // 忘記密碼
        // this.$router.push('/');
        let ppasswordslen = this.userpassword.ppasswords.length;
        let ppasswords = this.userpassword.ppasswords[ppasswordslen-1];

        let prepasswordslen=this.userpassword.prepasswords.length;
        let prepasswords = this.userpassword.prepasswords[prepasswordslen-1];

        console.log(ppasswords);
        console.log(ppasswordslen);
        console.log(prepasswordslen);
        console.log(prepasswords);

        // axios
        //   .post("http://localhost/api/Our")
        //   .then((response) => (this.info = response))
        //   .catch(function (error) {
        //     // 请求失败处理
        //     console.log(error);
        //   });
        //   console.log(info);

        fetch("http://20.41.120.3/api/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset =utf-8",
          },
          body: JSON.stringify({
            'Email': ppasswords,
            'Password': prepasswords,
          }),
        })
          .then(function (re) {
            return re.json();
          })
          .then(function (body) {
            console.log(body);
            console.log(body.length);
          })
          .catch(function (err) {
            console.log(err);
          });

        this.$data.logonType = "pwd";
        console.log("忘記密碼");
      }
    },

    onChangeLoginType() {
      if (this.$data.logonType === "pwd") {
        this.$data.logonType = "code";
      } else {
        this.$data.logonType = "pwd";
      }
      console.log("切換登入方式");
    },

    //測試用登出按鈕
    logOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  mounted: function () {
    axios
      //   .get("https://randomuser.me/api/?results=100") //測試api發出請求
      .get("http://localhost/api/Our") //發出請求
      //   .then((res) => console.log(res.data))
      .then((res) => (this.datas = res.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style  scoped>
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

