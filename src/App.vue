<template>
  <div id = "app">
    <header>
      <router-link to="/home">home主页</router-link><br>
      <router-link to="/user">User用户</router-link><br>


      <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
      <router-link to="/user/123">User1测试</router-link><br>
      <router-link to="/user/456">User4再来</router-link><br>

    </header>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a.router-link-active {color: green;}
</style>