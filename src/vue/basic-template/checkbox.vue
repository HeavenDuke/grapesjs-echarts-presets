<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label v-if="label">
            <div class="gjs-label" :title="label">{{ label }}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
            <label class="gjs-field gjs-field-checkbox" data-input="">
                <input type="checkbox" v-model="value">
                <i class="gjs-chk-icon"></i>
            </label>
        </div>
    </div>
</template>

<script>
  //单选框复用模板组件
  export default {
    name: "ep-checkbox",
    props: {
      label: String,
      value: Boolean,
    },
    data() {
      return {
        status: false
      };
    },
    watch: {
      value(val) {
        this.status = val
      },
      status(val) {
        this.$emit("input", val);
      }
    },
    created() {
      this.status = val
    }
  };
</script>

<style scoped>

</style>
