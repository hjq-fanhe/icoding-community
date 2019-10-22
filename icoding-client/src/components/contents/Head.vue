<template>
  <div id="head">
    <el-menu
      mode="horizontal"
      class="icoding-top_menu"
      background-color="#545c64"
      text-color="whitesmoke"
      active-text-color="#ffd04b"
      menu-trigger="hover"
      router
      collapse-transition
    >
      <el-menu-item index="index" class="menu_log">爱编码社区</el-menu-item>
      <div class="menu_search">
        <div id="search_input">
          <el-input
            type="text"
            placeholder="搜索人、文章"
            v-model="searchContent"
            suffix-icon="el-icon-search"
          ></el-input>
        </div>
        <div id="search_btn">
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </div>
      </div>
      <el-menu-item index="find">
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

      <div id="menu_loginbtn" v-if="isSession">
        <el-button type="primary" @click="dialogVisible = true">登录</el-button>
        <el-dialog title="登录" :visible.sync="dialogVisible" width="30%" style="text-align: center;">
          <span>第三方登录方式</span>

          <!-- <div id="login_github"> -->
          <el-button type="info" @click="login('github')">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icoding-github"/>
            </svg>
            <span>github登录</span>
          </el-button>
          <!-- </div> -->

          <!-- <div id="login_gitee"> -->
          <el-button type="info" @click="login('gitee')">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icoding-gitee"/>
            </svg>
            gitee登录
          </el-button>
          <!-- </div> -->
        </el-dialog>
      </div>

      <div id="menu_profile" v-else>
        <el-dropdown @command="handleCommand">
          <el-button type="primary">
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
    </el-menu>
  </div>
</template>

<script>
  import "../../assets/js/iconfont/iconfont";
  export default {
    name: "Head",
    data() {
      return {
        searchContent: "",
        dialogVisible: false,
        isSession: true
      };
    },
    methods: {
      handleSelect() {
        window.console.log("handleSelect");
      },
      onSearch() {
      },
      login(way) {
      },
      handleCommand(key) {
        window.console.log(key)
      }
    }
  };
</script>

<style scoped>

  @import url("../../assets/js/iconfont/iconfont.css");

  .menu_log {
    margin-left: 80px !important;
  }

  .menu_search {
    float: left;
    line-height: 60px;
    padding: 0 20px;
  }

  #search_input {
    width: 250px;
    float: left;
  }

  #search_btn {
    float: left;
  }

  #menu_loginbtn,
  #menu_profile {
    float: right;
    line-height: 60px;
    padding-right: 30px;
  }

  #menu_loginbtn .el-button {
    padding: 10px 10px;
  }

  #menu_profile .el-button {
    padding: 10px 10px;
  }

  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
