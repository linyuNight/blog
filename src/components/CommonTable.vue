<template>
  <div class="common-table">
    <el-table
      ref="table"
      :data="tableData"
      style="width:100%"
      :row-style="rowClass"
      :header-cell-style="{
      background: '#D8E4FB',
      fontSize: '14px',
      color: 'rgba(0,0,0,.85)'
    }"
    >
      <el-table-column type="index" label="序号" width="85" :index="indexMethod"></el-table-column>
      <el-table-column
        v-for="(item,index) in tableLabel"
        :key="index"
        :show-overflowtip="true"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width?item.width:125"
      >
        <template slot-scope="scope">
          <div v-if="item.prop == 'operate'">
            <el-button type="primary" size="default" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="primary" size="default">删除</el-button>
          </div>
          <div v-else>{{scope.row[item.prop]}}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      ref="paginationRef"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-change="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total,prev,pager,next,sizes,jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    currentPage: Number,
    pageSizes: Array,
    pageSize: Number,
    total: Number,
  },
  methods: {
    handleEdit(row) {
      this.$emit('handleEdit', row)
    },
    handleDelete(row) {
      this.$emit('handleDelete', row)
    },
    changePage(page) {
      this.$emit('changePage', page)
    },
    indexMethod(index) {
      index = index + 1 + (this.currentPage - 1) * this.pageSize
      return index
    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
    rowClass({ row, rowIndex }) {
      return {
        height: '41px',
        fontSize: '14px',
        color: 'rgba(0,0,0,.65)',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
  ::v-deep .el-table td,
  ::v-deep .el-table th {
    text-align: center !important;
  }
}
</style>
