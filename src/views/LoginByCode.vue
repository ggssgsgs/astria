<template>
  <div class="login-code d-flex flex-wrap justify-content-center">
    <input
      class="input"
      v-model="userForm.email"
      @keyup.delete="keydelete"
      @keyup.tab="keyenter1"
      @keyup.enter="keyenter1"
      @blur="keyenter1"
      placeholder="請輸入信箱"
    />
  </div>
</template>

<script>
export default {
  name: "LoginByCode",
  data() {
    return {
      userForm: {
        email: "",
      },
    };
  },
  methods: {
    keyenter1() {
      this.$emit("pchecked", this.userForm);
    },
    keydelete() {
      this.$emit("deleted", this.userForm);
    },
  },
};
</script>

<style scoped>
* {
  color: #666;
}
/* .login-code {
    position:relative;
} */
input {
  /* list-style: none; */
  width: 85%;
  height: 60px;
  margin: 20px 0;
  padding-left: 10px;
  border-radius: 10px;
  color: #666;
}
.login-code {
  /* padding: auto; */
}
</style>
