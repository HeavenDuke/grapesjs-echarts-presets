<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.textStyle.label')}}</div>
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
                <ep-select :label="t('grapesjs-echarts-presets.config.textStyle.fontFamily.label')" v-model="value.fontFamily">
                    <ep-option v-for="font in fonts" :key="font.value" :value="font.value" :label="font.name">{{font.name}}</ep-option>
                </ep-select>
                <ep-input type="number" :label="t('grapesjs-echarts-presets.config.textStyle.fontSize.label')" v-model="value.fontSize"></ep-input>
                <ep-input type="number" :label="t('grapesjs-echarts-presets.config.textStyle.fontWeight.label')" v-model="value.fontWeight"></ep-input>
                <ep-input type="number" :label="t('grapesjs-echarts-presets.config.textStyle.lineHeight.label')" v-model="value.lineHeight"></ep-input>
                <ep-color-picker :label="t('grapesjs-echarts-presets.config.textStyle.color.label')" v-model="value.color"></ep-color-picker>
            </div>
        </content-dialog>
    </div>
</template>

<script>

  import {FONTS} from "./utils/dict";
  import ContentDialog from "./widgets/content-dialog"
  import EpSelect from "./editor-components/select"
  import EpOption from "./editor-components/option"
  import EpInput from "./editor-components/input"
  import EpCheckBox from "./editor-components/checkbox"
  import EpColorPicker from "./editor-components/color-picker"

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
      EpColorPicker
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
        fonts: FONTS
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
