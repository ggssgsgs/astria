<template>
  <div class="block"><div id="paper"></div></div>
</template>

<script>
import {loadScript} from "vue-plugin-load-script";
import {useStore} from "vuex";

// import DrawChart from "../AstroChart-master/project/build/astrochart.js";
// export default {
//   name: "paper",
//   data() {
//     return {
//       myChart: {},
//     };
//   },
//   props: {},
//   methods: {
//     createChart() {
//       this.myChart = new DrawChart(function (chart) {
//         var data = {
//           planets: {
//             Lilith: [18],
//             Chiron: [18],
//             Pluto: [63],
//             Neptune: [110, 0.2],
//             Uranus: [318],
//             Saturn: [201, -0.2],
//             Jupiter: [192],
//             Mars: [210],
//             Moon: [268],
//             Sun: [281],
//             Mercury: [312],
//             Venus: [330],
//             NNode: [2],
//           },
//           cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
//         };
//         window.onload = function () {
//           var radix = new chart.astrology.Chart("paper", 600, 600).radix(data);

//           // Aspect calculation
//           // default is planet to planet, but it is possible add some important points:
//           radix.addPointsOfInterest({
//             As: [data.cusps[0]],
//             Ic: [data.cusps[3]],
//             Ds: [data.cusps[6]],
//             Mc: [data.cusps[9]],
//           });
//           radix.aspects();
//         };
//       });
//     },
//   },
//   mounted() {
//     this.createChart();
//   },
// };

//the following code failed
export default {
  data: () => ({
    cs: 500,
    //by default
    astroData: {
      //   planets: {
      //     Lilith: [17],
      //     Chiron: [18],
      //     Pluto: [63],
      //     Neptune: [110, 0.2],
      //     Uranus: [318],
      //     Saturn: [201, -0.2],
      //     Jupiter: [192],
      //     Mars: [210],
      //     Moon: [268],
      //     Sun: [281],
      //     Mercury: [312],
      //     Venus: [330],
      //     NNode: [2],
      //   },
      //   cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
    },
  }),
  props: {
    chartSize: Number, //read only
    testString: String,
    chartData: Object,
  },
  created() {
    console.log(" chart element created");
    loadScript("public/js/astrochart.js")
      .then(() => {
        // Script is loaded, do something
        console.log("created loaded");

        //};
      })
      .catch(() => {
        // Failed to fetch script
        console.log("chart failed to load");
      });
  },
  mounted() {
    // let recaptchaScript = document.createElement("script");
    // recaptchaScript.setAttribute("src", "./astrochart.js");
    // document.body.appendChild(recaptchaScript);
    if (window.innerWidth < 1140 && window.innerWidth > 992) {
      this.cs = 500 * (window.innerWidth / 1200);
    }
    if (window.innerWidth < 992) {
      this.cs = window.innerWidth * 0.9;
    }

    console.log(this.chartData);
    if (this.chartData != "undefined") {
      this.astroData = this.chartData;

      console.log("not undefined");
      console.log("this.chartData in [ChartElement.vue]", this.chartData);
    }

    //reload_newdata
    window.setTimeout(() => {
      //delete the existing element
      let element = document.getElementById("paper");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }

      loadScript("public/js/astrochart.js")
        .then(() => {
          // Script is loaded, do something
          console.log("astroChart.js loaded, draw chart from chartData");
          console.log("this.chartData in [ChartElement.vue]", this.astroData);
          //console.log(this.testString);
          // var data = {
          //   planets: {
          //     Lilith: [18],
          //     Chiron: [18],
          //     Pluto: [63],
          //     Neptune: [110, 0.2],
          //     Uranus: [318],
          //     Saturn: [201, -0.2],
          //     Jupiter: [192],
          //     Mars: [210],
          //     Moon: [268],
          //     Sun: [281],
          //     Mercury: [312],
          //     Venus: [330],
          //     NNode: [2],
          //   },
          //   cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
          // };
          // window.onload = function () {

          var radix = new astrology.Chart("paper", this.cs, this.cs).radix(
            this.astroData
          );
          // Aspect calculation
          // default is planet to planet, but it is possible add some important points:
          radix.addPointsOfInterest({
            As: [this.astroData.cusps[0]],
            Ic: [this.astroData.cusps[3]],
            Ds: [this.astroData.cusps[6]],
            Mc: [this.astroData.cusps[9]],
          });
          radix.aspects();

          //};
        })
        .catch(() => {
          // Failed to fetch script
          console.log("chart failed to load");
        });
    }, 1500);
  },
  beforeUpdate() {
    console.log("before updated");
  },

  updated() {
    console.log("updated");
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...

      //change size
      if (window.innerWidth < 992) {
        this.cs = window.innerWidth * 0.9;
      } else if (window.innerWidth < 1140) {
        this.cs = 500 * (window.innerWidth / 1200);
      } else {
        this.cs = 500;
      }

      //delete the existing element
      let element = document.getElementById("paper");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }

      //recreate
      loadScript("public/js/astrochart.js")
        .then(() => {
          // Script is loaded, do something
          console.log("loaded and rewriteCanvas");

          //console.log(this.testString);
          //   var data = {
          //     planets: {
          //       Lilith: [18],
          //       Chiron: [18],
          //       Pluto: [63],
          //       Neptune: [110, 0.2],
          //       Uranus: [318],
          //       Saturn: [201, -0.2],
          //       Jupiter: [192],
          //       Mars: [210],
          //       Moon: [268],
          //       Sun: [281],
          //       Mercury: [312],
          //       Venus: [330],
          //       NNode: [2],
          //     },
          //     cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
          //     //切線
          //   };
          // window.onload = function () {
          var radix = new astrology.Chart("paper", this.cs, this.cs).radix(
            this.astroData
          );
          // Aspect calculation
          // default is planet to planet, but it is possible add some important points:
          radix.addPointsOfInterest({
            As: [this.astroData.cusps[0]],
            Ic: [this.astroData.cusps[3]],
            Ds: [this.astroData.cusps[6]],
            Mc: [this.astroData.cusps[9]],
          });
          radix.aspects();

          //};
        })
        .catch(() => {
          // Failed to fetch script
          console.log("chart failed to load");
        });
    },
  },
};
</script>

<style scoped>
#paper {
  border-radius: 50%;
  background-color: #fff;
  /* width: 90vw;
  height: 90vw; */
}
.block {
  background: transparent;
  display: flex;
  justify-content: center;
  /* width: 90vw;
  height: 90vw; */
}
@media screen and (min-width: 768px) {
  /* .block {
    width: 500px;
    height: 500px;
  }
  #paper {
    width: 500px;
    height: 500px;
  } */
}
</style>
