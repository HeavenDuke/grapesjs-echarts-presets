<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.tooltip.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
      <!--      内容区-->
      <ep-check-box :label="t('grapesjs-echarts-presets.config.tooltip.show.label')" v-model="tooltip.show"/>
      <ep-select :label="t('grapesjs-echarts-presets.config.tooltip.trigger.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.tooltip.trigger.placeholder')"
                 v-model="tooltip.trigger">
        <ep-option v-for="val in trigger" :value="val" :label="val"></ep-option>
      </ep-select>
      <ep-check-box :label="t('grapesjs-echarts-presets.config.tooltip.showContent.label')"
                    v-model="tooltip.showContent"/>
      <ep-check-box :label="t('grapesjs-echarts-presets.config.tooltip.alwaysShowContent.label')"
                    v-model="tooltip.alwaysShowContent"/>
      <ep-select :label="t('grapesjs-echarts-presets.config.tooltip.triggerOn.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.tooltip.triggerOn.placeholder')"
                 v-model="tooltip.triggerOn">
        <ep-option v-for="val in triggerOn" :value="val" :label="val"></ep-option>
      </ep-select>
      <ep-number-input :label="t('grapesjs-echarts-presets.config.tooltip.showDelay.label')" :min="0"
                       v-model="tooltip.showDelay"/>
      <ep-number-input :label="t('grapesjs-echarts-presets.config.tooltip.hideDelay.label')" :min="0"
                       v-model="tooltip.hideDelay"/>
      <ep-check-box :label="t('grapesjs-echarts-presets.config.tooltip.enterable.label')" v-model="tooltip.enterable"/>
      <ep-select :label="t('grapesjs-echarts-presets.config.tooltip.renderMode.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.tooltip.renderMode.placeholder')"
                 v-model="tooltip.renderMode">
        <ep-option v-for="val in renderMode" :value="val" :label="val"></ep-option>
      </ep-select>
      <ep-check-box :label="t('grapesjs-echarts-presets.config.tooltip.confine.label')" v-model="tooltip.confine"/>
      <ep-check-box :label="t('grapesjs-echarts-presets.config.tooltip.appendToBody.label')"
                    v-model="tooltip.appendToBody"/>
      <ep-input v-model="tooltip.className" :label="t('grapesjs-echarts-presets.config.tooltip.className.label')" :placeholder="t('grapesjs-echarts-presets.config.tooltip.className.placeholder')"></ep-input>
      <ep-number-input :label="t('grapesjs-echarts-presets.config.tooltip.transitionDuration.label')" :min="0" :max="1"
                       :step="0.1"
                       v-model="tooltip.transitionDuration"/>
      <ep-select :label="t('grapesjs-echarts-presets.config.tooltip.position.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.tooltip.position.placeholder')"
                 v-model="tooltip.position">
        <ep-option v-for="val in position" :value="val" :label="val"></ep-option>
      </ep-select>
      <ep-text-area v-model="tooltip.formatter"
                    :label="t('grapesjs-echarts-presets.config.tooltip.formatter.label')"
                    :placeholder="t('grapesjs-echarts-presets.config.tooltip.formatter.placeholder')"></ep-text-area>

      <ep-color-picker :label="t('grapesjs-echarts-presets.config.tooltip.backgroundColor.label')"
                       v-model="tooltip.backgroundColor"/>
      <ep-color-picker :label="t('grapesjs-echarts-presets.config.tooltip.borderColor.label')"
                       v-model="tooltip.borderColor"/>
      <ep-number-input :label="t('grapesjs-echarts-presets.config.tooltip.borderWidth.label')"
                       v-model="tooltip.borderWidth"/>
      <ep-number-input :label="t('grapesjs-echarts-presets.config.tooltip.padding.label')"
                       v-model="tooltip.padding"/>
      <text-style-editor :title="t('grapesjs-echarts-presets.config.tooltip.textStyle.label')" :t="t"
                         v-model="tooltip.textStyle"></text-style-editor>
      <ep-text-area v-model="tooltip.extraCssText"
                    :label="t('grapesjs-echarts-presets.config.tooltip.extraCssText.label')"
                    :placeholder="t('grapesjs-echarts-presets.config.tooltip.extraCssText.placeholder')"></ep-text-area>
      <ep-select :label="t('grapesjs-echarts-presets.config.tooltip.order.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.tooltip.order.placeholder')"
                 v-model="tooltip.order">
        <ep-option v-for="val in order" :value="val" :label="val"></ep-option>
      </ep-select>

    </div>
  </chart-section>
</template>

<script>
//已完成，待完善
import ChartSection from "../widgets/chart-section";
import EpCheckBox from "../basic-template/checkbox";
import EpSelect from "../basic-template/select";
import EpInput from "../basic-template/input";
import EpNumberInput from "../basic-template/number-input";
import EpOption from "../basic-template/option";
import EpColorPicker from "../basic-template/color-picker";
import EpTextArea from "../basic-template/textarea";
import {TOOLTIP} from "@/vue/utils/smallDict";
import TextStyleEditor from "../popups-template/text-style-editor";

export default {
  name: "tooltip-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    EpCheckBox,
    EpSelect,
    EpInput,
    EpNumberInput,
    EpOption,
    EpColorPicker,
    TextStyleEditor,
    EpTextArea
  },
  data() {
    return {
      tooltip: {
        show: true,
        trigger: "item",
        // axisPointer:{},
        showContent: true,
        alwaysShowContent: false,
        triggerOn: "mousemove|click",
        showDelay: 0,
        hideDelay: 100,
        enterable: false,
        renderMode: "html",
        confine: false,
        appendToBody: false,
        className:'',
        transitionDuration: 0.4,
        position: "",
        formatter:'',
        // valueFormatter:'',
        backgroundColor: "rgba(50,50,50,0.7)",
        borderColor: "#333333",
        borderWidth: 0,
        padding: 5,
        textStyle: {
          color: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "sans-serif",
          fontSize: 14,
        },
        extraCssText: "",
        order: "seriesAsc"

      },
      order: TOOLTIP.order,
      trigger: TOOLTIP.trigger,
      triggerOn: TOOLTIP.triggerOn,
      renderMode: TOOLTIP.renderMode,
      position: TOOLTIP.position,

    };
  },
  watch: {
    tooltip: {
      handler() {
        this.onChange();
      },
      deep: true
    },
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>
