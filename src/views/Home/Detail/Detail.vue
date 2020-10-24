<template>
  <div>
    <div>
      <mavon-editor v-model="content" defaultOpen="preview" :toolbarsFlag="false" :subfield="false"></mavon-editor>
    </div>
    <el-button v-if="!isLogin" type="primary" size="default" @click="toLogin">登录留⾔吧</el-button>
    <div v-if="isLogin">
      <img src />
      <div>小林</div>
      <textarea v-model="submitText" id cols="30" rows="10"></textarea>
      <el-button type="primary" size="default" @click="submitBtn">发表评论</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      content: '',
      submitText: '',
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'login/isLogin',
    }),
  },
  created() {
    this.content = this.$route.params.id
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: '/login',
      })
    },
    submitBtn() {},
  },
}
</script>

<style lang="scss" scoped>
</style>