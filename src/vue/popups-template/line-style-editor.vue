<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.lineStyle.label')}}</div>
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
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.lineStyle.color.label')"
                                 v-model="value.color"></ep-color-picker>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.lineStyle.width.label')"
                                 v-model="value.width"></ep-number-input>
                <ep-select :label="t('grapesjs-echarts-presets.config.lineStyle.type.label')"
                           v-model="value.type">
                    <ep-option v-for="type in lineTypes" :key="type.value" :value="type.value"
                               :label="type.name"></ep-option>
                </ep-select>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.lineStyle.dashOffset.label')"
                                 v-model="value.dashOffset"></ep-number-input>
                <ep-select :label="t('grapesjs-echarts-presets.config.lineStyle.cap.label')"
                           v-model="value.cap">
                    <ep-option v-for="cap in lineCaps" :key="cap" :value="cap" :label="cap"></ep-option>
                </ep-select>
                <ep-select :label="t('grapesjs-echarts-presets.config.lineStyle.join.label')"
                           v-model="value.join">
                    <ep-option v-for="join in lineJoins" :key="join" :value="join" :label="join"></ep-option>
                </ep-select>
                <ep-number-input v-if="value.join === 'miter'"
                                 :label="t('grapesjs-echarts-presets.config.lineStyle.miterLimit.label')"
                                 v-model="value.miterLimit" :min="0"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.lineStyle.shadowBlur.label')"
                                 v-model="value.shadowBlur"></ep-number-input>
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.lineStyle.shadowColor.label')"
                                 v-model="value.shadowColor"></ep-color-picker>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.lineStyle.shadowOffsetX.label')"
                                 v-model="value.shadowOffsetX"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.lineStyle.shadowOffsetY.label')"
                                 v-model="value.shadowOffsetY"></ep-number-input>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.lineStyle.opacity.label')"
                                 v-model="value.opacity" :max="1" :min="0" :step="0.1"></ep-number-input>
            </div>
        </content-dialog>
    </div>
</template>

<script>

  import ContentDialog from "../widgets/content-dialog"
  import EpSelect from "../basic-template/select"
  import EpOption from "../basic-template/option"
  import EpInput from "../basic-template/input"
  import EpCheckBox from "../basic-template/checkbox"
  import EpColorPicker from "../basic-template/color-picker"
  import EpNumberInput from "../basic-template/number-input"
  import EpPositionSelector from "../basic-template/position-selector"
  import {LINE_TYPES, FONTS} from "../utils/dict";
  import {LINE_CAPS, LINE_JOINS} from "@/vue/utils/smallDict";

  export default {
    name: "line-style-editor",
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
          title: this.t('grapesjs-echarts-presets.dialogs.lineStyle')
        },
        fonts: FONTS,
        lineTypes: LINE_TYPES,
        lineCaps: LINE_CAPS,
        lineJoins: LINE_JOINS
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
