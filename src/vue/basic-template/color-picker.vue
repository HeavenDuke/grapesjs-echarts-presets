<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div data-input="" class="gjs-field-wrp gjs-field-wrp--color">
            <div class="gjs-field gjs-field-color">
                <div class="gjs-input-holder">
                    <input v-model="value" type="text" placeholder="none">
                </div>
                <div class="gjs-field-colorp">
                    <div data-colorp-c="" class="gjs-field-colorp-c">
                        <div class="gjs-checker-bg"></div>
                        <input class="gjs-field-color-picker" :style="{ background: value }" type="color" v-model="value">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//颜色选择器复用模板组件
  export default {
    name: "ep-color-picker",
    props: {
      label: String,
      value: String
    },
    data() {
      return {}
    },
    watch: {
      value(val) {
        this.$emit('input', val)
      }
    }
  };
</script>

<style lang="scss" scoped>
    .gjs-trt-traits {
        input.gjs-field-color-picker {
            background-color: #ddd !important;
            cursor: pointer !important;
            height: 100% !important;
            width: 100% !important;
            box-shadow: none !important;
            border-radius: 1px !important;
            border: none;
            position: absolute !important;
            top: 0 !important;
            padding: 0;
        }
    }
</style>
