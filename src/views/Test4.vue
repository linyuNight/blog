<template>
  <div>
    <el-table ref="table0" :data="tableData" height="80" border style="width: 100%">
      <el-table-column width="55">
        <template slot="header" slot-scope="scope">
          <el-checkbox v-model="checked" @change="handleCheckAllChange"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="1" width="180"></el-table-column>
      <el-table-column prop="name" label="2" width="180"></el-table-column>
      <el-table-column prop="address" label="3"></el-table-column>
      <el-table-column prop="date" label="4" width="180"></el-table-column>
      <el-table-column prop="name" label="5" width="180"></el-table-column>
      <el-table-column prop="address" label="6"></el-table-column>
      <el-table-column prop="date" label="7" width="180"></el-table-column>
      <el-table-column prop="name" label="8" width="180"></el-table-column>
      <el-table-column prop="address" label="9"></el-table-column>
      <el-table-column prop="date" label="10" width="180"></el-table-column>
      <el-table-column prop="name" label="11" width="180"></el-table-column>
      <el-table-column prop="address" label="12"></el-table-column>
      <el-table-column prop="date" label="13" width="180"></el-table-column>
      <el-table-column prop="name" label="14" width="180"></el-table-column>
      <el-table-column prop="address" label="15"></el-table-column>
      <el-table-column prop="date" label="16" width="180"></el-table-column>
      <el-table-column prop="name" label="17" width="180"></el-table-column>
      <el-table-column prop="address" label="18"></el-table-column>
    </el-table>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="一致性 Consistency" name="1">
        <el-table ref="table" :data="tableData" style="width: 100%" border :show-header="false">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <el-table ref="table2" :data="tableData" style="width: 100%" border :show-header="false">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      activeNames: ['1', '2'],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普',
        },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄',
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄',
        // },
      ],
    }
  },
  mounted() {
    const dom0 = this.$refs.table0.bodyWrapper
    const dom = this.$refs.table.bodyWrapper
    const dom2 = this.$refs.table2.bodyWrapper
    // console.log('dom2', dom2)
    dom2.addEventListener('scroll', () => {
      // 滚动距离
      // const scrollTop = this.dom.scrollTop
      const scrollLeft = dom2.scrollLeft

      dom.scrollLeft = scrollLeft
      dom0.scrollLeft = scrollLeft
      // 变量windowHeight是可视区的高度
      // const windowHeight = this.dom.clientHeight || this.dom.clientHeight
      // 变量scrollHeight是滚动条的总高度
      // const scrollHeight = this.dom.scrollHeight || this.dom.scrollHeight

      // this.$nextTick(() => {
      //   console.log('scrollLeft', scrollLeft)
      //   console.log('dom2.bodyWrapper', dom2.bodyWrapper)
      //   // this.dom2.bodyWrapper.scrollLeft = scrollLeft
      // })

      // if (scrollTop + windowHeight === scrollHeight) {
      //   // 获取到的不是全部数据 当滚动到底部 继续获取新的数据
      //   if (!this.allData) this.getMoreLog()
      //   console.log(
      //     'scrollTop',
      //     scrollTop + 'windowHeight',
      //     windowHeight + 'scrollHeight',
      //     scrollHeight
      //   )
      // }
    })
  },
  methods: {
    handleCheckAllChange() {
      console.log(this.checked)
      if (this.checked) {
        this.$refs.table.toggleAllSelection()
        this.$refs.table2.toggleAllSelection()
      }

      // this.toggleSelection([this.tableData[1], this.tableData[2]])
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.table.toggleRowSelection(row)
        })
      } else {
        this.$refs.table.clearSelection()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// ::v-deep .el-table:first-child .el-table__body-wrapper::-webkit-scrollbar {
//   /*width: 0;宽度为0隐藏*/
//   width: 0;
// }
</style>
