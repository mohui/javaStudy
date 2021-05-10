<template>
  <div>
    <el-container>
      <el-header>
        <span>{{ title }}</span>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu
              :default-active="this.$router"
              router
              :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航</template>
              <el-menu-item-group>
                <el-menu-item index="/school">学校</el-menu-item>
                <el-menu-item index="/hospital">医院</el-menu-item>
                <el-menu-item index="/watertightness">防水</el-menu-item>
              </el-menu-item-group>

            </el-submenu>
          </el-menu>


          <!-- &lt;!&ndash;  增加两个到user组件的导航，可以看到这里使用了不同的to属性 &ndash;&gt;-->
          <!-- <router-link to="/user/123">User1测试</router-link><br>-->
          <!--<router-link to="/user/456">User4再来</router-link><br>-->

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
  background-color: green;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: red;
  color: #333;
  text-align: center;
  line-height: 240px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 100%;
}

</style>
<script>
export default {
  data () {
    return {
      title: "辉辉主页"
    }
  }
}
</script>
