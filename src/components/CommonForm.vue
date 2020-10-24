<template>
  <el-form :inline="inline" :model="form" ref="form" label-width="100px">
    <!-- <el-table :data="form.params" style="width: 100%">
      <el-table-column label="检测类型" align="center" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.kpiName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="检测开关" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.kpiStatus"
            :disabled="isDisabled"
            active-text="关闭"
            inactive-text="开启"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="报警阈值" align="center">
        <template slot-scope="scope">
          <el-row>
            <el-col :span="10" style="height:23px;">
              <el-form-item v-if="scope.row.kpiType === 'range'">
                <el-input v-model.number="scope.row.min" size="small" :disabled="isDisabled"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="1">-</el-col>
            <el-col :span="10">
              <el-form-item v-if="scope.row.kpiType === 'range'">
                <el-input v-model.number="scope.row.max" size="small" :disabled="isDisabled"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>-->
    <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
      <el-input v-model="form[item.model]" :placeholder="'请输入' + item.label" v-if="!item.type"></el-input>
      <el-select v-model="form[item.model]" placeholder="请选择" v-if="item.type === 'select'">
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
      <el-date-picker
        v-model="form[item.model]"
        type="date"
        placeholder="选择日期"
        v-if="item.type === 'date'"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
    </el-form-item>
    <!-- <el-form-item>
      <slot></slot>
    </el-form-item>-->
  </el-form>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    form: Object,
    formLabel: Array,
  },
  data() {
    return {
      isDisabled: false,
    }
  },
  created() {
    // console.log(this.form)
  },
}
</script>

<style lang="scss" scoped></style>
