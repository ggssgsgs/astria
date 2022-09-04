<template>
  <div class="block"><div id="paper"></div></div>
</template>

<script>
import {loadScript} from "vue-plugin-load-script";

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
  data: () => ({}),
  mounted() {
    // let recaptchaScript = document.createElement("script");
    // recaptchaScript.setAttribute("src", "./astrochart.js");
    // document.body.appendChild(recaptchaScript);
    loadScript("public/js/astrochart.js")
      .then(() => {
        // Script is loaded, do something
        console.log("loaded");
        var data = {
          planets: {
            Lilith: [18],
            Chiron: [18],
            Pluto: [63],
            Neptune: [110, 0.2],
            Uranus: [318],
            Saturn: [201, -0.2],
            Jupiter: [192],
            Mars: [210],
            Moon: [268],
            Sun: [281],
            Mercury: [312],
            Venus: [330],
            NNode: [2],
          },
          cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
        };
        // window.onload = function () {
        var radix = new astrology.Chart("paper", 600, 600).radix(data);
        // Aspect calculation
        // default is planet to planet, but it is possible add some important points:
        radix.addPointsOfInterest({
          As: [data.cusps[0]],
          Ic: [data.cusps[3]],
          Ds: [data.cusps[6]],
          Mc: [data.cusps[9]],
        });
        radix.aspects();
        //};
      })
      .catch(() => {
        // Failed to fetch script
      });
  },
  methods: {},
};
</script>

<style>
#paper {
  border-radius: 50%;
  background-color: #fff;
}
.block {
  background: rgb(0, 16, 85);
  display: flex;
  justify-content: center;
  width: 800px;
}
</style>
