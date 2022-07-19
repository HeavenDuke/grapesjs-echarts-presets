<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.basic.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <ep-color-picker v-model="basic.color" :label='t("grapesjs-echarts-presets.config.basic.color.label")'/>
      <ep-color-picker v-model="basic.backgroundColor"
                       :label='t("grapesjs-echarts-presets.config.basic.backgroundColor.label")'/>
      <ep-check-box v-model="basic.animation"
                    :label='t("grapesjs-echarts-presets.config.basic.animation.label")'></ep-check-box>


      <div class="gjs-fields" data-sm-fields="" v-show="basic.animation">
        <div class="gjs-sm-field gjs-sm-composite">
          <span id="gjs-sm-input-holder">

            <ep-input v-model="basic.animationThreshold"
                      :label="t('grapesjs-echarts-presets.config.basic.animationThreshold.label')"
                      Type="number"></ep-input>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
               <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon "
                       title="animationDuration">{{ t("grapesjs-echarts-presets.config.basic.animationDuration.label") }}</span>
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
                 <span class="gjs-sm-icon "
                       title="animationDurationUpdate">{{ t("grapesjs-echarts-presets.config.basic.animationDurationUpdate.label") }}</span>
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
                 <span class="gjs-sm-icon "
                       title="animationEasing">{{ t("grapesjs-echarts-presets.config.basic.animationEasing.label") }}</span>
               </div>
              <div class="gjs-field-wrp gjs-field-wrp--text">
                <div class="gjs-field gjs-select">

                    <select v-model="basic.animationEasing" data-input>
                      <option value disabled
                              selected>{{ t("grapesjs-echarts-presets.config.basic.animationEasing.placeholder") }}</option>
                      <option v-for="fn in easing " :value="fn.name">
                        {{ fn.name }}
                      </option>
                    </select>

                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon "
                       title="animationEasingUpdate">{{ t("grapesjs-echarts-presets.config.basic.animationEasingUpdate.label") }}</span>
               </div>
              <div class="gjs-field-wrp gjs-field-wrp--text">
                <div class="gjs-field gjs-select">

                    <select v-model="basic.animationEasingUpdate" data-input>
                      <option value disabled
                              selected>{{ t("grapesjs-echarts-presets.config.basic.animationEasingUpdate.placeholder") }}</option>
                      <option v-for="fn in easing " :value="fn.name">
                        {{ fn.name }}
                      </option>
                    </select>

                </div>
              </div>
            </div>
            <div class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
              <div class="gjs-sm-label" data-sm-label="">
                 <span class="gjs-sm-icon "
                       title="animationDelay">{{ t("grapesjs-echarts-presets.config.basic.animationDelay.label") }}</span>
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
                 <span class="gjs-sm-icon "
                       title="animationDelayUpdate">{{ t("grapesjs-echarts-presets.config.basic.animationDelayUpdate.label") }}</span>
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

      <ep-check-box v-model="basic.useUTC"
                    :label='t("grapesjs-echarts-presets.config.basic.useUTC.label")'></ep-check-box>


      <ep-select v-model="basic.blendMode" :label="t('grapesjs-echarts-presets.config.basic.blendMode.label')"
                 :placeholder='t("grapesjs-echarts-presets.config.basic.blendMode.placeholder")'>
        <ep-option v-for="val in blendMode" :label="val"></ep-option>
      </ep-select>
      <ep-number-input v-model="basic.hoverLayerThreshold"
                       :label="t('grapesjs-echarts-presets.config.basic.hoverLayerThreshold.label')"></ep-number-input>

    </div>

  </chart-section>
</template>

<script>

import ChartSection from "../widgets/chart-section";
import EpCheckBox from "../basic-template/checkbox";
import EpSelect from "../basic-template/select";
import EpInput from "../basic-template/input";
import EpOption from "../basic-template/option";
import EpColorPicker from "../basic-template/color-picker";
import {ANIMATIONEASING, BLENDMODE} from "@/vue/utils/dict";
import EpNumberInput from "@/vue/basic-template/number-input";

export default {
  name: "basic-editor",
  props: ["t", "editor", "onChange"],
  components: {
    EpNumberInput,
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
        color: "",
        backgroundColor: "",
        animation: true,

        useUTC: false,
        animationThreshold: "2000",
        animationDuration: "1000",
        animationDurationUpdate: "300",
        animationEasing: "cubicOut",
        animationEasingUpdate: "cubicOut",
        animationDelay: "0",
        animationDelayUpdate: "0",
        blendMode: "source-over",
        hoverLayerThreshold: 3000,
      },
      easing: ANIMATIONEASING,
      blendMode: BLENDMODE


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
