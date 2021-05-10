<template>
  <el-container class="container-full">
    <el-header class="header">
      <span>{{ title }}</span>
    </el-header>
    <el-container>

      <el-aside class="aside">
        <el-menu
            class="layout-side-menu"
            :default-active="activatedMenu"
            router
            :default-openeds="['foot']">
          <el-submenu index="foot">
            <template slot="title"><i class="el-icon-message"></i>饭店</template>
            <el-menu-item-group>
              <el-menu-item route="/restaurant" index="restaurant">饭店</el-menu-item>
              <el-menu-item route="/school" index="school">学校</el-menu-item>
              <el-menu-item route="/hospital" index="hospital">医院</el-menu-item>
              <el-menu-item route="/watertightness" index="watertightness">防水</el-menu-item>
            </el-menu-item-group>
          </el-submenu>



        </el-menu>

      </el-aside>

      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>

</template>

<script>
export default {
  data() {
    return {
      title: "辉辉主页"
    }
  },
  computed: {
    activatedMenu() {
      return this.$route.name;
    }
  }
}
</script>


<style>

.container-full {
  height: 100%;
}

.header {
  background-color: dodgerblue;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.aside {
  background-color: green;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 100px;
  height: 100%;
}

.main {
  background-color: red;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 100%;
}

</style>