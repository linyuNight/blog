<template>
  <div class="home">
    <el-card shadow="hover" v-for="index in 5" :key="index">
      <div class="item-content" @click="toDetail(index)">{{index}}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail(index) {
      // console.log(index)
      this.$router.push({
        path: `/home/detail/${index}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .item-content {
    cursor: pointer;
    &:hover {
      color: pink;
    }
  }
}
</style>