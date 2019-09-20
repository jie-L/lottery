<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$axios
      .get("/index/kuai", {
        params: {
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
html,body,#app{
  height: 100%;
}
</style>
