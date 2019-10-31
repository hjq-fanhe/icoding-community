<template>
  <div id="search">
    <div id="search_input">
      <el-input
        type="text"
        placeholder="搜索人、文章"
        v-model="searchContent"
        suffix-icon="el-icon-search"
        @keyup.enter="onSearch"
      ></el-input>
    </div>
    <div id="search_btn">
      <el-button type="primary" @click="onSearch">搜索</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
        props: {},
        data() {
            return {
                searchContent: ''
            }
        },
        methods: {
            onSearch: function () {
                console.log("查询中")
            }
        }

    }
</script>

<style scoped>
  #search {
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
</style>
