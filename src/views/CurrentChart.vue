<script>
import Chart from "../components/ChartElement.vue";
import DataChart from "../components/DataChart.vue";
import ChartDesc from "../components/ChartDesc.vue";
import {useStore} from "vuex";

//import sign logos
import lAries from "../assets/img/signLogos/Aries_pink_400p.png";
import lTarus from "../assets/img/signLogos/Tarus_pink_400p.png";
import lGemini from "../assets/img/signLogos/Gemini_pink_400p.png";
import lCancer from "../assets/img/signLogos/Cancer_pink_400p.png";
import lLeo from "../assets/img/signLogos/Leo_pink_400p.png";
import lVirgo from "../assets/img/signLogos/Virgo_pink_400p.png";
import lLibra from "../assets/img/signLogos/Libra_pink_400p.png";
import lScorpio from "../assets/img/signLogos/Scorpio_pink_400p.png";
import lSagitarius from "../assets/img/signLogos/Sagitarius_pink_400p.png";
import lCapricorn from "../assets/img/signLogos/Capricorn_pink_400p.png";
import lAquarius from "../assets/img/signLogos/Aquarius_pink_400p.png";
import lPisces from "../assets/img/signLogos/Pisces_pink_400p.png";

export default {
  setup() {
    const store = useStore();

    return {
      //getMyChartData: () => store.dispatch("getMyChartData"),
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
      bindingData: {chartData: this.$store.state.currentData.currentChartData},
      //api: "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",
      content: "ChartDesc",

      logoSigns: [
        lAries,
        lTarus,
        lGemini,
        lCancer,
        lLeo,
        lVirgo,
        lLibra,
        lScorpio,
        lSagitarius,
        lCapricorn,
        lAquarius,
        lPisces,
      ],
      //沒用到

      currentSign: 1,
    };
  },
  beforeMount() {
    console.log("myChar.vue beforeMount");
    ////vvv testing tto set the data to some other
    //this.$store.state.currentAPIsrc = this.$store.state.friends[0].astroAPI;

    this.$store.dispatch("getChartData", {
      birthday: this.$store.state.currentData.currentUTCBirthday,
      birthTime: this.$store.state.currentData.currentUTCBirthTime,
      location: this.$store.state.currentData.currentLocation,
    });

    console.log("CurrentChart>mySigns", this.$store.state.mySigns);
    //console.log("JSON", this.$store.state.descJSON.length);
  },
  mounted() {
    window.setTimeout(() => {
      //this.currentSign = this.$store.state.mySigns[0];
      //delete original img
      // let element = document.getElementById("mySignLogo");
      // while (element.firstChild) {
      //   element.removeChild(element.firstChild);
      // }
      //document.getElementById("mySignLogo").appendChild();
    }, 100);
  },
};
</script>
<template>
  <div class="BG py-0 py-lg-5">
    <div class="container-xl my-2 my-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-11 row-no-padding">
          <div class="smallBlock mx-1 mt-2 d-flex">
            <div
              class="w-25 m-auto d-flex justify-content-center"
              id="mySignLogo"
            >
              <img
                class="logoSign-sun"
                :src="
                  this.logoSigns[
                    this.$store.state.currentData.currentSigns[0] - 1
                  ]
                "
                alt="sunSignLogo"
              />
            </div>
            <div class="w-75 m-auto basic-info-container">
              <div>
                <span>{{ this.$store.state.currentData.currentName }}</span
                ><span>{{
                  this.$store.state.currentData.currentSignsNames[0]
                }}</span>
              </div>
              <div>
                <span>{{ this.$store.state.currentData.currentBirthday }}</span>
                <span>{{
                  this.$store.state.currentData.currentBirthTime
                }}</span>
                <span>{{ this.$store.state.currentData.currentLatitude }}</span>
                <span>{{
                  this.$store.state.currentData.currentLongitude
                }}</span>
              </div>
            </div>
          </div>
          <div
            class="smallBlock chartZone mx-1 mt-2 d-flex align-items-center justify-content-center"
          >
            <Chart v-bind="bindingData"></Chart>
          </div>
        </div>

        <div class="col-lg-6 col-11 row-no-padding">
          <div class="smallBlock mx-1 mt-2 d-flex align-items-center">
            <tr class="d-flex justify-content-around text-center w-100">
              <td>
                <div class="optionsBtn" @click="content = 'ChartDesc'">
                  星盤解讀
                </div>
              </td>
              <td>
                <div class="optionsBtn" @click="content = 'DataChart'">
                  詳細參數
                </div>
              </td>
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
  background: #000125;
  display: flex;
  justify-content: center;
  width: 100vw;
}
.row-no-padding {
  padding-left: 0px;
  padding-right: 0px;
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

.optionsBtn {
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  color: white;
}
.optionsBtn:hover {
  cursor: pointer;
  background: rgba(217, 217, 217, 0.5);
  /* width: 200px; */
}
.logoSign-sun {
  width: 80px;
}
</style>
<style scoped>
.basic-info-container {
  color: #fff;
}
span {
  margin-right: 10px;
}
@media screen and (max-width: 400px) {
  .optionsBtn {
    padding: 10px;
    width: 41.25vw;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.25);
    color: white;
  }
}
</style>
