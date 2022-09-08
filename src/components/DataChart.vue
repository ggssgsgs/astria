<template>
  <div>
    <table></table>
    <button @click="$store.dispatch('getMyChartData')">get data</button>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("DataChart mounted");
    this.$store.dispatch("getMyChartData");
  },
};
</script>
