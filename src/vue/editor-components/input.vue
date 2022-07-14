<template>
  <div class="gjs-trt-trait">
    <div class="gjs-label-wrp" data-label>
      <div class="gjs-label" :title="label">{{label}}</div>
    </div>
    <div class="gjs-field-wrp gjs-field-wrp-text" data-input="">
      <label class="gjs-field gjs-field-text" data-input="">
        <input :type="Type" v-model="value">
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: "ep-input",
  props:{
    label:String,
    Type:String,
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
