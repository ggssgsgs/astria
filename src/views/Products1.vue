<template>
  <div class="body-cintent">
    <!-- 熱門占卜 -->
    <div class="hotProduct">
      <div class="wrap">
        <div class="tittle">
          <h1>熱門占卜</h1>
        </div>
        <div class="item-group" @mouseenter="om">
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/200?" alt="" />
            </div>
            <div class="txt-group">
              <h3>{{ msgt1[0] }}</h3>
              <div class="hotCount">
                <p>{{ msgt2 }}</p>
                <span><img src="https://picsum.photos/30/30?" alt="" /></span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/200?" alt="" />
            </div>
            <div class="txt-group" @mouseenter="om">
              <h3>{{ msgt1[0] }}</h3>
              <div class="hotCount">
                <p>{{ msgt2 }}</p>
                <span><img src="https://picsum.photos/30/30?" alt="" /></span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/200?" alt="" />
            </div>
            <div class="txt-group">
              <h3>{{ msgt1[0] }}</h3>
              <div class="hotCount">
                <p>{{ msgt2 }}</p>
                <span><img src="https://picsum.photos/30/30?" alt="" /></span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/200?" alt="" />
            </div>
            <div class="txt-group">
              <h3>{{ msgt1[0] }}</h3>
              <div class="hotCount">
                <p>{{ msgt2 }}</p>
                <span><img src="https://picsum.photos/30/30?" alt="" /></span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/200?" alt="" />
            </div>
            <div class="txt-group">
              <h3>{{ msgt1[0] }}</h3>
              <div class="hotCount">
                <p>{{ msgt2 }}</p>
                <span><img src="https://picsum.photos/30/30?" alt="" /></span>
                <span>評價:{{ count[2] }}</span>
              </div>
              <button class="hotButton" @click="onsubmit">即刻探索</button>
            </div>
          </div>
          <div class="item">
            <div class="pic">
              <img src="https://picsum.photos/300/200?" alt="" />
            </div>
            <div class="txt-group">
              <h3>{{ msgt1[0] }}</h3>
              <div class="hotCount">
                <p>{{ msgt2 }}</p>
                <span><img src="https://picsum.photos/30/30?" alt="" /></span>
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
    om(){
        let container = document.querySelector(".item-group");
      container.addEventListener("wheel", (event) => {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.body-cintent {
  text-align: center;
}
::-webkit-scrollbar {
    display:none
    }

.item .pic img {
  width: 100%;
  
  
}
.hotProduct {
  margin-top: 40px;
}
.hotCount {
  display: flex;
  justify-content: center;
}

.hotButton {
  width: 90%;
}
.item-group {
  width: 100%;
  margin:40px auto;
  padding: 0 30px;
  overflow-x: scroll;
}
.item {
  margin: 0 20px 40px;
}
@media screen and (min-width: 765px) {
  .item-group {
    display: flex;
    /* overflow-x: scroll; */
  }
  .item{
    /* width: 30%;
    flex-shrink: 0; */

  }

}
</style>
