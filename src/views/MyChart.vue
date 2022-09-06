<script>
import Chart from "../components/ChartElement.vue";
import DataChart from "../components/DataChart.vue";
export default {
  components: {
    Chart,
    DataChart,
  },
  data() {
    return {
      bindingData: {chartData: this.$store.state.myChartData},
    };
  },
};
</script>
<template>
  <div class="BG">
    <div class="container m-5">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <Chart v-bind="bindingData"></Chart>
        </div>

        <div class="col-md-6 col-sm-12"><DataChart /></div>
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
