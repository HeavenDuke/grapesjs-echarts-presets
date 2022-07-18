<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.label.label')}}</div>
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
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLabel.show.label')" v-model="value.show"></ep-check-box>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.axisLabel.rotate.label')" v-model="value.rotate"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.axisLabel.interval.label')" v-model="value.interval"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.axisLabel.margin.label')" v-model="value.margin"></ep-number-input>
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLabel.showMinLabel.label')" v-model="value.showMinLabel"></ep-check-box>
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLabel.showMaxLabel.label')" v-model="value.showMaxLabel"></ep-check-box>
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLabel.inside.label')" v-model="value.inside"></ep-check-box>
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.axisLabel.hideOverlap.label')" v-model="value.hideOverlap"></ep-check-box>
                <ep-select :label="t('grapesjs-echarts-presets.config.textStyle.fontFamily.label')"
                           v-model="value.fontFamily">
                    <ep-option v-for="font in fonts" :key="font.value" :value="font.value" :label="font.name">
                        {{font.name}}
                    </ep-option>
                </ep-select>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.textStyle.fontSize.label')"
                                 v-model="value.fontSize"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.textStyle.fontWeight.label')"
                                 v-model="value.fontWeight"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.textStyle.lineHeight.label')"
                                 v-model="value.lineHeight"></ep-number-input>
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.textStyle.color.label')"
                                 v-model="value.color"></ep-color-picker>
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.textStyle.backgroundColor.label')"
                                 v-model="value.backgroundColor"></ep-color-picker>
                <ep-select
                        v-model="value.textAlign"
                        :label="t('grapesjs-echarts-presets.config.textStyle.align.label')">
                    <ep-option value="auto">auto</ep-option>
                    <ep-option value="left">left</ep-option>
                    <ep-option value="right">right</ep-option>
                    <ep-option value="center">center</ep-option>
                </ep-select>
                <ep-select
                        v-model="value.textVerticalAlign"
                        :label="t('grapesjs-echarts-presets.config.textStyle.verticalAlign.label')">
                    <ep-option value="auto">auto</ep-option>
                    <ep-option value="top">top</ep-option>
                    <ep-option value="bottom">bottom</ep-option>
                    <ep-option value="middle">middle</ep-option>
                </ep-select>
                <ep-select :label="t('grapesjs-echarts-presets.config.textStyle.borderType.label')"
                           v-model="value.borderType">
                    <ep-option v-for="type in lineTypes" :key="type.value" :value="type.value"
                               :label="type.name"></ep-option>
                </ep-select>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.textStyle.borderWidth.label')"
                                 v-model="value.borderWidth"></ep-number-input>
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.textStyle.borderColor.label')"
                                 v-model="value.borderColor"></ep-color-picker>
                <ep-position-selector :t="t" :use-unit="false" :title="t('grapesjs-echarts-presets.config.textStyle.padding.label')" v-model="value.padding"></ep-position-selector>
            </div>
        </content-dialog>
    </div>
</template>

<script>
  import {UNITS} from "@/vue/utils/smallDict";
  import {FONTS, LINE_TYPES} from "./utils/dict";
  import ContentDialog from "./widgets/content-dialog"
  import EpSelect from "./editor-components/select"
  import EpOption from "./editor-components/option"
  import EpInput from "./editor-components/input"
  import EpCheckBox from "./editor-components/checkbox"
  import EpColorPicker from "./editor-components/color-picker"
  import EpNumberInput from "./editor-components/number-input"
  import EpPositionSelector from "./widgets/position-selector"

  export default {
    name: "text-style-editor",
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
          title: this.t('grapesjs-echarts-presets.dialogs.textStyle')
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

<style lang="scss" scoped>
    @import "./assets/style.scss";
</style>
