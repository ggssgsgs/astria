<template>
  <div :class="{bgGray: isPro, BG: !isPro}">
    <div class="container-xl mt-5 pb-5 mb-5">
      <div class="row justify-content-center myInfo mb-5">
        <div class="col-12 col-lg-4 buttonForm">
          <div
            class="btn"
            :class="{
              btnGray: isPro,
              btn: !isPro,
            }"
            @click="content = 'InfolCode'"
          >
            <h4>個人資料管理</h4>
          </div>
          <div
            class="btn"
            :class="{
              btnGray: isPro,
              btn: !isPro,
            }"
            @click="content = 'InfolPwd'"
          >
            <h4>忘記密碼</h4>
          </div>
          <div
            class="btn"
            :class="{
              btnGray: isPro,
              btn: !isPro,
            }"
            @click="content = 'reservation'"
          >
            <h4>我的訂單</h4>
          </div>
          <!-- <div @click="charts">好友星盤管理</div> -->
          <div
            class="btn"
            :class="{
              btnGray: isPro,
              btn: !isPro,
            }"
            @click="content = 'ftInfolCode'"
          >
            <h4 v-if="!isPro">成為占星師</h4>
            <h4 v-if="isPro">我的專業帳號</h4>
          </div>
          <div
            v-if="isPro"
            class="btn"
            :class="{
              btnGray: isPro,
              btn: !isPro,
            }"
            @click="content = 'reservationPro'"
          >
            <h4>我的預約</h4>
          </div>
        </div>
        <div class="col-12 col-lg-8 inforForm py-5">
          <keep-alive>
            <component :is="content"></component>
          </keep-alive>
          <!-- <infol-code v-if="logonType === 'code'"></infol-code> -->
          <!-- <infol-pwd v-if="logonType === 'pwd'"></infol-pwd> -->
          <!-- <infol-reserve v-if="logonType === 'order'"></infol-reserve> -->
          <!-- <reservation v-if="logonType === 'order'"></reservation> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InfolCode from "./InfolCode.vue";
import InfolPwd from "./InfolPwd.vue";
// import InfolReserve from "./InfolReserve.vue";
import ftInfolCode from "./ftInfolCode.vue";
import reservation from "../components/Reservation.vue";
import reservationPro from "../components/ReservationPro.vue";
export default {
  beforeMount() {
    this.$store.dispatch("getReserationInfo", this.$store.state.myEmail);
    if (this.isPro) {
      this.$store.dispatch("getReserationProInfo", this.$store.state.myEmail);
    }
  },
  mounted() {
    if (this.isPro) {
      console.log("isPro", this.isPro);
      this.$store.state.myEmail = localStorage.getItem("myemail");
      this.$store.dispatch("getProInfo", this.$store.state.myEmail);
    }
    window.setTimeout(500, () => {});

    //this.isPro = this.$store.state.isPro;
  },

  components: {
    InfolCode,
    InfolPwd,
    // InfolReserve,
    reservation,
    reservationPro,
    ftInfolCode,
  },
  name: "MyInfo",
  data() {
    return {
      //傳進來的是字串"True" "False"
      // isPro: this.$store.state.isPro == "True" ? true : false,
      isPro: localStorage.isPro == "True" ? true : false,
      content: "InfolCode",
      logonType: "code",
    };
  },

  computed: {
    gender() {
      if (this.$store.state.myGender == 1) {
        return "male";
      } else if (this.$store.state.myGender == 2) {
        return "female";
      } else if (this.$store.state.myGender == 0) {
        return "others";
      }
    },
    isLogIn() {
      if (localStorage.getItem("token") === "ImLogin") {
        return true;
      } else {
        return false;
      }
    },
    // isPro() {
    //   return this.$store.state.isPro == true ? true : false;
    // },
  },
  methods: {
    //可以改is
    // myInfo() {
    //   if (
    //     this.$data.logonType === "code" ||
    //     this.$data.logonType === "pwd" ||
    //     this.$data.logonType == "order"
    //   ) {
    //     this.$data.logonType = "code";
    //   }
    // },
    // myOrder() {
    //   if (
    //     this.$data.logonType === "code" ||
    //     this.$data.logonType === "pwd" ||
    //     this.$data.logonType == "order"
    //   ) {
    //     this.$data.logonType = "order";
    //   }
    // },
    // charts() {
    //   this.$router.push("/charts");
    // },
    // onChange() {
    //   if (
    //     this.$data.logonType === "pwd" ||
    //     this.$data.logonType === "code" ||
    //     this.$data.logonType === "order"
    //   ) {
    //     this.$data.logonType = "pwd";
    //   }
    // },
  },
};
</script>
<style scoped>
* {
  list-style: none;
}
.buttonForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: #fff solid 1px;
}
.buttonForm button {
  width: 100%;
  height: 75px;
  background: rgba(217, 217, 217, 0.25);
  color: #fff;
  /* margin-top: 50px; */
  border-radius: 10px;
}

.inputForm {
  flex-direction: column;
}
.myInfo {
  text-align: center;
}
input {
}

@media screen and (min-width: 992px) {
  .buttonForm {
    margin-top: 100px;
  }

  .buttonForm button {
    width: 240px;
    margin-bottom: 30px;
    background: rgba(217, 217, 217, 0.25);
  }
}
@media screen and (max-width: 400px) {
  .btn {
    width: 10vw;
  }
}

.btn {
  width: 250px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  background: #a3a3ac;
  color: #111;
}
.btn:hover {
  background: #999;
  color: #111;
  /* border: #fff; */
}

.btnGray {
  color: #111;
}
.btnGray:hover {
  background: #999;
  color: #111;
}
h4 {
  margin: 0;
}
</style>
