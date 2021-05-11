<template>
  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="学校列表" name="first">
      <div>
        <template>
          <el-table
              :data="classList"
              border
              style="width: 100%">
            <el-table-column
                prop="name"
                label="班级名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="teacher"
                label="教师">
            </el-table-column>
            <el-table-column
                prop="studentNum"
                label="人数"
                width="180">
            </el-table-column>
          </el-table>
        </template>
      </div>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      msg: "我是 school 组件"
    }
  },
  computed:{
    classList() {
      const classObj = {
        code: 'classroom',
        name: '一年级',
        teacher: '王将军',
        studentNum: 30
      }
      const classList = [];
      for (let i= 0; i < 20; i++) {
        classObj.studentNum += i;
        classList.push(classObj);
      }
      return classList;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
