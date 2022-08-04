import { itemStyle, zIndex, position } from "@/options/shared"
import tooltip from "@/options/tooltip"

export default function (t, multiple = false) {
  return {
    name: "geo",
    label: t("grapesjs-echarts-presets.dict.group.geo"),
    multiple,
    // valid (option) {
    //   if (option.series instanceof Array) {
    //     return option.series.find(item => item.coordinateSystem === "geo")
    //   }
    //   else {
    //     return option.series.coordinateSystem === "geo"
    //   }
    // },
    options: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.geo.show.label"),
      default: false
    }, {
      name: "map",
      type: "String",
      label: t("grapesjs-echarts-presets.config.geo.map.label"),
      default: ""
    }, {
      name: "roam",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.geo.roam.label"),
      default: true
    }, {
      name: "center",
      type: "Size",
      label: t("grapesjs-echarts-presets.config.geo.center.label"),
      default: [115.97, 29.71]
    }, {
      name: "aspectScale",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.aspectScale.label"),
      default: 0.75,
      min: 0,
      max: 1,
      step: 0.01
    }, {
      name: "zoom",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.zoom.label"),
      default: 1
    }, {
      name: "scaleLimit",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.scaleLimit.label"),
      children: [{
        name: "min",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.geo.scaleLimit.min.label"),
        default: 1
      }, {
        name: "max",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.geo.scaleLimit.max.label"),
        default: 1
      }]
    }, {
      name: "selectedMode",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.geo.selectedMode.label"),
      default: false
    }, {
      name: "label",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.label.label"),
      children: []
    }, {
      name: "itemStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.itemStyle.label"),
      children: itemStyle(t)
    }, ...zIndex(t, 2, 0), ...position(t), {
      name: "layoutCenter",
      type: "Size",
      label: t("grapesjs-echarts-presets.config.geo.layoutCenter.label"),
      default: [115.97, 29.71]
    }, {
      name: "layoutSize",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.layoutSize.label"),
      min: 0,
      step: 0.1,
      default: 100
    }, {
      name: "silent",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.silent.label"),
      default: false
    }, {
      name: "tooltip",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.tooltip.label"),
      children: tooltip(t).options
    }]
  }
}
