<template>
  <div id="app">
    <Head/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Head from './components/contents/Head'

  export default {
    name: 'app',
    components: {
      Head
    }
  }
</script>

<style>
  @import url("./common/global.css");
</style>
