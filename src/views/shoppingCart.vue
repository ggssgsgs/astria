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
            <div class="card">
              <div class="item d-flex">
                <div class="pic">
                  <img src="https://picsum.photos/200/200?random=1" />
                </div>
                <div class="txt d-flex">
                  <p>{{ TheLesson }}</p>
                  <p>{{ TheTime }}mins</p>
                  <p>NT${{ TheCost }}</p>
                  <p>{{ myCart.online }}{{ myCart.local }}</p>
                </div>
              </div>
            </div>
            <div class="memo">
              <h4>商品備註</h4>
              <textarea v-model="theMemo" cols="42" rows="6"></textarea>
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
              <p>{{ this.TheTime }}項</p>
            </div>
            <div class="total d-flex">
              <p>商品總金額</p>
              <p>NT${{ this.TheCost }}</p>
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
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {};
  },

  mounted() {
    this.email = localStorage.getItem("myemail");
    this.TheLocation = localStorage.getItem("myLocation");
    this.TheLesson = localStorage.getItem("myLesson");
    this.TheTime = localStorage.getItem("myTime");
    this.TheCost = localStorage.getItem("myCost");
  },
  data() {
    return {
      theMemo: "",
      email: "",
      TheLesson: "",
      TheLocation: "",
      TheTime: "",
      TheCost: "",
    };
  },
  methods: {
    remove() {
      this.$store.commit("removeStoreInfol");
      this.TheLesson = "";
      this.TheTime = "";
      this.TheLocation = "";
      this.TheCost = "";
      this.theMemo = "";
      localStorage.removeItem("myLesson");
      localStorage.removeItem("myLocation");
      localStorage.removeItem("myTime");
      localStorage.removeItem("myCost");
    },
    onsubmit() {
      // alert(this.TheLesson)
      // alert(this.TheTime)
      // alert(this.TheLocation)
      // alert(this.TheCost)
      // alert(this.TheLesson)
      // alert(this.email)
      // alert(this.theMemo)

      fetch(" https://astria.sutsanyuan.com/Astria_api/CreateReserve", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset =utf-8",
        },
        body: JSON.stringify({
          Lesson: this.TheLesson,
          Time: this.TheTime,
          Select: this.TheLocation,
          ProCost: this.TheCost,
          Total: this.TheCost,
          Email: this.email,
          PEmail: "aa@gmail.com",
          Memo: this.theMemo,
          Date: "1",
        }),
      })
        .then(function (re) {
          return re.json();
        })
        .then((body) => {
          console.log(body);
        })
        .catch(function (err) {
          console.log(err);
        });

      localStorage.removeItem("myLesson");
      localStorage.removeItem("myLocation");
      localStorage.removeItem("myCost");
      localStorage.removeItem("myTime");
      this.$router.push("/productShop");
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
  /* height: 540px; */
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
  margin: 20px;
  border-radius: 10px;
}
.btnGroup {
  text-align: center;
}
.memo {
  width: 100%;
  padding-top: 20px;
  /* text-align: center; */
}
.memo h4 {
  margin: 20px 0;
  text-align: left;
}
textarea {
  width: 100%;
  color: #666;
  border-radius: 10px;
  padding-left: 10px;
}
h3 {
  margin-top: 20px;
}
.card {
  background: rgba(255, 255, 255, 0.25);
}
.txt {
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px auto;
  padding-top: 30px;
  
}
p {
  letter-spacing: 0.1rem;
}
.tip p {
  padding: 20px 0;
}
@media screen and (min-width: 992px) {
  textarea {
    width: 60%;
    color: #666;

  }
  button {
    width: 120px;
    height: 50px;
    background: rgba(217, 217, 217, 0.25);
    margin: 30px;
    border-radius: 10px;
  }
  .itemgroup {
    height: 620px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px;
  }
  .memo h4 {
    margin: 0 0 20px;
    text-align: left;
  }
  .txt p {
    padding: 0 30px;
  }
  .image {
    padding: 40px 50px 20px;
  }
  .txt {
    /* align-items: center; */
    /* margin: auto; */
    flex-direction: row;
    padding-top: 0;
    /* text-align: center; */
  }
  .itemgroup p {
    margin: 10px;
  }
}
</style>
