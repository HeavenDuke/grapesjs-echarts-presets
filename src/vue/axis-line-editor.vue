<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.axis.axisLine.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <label class="gjs-field gjs-field-text" data-input="">
                <button class="btn btn-full" @click="showDialog">{{t('grapesjs-echarts-presets.actions.edit')}}</button>
            </label>
        </div>
        <content-dialog v-if="dialog.visibility" width="350px" :dialog-visibility="dialog.visibility"
                        :title="dialog.title"
                        @close="dialog.visibility = false">
            <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLine.show.label')" v-model="value.show"></ep-check-box>
                <line-style-editor :t="t" v-model="value.lineStyle"></line-style-editor>
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLine.onZero.label')" v-model="value.onZero"></ep-check-box>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.axisLine.onZeroAxisIndex.label')" v-model="value.onZeroAxisIndex"></ep-number-input>
                <ep-input :label="t('grapesjs-echarts-presets.config.axis.axisLine.symbol.label')" v-model="value.symbol"></ep-input>
                <ep-size-selector :title="t('grapesjs-echarts-presets.config.axis.axisLine.symbolSize.label')" v-model="value.symbolSize"></ep-size-selector>
                <ep-size-selector :title="t('grapesjs-echarts-presets.config.axis.axisLine.symbolOffset.label')" v-model="value.symbolOffset"></ep-size-selector>
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
  import EpSizeSelector from "./basic-template/size-selector"
  import LineStyleEditor from "./popups-template/line-style-editor"
  import {LINE_TYPES, FONTS} from "./utils/dict";

  export default {
    name: "axis-line-style-editor",
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
      EpPositionSelector,
      EpSizeSelector,
      LineStyleEditor
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
        dialog: {
          visibility: false,
          title: this.t('grapesjs-echarts-presets.dialogs.axisLineStyle')
        },
        fonts: FONTS,
        lineTypes: LINE_TYPES
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
