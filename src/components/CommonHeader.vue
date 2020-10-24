<template>
  <div class="common-header">
    <el-menu
      :default-active="route"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#00a1d6"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">首 页</el-menu-item>
      <el-menu-item index="/my">我 的</el-menu-item>
      <el-menu-item index="/login">登 录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeIndex: '/home',
    }
  },
  computed: {
    route() {
      return '/' + this.$route.path.split('/')[1]
    },
  },
  methods: {
    handleSelect() {},
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  display: flex;
  justify-content: flex-end;
}
</style>