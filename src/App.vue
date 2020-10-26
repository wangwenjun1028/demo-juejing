<template>
  <div id="app">
    <!-- 导航 -->
    <div class="m-top" :style="{ backgroundColor: theme.primary }">
      <router-link
        class="m-link"
        :style="{
          backgroundColor:
            $route.name == nav.path ? theme.highlight : theme.primary,
        }"
        v-for="(nav, i) of navs"
        :key="i"
        :to="{ path: nav.path }"
        >{{ nav.name }}</router-link
      >
    </div>
    <!-- 内容 -->
    <div class="m-content">
      <p>内容</p>
      <router-view></router-view>
    </div>
    <!-- 主题 -->
    <div class="m-aside">
      切换主题：
      <button @click="themeType = 'blue'">蓝</button>
      <button @click="themeType = 'red'">红</button>
    </div>
  </div>
</template>
<script>
import { LIST_TYPE } from "./topic/store";
import config from "./config/config";
export default {
  mounted() {
    console.log(LIST_TYPE);
  },
  data() {
    return {
      themeType: "blue",
    };
  },
  computed: {
    navs() {
      return [
        {
          name: "热榜",
          path: LIST_TYPE.TOP,
        },

        {
          name: "最新",
          path: LIST_TYPE.NEW,
        },
        {
          name: "热门",
          path: LIST_TYPE.HOT,
        },
        {
          name: "关于我",
          path: "about",
        },
      ];
    },
    theme() {
      console.log(config);
      return config.get("theme")[this.themeType];
    },
  },
};
</script>

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
a {
  text-decoration: none;
  color: #007fff;
}

.m-top {
  height: 60px;
  width: 100%;
  background: #007fff;
}

.m-link {
  display: inline-block;
  color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 19px;
  padding: 0 20px;
}

.router-link-active {
  background: #00a6ff;
}
</style>
