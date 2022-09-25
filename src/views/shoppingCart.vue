<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row">
        <h2>購物車</h2>
        <div class="col-12 col-lg-8">
          <h3>選擇結帳商品</h3>
          <div class="itemgroup">
            <div class="tittl">
              <h4>{{ myCart.shopNmae }}</h4>
            </div>

            <shopping-cart-card></shopping-cart-card>

            <div class="memo">
              <textarea v-model="theMemo" name="" id="" cols="60" rows="5">
              </textarea>
            </div>

            <div class="btnGroup">
              <button @click.prevent="onsubmit">送出</button>
              <button @click.prevent="remove">清除</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 pay1">
          <h3>選擇付款方式</h3>
          <div class="itemgroup">
            <div class="tittl">
              <h4>訂單摘要</h4>
            </div>
            <div class="count d-flex">
              <p>商品數量</p>
              <p>{{ myCart.psCount }}項</p>
            </div>
            <div class="total d-flex">
              <p>商品總金額</p>
              <p>NT${{ myCart.addCost }}</p>
            </div>
            <div class="tip">
              <p>
                提醒您： 台灣信用卡推薦使用EC
                Pay結帳，使用PayPal結帳時，將酌收平台手續費。
              </p>
            </div>
            <div class="image">
              <img src="../assets/img/icons/pay1.png" alt="" />
            </div>
            <div class="image">
              <img src="../assets/img/icons/pay2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shoppingCartCard from "../components/shoppingCartCard.vue";
import {useStore} from "vuex";
export default {
  setup() {
    const store = useStore();
    return {};
  },
  components: {
    shoppingCartCard,
  },
  mounted() {
    this.TheLesson = localStorage.getItem("myLesson");
    this.email = localStorage.getItem("myemail");
    this.TheLocationl = localStorage.getItem("myLocation");
  },
  data() {
    return {
      theMemo: "",
      email: "",
      TheLesson: "",
      TheLocation: "",
    };
  },
  methods: {
    remove() {
      this.$store.commit("removeStoreInfol");
      localStorage.removeItem("myLesson");
    },
    onsubmit() {
      alert(this.myCart.addpsTime);
      alert(this.theMemo);
      alert(this.email);
      alert(this.TheLesson);
      alert("fetch");
      fetch(" https://astria.sutsanyuan.com/Astria_api/CreateReserve", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset =utf-8",
        },
        body: JSON.stringify({
          Lesson: this.TheLesson,
          Time: this.myCart.addpsTime,
          Select: this.TheLocationl,
          Cost: this.myCart.addCost,
          Total: this.myCart.addCost,
          Email: this.email,
          PEmail: "a1@gmail.com",
          Memo: this.theMemo,
          Date: "1",
        }),
      })
        .then(function (re) {
          return re.json();
        })
        .then((body) => {
          console.log(body);
          alert("我到fetch");
        })
        .catch(function (err) {
          console.log(err);
        });

      localStorage.removeItem("myLesson");
      localStorage.removeItem("myLocation");
      alert("我到local");
    },
  },
  computed: {
    myCart() {
      return this.$store.state.myCart;
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 0 0 20px 20px;
}
h3 {
  margin: 0 0 15px 20px;
}

.itemgroup {
  height: 540px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
}
.tittl {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}
.count {
  justify-content: space-between;
}
.total {
  justify-content: space-between;
}

.itemgroup .tip {
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
}
img {
  width: 100%;
}
.image {
  padding: 20px 50px;
}
.row {
  margin-bottom: 60px;
}
button {
  width: 120px;
  height: 50px;
  background: rgba(217, 217, 217, 0.25);
  margin: 40px;
  border-radius: 10px;
}
.btnGroup {
  text-align: center;
}
.memo {
  width: 20%;
  padding-top: 20px;
}
textarea {
  color: #666;
}
</style>
