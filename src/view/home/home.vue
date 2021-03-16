<template>
  <div>
    <h1>{{msg}}</h1>
    <p>
      <router-link to="/home/school">学校</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <router-link to="/home/hospital">医院</router-link><br>

      <router-link to="/home/watertightness">防水</router-link><br>
    </p>
    <router-view></router-view>  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: "我是西张明辉主页"
    }
  }
}
</script>