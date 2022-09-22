<template>
  <div v-for="order in this.$store.state.myOrders">
    <div class="box my-5 mx-1 mx-md-5">
      <div class="topPart">
        <div class="d-flex justify-content-between">
          <div class="fs-6 pt-2 ps-3 pb-1">
            訂單編號：{{ order.rID }}
            <span v-show="order.isOver">（已結案）</span>
          </div>
          <div class="fs-6 pt-2 pe-3 pb-1">
            <span class="mx-2">聯絡賣家</span
            ><span class="mx-2 me-0" v-show="!order.isOver">預約時間</span
            ><span class="mx-2 me-0" v-show="order.isOver">占卜紀錄</span>
          </div>
        </div>
      </div>
      <div class="d-flex content">
        <div class="p-4 ps-3">
          <img src="https://random.imagecdn.app/100/100" />
        </div>
        <div class="flex-grow-1 d-flex flex-column justify-content-center">
          <h5 class="text-start mt-2">{{ order.ProLesson }}</h5>
          <div class="d-flex flex-wrap justify-content-start">
            <div class="text-start mx-4 ms-0">
              <h6>老師名稱：{{ order.ProName }}</h6>
              <h6>課程總時數：{{ order.LesCount * 30 }} mins</h6>
              <h6>課程總價：NTD${{ order.LesCount * order.ProCost }}</h6>
            </div>
            <div class="text-start mx-4 ms-0">
              <h6>購買日期：{{ order.purchaseDate }}</h6>
              <h6>課程安排：{{ order.UserSelect }}</h6>
              <h6>預約日期：{{ order.ProTime }}</h6>
            </div>
            <div class="text-start mx-4 ms-0">
              <h6>備註：無</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useStore} from "vuex";
export default {
  mounted() {
    //---dispatch
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.box {
}
.topPart {
  border-radius: 10px 10px 0px 0px;
  background: #ff7bac;
}
.content {
  border-radius: 0px 0px 10px 10px;
  background: #dadada;
}
img {
  border-radius: 50%;
}
.fs-6 {
  font-size: 14px !important;
}
h5 {
  font-size: 18px;
  color: #000235;
}
h6 {
  font-size: 14px;
  color: #000235;
  font-weight: 350;
}
.color-navy {
  color: #000235;
}
</style>
