<template>
  <div>
    <div ref="top-menu" class="top-menu">
      <!-- <div class="left"> -->
        <el-button
          v-for="(item, index) in types"
          :key="index"
          round
          size="mini"
          :type="active === item.value ? 'primary' : 'default'"
          @click="change(item)"
          class="mb5 mt5"
        >{{ item.label }}</el-button>
      <!-- </div> -->
      <!-- <div class="right">
        <el-input v-model="input" placeholder="请输入内容" @change="search" clearable><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
        <el-button icon="el-icon-search" circle></el-button>
      </div> -->
    </div>
    <template v-for="(item, index) in types">
      <div :ref="item.value" :id="item.value" :key="index" class="mt20" v-if="filterMap[item.value].length">
        <div class="card-title">
          <div class="icon"></div>
          <div class="text">{{ item.label }}</div>
        </div>
        <div class="card-items">
          <Card v-for="(item, index) in filterMap[item.value]" :key="index" :item="item"></Card>
        </div>
      </div>
    </template>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import Card from './card.vue'
// 导入 data 下所有数据文件
const path = require('path')
const files = require.context('./data', false, /\.js$/)
const modules = {}
files.keys().forEach((key) => {
  const name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})

export default {
  name: 'Tool',
  components: { Card },
  data () {
    return {
      active: 'vuePC',
      input: '',
      list: [],
      types: [
        { label: 'Vue(PC)', value: 'vuePC' },
        { label: 'Vue(Mobile)', value: 'vueMobile' },
        { label: '文档', value: 'doc' },
        { label: '数据可视化', value: 'dataVisualization' },
        { label: '开发必备', value: 'dev' },
        { label: 'CSS', value: 'css' },
        { label: 'Web 框架', value: 'web' },
        { label: '🐟', value: 'fish' }
      ],
      map: {
        ...modules
      },
      filterMap: {
        ...modules
      }
    }
  },
  mounted () {
    this.add()
  },
  methods: {
    debounce (fn, wait) {
      var timeout = null
      return function () {
        if (timeout !== null) clearTimeout(timeout)
        timeout = setTimeout(fn, wait)
      }
    },
    add () {
      // 滚动时回显选中状态
      window.addEventListener('scroll', this.debounce(() => {
        /* for (let i = 0; i < this.types.length; i++) {
          console.log(this.$refs[this.types[i].value][0].getBoundingClientRect().top)
          if (this.$refs[this.types[i].value][0]) {
            const heightMin = this.$refs['top-menu'].clientHeight + 60
            const heightMax = this.$refs['top-menu'].clientHeight + 100
            const offsetTop = this.$refs[this.types[i].value][0].getBoundingClientRect().top
            if (offsetTop > heightMin && offsetTop < heightMax) {
              this.active = this.types[i].value
            }
          }
        } */
        // const clientHeight = document.body.clientHeight / 2
        const clientHeight = 60 + 20 + 20 + this.$refs['top-menu'].clientHeight
        this.types.forEach((item, index) => {
          const top = document.getElementById(item.value).getBoundingClientRect().top
          const height = document.getElementById(item.value).getBoundingClientRect().height
          if (top <= clientHeight && -top < height) {
            console.log(clientHeight, top, height)
            this.active = item.value
          }
        })
      }, 500))
      // 滚动效果
      window.addEventListener('scroll', () => {
        if (this.$refs['top-menu']) {
          const offsetTop = this.$refs['top-menu'].getBoundingClientRect().top
          if (offsetTop <= 60) {
            this.$refs['top-menu'].style['background-color'] = '#efefef'
          }
          if (offsetTop > 60) {
            this.$refs['top-menu'].style['background-color'] = '#ffffff'
          }
        }
      })
    },
    remove () {
      window.removeEventListener('scroll', () => {})
    },
    change (item) {
      this.active = item.value
      window.scrollTo({
        // top: this.$refs[item.value][0].offsetTop - 220,
        top: this.$refs[item.value][0].offsetTop - this.$refs['top-menu'].clientHeight - 80 - (item.value === 'vuePC' ? 20 : 0),
        left: 0,
        behavior: 'smooth'
      })
    },
    search (v) {
      for (let key in this.map) {
        const result = []
        for (let i = 0; i < this.map[key].length; i++) {
          if (this.map[key][i].title.toLowerCase().indexOf(v.toLowerCase()) > -1) {
            result.push(this.map[key][i])
          }
        }
        this.filterMap[key] = result
      }
    }
  },
  destroyed () {
    this.remove()
  }
}
</script>
<style lang="less">
.top-menu {
  .el-input__inner {
    border-radius: 25px;
  }
}
</style>
<style lang="less" scoped>
@import '../../css/variable.less';

.top-menu {
  background-color: #ffffff;
  transition: 0.3s;
  // height: 100px;
  padding: 20px;
  margin: 0 auto;
  position: sticky;
  top: 60px;
  text-align: center;
  // display: flex;
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
    display: flex;
    align-items: center;
    .el-input__inner {
      border-radius: 25px;
    }
  }
}
.card-title {
  background: #fff;
  color: #66687d;
  height: 44px;
  // margin-right: 20px;
  display: flex;
  align-items: center;
  .icon {
    width: 4px;
    background-color: @primary-color;
    height: 25px;
  }
  .text {
    margin-left: 15px;
    font-size: 18px;
    font-weight: bold;
  }
}
.card-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
