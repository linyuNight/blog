<template>
  <div>
    <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>
    <!-- <common-form></common-form> -->
    <el-button @click="test">获取</el-button>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm'

export default {
  data() {
    return {
      operateForm: {
        // name: '',
        // addr: '',
        // age: '',
        // birth: '',
        // sex: '',
        params: [
          {
            kpiName: '111',
            id: '11',
            kpiStatus: false,
            kpiType: 'range',
            min: '12',
            max: '13',
          },
          {
            kpiName: '111',
            id: '11',
            kpiStatus: false,
            kpiType: 'range',
            min: '12',
            max: '13',
          },
        ],
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
        },
        {
          model: 'age',
          label: '年龄',
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1,
            },
            {
              label: '女',
              value: 0,
            },
          ],
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date',
        },
        {
          model: 'addr',
          label: '地址',
        },
      ],
    }
  },
  components: {
    CommonForm,
  },
  methods: {
    test() {
      console.log(this.operateForm)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
