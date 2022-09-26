<template>
  <div class="col-12 col-lg-3 itemPic">
    <div class="pic">
      <img src="https://picsum.photos/200/200?random=1" />
    </div>
  </div>
  <div class="col-12 col-lg-9 itemTxt">
    <div class="card txt">
      <div class="d-flex title">
        <h2>{{ theShop }}</h2>
        <p class="p1">台灣,{{ theLocation }}</p>
      </div>
      <h4>關於我</h4>
      <p>{{ thePcontent }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["the-shop", "the-location", "the-pcontent"],
  data() {
    return {
      logonType: "code",
      msgt1: "",
      msglocation: "",
      msgp1: "",
      lessons: [],
    };
  },
  methods: {
    orderTo() {
      if (this.$data.logonType === "order") {
        this.$data.logonType = "order";
      }
    },
  },
};
</script>
<style scoped>
* {
  color: #eee;
}
.pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 30px 50px 30px;
}
.about {
  border-bottom: 1px solid #eee;
  padding: 20px 20px 0;
}
.itemPic {
  padding: 0px 50px 0px;
}

.txt {
  padding: 40px 50px 20px;
}
.title {
  justify-content: Space-between;
}

h2 {
  margin-bottom: 15px;
}
h3 {
  margin-bottom: 15px;
}

.card {
  /* height: 340px; */
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0 0.5rem;
}
p {
  letter-spacing: 0.1rem;
}

@media screen and (min-width: 992px) {
  .itemPic {
    padding: 40px 50px 30px;
  }
  .itemPic img {
    padding: 0px;
  }
  p {
    letter-spacing: 0.1rem;
  }
  .txt {
    padding: 40px 50px;
  }
  .txt {
    padding: 40px 50px 20px;
  }
  .card {
    height: 300px;
    background: rgba(255, 255, 255, 0.25);
    margin: 0 0 0.5rem;
  }
  .p1 {
    padding: 20px 0 0;
  }
}
</style>