<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center hotProduct">
        <h2>熱門占卜師</h2>
        <div class="col-12 col-lg-3 item">
          <div class="card">
            <div class="pic">
              <!-- <img src="https://picsum.photos/300/300?random=1" /> -->
              <img src="../assets/img/人類圖.jpg" width="300" height="300">
              <h3>{{ msgt1[0] }}</h3>
            </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
              <div class="pic">
                  <!--<img src="https://picsum.photos/300/300?random=2" />-->
                  <img src="../assets/img/八字.jpg" width="300" height="300">
                  <h3>{{ msgt1[0] }}</h3>
              </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
            <div class="pic">
              <!--<img src="https://picsum.photos/300/300?random=3" />-->
                <img src="../assets/img/塔羅牌.png" width="300" height="300">
                <h3>{{ msgt1[0] }}</h3>
            </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
              <div class="pic">
                  <!--<img src="https://picsum.photos/300/300?random=4" />-->
                  <img src="../assets/img/星座命盤.png" width="300" height="300">
                  <h3>{{ msgt1[0] }}</h3>
              </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center anyChoice">
        <div class="searchGroup">
          <h2>依分類選擇</h2>
          <div class="inputSearch">
            <select class="custom-select" id="inputGroupSelect02">
              <option selected>分類搜尋</option>
              <option value="1">八字</option>
              <option value="2">人類圖</option>
              <option value="3">紫微斗數</option>
              <option value="4">塔羅占卜</option>
              <option value="5">生命靈數</option>
              <option value="6">星座命盤</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
              <div class="pic">
                  <!--<img src="https://picsum.photos/300/300?random=5" />-->
                  <img src="../assets/img/生命靈數.png" width="300" height="300">
                  <h3>{{ msgt1[0] }}</h3>
              </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
              <div class="pic">
                  <!--<img src="https://picsum.photos/300/300?random=6" />-->
                  <img src="../assets/img/紫微斗數.jpg" width="300" height="300">
                  <h3>{{ msgt1[0] }}</h3>
              </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
              <div class="pic">
                  <!--<img src="https://picsum.photos/300/300?random=7" />-->
                  <img src="../assets/img/人類圖.jpg" width="300" height="300">
                  <h3>{{ msgt1[0] }}</h3>
              </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 item">
          <div class="card">
              <div class="pic">
                  <!--<img src="https://picsum.photos/300/300?random=8" />-->
                  <img src="../assets/img/星座命盤.png" width="300" height="300">
                  <h3>{{ msgt1[0] }}</h3>
              </div>

            <div class="d-flex evaluate">
              <span
                ><p>{{ msgt2 }}</p></span
              >
              <span
                ><p>評價:{{ count[2] }}</p></span
              >
            </div>
            <div class="btnshop">
              <button @click="shop">進入商店</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgt1: ["唐綺陽占星幫", "唐綺陽", "占星幫"],
      msgt2: "塔羅及西洋占星",
      count: [0, 1, 2, 3],
    };
  },
  methods: {
    onsubmit() {
      this.$router.push("/productShop");
    },
    shop() {
      this.$router.push("/productShop");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  background: #000235;
  color: #fff;
}
.hotProduct {
  margin: 10px 0 0;
}
.anyChoice {
  margin: 20px 0;
}
.mycard {
  margin: 0 30px;
}
.item {
  text-align: center;
}
.evaluate {
  justify-content: center;
  margin-bottom: 10px;
}
.hotProduct h2,
.anyChoice h2 {
  padding: 20px 20px 0px 30px;
  color: #62ff36;
}

.picture{
  width:300px;
  height:300px;
}

.hotProduct button,
.anyChoice button {
  background: rgba(217, 217, 217, 0.25);
  width: 240px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.hotProduct img,
.anyChoice img {
  border-radius: 50%;
  width: 100%;
  padding: 60px 60px 40px;
}

.hotProduct h3,
.anyChoice h3 {
  margin: 0px 0 10px;
}

.hotProduct span,
.anyChoice span {
  margin: 0 30px;
}

.custom-select {
  width: 150px;
  height: 35px;
}
.searchGroup {
  align-items: center;
  display: flex;
}
.btnshop {
  text-align: center;
}

@media screen and (max-width: 992px) {
  .hotProduct h2 {
    text-align: center;
    padding: 20px 0 0px;
  }
  .anyChoice h2 {
    text-align: center;
    padding: 20px 0 0;
    margin-bottom: 20px;
  }
  .searchGroup {
    flex-direction: column;
    text-align: center;
  }
  .hotProduct img,
  .anyChoice img {
    border-radius: 50%;
    width: 100%;
    padding: 60px 50px 40px;
  }
}
</style>
