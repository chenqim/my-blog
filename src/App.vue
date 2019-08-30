<template>
  <div id="app">
    <m-header></m-header>
    <router-view />
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from './components/m-header.vue'
import mFooter from './components/m-footer.vue'
export default {
  name: 'App',
  components: {
    mHeader,
    mFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
}
</style>
