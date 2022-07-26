
import { zIndex } from "@/options/shared"
import ToolTip from "@/options/tooltip"

export default function (t, multiple = false) {
  return {
    name: "polar",
    label: t("grapesjs-echarts-presets.dict.group.polar"),
    options: [{
      name: "center",
      label: t("grapesjs-echarts-presets.config.polar.center.label"),
      type: "Size",
      useUnit: true,
      default: ["50%", "50%"]
    }, {
      name: "radius",
      label: t("grapesjs-echarts-presets.config.polar.radius.label"),
      type: "Size",
      useUnit: true,
      default: ["0%", "100%"]
    }, {
      name: "tooltip",
      label: t("grapesjs-echarts-presets.config.polar.tooltip.label"),
      type: "Object",
      children: ToolTip(t).options
    }, ...zIndex(t, 2, 0)]
  }
}
