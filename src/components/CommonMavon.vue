<template>
  <div>
    <mavon-editor v-model="content" defaultOpen="preview" :toolbarsFlag="false" :subfield="false"></mavon-editor>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
  data() {
    return {
      // content: '',
    }
  },
}
</script>

<style lang="scss" scoped>
</style>