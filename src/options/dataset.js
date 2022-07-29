
export default function (t, multiple = false) {
  return {
    name: `dataset`,
    label: t(`grapesjs-echarts-presets.dict.group.dataset`),
    multiple,
    options: [{
      name: "dimensions",
      label: t("grapesjs-echarts-presets.config.dataset.dimensions.label"),
      type: "String",
      array: true,
      default: []
    }, {
      name: "source",
      label: t("grapesjs-echarts-presets.config.dataset.source.label"),
      type: "Table",
      default: []
    }, {
      name: "sourceHeader",
      label: t("grapesjs-echarts-presets.config.dataset.sourceHeader.label"),
      type: "Boolean",
      default: false
    }]
  }
}
