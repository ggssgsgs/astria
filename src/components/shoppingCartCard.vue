<template>
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
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {};
  },
  mounted() {
    this.TheLesson = localStorage.getItem("myLesson");
    this.TheTime = localStorage.getItem("myTime");
    this.TheCost = localStorage.getItem("myCost");
  },
  data() {
    return {
      TheLesson: "",
      TheTime:'',
      TheCost:'',

    };
  },

  methods: {},
  computed: {
    myCart() {
      return this.$store.state.myCart;
    },
    addLesson() {
      return this.$store.state.pushLesson;
    },
  },
};
</script>
<style scoped>
.card {
  background: rgba(255, 255, 255, 0.25);
}
.txt {
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
}
img {
  width: 100%;
}
p {
  letter-spacing: 0.1rem;
  margin: 20px;
}
.item {
  flex-direction: column;
}
@media screen and (min-width: 992px) {
  .txt {
    align-items: center;
    /* justify-content: space-between; */
    margin: auto;
    flex-direction: row;
  }
  .item {
    flex-direction: row;
  }
  p {
    letter-spacing: 0.1rem;
    margin: 30px;
  }
}
</style>