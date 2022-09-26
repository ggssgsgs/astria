<template>
  <div class="myorder">
    <div class="col-12 col-lg-4">
      <div class="d-flex">
        <div class="card shopItem">
          <div class="image" id="mycard">
            <img src="https://picsum.photos/200/200?random=1" />
          </div>
          <h4>{{ theLesson }}</h4>
          <p>{{ theTime }} mins NTD${{ theCost }}起</p>
          <p class="swTxt">
            {{ theContent }}
          </p>
          <p class="swTxt1">
            {{ theTip }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="card ordeerChoice">
        <h3>課程時數</h3>
        <div class="d-flex btnGroup">
          <span class="priceItem">
            <button @click="addTime1" :style="changeColor">
              {{ timeMsg[0] }}mins
            </button>
            <p>${{ price[0] }}</p>
          </span>
          <span class="priceItem">
            <button @click="addTime2" :style="changeColor1">
              {{ timeMsg[1] }}mins
            </button>
            <p>${{ price[1] }}</p>
          </span>
          <span class="priceItem">
            <button @click="addTime3" :style="changeColor2">
              {{ timeMsg[2] }}mins
            </button>
            <p>${{ price[2] }}</p>
          </span>
          <span class="priceItem">
            <button @click="addTime4" :style="changeColor3">
              {{ timeMsg[3] }}mins
            </button>
            <p>${{ price[3] }}</p>
          </span>
        </div>
        <h3 class="t2">課程安排</h3>
        <div class="d-flex btnGroup1">
          <button @click="online" :style="changeColor4">
            {{ timeMsg1[0] }}
          </button>
          <button @click="local" :style="changeColor5">
            {{ timeMsg1[1] }}
          </button>
        </div>
        <div class="d-flex totalPrice">
          <p>時間:{{ myCart.addpsTime }}mins</p>
          <p>價格:NT${{ myCart.addCost }}</p>
          <p>地點:{{ myCart.online }}{{ myCart.local }}</p>
        </div>
        <div class="d-flex cart pushGroup">
          <button @click="removeCart">清除</button>
          <button @click="cartTo">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {};
  },
  props: ["the-lesson", "the-time", "the-content", "the-cost", "the-tip"],
  mounted() {},
  data() {
    return {
      timeMsg: ["30", "60", "90", "120"],
      timeMsg1: ["線上", "實體"],
      time: "",
      addLesson: "",
      isClick: "true",
      isClick1: "true",
      objColor: {
        coloritem1: "rgba(255, 255, 255, 0.25)",
        coloritem2: "rgba(255, 255, 255, 0.25)",
        coloritem3: "rgba(255, 255, 255, 0.25)",
        coloritem4: "rgba(255, 255, 255, 0.25)",
        coloritem5: "rgba(255, 255, 255, 0.25)",
        coloritem6: "rgba(255, 255, 255, 0.25)",
      },
    };
  },
  methods: {
    cartTo() {
      this.$router.push("/shoppingCart");
      this.isClick = "true";
      localStorage.setItem("myLesson", `${this.theLesson}`);
    },
    addTime1() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime");
        this.objColor.coloritem1 = "rgba(255, 255, 255, 0.5)";
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    addTime2() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime1");
        this.objColor.coloritem2 = "rgba(255, 255, 255, 0.5)";
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    addTime3() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime2");
        this.objColor.coloritem3 = "rgba(255, 255, 255, 0.5)";
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    addTime4() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime3");
        this.objColor.coloritem4 = "rgba(255, 255, 255, 0.5)";
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    online() {
      if (this.isClick == "true") {
        this.$store.commit("addStoreonline");
        this.objColor.coloritem5 = "rgba(255, 255, 255, 0.5)";
        localStorage.setItem("myLocation", `${this.myCart.online}`);
        this.isClick = "false";
      } else {
        this.isClick = "false";
      }
    },
    local() {
      if (this.isClick == "true") {
        this.$store.commit("addStoreonlocal");
        this.objColor.coloritem6 = "rgba(255, 255, 255, 0.5)";
        localStorage.setItem("myLocation", `${this.myCart.local}`);
        this.isClick = "false";
      } else {
        this.isClick = "false";
      }
    },

    removeCart() {
      this.$store.commit("removeStoreInfol");
      this.isClick1 = "true";
      this.isClick = "true";
      this.objColor.coloritem1 = "rgba(255, 255, 255, 0.25)";
      this.objColor.coloritem2 = "rgba(255, 255, 255, 0.25)";
      this.objColor.coloritem3 = "rgba(255, 255, 255, 0.25)";
      this.objColor.coloritem4 = "rgba(255, 255, 255, 0.25)";
      this.objColor.coloritem5 = "rgba(255, 255, 255, 0.25)";
      this.objColor.coloritem6 = "rgba(255, 255, 255, 0.25)";
      localStorage.removeItem("myLocation");
    },
  },
  computed: {
    changeColor() {
      return {
        background: this.objColor.coloritem1,
      };
    },
    changeColor1() {
      return {
        background: this.objColor.coloritem2,
      };
    },
    changeColor2() {
      return {
        background: this.objColor.coloritem3,
      };
    },
    changeColor3() {
      return {
        background: this.objColor.coloritem4,
      };
    },
    changeColor4() {
      return {
        background: this.objColor.coloritem5,
      };
    },
    changeColor5() {
      return {
        background: this.objColor.coloritem6,
      };
    },

    myCart() {
      return this.$store.state.myCart;
    },
    lesson() {
      return this.$store.state.pushLesson;
    },
    price() {
      return this.$store.state.psCost;
    },
  },
};
</script>
<style scoped>
* {
  color: #eee;
}
.shopItem {
  height: 535px;
  text-align: center;
  margin: 0 0.5rem 0;
}
.card {
  padding: 30px 30px 20px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 1rem;
}
/* .btnGroup{
  margin: auto;
} */
.btnGroup,
.btnGroup1 {
  flex-direction: column;
  margin: auto;
}
h3 {
  text-align: center;
}
.btnGroup button,
.btnGroup1 button,
.cart button {
  width: 200px;
  height: 50px;
  display: block;
  background: rgba(217, 217, 217, 0.25);
  margin: 10px;
  border-radius: 10px;
  border: none;
}
.cart button {
  margin: 30px auto;
}

