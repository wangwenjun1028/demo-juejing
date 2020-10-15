<template>
  <div id="app">
    <!-- 导航 -->
    <div class="m-top">导航</div>
    <!-- 内容 -->
    <div class="m-content">内容</div>
    <!-- 主题 -->
    <div class="m-aside">主题切换</div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
