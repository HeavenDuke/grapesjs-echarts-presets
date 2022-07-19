<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.legend.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
      <ep-select v-model="legend.type" :label="t('grapesjs-echarts-presets.config.legend.type.label')">
        <ep-option value="plain">plain</ep-option>
        <ep-option value="scroll">scroll</ep-option>
      </ep-select>
      <ep-check-box v-model="legend.show"
                    :label="t('grapesjs-echarts-presets.config.legend.show.label')"></ep-check-box>
      <ep-number-input v-model="legend.zlevel" :label="t('grapesjs-echarts-presets.config.legend.zlevel.label')"/>
      <ep-number-input v-model="legend.z" :label="t('grapesjs-echarts-presets.config.legend.z.label')"/>
      <ep-position :title="t('grapesjs-echarts-presets.config.legend.position.label')" :t="t" :use-unit="true"
                   v-model="positions"></ep-position>
      <ep-input v-model="legend.width" :label="t('grapesjs-echarts-presets.dict.size.width')"></ep-input>
      <ep-input v-model="legend.height" :label="t('grapesjs-echarts-presets.dict.size.height')"></ep-input>

      <ep-select v-model="legend.orient" :label="t('grapesjs-echarts-presets.config.legend.orient.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.legend.orient.placeholder')">
        <ep-option value="horizontal">horizontal</ep-option>
        <ep-option value="vertical">vertical</ep-option>
      </ep-select>
      <ep-select v-model="legend.align" :label="t('grapesjs-echarts-presets.config.legend.align.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.legend.align.placeholder')">
        <ep-option value="auto">auto</ep-option>
        <ep-option value="left">left</ep-option>
        <ep-option value="right">right</ep-option>
      </ep-select>

      <ep-number-input v-model="legend.padding" :label="t('grapesjs-echarts-presets.config.legend.padding.label')"/>
      <ep-number-input v-model="legend.itemWidth"
                       :label="t('grapesjs-echarts-presets.config.legend.itemWidth.label')"></ep-number-input>
      <ep-number-input v-model="legend.itemHeight"
                       :label="t('grapesjs-echarts-presets.config.legend.itemHeight.label')"></ep-number-input>
      <ep-number-input v-model="legend.itemGap"
                       :label="t('grapesjs-echarts-presets.config.legend.itemGap.label')"></ep-number-input>
      <!--      itemStyle-->
      <ep-line-style v-model="legend.lineStyle" :title="t('grapesjs-echarts-presets.config.legend.lineStyle.label')"
                     :t="t"/>
      <ep-text-area v-model="legend.formatter"
                    :label="t('grapesjs-echarts-presets.config.legend.formatter.label')"
                    :placeholder="t('grapesjs-echarts-presets.config.legend.formatter.placeholder')"></ep-text-area>
      <ep-check-box v-model="legend.selectedMode"
                    :label="t('grapesjs-echarts-presets.config.legend.selectedMode.label')"></ep-check-box>
      <ep-color-picker v-model="legend.inactiveColor"
                       :label="t('grapesjs-echarts-presets.config.legend.inactiveColor.label')"></ep-color-picker>
      <ep-color-picker v-model="legend.inactiveBorderColor"
                       :label="t('grapesjs-echarts-presets.config.legend.inactiveBorderColor.label')"></ep-color-picker>
      <ep-select v-model="legend.inactiveBorderWidth"
                 :label="t('grapesjs-echarts-presets.config.legend.inactiveBorderWidth.label')">
        <ep-option value="auto">auto</ep-option>
        <ep-option value="inherit">inherit</ep-option>
      </ep-select>
      <!--      selected-->
      <ep-text-style v-model="legend.textStyle" :t="t"
                     :title="t('grapesjs-echarts-presets.config.legend.textStyle.label')"></ep-text-style>
      <!--      tooltip-->
      <ep-text-area v-model="legend.icon"
                    :label="t('grapesjs-echarts-presets.config.legend.icon.label')"></ep-text-area>
      <!--      data-->
      <ep-color-picker v-model="legend.backgroundColor"
                       :label="t('grapesjs-echarts-presets.config.legend.backgroundColor.label')"></ep-color-picker>
      <ep-color-picker v-model="legend.borderColor"
                       :label="t('grapesjs-echarts-presets.config.legend.borderColor.label')"/>
      <ep-number-input v-model="legend.borderWidth"
                       :label="t('grapesjs-echarts-presets.config.legend.borderWidth.label')"></ep-number-input>
      <ep-number-input v-model="legend.borderRadius"
                       :label="t('grapesjs-echarts-presets.config.legend.borderRadius.label')"/>
      <ep-number-input v-model="legend.shadowBlur"
                       :label="t('grapesjs-echarts-presets.config.legend.shadowBlur.label')"/>
      <ep-color-picker v-model="legend.shadowColor"
                       :label="t('grapesjs-echarts-presets.config.legend.shadowColor.label')"/>
      <ep-number-input v-model="legend.shadowOffsetX"
                       :label="t('grapesjs-echarts-presets.config.legend.shadowOffsetX.label')"/>
      <ep-number-input v-model="legend.shadowOffsetY"
                       :label="t('grapesjs-echarts-presets.config.legend.shadowOffsetY.label')"/>
      <ep-number-input v-model="legend.scrollDataIndex"
                       :label="t('grapesjs-echarts-presets.config.legend.scrollDataIndex.label')"/>
      <ep-number-input v-model="legend.pageButtonItemGap"
                       :label="t('grapesjs-echarts-presets.config.legend.pageButtonItemGap.label')"/>
      <ep-number-input v-model="legend.pageButtonGap"
                       :label="t('grapesjs-echarts-presets.config.legend.pageButtonGap.label')"/>
      <ep-select v-model="legend.pageButtonPosition"
                 :label="t('grapesjs-echarts-presets.config.legend.pageButtonPosition.label')">
        <ep-option value="start">start</ep-option>
        <ep-option value="end">end</ep-option>
      </ep-select>
      <ep-text-area v-model="legend.pageFormatter"
                    :label="t('grapesjs-echarts-presets.config.legend.pageFormatter.label')"></ep-text-area>
      <ep-text-area v-model="legend.pageIcons"
                    :label="t('grapesjs-echarts-presets.config.legend.pageIcons.label')"></ep-text-area>
      <ep-color-picker v-model="legend.pageIconColor"
                       :label="t('grapesjs-echarts-presets.config.legend.pageIconColor.label')"/>
      <ep-color-picker v-model="legend.pageIconInactiveColor"
                       :label="t('grapesjs-echarts-presets.config.legend.pageIconInactiveColor.label')"/>
      <ep-number-input v-model="legend.pageIconSize"
                       :label="t('grapesjs-echarts-presets.config.legend.pageIconSize.label')"></ep-number-input>
      <!--pageTextStyle-->
      <ep-check-box v-model="legend.animation"
                    :label="t('grapesjs-echarts-presets.config.legend.animation.label')"></ep-check-box>
      <ep-number-input v-model="legend.animationDurationUpdate"
                       :label="t('grapesjs-echarts-presets.config.legend.animationDurationUpdate.label')"></ep-number-input>
      <!--emphasis-->
      <ep-check-box v-model="legend.selector"
                    :label="t('grapesjs-echarts-presets.config.legend.selector.label')"></ep-check-box>
      <!--      selectorLabel-->
      <ep-select v-model="legend.selectorPosition"
                 :label="t('grapesjs-echarts-presets.config.legend.selectorPosition.label')">
        <ep-option value="auto">auto</ep-option>
        <ep-option value="start">start</ep-option>
        <ep-option value="end">end</ep-option>
      </ep-select>
      <ep-number-input v-model="legend.selectorItemGap"
                       :label="t('grapesjs-echarts-presets.config.legend.selectorItemGap.label')"></ep-number-input>
      <ep-number-input v-model="legend.selectorButtonGap"
                       :label="t('grapesjs-echarts-presets.config.legend.selectorButtonGap.label')"></ep-number-input>


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
import EpPosition from "../basic-template/position-selector";
import EpLineStyle from "../popups-template/line-style-editor";
import EpTextStyle from "../popups-template/text-style-editor";

