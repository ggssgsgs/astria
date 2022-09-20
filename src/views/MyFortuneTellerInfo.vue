<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center myInfor">
        <div class="col-12 col-lg-4 buttonForm">
          <button @click="myInfor">個人資料管理</button>
          <button>我的課程管理</button>
          <button>我的預約</button>
        </div>
        <div class="col-12 col-lg-8 inforForm">
          <ft-infol-code v-if="logonType === 'code'"></ft-infol-code>
          <infol-pwd v-if="logonType === 'pwd'"></infol-pwd>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ftInfolCode from "./ftInfolCode.vue"; 
import InfolPwd from "./InfolPwd.vue";
export default {
  components: {
    ftInfolCode,
    InfolPwd,
  },
  name: "MyInfo",
  data() {
    return {
      logonType: "code",
    };
  },
  methods: {
    myInfor() {
      if (this.$data.logonType === "code" || this.$data.logonType === "pwd") {
        this.$data.logonType = "code";
      }
    },
    onChange() {
      if (this.$data.logonType === "pwd" || this.$data.logonType === "code") {
        this.$data.logonType = "pwd";
      }
    },
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
.myInfor {
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
</style>