import {zIndex, position, size} from "@/options/shared"
import {DIRECTIONS, TRIGGERS} from "@/utils/smallDict";
import ParallelAxis from "@/options/parallel-axis"

export default function (t) {
  return {
    name: "parallel",
    label: t("grapesjs-echarts-presets.dict.group.parallel"),
    options: [{
      name: "layout",
      label: t("grapesjs-echarts-presets.config.parallel.layout.label"),
      type: "Enum",
      candidate: DIRECTIONS,
      default: "horizontal"
    }, ...zIndex(t, 2, 0), ...size(t), ...position(t), {
      name: "axisExpandable",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandable.label"),
      type: "Boolean",
      default: false
    }, {
      name: "axisExpandCenter",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandCenter.label"),
      type: "Number",
      default: 0
    }, {
      name: "axisExpandCount",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandCount.label"),
      type: "Number",
      default: 0
    }, {
      name: "axisExpandWidth",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandWidth.label"),
      type: "Number",
      default: 50
    }, {
      name: "axisExpandTriggerOn",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandTriggerOn.label"),
      type: "Enum",
      candidate: TRIGGERS,
      default: "click"
    }, {
      name: "parallelAxisDefault",
      label: t("grapesjs-echarts-presets.config.parallel.parallelAxisDefault.label"),
      type: "Object",
      children: ParallelAxis(t).options
    }]
  }
}
