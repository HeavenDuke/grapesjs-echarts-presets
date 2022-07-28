
import {BINARY_POSITION_HORIZONTAL, BINARY_POSITION_VERTICAL, FLEX_POSITIONS, SERIES_TYPES} from "@/utils/smallDict";
import {zIndex, textStyle, axisLine, axisTick, axisLabel, splitLine, splitArea, axisPointer} from "@/options/shared"
import ToolTip from "@/options/tooltip"

export default function (type = "x", multiple = false) {
  return function (t) {
    return {
      name: `${type}-axis`,
      label: t(`grapesjs-echarts-presets.dict.group.${type}Axis`),
      options: [{
        name: "show",
        label: t("grapesjs-echarts-presets.config.axis.show.label"),
        type: "Boolean",
        default: true
      }, {
        name: "type",
        label: t("grapesjs-echarts-presets.config.axis.type.label"),
        type: "Enum",
        candidate: SERIES_TYPES,
        default: type === "x" ? "category" : "value"
      }, {
        name: "inverse",
        label: t("grapesjs-echarts-presets.config.axis.inverse.label"),
        type: "Boolean",
        default: false
      }, {
        name: "alignTicks",
        label: t("grapesjs-echarts-presets.config.axis.alignTicks.label"),
        type: "Boolean",
        default: false
      }, {
        name: "position",
        label: t("grapesjs-echarts-presets.config.axis.position.label"),
        type: "Enum",
        candidate: type === "x" ? BINARY_POSITION_VERTICAL : BINARY_POSITION_HORIZONTAL,
        default: ""
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
      }, ...zIndex(t, 2, 0)]
    }
  }
}
