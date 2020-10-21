<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div @click="toggleBtn">qiehuan</div>Header
        </el-header>
        <el-main>
          Main
          <div @click="toPath">test</div>
          <div @click="getExcel">testExcel</div>
          <router-link to="/test3">test3</router-link>
          <router-link to="/test4">test4</router-link>
          <router-link to="/test5">test5</router-link>
          <router-link to="/test6">test6</router-link>
          <router-link to="/test7">test7</router-link>
          <router-link to="/test8">test8</router-link>
          <div class="aaaa">啊</div>
          <div class="apic"></div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      isCollapse: false,
    }
  },
  created() {
    // console.log('this.$http2', this.$http2)
    // console.log('this.$http.api', this.$http.api)

    // this.$http2.get('a').then((res) => {
    //   console.log('res', res)
    // })

    // this.$http2
    //   .get('http://127.0.0.1:3000/api/a')
    //   .then((res) => {
    //     console.log('res', res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    this.$http.api.get('/a').then((res) => {
      console.log('res', res)
    })

    this.$http.test.get('/b').then((res) => {
      console.log('res', res)
    })

    // var twoSum = function (nums, target) {
    //   for (let i = 0; i < nums.length - 1; i++) {
    //     console.log(i)
    //     for (let j = i + 1; j < nums.length - i + 1; j++) {
    //       console.log(j)
    //       if (nums[i] + nums[j] == target) {
    //         return [i, j]
    //         break
    //       }
    //     }
    //   }
    // }
    // console.log(twoSum([3, 2, 4], 6))
    // var reverse = function (x) {
    //   const str = Math.abs(x) + ''
    //   const arr = str.split('').reverse()
    //   if (x < 0) {
    //     return '-' + arr.join('')
    //   }
    //   return arr.join('')
    // }
    // console.log(reverse(123))
    // var isPalindrome = function (x) {
    //   if (x < 0) return false
    //   const str = x + ''
    //   if (str === str.split('').reverse().join('')) return true
    //   return false
    // }
    // console.log(isPalindrome(10))
    // var isValid = function (s) {
    //   while (s.length > 0) {
    //     if (s.includes('{}') || s.includes('[]') || s.includes('()')) {
    //       s = s.replace('{}', '').replace('[]', '').replace('()', '')
    //     } else {
    //       break
    //     }
    //   }
    //   return !s.length
    // }
    // console.log(isValid('([]'))
    // console.log('('.includes('()'))
    // var maxDepth = function (root) {
    //   if (root === null) {
    //     // 注意等号
    //     return 0
    //   } else {
    //     var leftDepth = maxDepth(root.left)
    //     var rightDepth = maxDepth(root.right)
    //     var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth
    //     return childDepth + 1 // 根节点不为空高度至少为1
    //   }
    // }
    // console.log(maxDepth([3, 9, 20, 15, 7]))
    // console.log('z'.charCodeAt())
  },
  methods: {
    toggleBtn() {
      console.log(111)
      this.isCollapse = !this.isCollapse
    },
    toPath() {
      this.$router.push('/test')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    getExcel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../vendor/Export2Excel.js')
        const tHeader = ['a', 'b']
        const filterVal = ['name', 'age']
        const list = [
          {
            name: 'aa',
            age: '11',
          },
          {
            name: 'aa',
            age: '11',
          },
        ]
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '哈哈')
      })
      // import('../vendor/Export2Excel.js').then((excel) => {
      //   const tHeader = ['a', 'b']
      //   const filterVal = ['name', 'age']
      //   const list = [
      //     {
      //       name: 'aa',
      //       age: '11',
      //     },
      //     {
      //       name: 'aa',
      //       age: '11',
      //     },
      //   ]
      //   const data = this.formatJson(filterVal, list)
      //   excel.export_json_to_excel(tHeader, data, '哈哈')
      // })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]))
    },
  },
}
</script>

<style lang="scss" scoped>
.aaaa {
  font-size: 18px;
}
.apic {
  width: 500px;
  height: 500px;
  background: url('~@/assets/img/1.jpg');
  background-size: cover;
}
.home {
  height: 100%;
  // color: red;
}
::v-deep .el-container {
  height: 100%;
}
.el-aside {
  background: #ffc;
  .el-menu {
    border-right: none;
  }
}
.el-header {
  background: #fcc;
}
.el-main {
  background: #ccf;
}
.el-footer {
  background: #cfc;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 400px;
  // min-height: 600px;
}
</style>
