<template>
  <div class="BG">
    <div class="container my-5">
      <div class="row">
        <chartFormAddFriend></chartFormAddFriend>
      </div>
    </div>
  </div>
</template>

<script>
import chartFormAddFriend from "../components/ChartFormAddFriend.vue";
export default {
  components: {
    chartFormAddFriend,
  },
};
</script>
<style scoped>
/* h1 {
    font-size: 36px !important;
  } */
p {
  font-size: 18px !important;
}
.BG {
  width: 100%;
}
</style>
