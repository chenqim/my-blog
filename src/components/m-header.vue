<template>
  <div class="m-header">
    <el-menu
      class="m-flex"
      :default-active="activeIndex2"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="mr-auto">CQM</el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">生活</el-menu-item>
      <el-menu-item index="3">学习</el-menu-item>
      <el-menu-item index="4">福利</el-menu-item>
      <el-menu-item index="5">留言</el-menu-item>
      <el-menu-item index="6">关于</el-menu-item>
      <el-menu-item class="ml-auto">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.m-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.m-flex.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
