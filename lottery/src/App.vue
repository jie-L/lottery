<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$axios
      .get("http://elm.cangdu.org/v1/pois?type=nearby", {
        params: {
          keyword: '北京'
        }
      })
      .then(data => {
        console.log(data);
      });
  }
}
</script>

<style>
*{
  margin: 0;padding: 0;
}
</style>
