<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label v-if="label">
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <label class="gjs-field gjs-field-text" data-input="">
                <input type="text" :name="label" v-model="text" :placeholder="placeholder">
            </label>
        </div>
    </div>
</template>

<script>
  //文本输入框复用模板组件
  export default {
    name: "ep-input",
    props: {
      label: String,
      placeholder: String,
      value: String
    },
    data() {
      return {
        text: ""
      }
    },
    watch: {
      text(val) {
        this.$emit('input', val)
      }
    },
    created() {
      this.text = this.value
    }
  };
</script>

<style scoped>

</style>
