<template>
  <div>
    <mavon-editor v-model="text" defaultOpen="preview" :subfield="false" :toolbarsFlag="false" />
    <mavon-editor v-model="text" defaultOpen="edit" />
    <el-button type="primary" size="default" @click="sunmitBtn">发表文章</el-button>
  </div>
</template>

<script>
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  data() {
    return {
      text: '**2**',
      isEdit: false,
    }
  },
  methods: {
    sunmitBtn() {
      this.$router.push({
        path: '/home',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>