<template>
  <div>
    <el-row>
      <el-card>
        <el-carousel :interval="5000" type="card" arrow="always">
          <el-carousel-item v-for="(item, index) in images" :key="index">
            <img :src="item.src" alt="" style="width: 100%;">
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-row>
    <el-row :gutter="20" class="mt20">
      <el-col :span="18">
        <!-- 文章列表 -->
        <el-card v-for="(item, index) in articles" :key="index" class="mb20">
          <el-row>
            <el-col :span="12"><h3 class="m0" style="cursor: pointer;" @click="toDetail">{{ item.title }}</h3></el-col>
          </el-row>
          <el-row class="mt20" style="position: relative;">
            <el-col :span="6"><img :src="item.picture" style="width: 100%; height: 140px;" alt=""></el-col>
            <el-col :span="18">
              <el-row class="ml20 article-content">{{ item.content }}</el-row>
              <div class="article-tip">
                <span><i class="iconfont iconuser"></i>作者：{{ item.author }}</span>
                <span class="ml10"><i class="iconfont icontag"></i>分类：{{ item.tag }}</span>
                <span class="ml10"><i class="iconfont icontime-circle"></i>发布时间：{{ item.createTime }}</span>
                <span class="ml10"><i class="iconfont iconeye"></i>浏览量：{{ item.pageview }}</span>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <div class="tr mb20">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </el-col>
      <el-col :span="6">
        <el-card>
          <i class="iconfont iconweibo icon" @click="weibo" style="color: #f78585;"></i>
          <el-popover
            placement="bottom"
            width="100"
            trigger="hover">
            <img :src="require('@/assets/wechat.png')" style="width: 100%;" alt="wechat" />
            <i slot="reference" class="iconfont iconwechat-fill icon" style="color: #46af35;"></i>
          </el-popover>
          <i class="iconfont iconmail-fill icon" @click="email" style="color: #c52728;"></i>
          <i class="iconfont icongithub-fill icon" @click="github"></i>
        </el-card>
        <el-card class="mt20">
          <div slot="header" class="clearfix">标签</div>
          <el-tag v-for="(item, index) in tags" :key="index" class="mr10 mb5">{{ item.name + '（' + item.count + '）' }}</el-tag>
        </el-card>
        <el-card class="mt20">
          <div slot="header" class="clearfix">友情链接</div>
          <el-row class="link">
            <el-col :span="11" :offset="index % 2 === 1 ? 2 : 0" v-for="(item, index) in links" :key="index" class="tc bbl mb10">
              <a :href="item.link" target="_blank">{{ item.name }}的博客</a>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="mt20">
          <div slot="header" class="clearfix">归档</div>
          <el-row>
            <el-col :span="12" v-for="(item, index) in times" :key="index">{{ item.time }}</el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      tags: [
        { name: 'HTML', count: 1 },
        { name: 'CSS', count: 3 },
        { name: 'JAVA', count: 2 },
        { name: 'MYSQL', count: 2 },
        { name: 'JAVASCRIPT', count: 4 },
        { name: 'VUE', count: 6 },
        { name: 'REACT', count: 3 },
        { name: 'SPRINGBOOT', count: 1 }
      ],
      links: [
        { name: '百度', link: '//www.baidu.com' },
        { name: '新浪', link: '//www.sina.com' },
        { name: '淘宝', link: '//www.taobao.com' },
        { name: '腾讯', link: '//www.qq.com' },
        { name: '小明', link: '//www.baidu.com' },
        { name: '鸭鸭', link: '//www.sina.com' },
        { name: '明明', link: '//www.taobao.com' },
        { name: '啊啊', link: '//www.qq.com' }
      ],
      times: [
        { time: '2019年08月' },
        { time: '2019年07月' },
        { time: '2019年06月' },
        { time: '2019年05月' },
        { time: '2019年04月' },
        { time: '2019年03月' }
      ],
      images: [
        { src: require('../../assets/carousel-item-1.jpg') },
        { src: require('../../assets/carousel-item-2.jpg') },
        { src: require('../../assets/carousel-item-3.jpg') },
        { src: require('../../assets/carousel-item-4.jpg') }
      ],
      articles: [
        {
          title: '几款优秀的前端UI框架',
          author: 'CQM',
          tag: 'HTML',
          picture: require('../../assets/carousel-item-3.jpg'),
          content: '目前响应式布局和扁平化越来越风靡，前端UI框架也是风生水起，在这里分享几款优秀的前端UI框架 BootStrap 相比这个大家都听说过吧，Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。',
          pageview: '1682',
          createTime: '2019-08-30 12:23:45'
        },
        {
          title: '几款优秀的前端UI框架',
          author: 'CQM',
          tag: 'HTML',
          picture: require('../../assets/carousel-item-3.jpg'),
          content: '目前响应式布局和扁平化越来越风靡，前端UI框架也是风生水起，在这里分享几款优秀的前端UI框架 BootStrap 相比这个大家都听说过吧，Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。',
          pageview: '1682',
          createTime: '2019-08-30 12:23:45'
        },
        {
          title: '几款优秀的前端UI框架',
          author: 'CQM',
          tag: 'HTML',
          picture: require('../../assets/carousel-item-3.jpg'),
          content: '目前响应式布局和扁平化越来越风靡，前端UI框架也是风生水起，在这里分享几款优秀的前端UI框架 BootStrap 相比这个大家都听说过吧，Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。',
          pageview: '1682',
          createTime: '2019-08-30 12:23:45'
        },
        {
          title: '几款优秀的前端UI框架',
          author: 'CQM',
          tag: 'HTML',
          picture: require('../../assets/carousel-item-3.jpg'),
          content: '目前响应式布局和扁平化越来越风靡，前端UI框架也是风生水起，在这里分享几款优秀的前端UI框架 BootStrap 相比这个大家都听说过吧，Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的。',
          pageview: '1682',
          createTime: '2019-08-30 12:23:45'
        }
      ]
    }
  },
  methods: {
    toDetail () {
      this.$router.push('/detail')
    },
    weibo () {
      window.open('https://weibo.com/u/1839302501', '_blank')
    },
    email () {
      window.open('http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=QCMoJS4xKS1wcXBzADExbiMvLQ', '_blank')
    },
    github () {
      window.open('https://www.github.com/chenqim', '_blank')
    }
  }
}
</script>

<style scoped>
.article-content {
  font-size: 14px;
  line-height: 24px;
}
.article-tip {
  font-size: 12px;
  position: absolute;
  right: 0;
  bottom: 0;
}
.bbl {
  padding: 5px;
  background-color: #91cd8e;
}
i {
  position: relative;
  top: 2px;
}
.link a {
  text-decoration: none;
  color: #fff;
}
.link a:hover {
  transition: 0.5s;
  color: #3f9eff;
}
.icon {
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
