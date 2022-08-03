import {ANIMATIONEASING, BLENDMODE} from "@/utils/dict";
import {animation, axisPointer, textStyle} from "@/options/shared";
//finished
export default function (t) {

  return {
    name: "basic",
    label: t("grapesjs-echarts-presets.dict.group.basic"),
    options: [{
      name: "axisPointer",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.basic.axisPointer.label"),
      children: axisPointer(t)
    }, {
      name: "color",
      type: "Color",
      array: true,
      label: t("grapesjs-echarts-presets.config.basic.color.label"),
      default: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    }, {
      name: "backgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.basic.backgroundColor.label"),
      default: "",
    }, {
      name: "textStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.textStyle.label"),
      children: textStyle(t)
    }, ...animation(t), {
      name: "stateAnimation",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.basic.stateAnimation.label"),
      children: [{
        name: "duration",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.basic.stateAnimation.duration.label"),
        min:0,
        default: 300
      }, {
        name: "easing",
        type: "Enum",
        label: t("grapesjs-echarts-presets.config.basic.stateAnimation.easing.label"),
        placeholder: t("grapesjs-echarts-presets.config.basic.stateAnimation.easing.placeholder"),
        candidate: ANIMATIONEASING,
        default: "cubicOut"
      }]
    }, {
      name: "useUTC",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.basic.useUTC.label"),
      default: false,
    }, {
      name: "blendMode",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.basic.blendMode.label"),
      placeholder: t("grapesjs-echarts-presets.config.basic.blendMode.placeholder"),
      default: "source-over",
      candidate: BLENDMODE
    }, {
      name: "hoverLayerThreshold",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.basic.hoverLayerThreshold.label"),
      min: 0,
      default: 3000,
    }]
  };
}
