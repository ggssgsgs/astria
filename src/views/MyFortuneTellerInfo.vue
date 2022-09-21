<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center myInfor">
        <div class="col-12 col-lg-4 buttonForm">
          <button @click="myInfor">個人資料管理</button>
          <button @click="onChange">忘記密碼</button>
          <button @click="myOrder">我的預約</button>
          <button @click="myPInfo">個人專業資料管理</button>
          <button @click="myOrderCorse">我的課程管理</button>
          <button>預約訂單管理</button>
        </div>
        <div class="col-12 col-lg-8 inforForm">
          <ft-infol-code v-if="logonType === 'ftcode'"></ft-infol-code>
          <infol-code v-if="logonType === 'code'"></infol-code>
          <infol-pwd v-if="logonType === 'pwd'"></infol-pwd>
          <infol-reserve v-if="logonType === 'order'"></infol-reserve>
          <infol-product v-if="logonType === 'corse'"></infol-product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ftInfolCode from "./ftInfolCode.vue"; 
import InfolCode from "./InfolCode.vue";
import InfolPwd from "./InfolPwd.vue";
import InfolReserve from"./InfolReserve.vue";
import InfolProduct from "./InfolProduct.vue"
export default {
  components: {
    ftInfolCode,
    InfolCode,
    InfolPwd,
    InfolReserve,
    InfolProduct,
  },
  name: "MyInfo",
  data() {
    return {
      logonType: "ftcode",
    };
  },
  methods: {
    myInfor() {
      if (this.$data.logonType === "code" || this.$data.logonType === "pwd"||this.$data.logonType==="ftcode"||this.$data.logonType==="order" ||this.$data.logonType === "corse") {
        this.$data.logonType = "code";
      }
    },
    onChange() {
      if (this.$data.logonType === "code" || this.$data.logonType === "pwd"||this.$data.logonType==="ftcode"||this.$data.logonType==="order" ||this.$data.logonType === "corse") {
        this.$data.logonType = "pwd";
      }
    },
    myPInfo(){
      if(this.$data.logonType === "code" || this.$data.logonType === "pwd"||this.$data.logonType==="ftcode"||this.$data.logonType==="order" ||this.$data.logonType === "corse"){
        this.$data.logonType = "ftcode";
      }
    },
    myOrder(){
       if(this.$data.logonType === "code" || this.$data.logonType === "pwd"||this.$data.logonType==="ftcode"||this.$data.logonType==="order" ||this.$data.logonType === "corse"){
        this.$data.logonType = "order";
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