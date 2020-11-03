
<template>
  <div>
    <div class="article-item" v-for="index in 4" :key="index" @click="toPath(index)">
      <span>1</span>
      <span>删除</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPath(item) {
      // this.$router.push({
      //   path: '/'
      // })
    },
    deleteBtb() {},
  },
}
</script>

<style lang="scss" scoped>
.article-item {
  background: #ffc;
  margin-bottom: 1px;
  cursor: pointer;
  &:hover {
    background: #fcf;
  }
}
</style>