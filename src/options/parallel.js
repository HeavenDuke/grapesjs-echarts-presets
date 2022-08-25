import {zIndex, position, size} from "@/options/shared";
import {DIRECTIONS, TRIGGERS} from "@/utils/smallDict";
import ParallelAxis from "@/options/parallel-axis";

export default function (t, multiple = false) {
  return {
    name: "parallel",
    label: t("grapesjs-echarts-presets.dict.group.parallel"),
    valid(option) {
      if (option.series instanceof Array) {
        return option.series.find(item => item.type && item.type === "parallel");
      } else {
        return option.series.type && option.series.type === "parallel";
      }
    },
    options: [{
      name: "layout",
      label: t("grapesjs-echarts-presets.config.parallel.layout.label"),
      type: "Enum",
      candidate: DIRECTIONS,
      default: "horizontal",
      valid(option) {
        return option.parallel;
      }
    }, ...zIndex(t, 2, 0), ...size(t), ...position(t), {
      name: "axisExpandable",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandable.label"),
      type: "Boolean",
      default: false,
      valid(option) {
        return option.parallel;
      }
    }, {
      name: "axisExpandCenter",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandCenter.label"),
      type: "Number",
      default: 0,
      valid(option) {
        return option.parallel;
      }
    }, {
      name: "axisExpandCount",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandCount.label"),
      type: "Number",
      default: 0,
      valid(option) {
        return option.parallel;
      }
    }, {
      name: "axisExpandWidth",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandWidth.label"),
      type: "Number",
      default: 50,
      valid(option) {
        return option.parallel;
      }
    }, {
      name: "axisExpandTriggerOn",
      label: t("grapesjs-echarts-presets.config.parallel.axisExpandTriggerOn.label"),
      type: "Enum",
      candidate: TRIGGERS,
      default: "click",
      valid(option) {
        return option.parallel;
      }
    }, {
      name: "parallelAxisDefault",
      label: t("grapesjs-echarts-presets.config.parallel.parallelAxisDefault.label"),
      type: "Object",
      children: ParallelAxis(t).options,
      valid(option) {
        return option.parallel;
      }
    }]
  };
}
