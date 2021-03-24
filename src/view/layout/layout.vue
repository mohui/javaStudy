<template>
  <div>
    <el-container>
      <el-header>{{ msg }}</el-header>
      <el-container>
        <el-aside width="200px">
          <router-link to="/school">学校</router-link><br>

          <router-link to="/hospital">医院</router-link><br>

          <router-link to="/watertightness">防水</router-link><br>
<!--          <router-link to="/home">home主页</router-link><br>-->
<!--          <router-link to="/user">User用户</router-link><br>-->


<!--          &lt;!&ndash;  增加两个到user组件的导航，可以看到这里使用了不同的to属性 &ndash;&gt;-->
<!--          <router-link to="/user/123">User1测试</router-link><br>-->
<!--          <router-link to="/user/456">User4再来</router-link><br>-->

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
<script>
export default {
  data () {
    return {
      msg: "我是 主页 组件"
    }
  }
}
</script>
