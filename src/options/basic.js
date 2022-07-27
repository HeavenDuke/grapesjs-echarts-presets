import {ANIMATIONEASING, BLENDMODE} from "@/utils/dict";
import {animation, axisPointer, textStyle} from "@/options/shared";
import tooltip from "@/options/tooltip";
import toolbox from "@/options/toolbox";
//finished
export default function (t) {
  return {
    name: "basic",
    label: t("grapesjs-echarts-presets.dict.group.basic"),
    options: [{
      //   name: 'tooltip',
      //   type: 'Object',
      //   label:t("grapesjs-echarts-presets.config.tooltip.label"),
      //   children: tooltip(t).options
      // },{
      name: "axisPointer",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.basic.axisPointer.label"),
      children: axisPointer(t)
      // }, {
      //   name: 'toolbox',
      //   type: 'Object',
      //   label:t("grapesjs-echarts-presets.config.toolbox.label"),
      //   children: toolbox(t).options
    }, {
      name: "color",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.basic.color.label"),
      default: "",
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
      step: 0.1,
      default: 3000,
    }]
  };
}
