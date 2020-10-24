<template>
  <div>
    <common-form :formLabel="formLabel" :form="form"></common-form>
    <el-button type="primary" size="default" @click="login">登录</el-button>
    <el-button type="primary" size="default" @click="regist">注册</el-button>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm'

export default {
  data() {
    return {
      formLabel: [
        {
          label: '账号',
        },
        {
          label: '密码',
        },
      ],
      form: {},
    }
  },
  components: {
    CommonForm,
  },
  methods: {
    login() {
      this.$router.push({
        path: '/home',
      })
    },
    regist() {},
  },
}
</script>

<style lang="scss" scoped>
</style>