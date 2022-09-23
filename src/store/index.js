import { createStore } from "vuex";
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
      currentBirthday: "1995-07-07",
      currentUTCBirthday: "1995-07-07",
      currentBirthTime: "11:08:00",
      currentUTCBirthTime: "03:08:00",
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
      currentHouses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentHousesNames: [
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
      currentSignInfo: [],
      currentHouseInfo: [],
      //各行星角度
      currentDegrees: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      currentChartDataOrigin: {},
      currentChartData: {
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
    },

    //登入狀態
    isLogIn: false,

    //Personal Data
    //我的資料
    myEmail: "",
    myName: "酥燦燦",
    myBirthday: "1995-07-07",
    myBirthTime: "11:08",
    myUTCBirthday: "1995-07-07",
    myUTCBirthTime: "03:08:00",
    myLocation: "台北市",
    //myBirthdayAndTime: "1995-07-07T03:08:00Z", //台灣時間-8
    myLatitude: "25.11111",
    myLongitude: "121.11111",
    // myAPIsrc:
    //   "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",

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
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1996-08-09T08:14:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",

        signs: [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //myLatitude: "25.11111",
        //myLongitude: "121.11111",
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
        //astroAPI:
        //  "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        //myLatitude: "23.11111",
        //myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "正預期",
        birthday: "1997-10-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-10-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    ],

    //我的訂單
    myOrders: [
      {
        rID: "0000000001",
        //ProID: "ProID001",
        //MemID: "MemID001",
        ProName: "唐綺陽",
        ProLesson: "塔羅課",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 2,
        ReserveAmount: 2,

        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: true,
      },
      {
        rID: "0000000002",
        //ProID: "ProID001",
        //MemID: "MemID001",
        ProName: "唐綺陽",
        ProLesson: "塔羅課2",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 3,
        ReserveAmount: 1,

        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: false,
      },
      {
        rID: "0000000003",
        //ProID: "ProID001",
        //MemID: "MemID001",
        ProName: "唐陽",
        ProLesson: "塔羅課3",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 1,
        ReserveAmount: 1,

        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: false,
      },
    ],
    proOrders: [
      {
        rID: "0000000004",
        //ProID: "ProID001",
        MemID: "MemID001",
        MemberName: "姓名",
        //ProName: "唐綺陽",
        ProLesson: "塔羅課",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 1,
        ReserveAmount: 1,

        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: false,
      },
      {
        rID: "0000000001",
        //ProID: "ProID001",
        //MemID: "MemID001",
        ProName: "唐綺陽",
        ProLesson: "塔羅課",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 1,
        ReserveAmount: 1,

        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: false,
      },
    ],

    //未使用
    chartDataOrigin: {},
    chartData: {},

    //productshop購物車
    myCart: {
      shopNmae:"思語塔羅工作坊",
      addpsTime: 0,
      addCost: 0,
      psCount: 0,
      online:'',
      local:'',
    },
    
    psCost: [1000, 1500, 1800, 2700],
    //課程內容
    psName: ['妤塔羅占卜工作坊', '唐綺占星工作室',],
    psSkill: ['八字', '人類圖', '紫微斗數', '塔羅占卜', '生命靈數', '星座命盤'],

    psLesson: [{
      lesson: '塔羅牌真命天子陣',
      psTime: '30',
      pscontent: '透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！',
      pstip: '⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠',
    },
    {
      lesson: '2023年流年運勢',
      psTime: '30',
      pscontent: '透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！',
      pstip: '⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠',
    },
    {
      lesson: '最強運勢解析',
      psTime: '30',
      pscontent: '透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！',
      pstip: '⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠',
    },
    {
      lesson: '塔羅工作運勢解析',
      psTime: '30',
      pscontent: '透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！',
      pstip: '⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠',
    },
    {
      lesson: '最強工作運勢解析',
      psTime: '30',
      pscontent: '透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！',
      pstip: '⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠',
    },


    ],
    pushLesson: {
      lesson: [],
      psTime: [],
      pscontent: [,
      ],
      pstip: [],
    }



  },
  getters: {},
  mutations: {
    //------ actions API 抓取後放入

    setMyOrders() { },
    setProOrders() { },

    //------
    deleteFriend(state, index) {
      state.friends.splice(index, 1);
    },
    setCurrentUTCtime(state) {
      // let date = this.$store.state.currentData.currentBirthday;
      // let time = this.$store.state.currentData.currentBirthTime;
      let date = state.currentData.currentBirthday;
      let time = state.currentData.currentBirthTime;
      let date1 = new Date(`${date}, ${time} GMT+8:00`);

      console.log("TIMETEST", date1.getUTCHours());
      console.log("DAYTEST", date1.getUTCDate());
      let newMonth;
      if (date1.getUTCMonth() + 1 < 10) {
        newMonth = "0" + (date1.getUTCMonth() + 1).toString();
      } else {
        newMonth = (date1.getUTCMonth() + 1).toString();
      }
      let newDate;
      if (date1.getUTCDate() < 10) {
        newDate = "0" + date1.getUTCDate().toString();
      } else {
        newDate = date1.getUTCDate().toString();
      }
      let newHours;
      if (date1.getUTCHours() < 10) {
        newHours = "0" + date1.getUTCHours().toString();
      } else {
        newHours = date1.getUTCHours().toString();
      }
      let newMinutes;
      if (date1.getUTCMinutes() < 10) {
        newMinutes = "0" + date1.getUTCMinutes().toString();
      } else {
        newMinutes = date1.getUTCMinutes().toString();
      }

      state.currentData.currentUTCBirthTime =
        newHours + ":" + newMinutes + ":00";
      state.currentData.currentUTCBirthday =
        date1.getUTCFullYear().toString() + "-" + newMonth + "-" + newDate;
    },
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
            state.currentData.currentSignInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        if (state.descJSON[i].Select2 === payload.planet) {
          if (state.descJSON[i].Select1 === payload.sign) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.currentData.currentSignInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        //console.log(state.descJSON[i].Select1, state.descJSON[i].Select2);
        //console.log("failed to get one!");
        state.currentData.currentSignInfo[payload.index] = "No Data";
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
            state.currentData.currentHouseInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        if (state.descJSON[i].Select2 === payload.planet) {
          if (state.descJSON[i].Select1 === payload.house) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.currentData.currentHouseInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        //console.log(state.descJSON[i].Select1, state.descJSON[i].Select2);
        //console.log("failed to get one!");
        state.currentData.currentHouseInfo[payload.index] = "No Data";
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

      for (let i = 0; i < state.currentData.currentSigns.length; i++) {
        let house =
          astroDataOriginal.houses[state.currentData.currentSigns[i] - 1].sign +
          interval;
        if (house % 12 === 0) {
          house = 12;
        } else {
          house = house % 12;
        }
        state.currentData.currentHouses[i] = house;
      }
    },
    assignHouseName(state) {
      for (let i = 0; i < state.currentData.currentHouses.length; i++) {
        let signNumber = state.currentData.currentHouses[i];
        if (signNumber == 1) {
          state.currentData.currentHousesNames[i] = "第一宮";
        } else if (signNumber == 2) {
          state.currentData.currentHousesNames[i] = "第二宮";
        } else if (signNumber == 3) {
          state.currentData.currentHousesNames[i] = "第三宮";
        } else if (signNumber == 4) {
          state.currentData.currentHousesNames[i] = "第四宮";
        } else if (signNumber == 5) {
          state.currentData.currentHousesNames[i] = "第五宮";
        } else if (signNumber == 6) {
          state.currentData.currentHousesNames[i] = "第六宮";
        } else if (signNumber == 7) {
          state.currentData.currentHousesNames[i] = "第七宮";
        } else if (signNumber == 8) {
          state.currentData.currentHousesNames[i] = "第八宮";
        } else if (signNumber == 9) {
          state.currentData.currentHousesNames[i] = "第九宮";
        } else if (signNumber == 10) {
          state.currentData.currentHousesNames[i] = "第十宮";
        } else if (signNumber == 11) {
          state.currentData.currentHousesNames[i] = "第十一宮";
        } else if (signNumber == 12) {
          state.currentData.currentHousesNames[i] = "第十二宮";
        }
      }
    },
    //set to currentData.currentSigns in vuex
    setSigns(state, astroDataOriginal) {
      //console.log("測試", state.currentData.currentSigns);
      state.currentData.currentSigns = [
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

    //set data to currentData.currentSignsNames in vuex
    assignSignName(state) {
      for (let i = 0; i < state.currentData.currentSigns.length; i++) {
        // state.currentData.currentSignsNames[i] = this.signNumberToName(state.currentData.currentSigns[i]);
        let signNumber = state.currentData.currentSigns[i];
        if (signNumber == 1) {
          state.currentData.currentSignsNames[i] = "牡羊座";
        } else if (signNumber == 2) {
          state.currentData.currentSignsNames[i] = "金牛座";
        } else if (signNumber == 3) {
          state.currentData.currentSignsNames[i] = "雙子座";
        } else if (signNumber == 4) {
          state.currentData.currentSignsNames[i] = "巨蟹座";
        } else if (signNumber == 5) {
          state.currentData.currentSignsNames[i] = "獅子座";
        } else if (signNumber == 6) {
          state.currentData.currentSignsNames[i] = "處女座";
        } else if (signNumber == 7) {
          state.currentData.currentSignsNames[i] = "天秤座";
        } else if (signNumber == 8) {
          state.currentData.currentSignsNames[i] = "天蠍座";
        } else if (signNumber == 9) {
          state.currentData.currentSignsNames[i] = "射手座";
        } else if (signNumber == 10) {
          state.currentData.currentSignsNames[i] = "摩羯座";
        } else if (signNumber == 11) {
          state.currentData.currentSignsNames[i] = "水瓶座";
        } else if (signNumber == 12) {
          state.currentData.currentSignsNames[i] = "雙魚座";
        }
      }
    },

    setDegrees(state, astroDataOriginal) {
      //console.log("測試", state.currentData.currentSigns);
      state.currentData.currentDegrees = [
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

    //set data to currentData.currentChartData in state(vuex)
    setChartData(state, astroDataOriginal) {
      //   console.log(state.currentData.currentChartData.planets.Chiron[0]);
      //   console.log(state.currentData.currentChartDataOrigin);
      //--Chiron
      state.currentData.currentChartData.planets.Chiron[0] =
        astroDataOriginal.astros.chiron.position.longitude;

      console.log(
        "chiron",
        state.currentData.currentChartData.planets.Chiron[0]
      );
      //--Lilith
      state.currentData.currentChartData.planets.Lilith[0] =
        astroDataOriginal.astros.lilith.position.longitude;

      console.log(
        "Lilith",
        state.currentData.currentChartData.planets.Lilith[0]
      );
      //--Pluto
      state.currentData.currentChartData.planets.Pluto[0] =
        astroDataOriginal.astros.pluto.position.longitude;

      console.log("Pluto", state.currentData.currentChartData.planets.Pluto[0]);
      //--Neptune
      state.currentData.currentChartData.planets.Neptune = [
        astroDataOriginal.astros.neptune.position.longitude,
      ];

      console.log(
        "Neptune",
        state.currentData.currentChartData.planets.Neptune[0]
      );
      //--Uranus
      state.currentData.currentChartData.planets.Uranus[0] =
        astroDataOriginal.astros.uranus.position.longitude;

      console.log(
        "Uranus",
        state.currentData.currentChartData.planets.Uranus[0]
      );
      //--Saturn
      state.currentData.currentChartData.planets.Saturn = [
        astroDataOriginal.astros.saturn.position.longitude,
      ];

      console.log(
        "Saturn",
        state.currentData.currentChartData.planets.Saturn[0]
      );
      //--Jupiter
      state.currentData.currentChartData.planets.Jupiter = [
        astroDataOriginal.astros.jupiter.position.longitude,
      ];

      console.log(
        "Jupiter",
        state.currentData.currentChartData.planets.Jupiter[0]
      );
      //--Mars
      state.currentData.currentChartData.planets.Mars = [
        astroDataOriginal.astros.mars.position.longitude,
      ];

      console.log("Mars", state.currentData.currentChartData.planets.Mars[0]);
      //--Moon
      state.currentData.currentChartData.planets.Moon = [
        astroDataOriginal.astros.moon.position.longitude,
      ];

      console.log("Moon", state.currentData.currentChartData.planets.Moon[0]);
      //--Sun
      state.currentData.currentChartData.planets.Sun = [
        astroDataOriginal.astros.sun.position.longitude,
      ];

      console.log("Sun", state.currentData.currentChartData.planets.Sun[0]);
      //--Mercury
      state.currentData.currentChartData.planets.Mercury = [
        astroDataOriginal.astros.mercury.position.longitude,
      ];

      console.log(
        "Mercury",
        state.currentData.currentChartData.planets.Mercury[0]
      );
      //--Venus
      state.currentData.currentChartData.planets.Venus = [
        astroDataOriginal.astros.venus.position.longitude,
      ];

      console.log("Venus", state.currentData.currentChartData.planets.Venus[0]);
      //   //--NNode api 暫無此資料
      //   state.currentData.currentChartData.planets.NNode = [
      //     astroDataOriginal.astros.saturn.position.longitude,
      //   ];

      //   console.log("Saturn", state.currentData.currentChartData.planets.Saturn[0]);

      //state.currentData.currentChartDataOrigin.astros.chiron.position.longitude;

      for (let i = 0; i < 12; i++) {
        state.currentData.currentChartData.cusps[i] =
          astroDataOriginal.houses[i].position.longitude;
        //houses[0].position.longitude
      }
    },


    //productOrder 購物填選單
    addStoreLesson(state, index) {
      
      for (let i = 0; i < 6; i++) {
        state.pushLesson.lesson.push(state.psLesson[i].lesson) 
        state.pushLesson.psTime = state.psLesson[i].psTime
        state.pushLesson.pscontent = state.psLesson[i]
        state.pushLesson.pstip = state.psLesson.pstip
      }

    },
    //productshop購物車
    addStorespTime(state) {
      state.myCart.addpsTime += 30;
      state.myCart.addCost += state.psCost[0];
      state.myCart.psCount+=1
    },
    addStorespTime1(state) {
      state.myCart.addpsTime += 60;
      state.myCart.addCost += state.psCost[1];
      state.myCart.psCount+=1
    },
    addStorespTime2(state) {
      state.myCart.addpsTime += 90;
      state.myCart.addCost += state.psCost[2];
      state.myCart.psCount+=1
    },
    addStorespTime3(state) {
      state.myCart.addpsTime += 120;
      state.myCart.addCost += state.psCost[3];
      state.myCart.psCount+=1
    },
    addStoreonline(state){
      state.myCart.online='線上';
    },
    addStoreonlocal(state){
      state.myCart.local='實體';
    },
    removeStoreInfol(state) {

      state.myCart.addpsTime = 0
      state.myCart.addCost = 0
      state.myCart.psCount=0
      state.myCart.local=""
      state.myCart.online=""

    }

  },
  actions: {
    // increaseCounter() {
    //   axios(
    //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
    //   ).then((response) => {
    //     console.log("response:", response);
    //   });
    // },

    getMyChartData({ commit, state }) {
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

    getChartData({ commit, state }, payload) {
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
      //----GET----
      // axios
      //   .get(
      //     //台灣時間記得 -8 : 經緯度小數點 5 位
      //     state.currentAPIsrc,
      //     {
      //       params: {
      //         Date: state.currentData.currentBirthday,
      //         Time: state.currentData.currentBirthTime,
      //         Address: state.currentData.currentLocation,
      //         //Location
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log("Cdata:", response);
      //     state.currentData.currentChartDataOrigin = response.data.data;
      //     console.log(
      //       "currentChartDataOrigin:",
      //       state.currentData.currentChartDataOrigin
      //     );
      //     commit("setChartData", state.currentData.currentChartDataOrigin);
      //     //console.log("myChartData_Axios", state.myChartData);
      //     //分配取得各行星星座
      //     commit("setSigns", state.currentData.currentChartDataOrigin);
      //     //console.log("mySigns", this.mySigns);
      //     //在 vue裡的 index.js 呼叫 state 會顯示 undefined
      //     commit("assignSignName");
      //     //console.log("mySignsNames", this.mySignsNames);
      //     //有Sign 才有 House
      //     commit("setHouses", state.currentData.currentChartDataOrigin);
      //     //vvvv not gonna show
      //     //console.log("myHouses", this.myHouses);
      //     commit("assignHouseName");
      //     //set degrees
      //     commit("setDegrees", state.currentData.currentChartDataOrigin);
      //   });
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/GuestAstroData", {
          Date: payload.birthday,
          Time: payload.birthTime,
          Address: payload.location,
        })
        .then(function (response) {
          console.log("get astro data by post", response);
          state.currentData.currentChartDataOrigin = response.data.JObj.data;
          console.log(
            "myChartDataOrigin:",
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
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  modules: {},
});
