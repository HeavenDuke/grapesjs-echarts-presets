<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.legend.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <ep-check-box v-model="legend.show"
                    :label="t('grapesjs-echarts-presets.config.legend.show.label')"></ep-check-box>
      <ep-select v-model="legend.orient" :label="t('grapesjs-echarts-presets.config.legend.orient.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.legend.orient.placeholder')">
        <ep-option value="horizontal">horizontal</ep-option>
        <ep-option value="vertical">vertical</ep-option>
      </ep-select>
      <ep-number-input v-model="legend.itemWidth"
                       :label="t('grapesjs-echarts-presets.config.legend.itemWidth.label')"></ep-number-input>
      <ep-number-input v-model="legend.itemHeight"
                       :label="t('grapesjs-echarts-presets.config.legend.itemHeight.label')"></ep-number-input>
      <ep-number-input v-model="legend.itemGap"
                       :label="t('grapesjs-echarts-presets.config.legend.itemGap.label')"></ep-number-input>
      <ep-check-box v-model="legend.showTitle"
                    :label="t('grapesjs-echarts-presets.config.legend.showTitle.label')"></ep-check-box>
      <div class="gjs-sm-label" data-sm-label="">
            <span class="gjs-sm-icon " title="position">
              {{ t("grapesjs-echarts-presets.config.legend.feature.label") }}
            </span>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-sm-field gjs-sm-composite">
          <span>
            <ep-check-box v-for="(val, index) in legend.feature" :key="index" v-model="val.show"
                          :label="index"></ep-check-box>
          </span>
        </div>
      </div>
      <ep-number-input v-model="legend.zlevel" :label="t('grapesjs-echarts-presets.config.legend.zlevel.label')"/>
      <ep-number-input v-model="legend.z" :label="t('grapesjs-echarts-presets.config.legend.z.label')"/>

      <ep-input v-model="legend.width" :label="t('grapesjs-echarts-presets.dict.size.width')"></ep-input>
      <ep-input v-model="legend.height" :label="t('grapesjs-echarts-presets.dict.size.height')"></ep-input>
      <ep-position :title="t('grapesjs-echarts-presets.config.legend.position.label')" :t="t" :use-unit="true"
                   v-model="positions"></ep-position>
    </div>
  </chart-section>
</template>

<script>
import ChartSection from "../widgets/chart-section";
import EpCheckBox from "../editor-components/checkbox";
import EpSelect from "../editor-components/select";
import EpInput from "../editor-components/input";
import EpNumberInput from "../editor-components/number-input";
import EpOption from "../editor-components/option";
import EpColorPicker from "../editor-components/color-picker";
import EpTextArea from "../editor-components/textarea";
import EpPosition from "../widgets/position-selector";

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
    EpPosition
  },
  data() {
    return {
      legend: {
        show: true,
        orient: "",
        left: "",
        top: "",
        right: "",
        bottom: "",
        itemWidth: 25,
        itemHeight: 14,
        itemGap: 8,

        showTitle: true,
        feature: {
          saveAsImage: {show: false},
          restore: {show: false},
          dataView: {show: false},
          dataZoom: {show: false},
          magicType: {show: false},
          brush: {show: false}
        },
        iconStyle: {},
        emphasis: {},
        zlevel: 0,
        z: 2,

        width: "",
        height: ""
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

        this.legend.top = newValue.top;
        this.legend.right = newValue.right;
        this.legend.bottom = newValue.bottom;
        this.legend.left = newValue.left;

        this.onChange();
      },
      deep: true
    }
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>