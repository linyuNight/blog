<template>
  <div class="login">
    <!-- 登录表单区域 -->
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginFormRules"
      label-width="0px"
      class="login_form"
    >
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginFormRef')">登录</el-button>
        <el-button @click="resetForm('loginFormRef')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      // if (value === '') {
      //   callback(new Error('请输入用户名'))
      // } else {
      //   if (this.ruleForm.checkUser !== '') {
      //     this.$refs.ruleForm.validateField('checkUser')
      //   }
      //   callback()
      // }
      if (value !== '111') {
        callback(new Error('用户名错误'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      // if (value === '') {
      //   callback(new Error('请输入密码'))
      // } else {
      //   if (this.ruleForm.checkPass !== '') {
      //     this.$refs.ruleForm.validateField('checkPass')
      //   }
      //   callback()
      // }
      if (value !== '222') {
        callback(new Error('密码错误'))
      } else {
        callback()
      }
    }
    return {
      // ruleForm: {
      //   user: '',
      //   pass: ''
      // },
      // rules: {
      //   user: [{ validator: validateUser, trigger: 'blur' }],
      //   pass: [{ validator: validatePass, trigger: 'blur' }]
      // }
      loginForm: {
        username: '',
        password: '',
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          // { required: true, message: '请输入登录名称', trigger: 'blur' },
          // {
          //   min: 3,
          //   max: 10,
          //   message: '长度在 3 到 10 个字符',
          //   trigger: 'blur',
          // },
          { validator: validateUser, trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          // { required: true, message: '请输入登录密码', trigger: 'blur' },
          // {
          //   min: 6,
          //   max: 15,
          //   message: '长度在 6 到 15 个字符',
          //   trigger: 'blur',
          // },
          { validator: validatePass, trigger: 'blur' },
        ],
      },
    }
  },
  created() {},
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       this.$router.push({
    //         path: '/'
    //       })
    //     } else {
    //       console.log('用户名或密码错误!!')
    //       return false
    //     }
    //   })
    // }
    // resetLoginForm() {
    //   // console.log(this);
    //   this.$refs.loginFormRef.resetFields()
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return this.$message.error('用户名或密码错误!!')
        }

        this.$router.push({
          path: '/home',
        })
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
