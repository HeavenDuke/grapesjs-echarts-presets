<template>
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
        <div class="gjs-trt-trait">
            <div class="gjs-label-wrp" data-label>
                <div class="gjs-label" title="show">{{t('grapesjs-echarts-presets.config.title.textStyle.label')}}</div>
            </div>
            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                <label class="gjs-field gjs-field-text" data-input="">
                    <button class="btn btn-full" @click="">{{t('grapesjs-echarts-presets.actions.edit')}}</button>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "text-style-editor",
  props: {
    value: Object,
    t: Function
  },
  watch: {
    value: {
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  },
  data () {
    return {
      style: {}
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "./assets/style.scss";
</style>
