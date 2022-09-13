<script>
import Chart from "../components/ChartElement.vue";
import DataChart from "../components/DataChart.vue";
import ChartDesc from "../components/ChartDesc.vue";
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
    ChartDesc,
  },
  data() {
    //this.$store.dispatch("getMyChartData");
    return {
      bindingData: {chartData: this.$store.state.myChartData},

      content: "ChartDesc",
    };
  },
  beforeMount() {
    console.log("myChar.vue beforeMount");
    this.$store.dispatch("getMyChartData");
    console.log(this.$store.state.myChartData);
    console.log("JSON", this.$store.state.descJSON.length);
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
            class="smallBlock chartZone mx-1 mt-2 d-flex align-items-center justify-content-center"
          >
            <Chart v-bind="bindingData"></Chart>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 row-no-padding">
          <div class="smallBlock mx-1 mt-2 d-flex align-items-center">
            <tr class="d-flex justify-content-around text-center w-100">
              <td><button @click="content = 'ChartDesc'">星盤解讀</button></td>
              <td><button @click="content = 'DataChart'">詳細參數</button></td>
            </tr>
          </div>
          <div class="smallBlock dataZone mx-1 mt-2">
            <keep-alive>
              <component :is="content"></component>
            </keep-alive>
          </div>
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

.smallBlock:first-child {
  height: 100px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
}
.smallBlock:nth-child(2) {
  /* height: 600px; */
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
}

.chartZone {
  padding-top: 50px;
  padding-bottom: 50px;
}
.dataZone {
}
</style>
