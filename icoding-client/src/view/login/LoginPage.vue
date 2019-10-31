<template>
  <div id="loginPage">
    <el-container>
      <el-main>
        <div class="login-register">
          <div class="main">
            <router-view/>
          </div>
          <div class="footer">
            <span>还没有账号？</span>
            <router-link to="/loginPage/register">立即注册 . </router-link>
            <router-link to="/discovery"> 游客访问</router-link>
          </div>
        </div>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

    export default {
        name: "LoginPage",
        props: {},
        data() {
            return {}
        },
        mounted() {

        },
        updated() {
            console.log("被更新了")
        },
        methods: {}
    }
</script>

<style scoped>
  .login-register {
    width: 714px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
  }
.login-register .main{
  padding: 50px 60px;
}

.login-register .footer{
  height: 70px;
  line-height: 70px;
  background-color: #f5f5f5;
  padding: 0 60px;
  color: #66b7ff;
  text-align: center;
}


</style>
