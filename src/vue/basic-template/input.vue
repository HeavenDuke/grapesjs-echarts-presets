<template>
    <div class="gjs-trt-trait custom">
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
    props: ["label", "placeholder", "value"],
    data() {
      return {
        text: ""
      }
    },
    watch: {
      value (newValue) {
        this.text = newValue
      },
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
