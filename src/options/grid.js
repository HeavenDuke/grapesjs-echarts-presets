import {tooltip} from "@/options/tooltip";
import {position, shadow, size, border} from "@/options/shared";
//finished
export default function (t) {
  return {
    name:'grid',
    label: t("grapesjs-echarts-presets.config.grid.label"),
    options:[
      {
        name: "show",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.show.label"),
        default: false
      }, {
        name: "zlevel",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.grid.zlevel.label"),
        default: 0
      }, {
        name: "z",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.grid.z.label"),
        default: 2
      }, ...position(t), ...size(t),
      {
        name: "containLabel",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.containLabel.label"),
        default: false
      }, {
        name: "backgroundColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.grid.backgroundColor.label"),
        default: "rgba(0, 0, 0, 0)"
      }, {
        name: "borderColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.grid.borderColor.label"),
        default: "#ccc"
      }, {
        name: "borderWidth",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.grid.borderWidth.label"),
        default: 1
      }, ...shadow(t), {
        name: "tooltip",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.tooltip.label"),
        children: tooltip(t)
      }]
  }
  ;
}