export default {
  name: "legend-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    EpColorPicker,
    EpSelect,
    EpCheckBox,
    EpInput,
    EpOption,
    EpNumberInput,
    EpTextArea,
    EpPosition,
    EpLineStyle,
    EpTextStyle
  },
  data() {
    return {
      legend: {
        type: "plain",
        show: true,
        zlevel: 0,
        z: 2,
        orient: "horizontal",
        left: "",
        top: "",
        right: "",
        bottom: "",
        width: "",
        height: "",
        align: "auto",
        padding: 5,
        itemWidth: 25,
        itemHeight: 14,
        itemGap: 8,
        itemStyle: {},
        lineStyle: {
          color: "inherit",
          width: "auto",
          type: "inherit",
          dashOffset: "inherit",
          cap: "inherit",
          join: "inherit",
          miterLimit: "inherit",
          shadowBlur: "inherit",
          shadowColor: "",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: "inherit"
        },
        symbolRotate: "inherit",
        formatter: "",
        selectedMode: true,
        inactiveColor: "#cccccc",
        inactiveBorderColor: "#cccccc",
        inactiveBorderWidth: "auto",
        // selected: {},
        textStyle: {},
        // tooltip: {},
        icon: "",
        backgroundColor: "transparent",
        borderColor: "#cccccc",
        borderWidth: 1,
        borderRadius: 0,
        shadowBlur: "",
        shadowColor: "",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: "",
        pageButtonPosition: "end",

        pageFormatter: "",
        pageIcons: "",
        pageIconColor: "",
        pageIconSize: "",
        pageIconInactiveColor: "",
        // pageTextStyle: {},
        animation: false,
        animationDurationUpdate: 800,
        // emphasis: {},
        selector: true,
        // selectorLabel: {},
        selectorPosition: "",
        selectorItemGap: 7,
        selectorButtonGap: 10
      },
      positions: {top: "0", right: "0", bottom: "0", left: "0"},

    };
  },
  watch: {
    legend: {
      handler() {

        this.onChange();
      },
      deep: true
    },

    positions: {
      handler(newValue) {

        Object.assign(this.legend, newValue);
      },
      deep: true
    }
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>