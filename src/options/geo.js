export default function (t, multiple = false) {
  return {
    name: "geo",
    label: t("grapesjs-echarts-presets.dict.group.grid"),
    multiple,
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
    }]
  }
}
