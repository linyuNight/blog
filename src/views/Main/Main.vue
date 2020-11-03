<template>
  <div class="main">
    <el-container>
      <el-header height="auto">
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <common-footer></common-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonFooter from '@/components/CommonFooter'

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      padding: 0;
    }
    .el-main {
      padding: 0;
    }
  }
}
</style>