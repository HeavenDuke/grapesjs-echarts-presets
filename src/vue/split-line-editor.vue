<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.axis.splitLine.label')}}</div>
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
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.splitLine.show.label')" v-model="value.show"></ep-check-box>
                <line-style-editor :t="t" v-model="value.lineStyle"></line-style-editor>
                <ep-number-input v-if="!minor" :label="t('grapesjs-echarts-presets.config.axis.splitLine.interval.label')" v-model="value.interval"></ep-number-input>
            </div>
        </content-dialog>
    </div>
</template>

<script>
  import ContentDialog from "@/vue/widgets/content-dialog";
  import EpCheckBox from "@/vue/basic-template/checkbox";
  import EpSelect from "@/vue/basic-template/select";
  import EpOption from "@/vue/basic-template/option";
  import EpInput from "@/vue/basic-template/input";
  import EpColorPicker from "@/vue/basic-template/color-picker";
  import EpNumberInput from "@/vue/basic-template/number-input";
  import EpPositionSelector from "@/vue/basic-template/position-selector";
  import EpSizeSelector from "@/vue/basic-template/size-selector";
  import LineStyleEditor from "@/vue/popups-template/line-style-editor";
  import {FONTS, LINE_TYPES} from "@/vue/utils/dict";

  export default {
    name: "split-line-editor",
    props: {
      minor: Boolean,
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
          title: this.t('grapesjs-echarts-presets.dialogs.axisSplitLine')
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
  }
</script>

<style scoped>

</style>
