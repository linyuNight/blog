<template>
  <div>
    <div class="sub-title">输入后匹配输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
      state2: '',
    }
  },
  methods: {
    querySearch(queryString, cb) {
      this.$http.get('http://127.0.0.1:3000/ttt').then((res) => {
        // var restaurants = this.restaurants
        var restaurants = res.data
        var results = queryString
          ? restaurants.filter(this.createFilter(queryString))
          : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      })
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    },
    loadAll() {
      return [{ value: '1234' }, { value: '12' }]
    },
    handleSelect(item) {
      console.log(item)
    },
  },
  created() {
    // this.$http.get('http://127.0.0.1:3000/ttt').then((res) => {
    //   console.log(res)
    // })
  },
  mounted() {
    this.restaurants = this.loadAll()
  },
}
</script>

<style lang="scss" scoped>
</style>