.image img {
  padding: 0 30px 30px;
}
.swTxt {
  padding: 0 20px 0px;

  /* text-align: left; */
}
.swTxt1 {
  padding: 0 20px 10px;
  /* text-align: left; */
}
.t2 {
  margin-top: 30px;
}
.ordeerChoice {
  /* height: 460px; */
  margin: 0 0.5rem;
  padding: 30px 40px 0;
}
p {
  margin-bottom: 0.5rem;
}
.priceItem p {
  text-align: center;
}
.totalPrice {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;
}
.totalPrice p {
  margin: 10px 0px;
}
.pushGroup {
  /* text-align: center; */
  justify-content: center;
}
.pushGroup button {
  margin: 10px 10px 30px;
}

@media screen and (min-width: 992px) {
  .myorder {
    display: flex;
  }
  .ordeerChoice {
    /* height: 520px; */
    margin: 0 0.5rem;
    padding: 50px 40px 0;
  }
  .btnGroup button,
  .btnGroup1 button,
  .cart button {
    width: 140px;
    height: 50px;
    display: block;
    background: rgba(217, 217, 217, 0.25);
    margin: 20px;
    border-radius: 10px;
    border: none;
  }

  .cart button {
    margin: 10px auto;
  }
  .btnGroup,
  .btnGroup1 {
    flex-direction: row;
    /* justify-content: space-between; */
  }
  .swTxt {
    padding: 0 40px 0px;

    /* text-align: left; */
  }
  .swTxt1 {
    padding: 0 40px 10px;
    /* text-align: left; */
  }
  .btnGroup1 {
    padding: 0 10px;
    /* margin: 0 0 0 20px; */
  }

  .totalPrice {
    flex-direction: row;
    margin: 10px 10px 20px;
    justify-content: center;
  }
  .totalPrice p {
    margin: 0px 30px;
  }
  .pushGroup {
    margin: 0 40px 30px;
  }
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>