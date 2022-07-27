import tooltip from "@/options/tooltip";
import {position, shadow, size, zIndex} from "@/options/shared";
//finished
export default function (t, multiple = false) {
  return {
    name:'grid',
    label: t("grapesjs-echarts-presets.dict.group.grid"),
    options:[
      {
        name: "show",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.show.label"),
        default: false
      }, ...zIndex(t,2,0), ...position(t), ...size(t),
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
        children: tooltip(t).options
      }]
  }
  ;
}
