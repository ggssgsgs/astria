import {createStore} from "vuex";
import axios from "axios";
import descriptionJSON from "../assets/description.json";
export default createStore({
  state: {
    descJSON: descriptionJSON,
    mySigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    mySignsNames: [],
    planetsWithoutSpace: [
      "太陽",
      "上升",
      "月亮",
      "火星",
      "水星",
      "金星",
      "木星",
      "土星",
      "天王星",
      "海王星",
      "冥王星",
    ],
    mySignInfo: [],
    test: 1,
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
    printJSON() {
      console.log(state.descJSON);
    },
    getDescBySign(state, payload) {
      console.log(payload.planet, payload.sign);
      for (let i = 0; i < state.descJSON.length; i++) {
        if (state.descJSON[i].Select1 === payload.planet) {
          if (state.descJSON[i].Select2 === payload.sign) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.mySignInfo[payload.index] = state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        if (state.descJSON[i].Select2 === payload.planet) {
          if (state.descJSON[i].Select1 === payload.sign) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.mySignInfo[payload.index] = state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        //console.log(state.descJSON[i].Select1, state.descJSON[i].Select2);
        //console.log("failed to get one!");
        state.mySignInfo[payload.index] = "No Data";
      }
    },
    signNumberToName(signNumber) {
      if (signNumber == 1) {
        return "牡羊座";
      } else if (signNumber == 2) {
        return "金牛座";
      } else if (signNumber == 3) {
        return "雙子座";
      } else if (signNumber == 4) {
        return "巨蟹座";
      } else if (signNumber == 5) {
        return "獅子座";
      } else if (signNumber == 6) {
        return "處女座";
      } else if (signNumber == 7) {
        return "天秤座";
      } else if (signNumber == 8) {
        return "天蠍座";
      } else if (signNumber == 9) {
        return "射手座";
      } else if (signNumber == 10) {
        return "摩羯座";
      } else if (signNumber == 11) {
        return "水瓶座";
      } else if (signNumber == 12) {
        return "雙魚座";
      }
    },
    setSigns(state, astroDataOriginal) {
      //console.log("測試", state.mySigns);
      state.mySigns = [
        astroDataOriginal.astros.sun.sign,
        astroDataOriginal.axes.asc.sign,
        astroDataOriginal.astros.moon.sign,
        astroDataOriginal.astros.mars.sign,
        astroDataOriginal.astros.mercury.sign,
        astroDataOriginal.astros.venus.sign,
        astroDataOriginal.astros.jupiter.sign,
        astroDataOriginal.astros.saturn.sign,
        astroDataOriginal.astros.uranus.sign,
        astroDataOriginal.astros.neptune.sign,
        astroDataOriginal.astros.pluto.sign,
      ];
    },
    assignSignName(state) {
      for (let i = 0; i < state.mySigns.length; i++) {
        // state.mySignsNames[i] = this.signNumberToName(state.mySigns[i]);
        let signNumber = state.mySigns[i];
        if (signNumber == 1) {
          state.mySignsNames[i] = "牡羊座";
        } else if (signNumber == 2) {
          state.mySignsNames[i] = "金牛座";
        } else if (signNumber == 3) {
          state.mySignsNames[i] = "雙子座";
        } else if (signNumber == 4) {
          state.mySignsNames[i] = "巨蟹座";
        } else if (signNumber == 5) {
          state.mySignsNames[i] = "獅子座";
        } else if (signNumber == 6) {
          state.mySignsNames[i] = "處女座";
        } else if (signNumber == 7) {
          state.mySignsNames[i] = "天秤座";
        } else if (signNumber == 8) {
          state.mySignsNames[i] = "天蠍座";
        } else if (signNumber == 9) {
          state.mySignsNames[i] = "射手座";
        } else if (signNumber == 10) {
          state.mySignsNames[i] = "摩羯座";
        } else if (signNumber == 11) {
          state.mySignsNames[i] = "水瓶座";
        } else if (signNumber == 12) {
          state.mySignsNames[i] = "雙魚座";
        }
      }
    },

    changeStateNumber(state) {
      state.test += 10;
    },

    //

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
    // increaseCounter() {
    //   axios(
    //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
    //   ).then((response) => {
    //     console.log("response:", response);
    //   });
    // },

    getMyChartData({commit}) {
      axios(
        //台灣時間記得 -8 : 經緯度小數點 5 位
        "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P"
      ).then((response) => {
        console.log("Cdata:", response);
        this.myChartDataOrigin = response.data.data;
        console.log("myChartDataOrigin:", this.myChartDataOrigin);
        commit("setChartData", this.myChartDataOrigin);
        //console.log("myChartData_Axios", this.myChartData);
        //分配取得各行星星座
        commit("setSigns", this.myChartDataOrigin);
        //console.log("mySigns", this.mySigns);
        //在 vue裡的 index.js 呼叫 state 會顯示 undefined
        commit("assignSignName");
        //console.log("mySignsNames", this.mySignsNames);
        //
        // commit("changeStateNumber");
        // console.log("test", this.test);
      });
    },
  },
  modules: {},
});
