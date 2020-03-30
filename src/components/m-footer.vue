<template>
  <div>
    <div class="foot tc">
      <div>Designed & Powerd by chenqiming</div>
      <div class="mt10">Copyright© 2018-2020 MY-BOLG</div>
      <div class="mt10"><a class="link" href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备19044964号-1</a></div>
    </div>
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
  .foot {
    padding-top: 20px;
    height: 85px;
    width: 100%;
    min-width: 1210px;
    background-color: #2f3939;
    color: #fff;
    font-size: 12px;
  }
  .link {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #bbb;
    }
  }
</style>
