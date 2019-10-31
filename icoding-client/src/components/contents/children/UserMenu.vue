<template>
  <div id="user">
    <div class="avatarStyle">
      <img :src="getUserAvatar"/>
    </div>
    <el-dropdown @command="handleCommand">
      <el-button type="primary" v-text="getName">
        我的
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="iconfont icoding-message" command="message">消息</el-dropdown-item>
        <el-dropdown-item icon="iconfont icoding-publish" command="publish">发起</el-dropdown-item>
        <el-dropdown-item icon="iconfont icoding-setting" command="setting">设置</el-dropdown-item>
        <el-dropdown-item icon="iconfont icoding-logout" command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
    export default {
        name: "User",
        props: {},
        data() {
            return {
                user: ''
            }
        },
        created() {
        },
        mounted() {
            let state = this.$store.state;
            if (state.user != '' && this.user == "") {
                this.user = state.user
                if (!$cookies.isKey('Icoding-' + 'session-' + this.user.flag)) {
                    $cookies.set('Icoding-' + 'session-' + this.user.flag, this.user.token,0)
                    sessionStorage.setItem('access_login',this.user.token);
                    this.$router.push({name: 'discovery'});
                }
            }
        },
        computed: {
            getName() {
                if (this.user != '') {
                    return this.user.name
                } else {
                    return '我的'
                }
            },
            getUserAvatar() {
                if (this.user != "") {
                    return this.user.avatarUrl
                }
            }
        },
        methods: {
            handleCommand(key) {
                key == 'logout'? this.logOUt() : this.$router.push({name: key});
            },
            logOUt(){
                sessionStorage.removeItem('access_login')
                console.log("登出")
            }
        }
    }
</script>

<style scoped>
  #user {
    float: right;
    line-height: 60px;
    padding-right: 30px;
  }

  .avatarStyle {
    display: block;
    width: 50px;
    height: 50px;
    float: left;
    margin: 0 5px;
    text-align: center;
    position: relative;
    top: 5px;
  }

  .avatarStyle img {
    width: 50px;
    border-radius: 50%;
  }

  #user .el-button {
    padding: 10px 10px;
  }
</style>
