<template>
    <chart-section :title="t(`grapesjs-echarts-presets.config.${type}Axis.label`)">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.show.label')"
                          v-model="axis.show"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.alignTicks.label')"
                          v-model="axis.alignTicks"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.inverse.label')"
                          v-model="axis.inverse"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.silent.label')"
                          v-model="axis.silent"></ep-check-box>
            <ep-check-box :label="t('grapesjs-echarts-presets.config.axis.triggerEvent.label')"
                          v-model="axis.triggerEvent"></ep-check-box>
            <ep-input :label="t('grapesjs-echarts-presets.config.axis.name.label')" v-model="axis.name"></ep-input>
            <ep-select :label="t('grapesjs-echarts-presets.config.axis.type.label')" v-model="axis.type">
                <ep-option v-for="type in seriesTypes" :key="type" :value="type"
                           :label="t(`grapesjs-echarts-presets.dict.seriesType.${type}`)"></ep-option>
            </ep-select>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.nameGap.label')"
                             v-model="axis.nameGap"></ep-number-input>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.nameRotate.label')"
                             v-model="axis.nameRotate"></ep-number-input>
            <ep-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.min.label')"
                             v-model="axis.min"></ep-input>
            <ep-input v-if="axis.type === 'value'" :label="t('grapesjs-echarts-presets.config.axis.max.label')"
                             v-model="axis.max"></ep-input>
            <ep-number-input v-if="axis.type === 'value'"
                             :label="t('grapesjs-echarts-presets.config.axis.splitNumber.label')"
                             v-model="axis.splitNumber"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'"
                             :label="t('grapesjs-echarts-presets.config.axis.minInterval.label')"
                             v-model="axis.minInterval"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'"
                             :label="t('grapesjs-echarts-presets.config.axis.maxInterval.label')"
                             v-model="axis.maxInterval"></ep-number-input>
            <ep-number-input v-if="axis.type === 'value'"
                             :label="t('grapesjs-echarts-presets.config.axis.interval.label')"
                             v-model="axis.interval"></ep-number-input>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.z.label')"
                             v-model="axis.z"></ep-number-input>
            <ep-number-input :label="t('grapesjs-echarts-presets.config.axis.zlevel.label')"
                             v-model="axis.zlevel"></ep-number-input>
            <text-style-editor :t="t" :title="t('grapesjs-echarts-presets.config.axis.nameTextStyle.label')"
                               v-model="axis.nameTextStyle"></text-style-editor>
            <label-editor :t="t" :title="t('grapesjs-echarts-presets.config.axis.axisLabel.label')"
                               v-model="axis.axisLabel"></label-editor>
            <axis-line-editor :t="t" v-model="axis.axisLine"></axis-line-editor>
            <split-line-editor :t="t" :title="t('grapesjs-echarts-presets.config.axis.splitLine.label')" v-model="axis.splitLine"></split-line-editor>
            <split-line-editor :t="t" minor :title="t('grapesjs-echarts-presets.config.axis.minorSplitLine.label')" v-model="axis.minorSplitLine"></split-line-editor>
            <tick-editor :t="t" :title="t('grapesjs-echarts-presets.config.axis.axisTick.label')" v-model="axis.axisTick"></tick-editor>
            <tick-editor :t="t" minor :title="t('grapesjs-echarts-presets.config.axis.minorAxisTick.label')" v-model="axis.minorTick"></tick-editor>
        </div>
    </chart-section>
</template>

<script>

    import TickEditor from "../tick-editor"
  import AxisLineEditor from "../axis-line-editor"
  import SplitLineEditor from "../split-line-editor"
  import TextStyleEditor from "../text-style-editor"
  import LabelEditor from "../label-editor"
  import ChartSection from "../widgets/chart-section"
  import EpSelect from "../editor-components/select"
  import EpOption from "../editor-components/option"
  import EpInput from "../editor-components/input"
  import EpNumberInput from "../editor-components/number-input"
  import EpCheckBox from "../editor-components/checkbox"
  import EpColorPicker from "../editor-components/color-picker"
  import {SERIES_TYPES} from "@/vue/utils/smallDict";
  import {TEXT_STYLE, LINE_STYLE, AREA_STYLE} from "@/vue/utils/templates";

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
      EpColorPicker,
      AxisLineEditor,
      SplitLineEditor,
      TickEditor,
      SplitAreaEditor,
      LabelEditor
    },
    data() {
      return {
        axis: {
          show: true,
          alignTicks: false,
          position: '',
          offset: 0,
          type: this.type === 'x' ? "category" : "value",
          name: '',
          nameLocation: 'end',
          nameTextStyle: Object.assign({}, TEXT_STYLE),
          axisLine: {
            show: true,
            onZero: true,
            onZeroAxisIndex: 0,
            symbol: ['none', 'none'],
            symbolSize: [10, 15],
            symbolOffset: [0, 0],
            lineStyle: Object.assign({}, LINE_STYLE)
          },
          axisTick: {
            show: true,
            alignWithLabel: false,
            interval: 'auto',
            inside: false,
            length: 5,
            lineStyle: Object.assign({}, LINE_STYLE)
          },
          minorTick: {
            show: false,
            splitNumber: 5,
            length: 3,
            lineStyle: Object.assign({}, LINE_STYLE)
          },
          axisLabel: Object.assign({
            show: true,
            interval: 'auto',
            inside: false,
            rotate: 0,
            margin: 8,
            showMinLabel: true,
            showMaxLabel: true,
            hideOverlap: true,
          }, TEXT_STYLE),
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: Object.assign({}, LINE_STYLE)
          },
          minorSplitLine: {
            show: true,
            lineStyle: Object.assign({}, LINE_STYLE)
          },
          // splitArea: {
          //   show: true,
          //   interval: 'auto',
          //   areaStyle: Object.assign({}, AREA_STYLE)
          // },
          nameGap: 15,
          nameRotate: 0,
          inverse: false,
          boundaryGap: true,
          min: 'dataMin',
          max: 'dataMax',
          scale: false,
          splitNumber: 5,
          minInterval: null,
          maxInterval: null,
          interval: null,
          logBase: 10,
          silent: false,
          triggerEvent: false,
          zlevel: 0,
          z: 0,
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
