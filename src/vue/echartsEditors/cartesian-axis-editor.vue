<template>
    <chart-section :title="t(`grapesjs-echarts-presets.config.${type}Axis.label`)">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.show.label')" v-model="axis.show"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.alignTicks.label')" v-model="axis.alignTicks"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.inverse.label')" v-model="axis.inverse"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.silent.label')" v-model="axis.silent"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.triggerEvent.label')" v-model="axis.triggerEvent"></ep-check-box>
            <ep-input :label="t('grapesjs-echarts-presets.config.axis.name.label')" v-model="axis.name"></ep-input>
            <ep-select :label="t('grapesjs-echarts-presets.config.axis.type.label')" v-model="axis.type">
                <ep-option v-for="type in seriesTypes" :key="type" :value="type" :label="t(`grapesjs-echarts-presets.dict.seriesType.${type}`)"></ep-option>
            </ep-select>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.nameGap.label')" v-model="axis.nameGap"></ep-number-input>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.nameRotate.label')" v-model="axis.nameRotate"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.min.label')" v-model="axis.min"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.max.label')" v-model="axis.max"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.splitNumber.label')" v-model="axis.splitNumber"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.minInterval.label')" v-model="axis.minInterval"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.maxInterval.label')" v-model="axis.maxInterval"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.interval.label')" v-model="axis.interval"></ep-number-input>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.z.label')" v-model="axis.z"></ep-number-input>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.zlevel.label')" v-model="axis.zlevel"></ep-number-input>
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
  import { SERIES_TYPES } from "@/vue/utils/smallDict";

  export default {
    name: "cartesian-axis-editor",
    props: ["t", "editor", "onChange", "type"],
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
        },
        seriesTypes: SERIES_TYPES,
        positions: {
          x: [],
          y: []
        }
      }
    },
    watch: {
      axis: {
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
