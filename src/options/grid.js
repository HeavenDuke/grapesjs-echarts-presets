import tooltip from "@/options/tooltip";
import {position, removeItems, shadow, size, zIndex} from "@/options/shared";
//finished
export default function (t, multiple = false) {
  let newTooltip = removeItems(tooltip(t).options, ["show", "trigger", "axisPointer", "position", "formatter",
    "valueFormatter", "backgroundColor", "borderColor", "borderWidth", "padding", "textStyle", "extraCssText"]);
  return {
    name: "grid",
    label: t("grapesjs-echarts-presets.dict.group.grid"),
    multiple: false,
    // valid (option) {
    //   if (option.series instanceof Array) {
    //     return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "cartesian2d")
    //   }
    //   else {
    //     return option.series.coordinateSystem && option.series.coordinateSystem === "cartesian2d"
    //   }
    // },
    options: [
      {
        name: "show",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.show.label"),
        default: false
      }, ...zIndex(t, 2, 0), ...position(t, 60, "10%", 60, "10%"), ...size(t),
      {
        name: "containLabel",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.containLabel.label"),
        default: false
      }, {
        name: "backgroundColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.grid.backgroundColor.label"),
        default: ""
      }, {
        name: "borderColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.grid.borderColor.label"),
        default: "#cccccc"
      }, {
        name: "borderWidth",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.grid.borderWidth.label"),
        default: 1
      }, ...shadow(t), {
        name: "tooltip",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.tooltip.label"),
        children: newTooltip
      }]
  }
    ;
}
