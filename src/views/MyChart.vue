<script>
import Chart from "../components/ChartElement.vue";
export default {
  components: {
    Chart,
  },
};
</script>
<template>
  <div class="BG">
    <div class="container m-5">
      <div class="row">
        <div class="col-md-6 col-sm-12"><Chart></Chart></div>

        <div class="col-md-6 col-sm-12">ddd</div>
      </div>
    </div>
  </div>
</template>

<style>
.BG {
  background: rgb(0, 16, 85);
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
