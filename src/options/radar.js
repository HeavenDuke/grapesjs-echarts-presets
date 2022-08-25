import {zIndex, textStyle, axisLine, axisTick, axisLabel, splitLine, splitArea} from "@/options/shared";
import ToolTip from "@/options/tooltip";

export default function (t, multiple = false) {
  return {
    name: "radar",
    label: t("grapesjs-echarts-presets.dict.group.radar"),
    valid(option) {
      return false;
    },
    options: [{
      name: "center",
      label: t("grapesjs-echarts-presets.config.radar.center.label"),
      type: "Size",
      useUnit: true,
      default: ["50%", "50%"],
      valid(option) {
        return option.radar;
      },
    }, {
      name: "radius",
      label: t("grapesjs-echarts-presets.config.radar.radius.label"),
      type: "Size",
      useUnit: true,
      default: ["0%", "100%"],
      valid(option) {
        return option.radar;
      },
    }, {
      name: "startAngle",
      label: t("grapesjs-echarts-presets.config.radar.startAngle.label"),
      type: "Number",
      min: 0,
      max: 360,
      step: 1,
      default: 90,
      valid(option) {
        return option.radar;
      },
    }, {
      name: "axisName",
      label: t("grapesjs-echarts-presets.config.radar.axisName.label"),
      type: "Object",
      children: textStyle(t, {complex: true}),
      valid(option) {
        return option.radar;
      },
    }, {
      name: "nameGap",
      label: t("grapesjs-echarts-presets.config.axis.nameGap.label"),
      type: "Number",
      default: 15,
      valid(option) {
        return option.radar;
      },
    }, {
      name: "splitNumber",
      label: t("grapesjs-echarts-presets.config.axis.splitNumber.label"),
      type: "Number",
      default: 5,
      valid(option) {
        return option.radar;
      },
    }, {
      name: "shape",
      label: t("grapesjs-echarts-presets.config.radar.shape.label"),
      type: "Enum",
      candidates: [],
      useUnit: true,
      default: "polygon",
      valid(option) {
        return option.radar;
      },
    }, {
      name: "scale",
      label: t("grapesjs-echarts-presets.config.axis.scale.label"),
      type: "Boolean",
      default: false,
      valid(option) {
        return option.radar;
      },
    }, {
      name: "silent",
      label: t("grapesjs-echarts-presets.config.axis.silent.label"),
      type: "Boolean",
      default: false,
      valid(option) {
        return option.radar;
      },
    }, {
      name: "triggerEvent",
      label: t("grapesjs-echarts-presets.config.axis.triggerEvent.label"),
      type: "Boolean",
      default: false,
      valid(option) {
        return option.radar;
      },
    }, {
      name: "axisLine",
      label: t("grapesjs-echarts-presets.config.axis.axisLine.label"),
      type: "Object",
      children: axisLine(t),
      valid(option) {
        return option.radar;
      },
    }, {
      name: "axisTick",
      label: t("grapesjs-echarts-presets.config.axis.axisTick.label"),
      type: "Object",
      children: axisTick(t),
      valid(option) {
        return option.radar;
      },
    }, {
      name: "axisLabel",
      label: t("grapesjs-echarts-presets.config.axis.axisLabel.label"),
      type: "Object",
      children: axisLabel(t),
      valid(option) {
        return option.radar;
      },
    }, {
      name: "splitLine",
      label: t("grapesjs-echarts-presets.config.axis.splitLine.label"),
      type: "Object",
      children: splitLine(t, false, true),
      valid(option) {
        return option.radar;
      },
    }, {
      name: "splitArea",
      label: t("grapesjs-echarts-presets.config.axis.splitArea.label"),
      type: "Object",
      children: splitArea(t, true),
      valid(option) {
        return option.radar;
      },
    }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
      valid(option) {
        return option.radar;
      }
    }))]
  };
}
