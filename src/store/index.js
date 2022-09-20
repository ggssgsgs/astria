import {createStore} from "vuex";
import axios from "axios";
import descriptionJSON from "../assets/description.json";
export default createStore({
  state: {
    currentAPIsrc:
      "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",
    //Genaral Data
    //星座說明
    descJSON: descriptionJSON,
    test: 1,
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

    currentData: {
      currentBirthday: "2024-03-11",
      currentBirthTime: "13:01:01",
      currentName: "正預期",
      currentLocation: "台南",
      currentLatitude: "23.11111",
      currentLongitude: "120.55555",
      currentChartDataOrigin: {},
      currentSigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentSignsNames: [
        "牡羊座",
        "金牛座",
        "雙子座",
        "巨蟹座",
        "獅子座",
        "處女座",
        "天秤座",
        "天蠍座",
        "射手座",
        "摩羯座",
        "水瓶座",
      ],
    },

    //Personal Data
    //我的資料
    //myEmail: "tsanyuansu@gmail.com",
    myName: "酥燦燦",
    myBirthday: "1995-07-07",
    myBirthTime: "11:08:00",
    myBirthdayAndTime: "1995-07-07T03:08:00Z", //台灣時間-8
    myLatitude: "25.11111",
    myLongitude: "121.11111",
    myAPIsrc:
      "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",

    //api抓下來的原始資料
    myChartDataOrigin: {},
    //星盤資料
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
    //各行星落入星座
    mySigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    mySignsNames: [
      "牡羊座",
      "金牛座",
      "雙子座",
      "巨蟹座",
      "獅子座",
      "處女座",
      "天秤座",
      "天蠍座",
      "射手座",
      "摩羯座",
      "水瓶座",
    ],
    //各行星落入宮位
    myHouses: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    myHousesNames: [
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
    ],
    //各行星角度
    myDegrees: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //星座與宮位說明，從JSON檔抓取
    mySignInfo: [],
    myHouseInfo: [],

    //好友星盤
    friends: [
      {
        name: "林冠廷",
        birthday: "1996-08-09",
        birthTime: "03:08:00",
        birthCity: "Taipei",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1996-08-09T08:14:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",

        signs: [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        myLatitude: "25.11111",
        myLongitude: "121.11111",
        //birthdayAndTime: "1995-07-07T03:08:00Z",

        // chartData: {
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
        //     //NNode: [2],
        //   },
        //   cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
        // },
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        myLatitude: "23.11111",
        myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "正預期",
        birthday: "1997-10-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1997-10-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        myLatitude: "23.11111",
        myLongitude: "121.11111",
        signs: [7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        myLatitude: "23.11111",
        myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        myLatitude: "23.11111",
        myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        myLatitude: "23.11111",
        myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        astroAPI:
          "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        myLatitude: "23.11111",
        myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    ],

    //未使用
    chartDataOrigin: {},
    chartData: {},
  },
  getters: {},
  mutations: {
    setCurrentData(state, payload) {
      state.currentData.currentName = payload.name;
      state.currentData.currentBirthday = payload.birthday;
      state.currentData.currentBirthTime = payload.birthTime;
      state.currentData.currentLocation = payload.location;
    },
    testChangeFriendsName(state, payload) {
      state.friends[1].name = payload.name;
    },
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
    //取得宮位資訊
    getDescByHouse(state, payload) {
      console.log(payload.planet, payload.house);
      for (let i = 0; i < state.descJSON.length; i++) {
        if (state.descJSON[i].Select1 === payload.planet) {
          if (state.descJSON[i].Select2 === payload.house) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.myHouseInfo[payload.index] = state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        if (state.descJSON[i].Select2 === payload.planet) {
          if (state.descJSON[i].Select1 === payload.house) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.myHouseInfo[payload.index] = state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        //console.log(state.descJSON[i].Select1, state.descJSON[i].Select2);
        //console.log("failed to get one!");
        state.myHouseInfo[payload.index] = "No Data";
      }
    },
    // signNumberToName(signNumber) {
    //   if (signNumber == 1) {
    //     return "牡羊座";
    //   } else if (signNumber == 2) {
    //     return "金牛座";
    //   } else if (signNumber == 3) {
    //     return "雙子座";
    //   } else if (signNumber == 4) {
    //     return "巨蟹座";
    //   } else if (signNumber == 5) {
    //     return "獅子座";
    //   } else if (signNumber == 6) {
    //     return "處女座";
    //   } else if (signNumber == 7) {
    //     return "天秤座";
    //   } else if (signNumber == 8) {
    //     return "天蠍座";
    //   } else if (signNumber == 9) {
    //     return "射手座";
    //   } else if (signNumber == 10) {
    //     return "摩羯座";
    //   } else if (signNumber == 11) {
    //     return "水瓶座";
    //   } else if (signNumber == 12) {
    //     return "雙魚座";
    //   }
    // },
    setHouses(state, astroDataOriginal) {
      //計算宮位差
      let ascSign = astroDataOriginal.houses[0].sign;
      let ascHouse = astroDataOriginal.houses[ascSign - 1].sign;
      //console.log(ascSign);

      let interval = ascHouse - 1;

      for (let i = 0; i < state.mySigns.length; i++) {
        let house =
          astroDataOriginal.houses[state.mySigns[i] - 1].sign + interval;
        if (house % 12 === 0) {
          house = 12;
        } else {
          house = house % 12;
        }
        state.myHouses[i] = house;
      }
    },
    assignHouseName(state) {
      for (let i = 0; i < state.myHouses.length; i++) {
        let signNumber = state.myHouses[i];
        if (signNumber == 1) {
          state.myHousesNames[i] = "第一宮";
        } else if (signNumber == 2) {
          state.myHousesNames[i] = "第二宮";
        } else if (signNumber == 3) {
          state.myHousesNames[i] = "第三宮";
        } else if (signNumber == 4) {
          state.myHousesNames[i] = "第四宮";
        } else if (signNumber == 5) {
          state.myHousesNames[i] = "第五宮";
        } else if (signNumber == 6) {
          state.myHousesNames[i] = "第六宮";
        } else if (signNumber == 7) {
          state.myHousesNames[i] = "第七宮";
        } else if (signNumber == 8) {
          state.myHousesNames[i] = "第八宮";
        } else if (signNumber == 9) {
          state.myHousesNames[i] = "第九宮";
        } else if (signNumber == 10) {
          state.myHousesNames[i] = "第十宮";
        } else if (signNumber == 11) {
          state.myHousesNames[i] = "第十一宮";
        } else if (signNumber == 12) {
          state.myHousesNames[i] = "第十二宮";
        }
      }
    },
    //set to mySigns in vuex
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

    //set data to mySignsNames in vuex
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

    setDegrees(state, astroDataOriginal) {
      //console.log("測試", state.mySigns);
      state.myDegrees = [
        astroDataOriginal.astros.sun.position.degrees,
        astroDataOriginal.axes.asc.position.degrees,
        astroDataOriginal.astros.moon.position.degrees,
        astroDataOriginal.astros.mars.position.degrees,
        astroDataOriginal.astros.mercury.position.degrees,
        astroDataOriginal.astros.venus.position.degrees,
        astroDataOriginal.astros.jupiter.position.degrees,
        astroDataOriginal.astros.saturn.position.degrees,
        astroDataOriginal.astros.uranus.position.degrees,
        astroDataOriginal.astros.neptune.position.degrees,
        astroDataOriginal.astros.pluto.position.degrees,
      ];
    },

    //set data to myChartData in state(vuex)
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

    getMyChartData({commit, state}) {
      //到時候更改API 提供四個欄位資料
      // axios
      //   .get("https://randomuser.me/api/", {
      //     //URL参數放在params屬性裏面
      //     params: {
      //       gender: "female",
      //       nat: "us",
      //     },
      //   })
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
      //this.myAPIsrc = api;
      axios
        .get(
          //台灣時間記得 -8 : 經緯度小數點 5 位
          state.currentAPIsrc
        )
        .then((response) => {
          console.log("Cdata:", response);
          state.myChartDataOrigin = response.data.data;
          console.log("myChartDataOrigin:", state.myChartDataOrigin);
          commit("setChartData", state.myChartDataOrigin);
          //console.log("myChartData_Axios", state.myChartData);
          //分配取得各行星星座
          commit("setSigns", state.myChartDataOrigin);
          //console.log("mySigns", this.mySigns);
          //在 vue裡的 index.js 呼叫 state 會顯示 undefined
          commit("assignSignName");
          //console.log("mySignsNames", this.mySignsNames);
          //有Sign 才有 House
          commit("setHouses", state.myChartDataOrigin);
          //vvvv not gonna show
          //console.log("myHouses", this.myHouses);
          commit("assignHouseName");
          //set degrees
          commit("setDegrees", state.myChartDataOrigin);
        });
    },

    getChartData({commit, state}) {
      //到時候更改API 提供四個欄位資料
      // axios
      //   .get("https://randomuser.me/api/", {
      //     //URL参數放在params屬性裏面
      //     params: {
      //       gender: "female",
      //       nat: "us",
      //     },
      //   })
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
      //this.myAPIsrc = api;
      axios
        .get(
          //台灣時間記得 -8 : 經緯度小數點 5 位
          state.currentAPIsrc,
          {
            params: {
              Date: state.currentData.currentBirthday,
              Time: state.currentData.currentBirthTime,
              Address: state.currentData.currentLocation,
              //Location
            },
          }
        )
        .then((response) => {
          console.log("Cdata:", response);
          state.currentData.currentChartDataOrigin = response.data.data;
          console.log(
            "currentChartDataOrigin:",
            state.currentData.currentChartDataOrigin
          );
          commit("setChartData", state.currentData.currentChartDataOrigin);
          //console.log("myChartData_Axios", state.myChartData);
          //分配取得各行星星座
          commit("setSigns", state.currentData.currentChartDataOrigin);
          //console.log("mySigns", this.mySigns);
          //在 vue裡的 index.js 呼叫 state 會顯示 undefined
          commit("assignSignName");
          //console.log("mySignsNames", this.mySignsNames);
          //有Sign 才有 House
          commit("setHouses", state.currentData.currentChartDataOrigin);
          //vvvv not gonna show
          //console.log("myHouses", this.myHouses);
          commit("assignHouseName");
          //set degrees
          commit("setDegrees", state.currentData.currentChartDataOrigin);
        });
    },
  },
  modules: {},
});
