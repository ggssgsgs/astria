import {createStore} from "vuex";
import axios from "axios";
export default createStore({
  state: {
    myChartData: {
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
    },
  },
  getters: {},
  mutations: {},
  actions: {
    increaseCounter() {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        console.log("response:", response);
      });
    },
    getMyChartData() {
      axios(
        "http://20.41.120.3:3010/horoscope?time=1993-08-06T20:50:00Z&latitude=-33.41167&longitude=-70.66647&houseSystem=P"
      ).then((response) => {
        console.log("Cdata:", response);
      });
    },
  },
  modules: {},
});
