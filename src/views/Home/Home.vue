<template>
  <div class="home">
    <el-card shadow="hover" v-for="index in 5" :key="index">
      <div class="item-content" @click="toDetail(index)">
        <div class="article-title">标题1</div>
        <div class="article-content">内容内容内容内容内容内容内容内容</div>
        <div class="article-bottom">
          <div class="article-author">作者1</div>
          <div class="article-review">评论1</div>
          <div class="article-collect">收藏1</div>
        </div>
      </div>
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
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  .item-content {
    cursor: pointer;
    &:hover {
      color: pink;
    }
    .article-title {
    }
    .article-content {
    }
    .article-bottom {
      display: flex;
      .article-author {
      }
      .article-review {
      }
      .article-collect {
      }
    }
  }
}
</style>