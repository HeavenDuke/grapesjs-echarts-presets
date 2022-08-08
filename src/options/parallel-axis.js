
import {DIRECTIONS, FLEX_POSITIONS, SERIES_TYPES} from "@/utils/smallDict";
import {
  zIndex,
  textStyle,
  axisLine,
  axisTick,
  axisLabel,
  splitLine,
  splitArea,
  axisPointer,
  position, size
} from "@/options/shared"
import ToolTip from "@/options/tooltip"

export default function (t, multiple = false) {
  return {
    name: `parallelAxis`,
    label: t(`grapesjs-echarts-presets.dict.group.parallelAxis`),
    options: [{
      name: "dim",
      label: t("grapesjs-echarts-presets.config.parallelAxis.dim.label"),
      type: "Boolean",
      default: true
    }, {
      name: "realtime",
      label: t("grapesjs-echarts-presets.config.parallelAxis.realtime.label"),
      type: "Boolean",
      default: true
    }, {
      name: "areaSelectStyle",
      label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.label"),
      type: "Object",
      children: [{
        name: "width",
        label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.width.label"),
        type: "Number",
        default: 30,
        min: 0,
        step: 0.5
      }, {
        name: "borderWidth",
        label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.borderWidth.label"),
        type: "Number",
        default: 1,
        min: 0,
        step: 0.5
      }, {
        name: "borderColor",
        label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.borderColor.label"),
        type: "Color",
        default: "rgba(160, 197, 232)"
      }, {
        name: "color",
        label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.color.label"),
        type: "Color",
        default: "rgba(160, 197, 232)"
      }, {
        name: "opacity",
        label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.opacity.label"),
        type: "Number",
        min: 0,
        max: 1,
        step: 0.05,
        default: 0.3
      }]
    }, {
      name: "type",
      label: t("grapesjs-echarts-presets.config.axis.type.label"),
      type: "Enum",
      candidate: SERIES_TYPES,
      default: "value"
    }, {
      name: "inverse",
      label: t("grapesjs-echarts-presets.config.axis.inverse.label"),
      type: "Boolean",
      default: false
    }, {
      name: "name",
      label: t("grapesjs-echarts-presets.config.axis.name.label"),
      type: "String",
      default: ""
    }, {
      name: "nameLocation",
      label: t("grapesjs-echarts-presets.config.axis.nameLocation.label"),
      type: "Enum",
      candidate: FLEX_POSITIONS,
      default: ""
    }, {
      name: "nameTextStyle",
      label: t("grapesjs-echarts-presets.config.axis.nameTextStyle.label"),
      type: "Object",
      children: textStyle(t)
    }, {
      name: "nameGap",
      label: t("grapesjs-echarts-presets.config.axis.nameGap.label"),
      type: "Number",
      default: 15
    }, {
      name: "nameRotate",
      label: t("grapesjs-echarts-presets.config.axis.nameRotate.label"),
      type: "Number",
      default: 0,
      min: 0,
      max: 360,
      step: 1
    }, {
      name: "scale",
      label: t("grapesjs-echarts-presets.config.axis.scale.label"),
      type: "Boolean",
      default: false
    }, {
      name: "boundaryGap",
      label: t("grapesjs-echarts-presets.config.axis.boundaryGap.label"),
      type: "Size",
      useUnit: true,
      default: ["10%", "10%"]
    }, {
      name: "splitNumber",
      label: t("grapesjs-echarts-presets.config.axis.splitNumber.label"),
      type: "Number",
      default: 5
    }, {
      name: "logBase",
      label: t("grapesjs-echarts-presets.config.axis.logBase.label"),
      type: "Number",
      default: 10
    }, {
      name: "silent",
      label: t("grapesjs-echarts-presets.config.axis.silent.label"),
      type: "Boolean",
      default: false
    }, {
      name: "triggerEvent",
      label: t("grapesjs-echarts-presets.config.axis.triggerEvent.label"),
      type: "Boolean",
      default: false
    }, {
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
    }, {
      name: "tooltip",
      label: t("grapesjs-echarts-presets.config.axis.tooltip.label"),
      type: "Object",
      children: ToolTip(t).options
    }]
  }
}
