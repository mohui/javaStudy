<template>

  <div
      class="demo-image"
      style="height: 100%"
      :body-style="{
        height: 'calc(100% - 120px)',
        display: 'flex',
        'flex-direction': 'column'
      }">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="demonstration">{{ fit }}</span>
      <el-image
          style="width: 200px; height: 200px"
          :src="url"
          :fit="fit"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>