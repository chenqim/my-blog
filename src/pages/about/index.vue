<template>
  <div>
    <el-card>
      <div slot="header">关于博主</div>
      <div class="tc" style="line-height: 32px;">
        <div><img src="//192.168.7.61/01/1E/wKgHPVwzD2eADkuCAADDMIiODYA851.jpg" alt="" class="avatar"></div>
        <div>姓名：cqm</div>
        <div>年龄：forever 18</div>
        <div>个人简介：xxxxx</div>
        <div>邮箱：chenqim0103@qq.com</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: rotate(360deg) scale(1.1);
  }
}
</style>
