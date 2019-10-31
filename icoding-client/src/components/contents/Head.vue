<template>
  <div id="head">
    <el-menu
      mode="horizontal"
      class="icoding-top_menu"
      background-color="#545c64"
      text-color="whitesmoke"
      active-text-color="#ffd04b"
      menu-trigger="hover"
      default-active="discovery"

      collapse-transition
      @select="handleSelect"
    >
      <el-menu-item index="index" class="menu_log">爱编码社区</el-menu-item>
      <div>
        <search/>
      </div>
      <el-menu-item index="discovery">
        <i class="iconfont icoding-menu"></i>
        <span>发现</span>
      </el-menu-item>
      <el-menu-item index="share">
        <i class="iconfont icoding-share"></i>
        <span>分享</span>
      </el-menu-item>
      <el-menu-item index="article">
        <i class="iconfont icoding-article"></i>
        <span>文章</span>
      </el-menu-item>
      <div class="login-btn" v-if="!isLogin">
        <el-button type="primary" @click="loginHandle">登录</el-button>
      </div>
      <div v-else>
        <user-menu/>
      </div>
    </el-menu>
  </div>
</template>

<script>
    import Search from "./children/Search";
    import UserMenu from "./children/UserMenu";
    import {pullUserInfoByToken} from 'network/head';

    export default {
        name: "Head",
        components: {
            Search,
            UserMenu
        },
        data() {
            return {

            };
        },
        mounted() {
            console.log(this.$route);
        },
        computed: {
            isLogin() {
                return this.$store.state.loginStatus
            },
        },
        methods: {
            handleSelect(index) {
                this.$router.push({name: index})
            },
            loginHandle() {
                //判断之前是否登录过
                let tokenKey = null;
                for (let key of $cookies.keys()) {
                    if (key.indexOf("Icoding-session") != -1) {
                        tokenKey = key;
                        break;
                    }
                }
                if (tokenKey != null) {
                    pullUserInfoByToken($cookies.get(tokenKey)).then(res => {
                        this.$store.commit('setUserInfo', res.data);
                        this.$store.commit({type: 'updateLoginStatus', status: true});
                    })
                } else {
                    this.$router.push({name: 'login'});
                }
            },
        }
    };
</script>

<style scoped>
  @import url("~assets/js/iconfont/iconfont.css");

  .menu_log {
    margin-left: 80px !important;
  }

  .login-btn {
    float: right;
    line-height: 60px;
    padding-right: 30px;
  }

  .login-btn .el-button {
    padding: 10px 10px;
  }
</style>
