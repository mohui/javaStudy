<template>
  <div id = "app">
    <header>
      <router-link to="/home">Home</router-link><br>
      <router-link to="/user" class="red">User</router-link>
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