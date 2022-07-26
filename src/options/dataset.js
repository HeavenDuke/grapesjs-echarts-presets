
export default function (t) {
  return {
    name: `dataset`,
    label: t(`grapesjs-echarts-presets.dict.group.dataset`),
    options: [{
      name: "dimensions",
      label: t("grapesjs-echarts-presets.config.dataset.dimensions.label"),
      type: "String",
      array: true,
      default: []
    }]
  }
}
