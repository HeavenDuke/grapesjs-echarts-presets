<template>
  <div class="gjs-trt-trait">
    <div class="gjs-label-wrp" data-label>
      <div class="gjs-label" :title="label">{{label}}</div>
    </div>
    <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
      <label class="gjs-field gjs-field-text" data-input="">
        <textarea :name="label" v-model="value" :placeholder="placeholder"></textarea>
      </label>
    </div>
  </div>
</template>

<script>
//文本区域输入复用模板组件
export default {
  name: "ep-textarea",
  props:{
    label:String,
    placeholder:{
      type:String,
      default:'please input'
    },
    value:String
  },
  data(){
    return{

    }
  },
  watch:{
    value(val){
      this.$emit('input',val)
    }
  },

};
</script>

<style scoped>

</style>
