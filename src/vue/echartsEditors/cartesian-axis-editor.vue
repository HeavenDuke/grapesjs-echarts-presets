<template>
    <chart-section :title="t(`grapesjs-echarts-presets.config.${axis}Axis.label`)">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.show.label')" v-model="axis.show"></ep-check-box>
            <ep-input :label="t('grapesjs-echarts-presets.config.axis.name.label')" v-model="axis.name"></ep-input>
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

  export default {
    name: "cartesian-axis-editor",
    props: ["t", "editor", "onChange", "axis"],
    components: {
      TextStyleEditor,
      ChartSection,
      EpCheckBox,
      EpSelect,
      EpOption,
      EpInput,
      EpNumberInput,
      EpColorPicker
    },
    data () {
      return {
        axis: {
          show: true,
          alignTicks: false,
          position: '',
          offset: 0,
          type: 'category',
          name: '',
          nameLocation: 'end',
          nameTextStyle: {
            color: '',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
          },
          nameGap: 15,
          nameRotate: 0,
          inverse: false,
          boundaryGap: '',
          min: '',
          max: '',
          scale: false ,
          splitNumber: 5,
          minInterval: 0,
          maxInterval: '',
          interval: '',
          logBase: 10,
          silent: false,
          triggerEvent: false,
          axisLine: {} ,
          axisTick: {} ,
          minorTick: {} ,
          axisLabel: {} ,
          splitLine: {} ,
          minorSplitLine: {} ,
          splitArea: {} ,
          data: [] ,
          axisPointer: {} ,
          zlevel: 0 ,
          z: 0 ,
        }
      }
    },
    watch: {
      title: {
        handler() {
          this.onChange();
        },
        deep: true
      }
    },
  }
</script>

<style scoped>

</style>
