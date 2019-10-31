<template>
  <div id="login">
    <div class="login-content login-left">
      <h3 style="text-align: center">登录</h3>
      <el-form ref="loginForm" :model="loginForm" status-icon label-width="100px">
        <el-form-item
          label="邮箱"
          prop="email"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="sider-content login-left">
      <h3 style="text-align: center">第三方登录方式</h3>

      <div id="login_github">
        <el-button type="info" @click="login('github')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icoding-github"/>
          </svg>
          <span>github登录</span>
        </el-button>
      </div>

      <div id="login_gitee">
        <el-button type="info" @click="login('gitee')">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icoding-gitee"/>
          </svg>
          gitee登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
    import 'assets/js/iconfont/iconfont'
    import {loginGit, reqGitUser, getGitToken} from "network/head";

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        mounted() {
            const query = this.$route.query;
            if (query.state != undefined) {
                if (query.state == 'github') {
                    getGitToken(query.code).then(res => {
                        console.log(res);
                    })
                } else {
                    reqGitUser(query.code).then(res => {
                        if (res != undefined) {
                            if (res.data != "") {
                                this.$store.commit('setUserInfo', res.data);
                                this.$store.commit({type: 'updateLoginStatus', status: true})
                            } else {
                                this.$router.back();
                                this.$message({
                                    message: '服务器出错，登录失败！！',
                                    type: 'error'
                                });
                            }
                        }
                    })
                }
            }
        },
        methods: {
            submitForm(formName) {
                console.log(this.$refs[formName]);
            },
            login(way) {
                loginGit(way)
            }
        }
    }
</script>

<style scoped>
  #login {
    height: 250px;
  }

  .login-content {
    width: 300px;
    margin-right: 60px;

  }

  .sider-content {
    height: auto;
    padding: 10px 0 60px 60px;
    border-left: 1px solid #e6e6e6;
  }

  .login-left {
    float: left;
  }

  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
