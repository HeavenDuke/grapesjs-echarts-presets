<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.areaStyle.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <label class="gjs-field gjs-field-text" data-input="">
                <button class="btn btn-full" @click="showDialog">{{t('grapesjs-echarts-presets.actions.edit')}}</button>
            </label>
        </div>
        <content-dialog v-if="dialog.visibility" width="450px" :dialog-visibility="dialog.visibility"
                        :title="dialog.title"
                        @close="dialog.visibility = false">
            <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.areaStyle.color.label')"
                                 v-model="value.color"></ep-color-picker>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.areaStyle.shadowBlur.label')"
                                 v-model="value.shadowBlur"></ep-number-input>
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.areaStyle.shadowColor.label')"
                                 v-model="value.shadowColor"></ep-color-picker>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.areaStyle.shadowOffsetX.label')"
                                 v-model="value.shadowOffsetX"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.areaStyle.shadowOffsetY.label')"
                                 v-model="value.shadowOffsetY"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.areaStyle.opacity.label')"
                                 v-model="value.opacity" :max="1" :min="0" :step="0.1"></ep-number-input>
            </div>
        </content-dialog>
    </div>
</template>

<script>

  import ContentDialog from "./widgets/content-dialog"
  import EpSelect from "./basic-template/select"
  import EpOption from "./basic-template/option"
  import EpInput from "./basic-template/input"
  import EpCheckBox from "./basic-template/checkbox"
  import EpColorPicker from "./basic-template/color-picker"
  import EpNumberInput from "./basic-template/number-input"
  import EpPositionSelector from "./basic-template/position-selector"

  export default {
    name: "area-style-editor",
    props: {
      value: Object,
      t: Function,
      title: String
    },
    components: {
      ContentDialog,
      EpCheckBox,
      EpSelect,
      EpOption,
      EpInput,
      EpColorPicker,
      EpNumberInput,
      EpPositionSelector
    },
    watch: {
      value: {
        handler(newValue) {
          this.$emit('input', newValue)
        },
        deep: true
      }
    },
    data() {
      return {
        dialog: {
          visibility: false,
          title: this.t('grapesjs-echarts-presets.dialogs.areaStyle')
        }
      }
    },
    methods: {
      showDialog() {
        this.dialog.visibility = true
      }
    }
  };
</script>

<style scoped>

</style>
