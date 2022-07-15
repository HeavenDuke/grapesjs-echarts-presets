<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.basic.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <ep-color-picker v-model="basic.color" :label='t("grapesjs-echarts-presets.config.basic.color.label")'/>
      <ep-color-picker v-model="basic.backgroundColor" :label='t("grapesjs-echarts-presets.config.basic.backgroundColor.label")'/>
      <ep-check-box v-model="basic.animation"  :label='t("grapesjs-echarts-presets.config.basic.animation.label")'></ep-check-box>


      <div class="gjs-fields" data-sm-fields="" v-show="basic.animation">
        <div class="gjs-sm-field gjs-sm-composite">
          <span id="gjs-sm-input-holder">

            <ep-input v-model="basic.animationThreshold" :label="t('grapesjs-echarts-presets.config.basic.animationThreshold.label')" Type="number"></ep-input>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
               <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon " title="animationDuration">{{t("grapesjs-echarts-presets.config.basic.animationDuration.label")}}</span>
               </div>
              <div class="gjs-fields" data-sm-fields="">
                <div class="gjs-field gjs-field-integer">
                  <span class="gjs-input-holder">
                    <input v-model="basic.animationDuration" type="text" placeholder="0">
                  </span>
                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon " title="animationDurationUpdate">{{t("grapesjs-echarts-presets.config.basic.animationDurationUpdate.label")}}</span>
               </div>
              <div class="gjs-fields" data-sm-fields="">
                <div class="gjs-field gjs-field-integer">
                  <span class="gjs-input-holder">
                    <input v-model="basic.animationDurationUpdate" type="text" placeholder="0">
                  </span>
                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon " title="animationEasing">{{t("grapesjs-echarts-presets.config.basic.animationEasing.label")}}</span>
               </div>
              <div class="gjs-field-wrp gjs-field-wrp--text">
                <div class="gjs-field gjs-select">

                    <select v-model="basic.animationEasing" data-input >
                      <option value disabled selected>{{t("grapesjs-echarts-presets.config.basic.animationEasing.placeholder")}}</option>
                      <option v-for="fn in easing " :value="fn.name">
                        {{fn.name}}
                      </option>
                    </select>

                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon " title="animationEasingUpdate">{{t("grapesjs-echarts-presets.config.basic.animationEasingUpdate.label")}}</span>
               </div>
              <div class="gjs-field-wrp gjs-field-wrp--text">
                <div class="gjs-field gjs-select">

                    <select v-model="basic.animationEasingUpdate" data-input >
                      <option value disabled selected>{{t("grapesjs-echarts-presets.config.basic.animationEasingUpdate.placeholder")}}</option>
                      <option v-for="fn in easing " :value="fn.name">
                        {{fn.name}}
                      </option>
                    </select>

                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon " title="animationDelay">{{t("grapesjs-echarts-presets.config.basic.animationDelay.label")}}</span>
               </div>
              <div class="gjs-fields" data-sm-fields="">
                <div class="gjs-field gjs-field-integer">
                  <span class="gjs-input-holder">
                    <input v-model="basic.animationDelay" type="text" placeholder="0">
                  </span>
                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon " title="animationDelayUpdate">{{t("grapesjs-echarts-presets.config.basic.animationDelayUpdate.label")}}</span>
               </div>
              <div class="gjs-fields" data-sm-fields="">
                <div class="gjs-field gjs-field-integer">
                  <span class="gjs-input-holder">
                    <input v-model="basic.animationDelayUpdate" type="text" placeholder="0">
                  </span>
                </div>
              </div>
            </div>

          </span>
        </div>
      </div>

      <ep-check-box v-model="basic.useUTC" :label='t("grapesjs-echarts-presets.config.basic.useUTC.label")'></ep-check-box>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="blendMode">{{t('grapesjs-echarts-presets.config.basic.blendMode.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text">
          <div class="gjs-field gjs-select">
            <select v-model="basic.blendMode" data-input>
              <option value disabled selected>{{t("grapesjs-echarts-presets.config.basic.blendMode.placeholder")}}</option>
              <option v-for="name in blendMode" :value="name">{{ name }}</option>

            </select>
          </div>
        </div>
      </div>
      <ep-select v-model="basic.blendMode" :label="t('grapesjs-echarts-presets.config.basic.blendMode.label')" :placeholder='t("grapesjs-echarts-presets.config.basic.blendMode.placeholder")'>
        <ep-option v-for="val in blendMode" v-model="val.value" :label="val.name"></ep-option>
      </ep-select>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="hoverLayerThreshold">{{t('grapesjs-echarts-presets.config.basic.hoverLayerThreshold.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
          <label class="gjs-field gjs-field-text" data-input="">
            <input type="number" v-model="basic.hoverLayerThreshold">
          </label>
        </div>
      </div>
      </div>

  </chart-section>
</template>

<script>

import ChartSection from "../widgets/chart-section";
import EpCheckBox from "../editor-components/checkbox";
import EpSelect from "../editor-components/select";
import EpInput from "../editor-components/input";
import EpOption from "../editor-components/option";
import EpColorPicker from "../editor-components/color-picker";

export default {
  name: "basic-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    EpColorPicker,
    EpSelect,
    EpCheckBox,
    EpInput,
    EpOption
  },
  data() {
    return {
      basic: {
        color: "rgba(0, 0, 0, 0)",
        backgroundColor: "none",
        animation: true,
        // animationShow: false,
        useUTC:false,
        animationThreshold:'2000',
        animationDuration:'1000',
        animationDurationUpdate:'300',
        animationEasing:'cubicOut',
        animationEasingUpdate:'cubicOut',
        animationDelay:'0',
        animationDelayUpdate: '0',
        blendMode:"source-over",
        hoverLayerThreshold:'3000'
      },
      easing:[{name:"linear"},
        {name:"quadraticLn"},
        {name:"quadraticOut"},
        {name:"quadraticInOut"},
        {name:"cubicIn"},
        {name:"cubicOut"},
        {name:"cubicInOut"},
        {name:"quarticIn"},
        {name:"quarticOut"},
        {name:"quarticInOut"},
        {name:"quinticIn"},
        {name:"quinticOut"},
        {name:"quinticInOut"},
        {name:"sinusoidalIn"},
        {name:"sinusoidalOut"},
        {name:"sinusoidalInOut"},
        {name:"exponentialIn"},
        {name:"exponentialOut"},
        {name:"exponentialInOut"},
        {name:"circularIn"},
        {name:"circularOut"},
        {name:"circularInOut"},
        {name:"elasticIn"},
        {name:"elasticOut"},
        {name:"elasticInOut"},
        {name:"backIn"},
        {name:"backOut"},
        {name:"backInOut"},
        {name:"bounceIn"},
        {name:"bounceOut"},
        {name:"bounceInOut"},
        ],
      blendMode: ['source-over',
      'source-in',
      'source-out',
      'source-atop',
      'destination-over',
      'destination-in',
      'destination-out',
      'destination-atop',
      'lighter',
      'copy',
      'xor',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      ]




    };
  },
  watch: {
    basic: {
      handler() {

        this.onChange();
      },
      deep: true
    },
    positions: {
      handler(newValue) {
        for (let i = 0; i < newValue.length; i++) {
          let pos = newValue[i];
          this.basic[pos.name] = `${pos.value}${pos.unit}`;
        }
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
