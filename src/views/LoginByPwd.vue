<template>
  <div class="inpuForm">
    <input
      v-model="userForm.username"
      @keyup.delete="keydelete"
      @keyup.tab="keyenter1"
      @keyup.enter="keyenter1"
      placeholder="帳號"
    />
    <br />
    <input
      type="password"
      v-model="userForm.password"
      @keyup.delete="keydelete"
      @keyup.tab="keyenter1"
      @keyup.enter="keyenter1"
      @blur="keyenter1"
      placeholder="密碼"
    />
  </div>
</template>

<script>
export default {
  name: "LoginByPwd",
  data() {
    return {
      userForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    keyenter1() {
      this.$emit("checked", this.userForm);
    },
    keydelete() {
      this.$emit("deleted", this.userForm);
    },
  },
};
</script>
<style scoped>
input {
  width: 100%;
  height: 60px;
  margin: 20px 0;
  padding-left: 10px;
  border-radius: 10px;
  color: #666;
}
.inpuForm {
  padding: 0 80px;
}
</style>
