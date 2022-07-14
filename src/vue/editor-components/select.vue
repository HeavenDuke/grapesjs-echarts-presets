<template>
  <div class="gjs-trt-trait">
    <div class="gjs-label-wrp" data-label>
      <div class="gjs-label" :title="label.label">{{label.label}}</div>
    </div>
    <div class="gjs-field-wrp gjs-field-wrp--text">
      <div class="gjs-field gjs-select">

        <select v-model="value" data-input>
          <option disabled selected>{{label.placeholder||'- selected -'}}</option>
          <option  v-for="val in data" :value="val" >{{val}}</option>
        </select>
        <div class="gjs-sel-arrow">
          <div class="gjs-d-s-arrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "select-editor",
  props:{
    label:Object,
    data:Array,
    value:String

  },
  watch:{
  value(val){
    this.$emit('input',val)
  }
  },
}
</script>

<style scoped>

</style>