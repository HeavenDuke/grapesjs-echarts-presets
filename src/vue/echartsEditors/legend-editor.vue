<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.legend.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <Basic v-model="legend.show"
                    :label="t('grapesjs-echarts-presets.config.legend.show.label')"></Basic>
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
      <ep-line-style v-model="legend.lineStyle" :title="t('grapesjs-echarts-presets.config.legend.lineStyle.label')" :t="t"/>



    </div>
  </chart-section>
</template>

<script>
import ChartSection from "../widgets/chart-section";
// import EpCheckBox from "../basic-template/checkbox";
import Basic from "../basic-template"
import EpSelect from "../basic-template/select";
import EpInput from "../basic-template/input";
import EpNumberInput from "../basic-template/number-input";
import EpOption from "../basic-template/option";
import EpColorPicker from "../basic-template/color-picker";
import EpTextArea from "../basic-template/textarea";
import EpPosition from "../basic-template/position-selector";
import EpLineStyle from "../popups-template/line-style-editor"

export default {
  name: "legend-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    EpColorPicker,
    EpSelect,
    Basic,
    EpInput,
    EpOption,
    EpNumberInput,
    EpTextArea,
    EpPosition,
    EpLineStyle
  },
  data() {
    return {
      legend: {
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
        align:'auto',
        padding:5,
        itemWidth: 25,
        itemHeight: 14,
        itemGap: 8,
        itemStyle: {},
        lineStyle:{
          color:'inherit',
          width:'auto',
          type:'inherit',
          dashOffset:'inherit',
          cap:'inherit',
          join:'inherit',
          miterLimit:'inherit',
          shadowBlur:'inherit',
          shadowColor: '',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity:'inherit'
        },
        symbolRotate:'inherit',
        formatter:'',
        selectedMode:true,
        inactiveColor:'#cccccc',
        inactiveBorderColor:'#cccccc',
        inactiveBorderWidth: 'auto',
        selected:'',
        textStyle:{},
        tooltip:{},
        icon:'',
        backgroundColor:'transparent',
        borderColor:'#cccccc',
        borderWidth:1,
        borderRadius:0,
        showBlur:'',
        shadowColor:'',
        shadowOffsetX:0,
        shadowOffsetY:0,
        scrollDataIndex:0,
        pageButtonItemGap:5,
        pageButtonGap:'',
        pageButtonPosition:',',

        pageFormatter:'',
        pageIcons:'',
        pageIconColor:'',
        pageIconInactiveColor:'',
        pageTextStyle:{

        },
        animation:false,
        animationDurationUpdate:{

        },
        emphasis:{},
        selector:'',
        selectorLabel:{},
        selectionPosition:'',
        selectorItemGap:7,
        selectorButtonGap:10
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

        Object.assign(this.legend, newValue)
      },
      deep: true
    }
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>