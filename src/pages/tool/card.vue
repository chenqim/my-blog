<template>
  <div class="card-item has-margin">
    <div class="header">
      <div class="title">
        <img v-if="item.img" :src="item.img" alt="logo">
        <el-avatar v-else size="large">{{ item.title.substr(0, 1).toUpperCase() }}</el-avatar>
        <div><a :href="item.home" target="_blank">{{ item.title }}</a></div>
      </div>
      <p class="ell-2" :title="item.desc">{{ item.desc }}</p>
    </div>
    <div class="footer">
      <div><el-button v-show="item.home" type="text" size="mini" @click="toPage('home')">官方文档</el-button></div>
      <div><el-button v-show="item.github" type="text" size="mini" @click="toPage('github')">Github</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  components: {},
  created () {},
  methods: {
    toPage (target) {
      window.open(this.item[target], '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.card-item {
  &:hover {
    cursor: pointer;
    // -webkit-box-shadow: #ccc 0px 10px 10px;
    // -moz-box-shadow: #ccc 0px 10px 10px;
    // box-shadow: #ccc 0px 10px 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  transition: .5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1;
  min-width: 253px;
  height: 135px;
  background: #fff;
  .header {
    padding: 10px;
    .title {
      display: flex;
      img {
        width: 39px;
      }
      div {
        display: flex;
        align-items: center;
        margin-left: 10px;
        a {
          // color: #f5222d;
          color: #4d4f91;
          // color: rgba(0,0,0,.65);
          font-size: 16px;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    p {
      color: rgba(0,0,0,.45);
      font-size: 12px;
      margin-bottom: 0;
      margin-top: 8px;
    }
  }
  .footer {
    background-color: #fafafa;
    display: flex;
    div {
      width: 50%;
      text-align: center;
      .el-button--text {
        // color: black;
        color: rgba(0,0,0,.65);
      }
    }
  }
}

.has-margin {
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
}

.ell-2 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
