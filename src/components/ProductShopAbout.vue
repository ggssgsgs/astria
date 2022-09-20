<template>
  <div class="col-12 col-lg-3 itemPic">
    <div class="pic">
      <img src="https://picsum.photos/300/300?random=1" />
    </div>
  </div>
  <div class="col-12 col-lg-9 itemTxt">
    <div class="card txt">
      <div class="d-flex title">
        <h2>{{ msgt1 }}</h2>
        <p class="p1">台灣,{{ msglocation }}</p>
      </div>
      <h4>關於我</h4>
      <p>{{ msgp1 }}</p>
      <div><a href="#">ig</a></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logonType: "code",
      msgt1: "思妤塔羅占卜工作坊",
      msglocation: "台北",
      msgp1:
        "世新大學行政管理所 碩士畢業，大學一入學就加入占星社，開始不務正業，大三大四擔任社長，畢業後還身兼社團指導老師一職。對西洋星盤、塔羅、瑜珈感到興趣，師承唐綺陽，期待在亂世中透過占星神秘學，為在亂流中的大家帶來一根浮木。",
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
  border-radius: 50%;
}
.about {
  border-bottom: 1px solid #eee;
  padding: 20px 20px 0;
}
.itemPic {
  padding: 20px 50px 0px;
}
.itemPic img {
  padding: 50px;
}
.txt {
  padding: 40px 50px 20px;
}
.title {
  justify-content: Space-between;
}
.p1 {
  padding: 20px 0 0;
}
h2 {
  margin-bottom: 15px;
}
h3 {
  margin-bottom: 15px;
}

.card {
  height: 380px;
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
}

</style>