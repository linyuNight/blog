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
    <el-button type="primary" size="default" @click="addBtn">新增</el-button>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :currentPage="currentPage"
      :pageSizes="[10,20,30,40,50]"
      :pageSize="pageSize"
      :total="total"
    ></common-table>
    <el-dialog
      class="p-dialog"
      :visible.sync="isShow"
      destory-on-close
      :close-on-click-modal="false"
    >
      <template v-if="dialogType==='新建'">
        <div slot="title">新建</div>
      </template>
      <template v-if="dialogType==='修改'">
        <div slot="title">修改</div>
      </template>
    </el-dialog>
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

      isShow: false,
      dialogType: '新建',
    }
  },
  components: {
    // CommonAside,
    // BlogItem,
    CommonTable,
  },
  methods: {
    addBtn() {
      this.isShow = true
    },
  },
}
</script>

<style lang="scss" scoped>
</style>