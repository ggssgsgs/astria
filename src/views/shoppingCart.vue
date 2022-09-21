<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <h2>購物車</h2>
      <div class="row justify-content-center myCart">
        <div class="col-12 col-lg-8">
          <div class="tittl">
            <h3>選擇結帳商品</h3>
            <div class="cart">
              <h4>{{ msgt1 }}</h4>
              <div class="item">
                <div class="pic">
                  <p>{{msgt2}}{{timeMsg1}}</p>
                  <div class="cost">NT${{cost}}</div>
                </div>
              </div>
              <div class="pic">
                <p>{{msgt2}}{{timeMsg1}}</p>
                <div class="cost">NT${{cost}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="tittl">
            <h3>選擇付款方式</h3>
            <div class="cart">
              <h4>訂單摘要</h4>
              <div class="item">
                <p>商品數量</p>
                <p>{{quantity}}</p>
              </div>
              <div class="item">
                <p>商品金額總計</p>
                <p>{{totalCost}}</p>
              </div>
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
      msgt1: "思妤塔羅占卜工作坊",
      msgt2:"塔羅牌真命天子陣",
      timeMsg1:"30min",
      cost:"500",
      quantity:"2",
      totalCost:"2500",
      code:'',
    };
  },
};
</script>