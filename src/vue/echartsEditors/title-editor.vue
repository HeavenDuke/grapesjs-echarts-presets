<template>
    <chart-section :title="t('grapesjs-echarts-presets.config.title.label')">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <ep-check-box :label="t('grapesjs-echarts-presets.config.title.show.label')" v-model="title.show"></ep-check-box>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.text.label')" v-model="title.text"></ep-input>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.link.label')" v-model="title.link"></ep-input>
            <text-style-editor :title="t('grapesjs-echarts-presets.config.title.textStyle.label')" :t="t" v-model="title.textStyle"></text-style-editor>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.subtext.label')" v-model="title.subtext"></ep-input>
            <ep-input :label="t('grapesjs-echarts-presets.config.title.sublink.label')" v-model="title.sublink"></ep-input>
            <text-style-editor :title="t('grapesjs-echarts-presets.config.title.subTextStyle.label')" :t="t" v-model="title.subtextStyle"></text-style-editor>
            <ep-input type="number" :label="t('grapesjs-echarts-presets.config.title.itemGap.label')" v-model="title.itemGap"></ep-input>
            <ep-select :label="t('grapesjs-echarts-presets.config.title.textAlign.label')" v-model="title.textAlign">
                <ep-option value="" :label="t('grapesjs-echarts-presets.config.title.textAlign.placeholder')"></ep-option>
                <ep-option value="auto">auto</ep-option>
                <ep-option value="left">left</ep-option>
                <ep-option value="right">right</ep-option>
                <ep-option value="center">center</ep-option>
            </ep-select>
            <ep-select :label="t('grapesjs-echarts-presets.config.title.textVerticalAlign.label')" v-model="title.textVerticalAlign">
                <ep-option value="" :label="t('grapesjs-echarts-presets.config.title.textVerticalAlign.placeholder')"></ep-option>
                <ep-option value="auto">auto</ep-option>
                <ep-option value="top">top</ep-option>
                <ep-option value="bottom">bottom</ep-option>
                <ep-option value="middle">middle</ep-option>
            </ep-select>
            <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full" style="">
                <div class="gjs-sm-label" data-sm-label="">
                    <span class="gjs-sm-icon " title="position">
                        {{t("grapesjs-echarts-presets.config.title.position.label")}}
                    </span>
                </div>
                <div class="gjs-fields" data-sm-fields="">
                    <div class="gjs-sm-field gjs-sm-composite">
                        <span id="gjs-sm-input-holder">
                            <div class="gjs-sm-properties">
                                <div :key="pos.name" v-for="pos in positions"
                                     class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                                    <div class="gjs-sm-label" data-sm-label="">
                                        <span class="gjs-sm-icon " title="">{{t(`grapesjs-echarts-presets.dict.position.${pos.name}`)}}</span>
                                        <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                            <svg viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="gjs-fields" data-sm-fields="">
                                        <div class="gjs-field gjs-field-integer">
                                            <span class="gjs-input-holder">
                                                <input v-model="pos.value" type="text" placeholder="0">
                                            </span>
                                            <span class="gjs-field-units">
                                                <select v-model="pos.unit" class="gjs-input-unit">
                                                    <option value="" disabled="" hidden="">-</option>
                                                    <option :key="unit" v-for="unit in units">{{unit}}</option>
                                                </select>
                                            </span>
                                            <div class="gjs-field-arrows" data-arrows="">
                                                <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </chart-section>
</template>

<script>

  import TextStyleEditor from "../text-style-editor"
  import ChartSection from "../widgets/chart-section"
  import EpSelect from "../editor-components/select"
  import EpOption from "../editor-components/option"
  import EpInput from "../editor-components/input"
  import EpCheckBox from "../editor-components/checkbox"
  import EpColorPicker from "../editor-components/color-picker"

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
      EpColorPicker
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
        positions: [{
          name: "top",
          value: "",
          unit: "px"
        }, {
          name: "right",
          value: "",
          unit: "px"
        }, {
          name: "bottom",
          value: "",
          unit: "px"
        }, {
          name: "left",
          value: "",
          unit: "px"
        }],
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
          for (let i = 0; i < newValue.length; i++) {
            let pos = newValue[i];
            this.title[pos.name] = `${pos.value}${pos.unit}`;
          }
          console.log(this.title);
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

