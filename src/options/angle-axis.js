import {SERIES_TYPES} from "@/utils/smallDict";
import {
  zIndex,
  axisLine,
  axisTick,
  axisLabel,
  splitLine,
  splitArea,
  axisPointer,
  actionTrigger
} from "@/options/shared"

export default function (t, multiple = false) {
  return {
    name: `angle-axis`,
    label: t(`grapesjs-echarts-presets.dict.group.angleAxis`),
    options: [{
      name: "type",
      label: t("grapesjs-echarts-presets.config.axis.type.label"),
      type: "Enum",
      candidate: SERIES_TYPES,
      default: "category"
    }, {
      name: "startAngle",
      label: t("grapesjs-echarts-presets.config.angleAxis.startAngle.label"),
      type: "Number",
      min: 0,
      max: 360,
      step: 1,
      default: 90
    }, {
      name: "clockwise",
      label: t("grapesjs-echarts-presets.config.angleAxis.clockwise.label"),
      type: "Boolean",
      default: true
    }, {
      name: "boundaryGap",
      label: t("grapesjs-echarts-presets.config.axis.boundaryGap.label"),
      type: "Size",
      useUnit: true,
      default: ["10%", "10%"]
    }, {
      name: "min",
      label: t("grapesjs-echarts-presets.config.axis.min.label"),
      type: "Number",
      default: null,
    }, {
      name: "max",
      label: t("grapesjs-echarts-presets.config.axis.max.label"),
      type: "Number",
      default: null,
    }, {
      name: "scale",
      label: t("grapesjs-echarts-presets.config.axis.scale.label"),
      type: "Boolean",
      default: false
    }, {
      name: "splitNumber",
      label: t("grapesjs-echarts-presets.config.axis.splitNumber.label"),
      type: "Number",
      default: 5
    }, {
      name: "minInterval",
      label: t("grapesjs-echarts-presets.config.axis.minInterval.label"),
      type: "Number",
      default: null,
    }, {
      name: "maxInterval",
      label: t("grapesjs-echarts-presets.config.axis.maxInterval.label"),
      type: "Number",
      default: null,
    }, {
      name: "interval",
      label: t("grapesjs-echarts-presets.config.axis.interval.label"),
      type: "Number",
      default: null,
    }, {
      name: "logBase",
      label: t("grapesjs-echarts-presets.config.axis.logBase.label"),
      type: "Number",
      default: 10
    }, ...actionTrigger(t), {
      name: "axisLine",
      label: t("grapesjs-echarts-presets.config.axis.axisLine.label"),
      type: "Object",
      children: axisLine(t)
    }, {
      name: "axisTick",
      label: t("grapesjs-echarts-presets.config.axis.axisTick.label"),
      type: "Object",
      children: axisTick(t, false)
    }, {
      name: "minorTick",
      label: t("grapesjs-echarts-presets.config.axis.minorAxisTick.label"),
      type: "Object",
      children: axisTick(t, true)
    }, {
      name: "axisLabel",
      label: t("grapesjs-echarts-presets.config.axis.axisLabel.label"),
      type: "Object",
      children: axisLabel(t)
    }, {
      name: "splitLine",
      label: t("grapesjs-echarts-presets.config.axis.splitLine.label"),
      type: "Object",
      children: splitLine(t, false, true)
    }, {
      name: "minorSplitLine",
      label: t("grapesjs-echarts-presets.config.axis.minorSplitLine.label"),
      type: "Object",
      children: splitLine(t, true, false)
    }, {
      name: "splitArea",
      label: t("grapesjs-echarts-presets.config.axis.splitArea.label"),
      type: "Object",
      children: splitArea(t, true)
    }, {
      name: "axisPointer",
      label: t("grapesjs-echarts-presets.config.axis.axisPointer.label"),
      type: "Object",
      children: axisPointer(t)
    }, ...zIndex(t, 0, 0)]
  }
}
