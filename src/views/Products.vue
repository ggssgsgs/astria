<template>
  <div class="body-cintent">
    <!-- 熱門占卜 -->
    <div class="hotProduct">
      <div class="wrap">
        <div class="tittle">
          <h1>熱門占卜</h1>
        </div>
        <div class="item-group">
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group" @mouseenter="om">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>

                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>

          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>

                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 依分類選擇 -->
    <div class="anyChoice">
      <div class="wrap">
        <div class="tittle">
          <h1>依分類選擇</h1>
        </div>
        <div class="item-group">
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group" @mouseenter="om">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>

                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>

          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/300?" alt="" />
            </div>
            <div class="txt-group">
              <h2>{{ msgt1[0] }}</h2>
              <div class="hotCount">
                <span>{{ msgt2 }}</span>

                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
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
body {
  background: #000235;
}

/* ::-webkit-scrollbar {
  display: none;
} */

.item .pic img {
  width: 100%;
  border-radius: 50%;
}
.hotProduct {
  padding-top: 60px;
}
.anyChoice {
  margin-top: 40px;
}
.item-group .hotCount {
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  margin-bottom: 12px;
}
.item-group .txt-group {
  letter-spacing: 0.1rem;
}
.item-group .hotCount span {
  font-size: 20px;
  letter-spacing: 0.05rem;
}

.hotButton {
  background: #999;
  width: 70%;
  height: 50px;
  font-size: 20px;
  letter-spacing: 0.1rem;
}

.tittle {
  width: 100%;
  text-align: center;
  letter-spacing: 0.1rem;
}
.item-group {
  width: 100%;
  margin: 60px auto;
  padding: 0 70px;
  /* overflow-x: scroll; */
}
.item {
  margin: 0 40px 40px;
  text-align: center;
}
.item-group h2 {
  margin: 12px 0;
}

@media screen and (min-width: 765px) {
  .tittle {
    width: 100%;
    text-align: left;
    padding-left: 120px;
  }
  .item-group {
    display: flex;
    /* overflow-x: scroll; */
  }
  .item {
    width: 100%;
    /* flex-shrink: 0;  */
  }
}
</style>
