<template>
  <div class="container d-flex justify-content-center my-5">
    <div class="content-box w-75">
      <h1 class="text-center">“藏星，把星星藏進口袋”</h1>
      <h4 class="text-center mb-5">打開Astria專屬星盤 導讀你的人生課題</h4>

      <div v-if="!this.$store.state.isLogIn" class="d-flex flex-column">
        <div class="d-flex justify-content-center">
          <div class="btn btn-c mx-2" @click="goTo(`/logIn`)">
            <h5>登入</h5>
          </div>
          <div class="btn btn-c mx-2" @click="goTo(`/signUp`)">
            <h5>註冊</h5>
          </div>
        </div>
        <div
          class="text-center mt-4 align-self-center link-sm"
          @click="goTo('/chartFormPage')"
        >
          或不登入直接體驗
        </div>
      </div>
      <div v-if="this.$store.state.isLogIn">
        <hr />
        <h4 class="text-center sub-font">
          {{ this.$store.state.myName }}，您好
        </h4>
        <h4 class="text-center sub-font">美好的一天，一起探索星盤 ！</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
h5 {
  margin: 0px;
}
h4 {
  font-weight: 300;
}
.btn-c {
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  color: white;
}
.btn-c:hover {
  cursor: pointer;
  background: rgba(217, 217, 217, 0.5);
  /* width: 200px; */
}
.content-box {
  padding: 40px;
  border-radius: 10px;
  background: #36385e;
}
.sub-font {
  font-weight: 50;
  color: #d9d9d9;
}
.link-sm {
  height: 25px;
}
.link-sm:hover {
  cursor: pointer;
  border-bottom: solid 0.5px #fff;
}
</style>
