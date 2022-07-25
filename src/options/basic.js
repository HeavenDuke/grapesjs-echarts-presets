
import { BLENDMODE } from "@/utils/dict";
import { animation } from "@/options/shared";

export function basic(t) {
  return [{
    name: "color",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.basic.color.label"),
    default: "",
  }, {
    name: "backgroundColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.basic.backgroundColor.label"),
    default: "",
  }, ...animation(t), {
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
  }];
}
