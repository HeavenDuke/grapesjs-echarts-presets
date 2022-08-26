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
  position, size, removeItems, align, actionTrigger
} from "@/options/shared";

import tooltip from "@/options/tooltip";

export default function (t, multiple = false) {
  let newTooltip = removeItems(tooltip(t).options, ["show", "trigger", "axisPointer", "position", "formatter",
    "valueFormatter", "backgroundColor", "borderColor", "borderWidth", "padding", "textStyle", "extraCssText"]);
  return {
    name: `single-axis`,
    label: t(`grapesjs-echarts-presets.dict.group.singleAxis`),
    valid(option) {
      if (option.series instanceof Array) {
        return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "singleAxis" && item.type === "scatter");
      } else {
        return option.series.coordinateSystem && option.series.coordinateSystem === "singleAxis" && option.series.type === "scatter";
      }
    },
    options: [{
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
    }, ...(position(t)).map(item => Object.assign(item, {
      valid(option, module) {
        return option[module];
      }
    })), ...(size(t)).map(item => Object.assign(item, {
      valid(option, module) {
        return option[module];
      }
    })), ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
      valid(option, module) {
        return option[module];
      }
    })), {
      name: "orient",
      label: t("grapesjs-echarts-presets.config.axis.orient.label"),
      type: "Enum",
      candidate: DIRECTIONS,
      default: "",
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
      children: [...textStyle(t), ...align(t)]
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
    }, {
      name: "tooltip",
      label: t("grapesjs-echarts-presets.config.tooltip.label"),
      type: "Object",
      children: newTooltip,
      valid(option, module) {
        return option[module];
      }
    }]
  };
}
