<template>
  <div>
    <div>
      <div class="article-title">标题1</div>
      <common-mavon :content="content"></common-mavon>
      <!-- <mavon-editor v-model="content" defaultOpen="preview" :toolbarsFlag="false" :subfield="false"></mavon-editor> -->
    </div>
    <el-button v-if="!isLogin" type="primary" size="default" @click="toLogin">登录留⾔吧</el-button>
    <div v-if="isLogin">
      <img src />
      <div>小林2</div>
      <common-form :model="formReview" :labelList="$form.formReview()"></common-form>
      <!-- <textarea v-model="submitText" id cols="30" rows="10"></textarea> -->
      <el-button type="primary" size="default" @click="submitBtn">发表评论</el-button>
    </div>
    <div>
      <div v-for="index in 4" :key="index">
        <div>小玲</div>
        <div>科科</div>
      </div>
    </div>
    <!-- <common-form :model="{}" :labelList="$form.formHome()"></common-form> -->
  </div>
</template>

<script>
import CommonMavon from '@/components/CommonMavon'
import { mapGetters } from 'vuex'
import CommonForm from '@/components/CommonForm'

export default {
  data() {
    return {
      content: '',
      submitText: '',

      formReview: {
        review: 'aaa',
      },
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'login/isLogin',
    }),
  },
  components: {
    CommonForm,
    CommonMavon,
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