<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <label class="gjs-field gjs-field-text" data-input="">
                <textarea :rows="3" :name="label" v-model="value" :placeholder="placeholder"></textarea>
            </label>
        </div>
    </div>
</template>

<script>
  //文本区域输入复用模板组件
  export default {
    name: "ep-textarea",
    props: {
      label: String,
      placeholder: String,
      value: String
    },
    data() {
      return {
        text: ''
      }
    },
    watch: {
      value(val) {
        this.text = val
      },
      text (val) {
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
