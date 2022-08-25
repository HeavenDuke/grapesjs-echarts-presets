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
} from "@/options/shared";
import ToolTip from "@/options/tooltip";

export default function (t, multiple = false) {
  return {
    name: `parallel-axis`,
    label: t(`grapesjs-echarts-presets.dict.group.parallelAxis`),
    valid(option) {
      if (option.series instanceof Array) {
        return option.series.find(item => item.type && item.type === "parallel");
      } else {
        return option.series.type && option.series.type === "parallel";
      }
    },
    options: [{
      name: "dim",
      label: t("grapesjs-echarts-presets.config.parallelAxis.dim.label"),
      type: "Boolean",
      default: true,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "realtime",
      label: t("grapesjs-echarts-presets.config.parallelAxis.realtime.label"),
      type: "Boolean",
      default: true,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "areaSelectStyle",
      label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.label"),
      type: "Object",
      children: [{
        name: "width",
        label: t("grapesjs-echarts-presets.config.parallelAxis.areaSelectStyle.width.label"),
        type: "Number",
        default: 20,
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
      }],
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "type",
      label: t("grapesjs-echarts-presets.config.axis.type.label"),
      type: "Enum",
      candidate: SERIES_TYPES,
      default: "value",
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "inverse",
      label: t("grapesjs-echarts-presets.config.axis.inverse.label"),
      type: "Boolean",
      default: false,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "name",
      label: t("grapesjs-echarts-presets.config.axis.name.label"),
      type: "String",
      default: "",
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "nameLocation",
      label: t("grapesjs-echarts-presets.config.axis.nameLocation.label"),
      type: "Enum",
      candidate: FLEX_POSITIONS,
      default: "",
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "nameTextStyle",
      label: t("grapesjs-echarts-presets.config.axis.nameTextStyle.label"),
      type: "Object",
      children: textStyle(t),
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "nameGap",
      label: t("grapesjs-echarts-presets.config.axis.nameGap.label"),
      type: "Number",
      default: 15,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "nameRotate",
      label: t("grapesjs-echarts-presets.config.axis.nameRotate.label"),
      type: "Number",
      default: 0,
      min: 0,
      max: 360,
      step: 1,
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
      name: "boundaryGap",
      label: t("grapesjs-echarts-presets.config.axis.boundaryGap.label"),
      type: "Size",
      useUnit: true,
      default: ["10%", "10%"],
      valid(option, module) {
        return option[module];
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
      name: "logBase",
      label: t("grapesjs-echarts-presets.config.axis.logBase.label"),
      type: "Number",
      default: 10,
      valid(option, module) {
        return option[module] && option[module].type === "log";
      }
    }, {
      name: "silent",
      label: t("grapesjs-echarts-presets.config.axis.silent.label"),
      type: "Boolean",
      default: false,
      valid(option, module) {
        return option[module];
      }
    }, {
      name: "triggerEvent",
      label: t("grapesjs-echarts-presets.config.axis.triggerEvent.label"),
      type: "Boolean",
      default: false,
      valid(option, module) {
        return option[module];
      }
    }, {
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
    },]
  };
}
