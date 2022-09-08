<script>
import Chart from "../components/ChartElement.vue";
import DataChart from "../components/DataChart.vue";
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      getMyChartData: () => store.dispatch("getMyChartData"),
    };
  },
  components: {
    Chart,
    DataChart,
  },
  data() {
    //this.$store.dispatch("getMyChartData");
    return {
      bindingData: {chartData: this.$store.state.myChartData},
    };
  },
  beforeMount() {
    console.log("myChar.vue beforeMount");
    this.$store.dispatch("getMyChartData");
    console.log(this.$store.state.myChartData);
  },
};
</script>
<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12 row-no-padding">
          <div class="smallBlock mx-1 mt-2">data</div>
          <div
            class="smallBlock mx-1 mt-2 d-flex align-items-center justify-content-center"
          >
            <Chart v-bind="bindingData"></Chart>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 row-no-padding">
          <div class="smallBlock mx-1 mt-2"></div>
          <div class="smallBlock mx-1 mt-2"><DataChart /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.BG {
  background: rgb(0, 2, 53);
  display: flex;
  justify-content: center;
  width: 100vw;
}
.row-no-padding {
  padding-left: 0px;
  padding-right: 0px;
}
.smallBlock {
}

.smallBlock:first-child,
.smallBlock:nth-child(3) {
  height: 100px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
}
.smallBlock:nth-child(2),
.smallBlock:nth-child(4) {
  padding-top: 50px;
  padding-bottom: 50px;
  /* height: 600px; */
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
}
</style>
