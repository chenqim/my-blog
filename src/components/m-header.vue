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
      <el-menu-item class="mr-auto">MMJ's bolg!</el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">博客</el-menu-item>
      <el-menu-item index="3">摄影</el-menu-item>
      <el-menu-item index="4">工具</el-menu-item>
      <el-menu-item index="5">留言</el-menu-item>
      <el-menu-item index="6">关于</el-menu-item>
      <el-menu-item class="ml-auto" @click="loginDialog" v-if="session === null">
        登录
      </el-menu-item>
      <el-submenu index="" class="ml-auto" v-else>
        <template slot="title">
          <img src="//192.168.7.61/01/1E/wKgHPVwzD2eADkuCAADDMIiODYA851.jpg" class="avatar" />&nbsp;&nbsp;
          {{ session }}
        </template>
        <el-menu-item @click.native="logout">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-dialog :visible.sync="modal" width="400px" :label-width="formLabelWidth" append-to-body :close-on-click-modal="false" class="loginDialog">
      <div slot="title">登录</div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" prefix-icon="iconfont iconuser" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="iconfont iconlock" autocomplete="off" size="small" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="isSuccess">
          <div id="TencentCaptcha1" data-appid="2084525188" data-cbfn="callback" v-show="!form.isSuccess" >
            <el-input v-model="pictureText" class="check" size="small" readonly long @click.native="showCode"></el-input>
          </div>
          <div v-show="form.isSuccess">
            <el-button type="primary" plain size="small" style="width: 100%;">验证成功</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12"><el-checkbox v-model="form.checked" label="记住密码"></el-checkbox></el-col>
            <el-col :span="12" class="tr"><i class="el-icon-question"></i>忘记密码</el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div class="tr">
        <el-button size="small" type="primary" @click="login" style="width: 100%;">登 录</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeIndex2: '1',
      modal: false,
      form: {
        username: '',
        password: '',
        isSuccess: '',
        checked: false
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        isSuccess: [
          { required: true, message: '请进行验证', trigger: 'change' }
        ]
      },
      formLabelWidth: '0px',
      pictureText: '点我进行验证',
      session: null
    }
  },
  created () {
    console.log(sessionStorage.getItem('username'))
    this.session = sessionStorage.getItem('username')
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key === '1') this.$router.push('/')
      if (key === '3') this.$router.push('/photo')
      if (key === '4') this.$router.push('/tool')
      if (key === '6') this.$router.push('/about')
    },
    loginDialog () {
      this.modal = true
      this.$nextTick(() => {
        this.$refs['form'].resetFields()
      })
    },
    showCode () {
      let that = this
      // eslint-disable-next-line
      var captcha1 = new TencentCaptcha('2084525188', function (res) {
        if (res.ret === 0) {
          that.form.isSuccess = 'success'
          that.$refs['form'].validate()
        }
      })
      captcha1.show()
    },
    login () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.username === 'cqm' && this.form.password === '123456') {
            sessionStorage.setItem('username', 'cqm')
            window.location.reload()
            this.modal = false
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
          } else {
            this.$message.error('用户名或密码错误！')
            this.form.isSuccess = ''
          }
        } else {
          this.$message.error('请核对表单字段！')
          return false
        }
      })
    },
    logout () {
      sessionStorage.removeItem('username')
      window.location.reload()
    }
  }
}
</script>

<style>
.m-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.m-flex.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.loginDialog .el-dialog__body {
  padding: 10px 20px 20px 20px;
}
.check .el-input__inner {
  cursor: pointer;
  text-align: center;
}
.avatar {
  width: 32px;
  height: 32px;
  line-height: 31px;
  border-radius: 16px;
}
</style>
