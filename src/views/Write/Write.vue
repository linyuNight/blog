<template>
  <div>
    <!-- <el-container>
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-main>
        <blog-item></blog-item>
      </el-main>
    </el-container>-->
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :currentPage="currentPage"
      :pageSizes="[10,20,30,40,50]"
      :pageSize="pageSize"
      :total="total"
    ></common-table>
  </div>
</template>

<script>
// import CommonAside from '@/components/CommonAside'
// import BlogItem from '@/components/BlogItem'
import CommonTable from '../../components/CommonTable'

export default {
  data() {
    return {
      tableData: [
        {
          title: 1,
          date: 2,
        },
        {
          title: 1,
          date: 2,
        },
      ],
      tableLabel: [
        {
          prop: 'title',
          label: '标题',
        },
        {
          prop: 'date',
          label: '时间',
        },
        {
          prop: 'operate',
          label: '操作',
        },
      ],

      currentPage: 1,
      pageSize: 10,
      total: 10,
    }
  },
  components: {
    // CommonAside,
    // BlogItem,
    CommonTable,
  },
}
</script>

<style lang="scss" scoped>
</style>