<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.basic.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="Color">{{ t("grapesjs-echarts-presets.config.basic.color.label") }}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
          <label class="gjs-field gjs-field-text" data-input="">
            <input type="color" v-model="basic.color">
          </label>
        </div>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="BackgroundColor">
            {{ t("grapesjs-echarts-presets.config.basic.backgroundColor.label") }}
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
          <label class="gjs-field gjs-field-text" data-input="">
            <input type="color" v-model="basic.backgroundColor">
          </label>
        </div>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="Animation">{{ t("grapesjs-echarts-presets.config.basic.animation.label") }}
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
          <label class="gjs-field gjs-field-checkbox" data-input="" >
            <input type="checkbox" v-model="basic.animation" @click="animationShow=!animationShow">
            <i class="gjs-chk-icon"></i>
          </label>
        </div>

        </div>
      <div class="gjs-fields" data-sm-fields="" v-show="!animationShow">
        <div class="gjs-sm-field gjs-sm-composite">
          <span id="gjs-sm-input-holder">
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="animationThreshold">{{t('grapesjs-echarts-presets.config.basic.animationThreshold.label')}}</div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                    <label class="gjs-field gjs-field-text" data-input="">
                        <input type="number" v-model="basic.animationThreshold">
                    </label>
                </div>

            </div>
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
                <div class="gjs-field gjs-field-text">

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
                <div class="gjs-field gjs-field-text">

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
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="useUTC">{{ t("grapesjs-echarts-presets.config.basic.useUTC.label") }}
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
          <label class="gjs-field gjs-field-checkbox" data-input="" >
            <input type="checkbox" v-model="basic.useUTC">
            <i class="gjs-chk-icon"></i>
          </label>
        </div>

      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="blendMode">{{t('grapesjs-echarts-presets.config.basic.blendMode.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text">
          <div class="gjs-field gjs-field-text">
            <select v-model="basic.blendMode" data-input>
              <option value disabled selected>{{t("grapesjs-echarts-presets.config.basic.blendMode.placeholder")}}</option>
              <option v-for="name in blendMode" :value="name">{{ name }}</option>

            </select>
          </div>
        </div>
      </div>

      </div>
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
  </chart-section>
</template>

<script>

import ChartSection from "./widgets/chart-section";

export default {
  name: "basic-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection
  },
  data() {
    return {
      basic: {
        color: "rgba(0, 0, 0, 0)",
        backgroundColor: "transparent",
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
        blendMode:'source-over',
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
@import "./assets/style.scss";
</style>
