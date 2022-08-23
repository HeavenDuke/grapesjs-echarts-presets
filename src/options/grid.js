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
    valid (option) {
      if (option.series instanceof Array) {
        return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "cartesian2d")
      }
      else {
        return option.series.coordinateSystem && option.series.coordinateSystem === "cartesian2d"
      }
    },
    options: [
      {
        name: "show",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.show.label"),
        default: true,

      }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
        valid(option) {
          return option.grid && option.grid.show;
        }
      })), ...(position(t, 60, "10%", 60, "10%")).map(item => Object.assign(item, {
        valid(option) {
          return option.grid && option.grid.show;
        }
      })), ...(size(t)).map(item => Object.assign(item, {
        valid(option) {
          return option.grid && option.grid.show;
        }
      })),
      {
        name: "containLabel",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.grid.containLabel.label"),
        default: false,
        valid(option) {
          return option.grid && option.grid.show;
        }
      }, {
        name: "backgroundColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.grid.backgroundColor.label"),
        default: "",
        valid(option) {
          return option.grid && option.grid.show;
        }
      }, {
        name: "borderColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.grid.borderColor.label"),
        default: "#cccccc",
        valid(option) {
          return option.grid && option.grid.show;
        }
      }, {
        name: "borderWidth",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.grid.borderWidth.label"),
        default: 1,
        valid(option) {
          return option.grid && option.grid.show;
        }
      }, ...(shadow(t)).map(item => Object.assign(item, {
        valid(option) {
          return option.grid && option.grid.show && option.grid.backgroundColor !== "transparent";
        }
      })), {
        name: "tooltip",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.tooltip.label"),
        children: newTooltip,
        valid(option) {
          return option.grid && option.grid.show;
        }
      }]
  }
    ;
}
