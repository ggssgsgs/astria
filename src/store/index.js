import {createStore} from "vuex";
import axios from "axios";
export default createStore({
  state: {
    myChartData: {
      planets: {
        Lilith: [17],
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
        //NNode: [2],
      },
      cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
    },
    myChartDataOrigin: {},
    chartDataOrigin: {},
    chartData: {},
  },
  getters: {},
  mutations: {
    setChartData(state, astroDataOriginal) {
      //   console.log(state.myChartData.planets.Chiron[0]);
      //   console.log(state.myChartDataOrigin);
      //--Chiron
      state.myChartData.planets.Chiron[0] =
        astroDataOriginal.astros.chiron.position.longitude;

      console.log("chiron", state.myChartData.planets.Chiron[0]);
      //--Lilith
      state.myChartData.planets.Lilith[0] =
        astroDataOriginal.astros.lilith.position.longitude;

      console.log("Lilith", state.myChartData.planets.Lilith[0]);
      //--Pluto
      state.myChartData.planets.Pluto[0] =
        astroDataOriginal.astros.pluto.position.longitude;

      console.log("Pluto", state.myChartData.planets.Pluto[0]);
      //--Neptune
      state.myChartData.planets.Neptune = [
        astroDataOriginal.astros.neptune.position.longitude,
      ];

      console.log("Neptune", state.myChartData.planets.Neptune[0]);
      //--Uranus
      state.myChartData.planets.Uranus[0] =
        astroDataOriginal.astros.uranus.position.longitude;

      console.log("Uranus", state.myChartData.planets.Uranus[0]);
      //--Saturn
      state.myChartData.planets.Saturn = [
        astroDataOriginal.astros.saturn.position.longitude,
      ];

      console.log("Saturn", state.myChartData.planets.Saturn[0]);
      //--Jupiter
      state.myChartData.planets.Jupiter = [
        astroDataOriginal.astros.jupiter.position.longitude,
      ];

      console.log("Jupiter", state.myChartData.planets.Jupiter[0]);
      //--Mars
      state.myChartData.planets.Mars = [
        astroDataOriginal.astros.mars.position.longitude,
      ];

      console.log("Mars", state.myChartData.planets.Mars[0]);
      //--Moon
      state.myChartData.planets.Moon = [
        astroDataOriginal.astros.moon.position.longitude,
      ];

      console.log("Moon", state.myChartData.planets.Moon[0]);
      //--Sun
      state.myChartData.planets.Sun = [
        astroDataOriginal.astros.sun.position.longitude,
      ];

      console.log("Sun", state.myChartData.planets.Sun[0]);
      //--Mercury
      state.myChartData.planets.Mercury = [
        astroDataOriginal.astros.mercury.position.longitude,
      ];

      console.log("Mercury", state.myChartData.planets.Mercury[0]);
      //--Venus
      state.myChartData.planets.Venus = [
        astroDataOriginal.astros.venus.position.longitude,
      ];

      console.log("Venus", state.myChartData.planets.Venus[0]);
      //   //--NNode api 暫無此資料
      //   state.myChartData.planets.NNode = [
      //     astroDataOriginal.astros.saturn.position.longitude,
      //   ];

      //   console.log("Saturn", state.myChartData.planets.Saturn[0]);

      //state.myChartDataOrigin.astros.chiron.position.longitude;

      for (let i = 0; i < 12; i++) {
        state.myChartData.cusps[i] =
          astroDataOriginal.houses[i].position.longitude;
        //houses[0].position.longitude
      }
    },
  },
  actions: {
    increaseCounter() {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        console.log("response:", response);
      });
    },
    getMyChartData({commit}) {
      axios(
        //台灣時間記得 -8 : 經緯度小數點 5 位
        "http://20.41.120.3:3010/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P"
      ).then((response) => {
        console.log("Cdata:", response);
        this.myChartDataOrigin = response.data.data;
        console.log("myChartDataOrigin:", this.myChartDataOrigin);
        commit("setChartData", this.myChartDataOrigin);
      });
    },
  },
  modules: {},
});
