<template>
  <div class="login-code">
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
/* .login-code {
    position:relative;
} */
input {
  /* list-style: none; */
  width: 100%;
  height: 60px;
  margin: 20px 0;
  padding-left: 10px;
  border-radius: 10px;
}
.login-code {
  padding: 0 80px;
}
</style>
