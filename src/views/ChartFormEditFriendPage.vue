<template>
  <div class="BG">
    <div class="container my-5">
      <div class="row">
        <chartFormEditFriend></chartFormEditFriend>
      </div>
    </div>
  </div>
</template>

<script>
import chartFormEditFriend from "../components/ChartFormEditFriend.vue";
export default {
  components: {
    chartFormEditFriend,
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
