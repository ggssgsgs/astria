<template>
  <div class="login-containt">
    <login-by-code v-show="logonType === 'code'"></login-by-code>
    <login-by-pwd v-show="logonType === 'pwd'">></login-by-pwd>
    <button class="login-button" v-on:click="onSubmit">登入</button>
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
      <p>{{ datas[0] }}</p>
    </div>
  </div>
</template>

<script>
import LoginByCode from "../views/LoginByCode.vue";
import LoginByPwd from "../views/LoginByPwd.vue";
import axios from "axios";
// import{reactive} from 'vue';
// const data = reactive({
//     newsdata:'',
// })
// data.newsdata = res.data

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
      //   info: "Ajax 测试!!",
    };
  },
  methods: {
    onSubmit() {
      if (this.$data.logonType === "pwd") {
        this.$router.push("/");
        // 密碼登入
        console.log("密碼登入");
        // axios
        //   //   .get("https://randomuser.me/api/?results=100") //測試api發出請求
        //   .get("http://localhost/api/Our") //發出請求
        // //   .then((res) => console.log(res.data))
        //   .then((res) =>this.data = res.data)
        //   .catch((error) => {
        //     console.log(error);
        //   });
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

