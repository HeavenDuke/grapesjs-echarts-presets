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
} from "@/options/shared";

export default function (t, multiple = false) {
  return {
    name: `angle-axis`,
    label: t(`grapesjs-echarts-presets.dict.group.angleAxis`),
    valid(option) {
      if (option.series instanceof Array) {
        return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "polar");
      } else {
        return option.series.coordinateSystem && option.series.coordinateSystem === "polar";
      }
    },
    options: [{
      name: "type",
      label: t("grapesjs-echarts-presets.config.axis.type.label"),
      type: "Enum",
      candidate: SERIES_TYPES,
      default: "category",
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "startAngle",
      label: t("grapesjs-echarts-presets.config.angleAxis.startAngle.label"),
      type: "Number",
      min: 0,
      max: 360,
      step: 1,
      default: 90,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "clockwise",
      label: t("grapesjs-echarts-presets.config.angleAxis.clockwise.label"),
      type: "Boolean",
      default: true,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "boundaryGap",
      label: t("grapesjs-echarts-presets.config.axis.boundaryGap.label"),
      type: "Size",
      useUnit: true,
      default: ["10%", "10%"],
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "min",
      label: t("grapesjs-echarts-presets.config.axis.min.label"),
      type: "Number",
      default: null,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "max",
      label: t("grapesjs-echarts-presets.config.axis.max.label"),
      type: "Number",
      default: null,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "scale",
      label: t("grapesjs-echarts-presets.config.axis.scale.label"),
      type: "Boolean",
      default: false,
      valid(option, module) {
        return option[module] && option[module].type === "value";
      }
    }, {
      name: "splitNumber",
      label: t("grapesjs-echarts-presets.config.axis.splitNumber.label"),
      type: "Number",
      default: 5,
      valid(option, module) {
        return option[module] && option[module].type !== "category";
      }
    }, {
      name: "minInterval",
      label: t("grapesjs-echarts-presets.config.axis.minInterval.label"),
      type: "Number",
      default: null,
      valid(option, module) {
        return option[module] && (option[module].type === "value" || option[module].type === "time");
      }
    }, {
      name: "maxInterval",
      label: t("grapesjs-echarts-presets.config.axis.maxInterval.label"),
      type: "Number",
      default: null,
      valid(option, module) {
        return option[module] && (option[module].type === "value" || option[module].type === "time");
      }
    }, {
      name: "interval",
      label: t("grapesjs-echarts-presets.config.axis.interval.label"),
      type: "Number",
      default: null,
      valid(option, module) {
        return option[module] && option[module].type !== "category";
      }
    }, {
      name: "logBase",
      label: t("grapesjs-echarts-presets.config.axis.logBase.label"),
      type: "Number",
      default: 10,
      valid(option, module) {
        return option[module] && option[module].type === "log";
      }
    }, ...(actionTrigger(t)).map(item => Object.assign(item, {
      valid(option, module) {
        return option[module];
      }
    })), {
      name: "axisLine",
      label: t("grapesjs-echarts-presets.config.axis.axisLine.label"),
      type: "Object",
      children: axisLine(t),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "axisTick",
      label: t("grapesjs-echarts-presets.config.axis.axisTick.label"),
      type: "Object",
      children: axisTick(t, false),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "minorTick",
      label: t("grapesjs-echarts-presets.config.axis.minorAxisTick.label"),
      type: "Object",
      children: axisTick(t, true),
      valid(option, module) {
        return option[module] && option[module].type !== "category";
      }
    }, {
      name: "axisLabel",
      label: t("grapesjs-echarts-presets.config.axis.axisLabel.label"),
      type: "Object",
      children: axisLabel(t),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "splitLine",
      label: t("grapesjs-echarts-presets.config.axis.splitLine.label"),
      type: "Object",
      children: splitLine(t, false, true),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "minorSplitLine",
      label: t("grapesjs-echarts-presets.config.axis.minorSplitLine.label"),
      type: "Object",
      children: splitLine(t, true, false),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "splitArea",
      label: t("grapesjs-echarts-presets.config.axis.splitArea.label"),
      type: "Object",
      children: splitArea(t, true),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "axisPointer",
      label: t("grapesjs-echarts-presets.config.axis.axisPointer.label"),
      type: "Object",
      children: axisPointer(t),
      valid(option, module) {
        return option[module];
      }
    }, ...(zIndex(t, 0, 0)).map(item => Object.assign(item, {
      valid(option, module) {
        return option[module];
      }
    }))]
  };
}
