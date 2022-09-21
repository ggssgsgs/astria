<template>
  <div class="BG">
    <div class="container my-5">
      <div class="row">
        <chartForm></chartForm>
      </div>
    </div>
  </div>
</template>

<script>
import chartForm from "../components/ChartForm.vue";
export default {
  components: {
    chartForm,
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
