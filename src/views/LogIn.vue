<template>
  <div class="login-containt">
    <login-by-code v-show="logonType === 'code'"></login-by-code>
    <login-by-pwd @checked="addchick" @deleted="deletechick" v-show="logonType === 'pwd'"
      >></login-by-pwd
    >
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
      users: [],
      passwords: [],
      token: "",
    };
  },
  methods: {
    addchick(item) {
      console.log(item.username, item.password);
      this.users.push(item.username);
      this.passwords.push(item.password);
    },
    deletechick(){
        this.users.splice(0);
        this.passwords.splice(0);
    },
    onSubmit() {
    //   const token = "asds32adsavrAS3Fadf5567"; // token本身就是加密過的字串，隨意
      let username = this.users[0];
      let password = this.passwords[0];
      let usernameImfor =this.datas[0].MemberEmail
      let passwordImfor =this.datas[0].MemberAccount

      console.log(username);
      console.log(password);
     
       for( let i=0;i < this.datas.length ; i++) {
        console.log(this.datas[i]);
      } 
      console.log(this.datas[0].MemberEmail);
      console.log(this.datas[0].MemberAccount);

     

    
      if (this.$data.logonType === "pwd") {
        // this.$router.push("/");
        
        if (username == usernameImfor && password == passwordImfor) {
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

