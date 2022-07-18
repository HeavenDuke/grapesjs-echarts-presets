<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.axis.splitArea.label')}}</div>
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
                <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.splitArea.show.label')" v-model="value.show"></ep-check-box>
                <area-style-editor :t="t" v-model="value.areaStyle"></area-style-editor>
                <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.splitArea.interval.label')" v-model="value.interval"></ep-number-input>
            </div>
        </content-dialog>
    </div>
</template>

<script>
  import ContentDialog from "@/vue/widgets/content-dialog";
  import EpCheckBox from "@/vue/editor-components/checkbox";
  import EpSelect from "@/vue/editor-components/select";
  import EpOption from "@/vue/editor-components/option";
  import EpInput from "@/vue/editor-components/input";
  import EpColorPicker from "@/vue/editor-components/color-picker";
  import EpNumberInput from "@/vue/editor-components/number-input";
  import EpPositionSelector from "@/vue/widgets/position-selector";
  import EpSizeSelector from "@/vue/widgets/size-selector";
  import AreaStyleEditor from "@/vue/area-style-editor";
  import {FONTS, LINE_TYPES} from "@/vue/utils/dict";

  export default {
    name: "split-area-editor",
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
      AreaStyleEditor
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
          title: this.t('grapesjs-echarts-presets.dialogs.axisSplitArea')
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
