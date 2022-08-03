
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
      default: [['年份','2018','2019'],['中国',100,95],['美国',90,85]]
    }, {
      name: "sourceHeader",
      label: t("grapesjs-echarts-presets.config.dataset.sourceHeader.label"),
      type: "Boolean",
      default: false
    }]
  }
}
