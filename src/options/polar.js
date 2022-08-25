
import {removeItems, zIndex} from "@/options/shared";
import ToolTip from "@/options/tooltip"
import tooltip from "@/options/tooltip";

export default function (t, multiple = false) {
  let newTooltip = removeItems(tooltip(t).options, ["show", "trigger", "axisPointer", "position", "formatter",
    "valueFormatter", "backgroundColor", "borderColor", "borderWidth", "padding", "textStyle", "extraCssText"]);
  return {
    name: "polar",
    label: t("grapesjs-echarts-presets.dict.group.polar"),
    valid(option) {
      if (option.series instanceof Array) {
        return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "polar");
      } else {
        return option.series.coordinateSystem && option.series.coordinateSystem === "polar";
      }
    },
    options: [{
      name: "center",
      label: t("grapesjs-echarts-presets.config.polar.center.label"),
      type: "Size",
      useUnit: true,
      default: ["50%", "50%"],
      valid(option) {
        return option.polar;
      }

    }, {
      name: "radius",
      label: t("grapesjs-echarts-presets.config.polar.radius.label"),
      type: "Size",
      useUnit: true,
      default: ["0%", "100%"],
      valid(option) {
        return option.polar;
      }
    }, {
      name: "tooltip",
      label: t("grapesjs-echarts-presets.config.polar.tooltip.label"),
      type: "Object",
      children: newTooltip,
      valid(option) {
        return option.polar;
      }
    }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
    valid(option) {
      return option.polar;
    }
  }))]
  }
}
