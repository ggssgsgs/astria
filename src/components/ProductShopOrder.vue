<template>
  <div class="myorder">
    <div class="col-12 col-lg-4">
      <div class="d-flex">
        <div class="card shopItem">
          <div class="image">
            <img src="https://picsum.photos/200/200?random=1" />
          </div>
          <h4>塔羅牌真命天子陣</h4>
          <p>30 mins NTD$1,000 起</p>
          <p class="swTxt">
            透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！
          </p>
          <p class="swTxt1"> ⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-8">
      <div class="card ordeerChoice">
        <h3>課程時數</h3>
        <div class="d-flex btnGroup">
          <button @click="pushTime1">{{ timeMsg[0] }}mins</button>
          <button @click="pushTime2">{{ timeMsg[1] }}mins</button>
          <button @click="pushTime3">{{ timeMsg[2] }}mins</button>
          <button @click="pushTime4">{{ timeMsg[3] }}mins</button>
        </div>
        <h3 class="t2">課程安排</h3>
        <div class="d-flex btnGroup">
          <button>{{ timeMsg1[0] }}</button>
          <button>{{ timeMsg1[1] }}</button>
        </div>
        <div class="cart">
          <button @click="cartTo">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeMsg: ["30", "60", "90", "120"],
      timeMsg1: ["線上", "實體"],
      time:"",
    };
  },
  methods: {
    cartTo() {
      this.$router.push("/shoppingCart");
    },
    pushTime1(){
      this.push(this.timeMsg[0])
    },
    pushTime2(){
      this.push(this.timeMsg[1])
    },
    pushTime3(){
      this.push(this.timeMsg[2])
    },
    pushTime4(){
      this.push(this.timeMsg[3])
    }

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
  width: 100px;
  height: 50px;
  display: block;
  background: rgba(217, 217, 217, 0.25);
  margin: 10px;
  border-radius: 10px;
  border: none;
}
.cart button {
  margin: 50px auto;
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
.swTxt1{
 padding: 0 60px 10px;
  /* text-align: left; */
}
.t2 {
  margin-top: 30px;
}
.ordeerChoice {
  height: 420px;
  margin: 0 0.5rem;
  padding: 30px 40px 0;
}
p {
  margin-bottom: 0.5rem;
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
    width: 150px;
    height: 50px;
    display: block;
    background: rgba(217, 217, 217, 0.25);
    margin: 20px;
    border-radius: 10px;
    border: none;
  }
  .cart button {
    margin: 60px auto;
  }
  .btnGroup {
    justify-content: left;
  }
  .swTxt {
  padding: 0 40px 0px;
  
  /* text-align: left; */
}
.swTxt1{
 padding: 0 40px 10px;
  /* text-align: left; */
}
}
</style>