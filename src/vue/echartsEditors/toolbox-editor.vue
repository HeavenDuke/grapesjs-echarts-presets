<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.toolbox.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <ep-check-box v-model="toolbox.show"
                    :label="t('grapesjs-echarts-presets.config.toolbox.show.label')"></ep-check-box>
      <ep-select v-model="toolbox.orient" :label="t('grapesjs-echarts-presets.config.toolbox.orient.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.toolbox.orient.placeholder')">
        <ep-option value="horizontal">horizontal</ep-option>
        <ep-option value="vertical">vertical</ep-option>
      </ep-select>
      <ep-number-input v-model="toolbox.itemSize"
                       :label="t('grapesjs-echarts-presets.config.toolbox.itemSize.label')"></ep-number-input>
      <ep-number-input v-model="toolbox.itemGap"
                       :label="t('grapesjs-echarts-presets.config.toolbox.itemGap.label')"></ep-number-input>
      <ep-check-box v-model="toolbox.showTitle"
                    :label="t('grapesjs-echarts-presets.config.toolbox.showTitle.label')"></ep-check-box>
      <div class="gjs-sm-label" data-sm-label="">
            <span class="gjs-sm-icon " title="position">
              {{ t("grapesjs-echarts-presets.config.toolbox.feature.label") }}
            </span>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-sm-field gjs-sm-composite">
          <span>
            <ep-check-box v-for="(val, index) in toolbox.feature" :key="index" v-model="val.show"
                          :label="index"></ep-check-box>
          </span>
        </div>
      </div>
      <ep-number-input v-model="toolbox.zlevel" :label="t('grapesjs-echarts-presets.config.toolbox.zlevel.label')"/>
      <ep-number-input v-model="toolbox.z" :label="t('grapesjs-echarts-presets.config.toolbox.z.label')"/>

      <ep-input v-model="toolbox.width" :label="t('grapesjs-echarts-presets.dict.size.width')"></ep-input>
      <ep-input v-model="toolbox.height" :label="t('grapesjs-echarts-presets.dict.size.height')"></ep-input>
      <ep-position :title="t('grapesjs-echarts-presets.config.toolbox.position.label')" :t="t" :use-unit="true"
                   v-model="positions"></ep-position>
    </div>
  </chart-section>
</template>

<script>
import ChartSection from "../widgets/chart-section";
import EpCheckBox from "../basic-template/checkbox";
import EpSelect from "../basic-template/select";
import EpInput from "../basic-template/input";
import EpNumberInput from "../basic-template/number-input";
import EpOption from "../basic-template/option";
import EpColorPicker from "../basic-template/color-picker";
import EpTextArea from "../basic-template/textarea";
import EpPosition from "../basic-template/position-selector";

export default {
  name: "toolbox-editor",
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
      toolbox: {
        show: true,
        orient: "",
        itemSize: 15,
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
        left: "",
        top: "",
        right: "",
        bottom: "",
        width: "",
        height: ""
      },
      positions: {top: '', right: '', bottom: '', left: ''},

    };
  },
  watch: {
    toolbox: {
      handler() {

        this.onChange();
      },
      deep: true
    },

    positions: {
      handler(newValue) {

        Object.assign(this.toolbox, newValue)
      },
      deep: true
    }
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>