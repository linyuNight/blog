<template>
  <div class="common-form">
    <!-- :label-width="labelWidthChange" -->
    <el-form
      :inline="inline"
      :label-position="direction"
      :model="model"
      :rules="rules"
      ref="formRef"
      :show-message="true"
    >
      <template v-for="(item,index) in labelList">
        <!-- <mavon-editor
          v-if="item.type=='mavon'"
          v-model="model[item.model]"
          defaultOpen="preview"
          :toolbarsFlag="false"
          :subfield="false"
          :key="index"
        ></mavon-editor>-->
        <el-form-item :label="item.label?item.label:''" :prop="item.model" :key="index">
          <el-input
            v-if="!item.type"
            @input="handlerForm"
            clearable
            :disabled="disabled||item.disabled"
            v-model="model[item.model]"
          ></el-input>
          <el-input
            v-else-if="item.type=='textarea'"
            type="textarea"
            :rows="3"
            :maxlength="item.length?item.length:200"
            show-word-limit
            placeholder="请输入内容"
            @input="handlerForm"
            :disabled="disabled||item.disabled"
            v-model="model[item.model]"
          ></el-input>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    inline: {
      default: true,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    direction: {
      default: 'right',
      type: String,
    },
    labelWidth: String,
    model: Object,
    rules: Object,
    labelList: Array,
  },
  data() {
    return {}
  },
  computed: {
    // labelWidthChange() {
    //   let str = Number(this.labelWidth.replace('px', '')) * this.widthScale
    //   return str + 'px'
    // },
  },
  created() {
    // console.log(this.form)
  },
  methods: {
    handlerForm() {},
  },
}
</script>

<style lang="scss" scoped></style>
