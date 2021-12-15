<template>
  <div id="app">
    <el-container>
      <el-header>
        <m-header></m-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <m-footer></m-footer>
      </el-footer>
    </el-container>
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
  height: 100%;
  /* margin-top: 60px; */
}
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #eeeeee;
}
</style>
<style lang="less" scoped>
.el-container {
  // height: 100%;
  min-height: 100%;
}
.el-header {
  padding: 0;
}
.el-main {
  // min-width: 1280px;
  // max-width: 1920px;
  width: 1200px; // 备选
  margin: 0 auto;
  overflow: visible;
}
.el-footer {
  padding: 0;
  height: auto !important;
}
</style>
