<template>
  <div id="app">
    <h1>超市商品关联分析系统</h1>
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/fp-growth">
        <el-button type="primary">频繁项集分析</el-button>
      </router-link>
      <router-link to="/recommend">
        <el-button type="primary">智能商品推荐</el-button>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
