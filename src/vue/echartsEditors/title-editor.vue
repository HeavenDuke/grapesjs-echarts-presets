<template>
    <chart-section :title="t('grapesjs-echarts-presets.config.title.label')">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <ep-check-box :label="t('grapesjs-echarts-presets.config.title.show.label')" v-model="title.show"></ep-check-box>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.text.label')" :placeholder="t('grapesjs-echarts-presets.config.title.text.placeholder')" v-model="title.text"></ep-input>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.link.label')" :placeholder="t('grapesjs-echarts-presets.config.title.link.placeholder')" v-model="title.link"></ep-input>
            <text-style-editor :title="t('grapesjs-echarts-presets.config.title.textStyle.label')" :t="t" v-model="title.textStyle"></text-style-editor>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.subtext.label')" :placeholder="t('grapesjs-echarts-presets.config.title.subtext.placeholder')" v-model="title.subtext"></ep-input>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.sublink.label')" :placeholder="t('grapesjs-echarts-presets.config.title.sublink.placeholder')" v-model="title.sublink"></ep-input>
            <text-style-editor :title="t('grapesjs-echarts-presets.config.title.subTextStyle.label')" :t="t" v-model="title.subtextStyle"></text-style-editor>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.title.itemGap.label')" v-model="title.itemGap"></ep-number-input>
            <ep-select
                    v-model="title.textAlign"
                    :label="t('grapesjs-echarts-presets.config.title.textAlign.label')"
                    :placeholder="t('grapesjs-echarts-presets.config.title.textAlign.placeholder')">
                <ep-option value="auto">auto</ep-option>
                <ep-option value="left">left</ep-option>
                <ep-option value="right">right</ep-option>
                <ep-option value="center">center</ep-option>
            </ep-select>
            <ep-select
                    v-model="title.textVerticalAlign"
                    :label="t('grapesjs-echarts-presets.config.title.textVerticalAlign.label')"
                    :placeholder="t('grapesjs-echarts-presets.config.title.textVerticalAlign.placeholder')">
                <ep-option value="auto">auto</ep-option>
                <ep-option value="top">top</ep-option>
                <ep-option value="bottom">bottom</ep-option>
                <ep-option value="middle">middle</ep-option>
            </ep-select>

          <ep-position :t="t" :title="t('grapesjs-echarts-presets.config.title.position.label')" v-model="positions" use-unit="true"></ep-position>
        </div>
    </chart-section>
</template>

<script>

  import TextStyleEditor from "../text-style-editor"
  import ChartSection from "../widgets/chart-section"
  import EpSelect from "../editor-components/select"
  import EpOption from "../editor-components/option"
  import EpInput from "../editor-components/input"
  import EpNumberInput from "../editor-components/number-input"
  import EpCheckBox from "../editor-components/checkbox"
  import EpColorPicker from "../editor-components/color-picker"
  import EpPosition from "../widgets/position-selector"

  export default {
    name: "title-editor",
    props: ["t", "editor", "onChange"],
    components: {
      TextStyleEditor,
      ChartSection,
      EpCheckBox,
      EpSelect,
      EpOption,
      EpInput,
      EpNumberInput,
      EpColorPicker,
      EpPosition
    },
    data() {
      return {
        title: {
          show: false,
          text: "",
          link: "",
          target: "",
          subtext: "",
          sublink: "",
          subtarget: "",
          textAlign: "auto",
          textVerticalAlign: "auto",
          left: "auto",
          top: "auto",
          right: "auto",
          bottom: "auto",
          triggerEvent: "",
          padding: [0, 0, 0, 0],
          itemGap: 10,
          zlevel: 0,
          z: 2,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "#ccc",
          borderWidth: 0,
          borderRadius: [0, 0, 0, 0],
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 0, 0)",
          shadowOffsetX: "",
          shadowOffsetY: "",
          textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'bolder',
            fontFamily: 'sans-serif',
            fontSize: 18,
            lineHeight: 24
          },
          subtextStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'bolder',
            fontFamily: 'sans-serif',
            fontSize: 12,
            lineHeight: 18
          }
        },
        positions: {
          top:'',
          right:'',
          bottom:'',
          left:''
        },
        units: ["px", "%", "em", "rem", "vh", "vw"],
      };
    },
    watch: {
      title: {
        handler() {
          this.onChange();
        },
        deep: true
      },
      positions: {
        handler(newValue) {
          this.title.top = newValue.top;
          this.title.right = newValue.right;
          this.title.bottom = newValue.bottom;
          this.title.left = newValue.left;
          this.onChange();
        },
        deep: true
      }
    },
    methods: {}
  };
</script>

<style lang='scss' scoped>
    @import "../assets/style";
</style>

