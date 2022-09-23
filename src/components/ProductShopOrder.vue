<template>
  <div class="myorder">
    <div class="col-12 col-lg-4">
      <div class="d-flex">
        <div class="card shopItem">
          <div class="image" id="mycard">
            <img src="https://picsum.photos/200/200?random=1" />
          </div>
          <h4>{{ lesson.lesson[0] }}</h4>
          <p>30 mins NTD$1,000 起</p>
          <p class="swTxt">
            透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
          </p>
          <p class="swTxt1">
            ⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠
          </p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="card ordeerChoice">
        <h3>課程時數</h3>
        <div class="d-flex btnGroup">
          <span class="priceItem">
            <button @click="addTime1">{{ timeMsg[0] }}mins</button>
            <p>${{ price[0] }}</p>
          </span>
          <span class="priceItem">
            <button @click="addTime2">{{ timeMsg[1] }}mins</button>
            <p>${{ price[1] }}</p>
          </span>
          <span class="priceItem">
            <button @click="addTime3">{{ timeMsg[2] }}mins</button>
            <p>${{ price[2] }}</p>
          </span>
          <span class="priceItem">
            <button @click="addTime4">{{ timeMsg[3] }}mins</button>
            <p>${{ price[3] }}</p>
          </span>
        </div>
        <h3 class="t2">課程安排</h3>
        <div class="d-flex btnGroup btn1">
          <button @click="online">{{ timeMsg1[0] }}</button>
          <button @click="local">{{ timeMsg1[1] }}</button>
          <div class="d-flex totalPrice">
            <p>時間:{{ myCart.addpsTime }}mins</p>
            <p>價格:NT${{ myCart.addCost }}</p>
          </div>
        </div>
        <div class="d-flex cart">
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
  data() {
    return {
      timeMsg: ["30", "60", "90", "120"],
      timeMsg1: ["線上", "實體"],
      time: "",
      addLesson: "",
      isClick: "true",
      isClick1: "true",
    };
  },
  methods: {
    cartTo() {
      this.$router.push("/shoppingCart");
      this.isClick = "true";
    },
    addTime1() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime");
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    addTime2() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime2");
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    addTime3() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime3");
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    addTime4() {
      if (this.isClick1 == "true") {
        this.$store.commit("addStorespTime4");
        this.isClick1 = "false";
      } else {
        this.isClick1 = "false";
      }
    },
    online() {
      if (this.isClick == "true") {
        this.$store.commit("addStoreonline");
        this.isClick = "false";
      } else {
        this.isClick = "false";
      }
    },
    local() {
      if (this.isClick == "true") {
        this.$store.commit("addStoreonlocal");
        this.isClick = "false";
      } else {
        this.isClick = "false";
      }
    },

    removeCart() {
      this.$store.commit("removeStoreInfol");
      this.isClick1 = "true";
      this.isClick = "true";
    },
  },
  computed: {
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
  text-align: center;
  margin: 0 0.5rem 0;
}
.card {
  padding: 30px 30px 20px;
  background: rgba(255, 255, 255, 0.25);
  margin-bottom: 1rem;
}
.btnGroup {
  justify-content: space-between;
}

.btnGroup button,
.cart button {
  width: 80px;
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
h3 {
  margin-bottom: 10px;
}
.image img {
  padding: 0 30px 30px;
}
.swTxt {
  padding: 0 60px 0px;

  /* text-align: left; */
}
.swTxt1 {
  padding: 0 60px 10px;
  /* text-align: left; */
}
.t2 {
  margin-top: 30px;
}
.ordeerChoice {
  height: 460px;
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
  padding: 20px 0;
}

@media screen and (min-width: 992px) {
  .myorder {
    display: flex;
  }
  .ordeerChoice {
    height: 520px;
    margin: 0 0.5rem;
    padding: 50px 40px 0;
  }
  .btnGroup button,
  .cart button {
    width: 120px;
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
  .btnGroup {
    justify-content: space-around;
  }
  .swTxt {
    padding: 0 40px 0px;

    /* text-align: left; */
  }
  .swTxt1 {
    padding: 0 40px 10px;
    /* text-align: left; */
  }
  .btn1 {
    padding: 0 10px;
  }

  .totalPrice {
    width: 45%;
    margin: 10px 10px 20px;
    justify-content: space-around;
  }
}
</style>