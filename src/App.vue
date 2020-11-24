<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/" exact="">首页</router-link>
    <router-link to="/hi" active-class="go">你好</router-link>
    <router-link to="hello">世界</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.router-link-active {
  color:#f99;
}
</style>
