import {animation, zIndex} from "@/options/shared";
import {SERIES} from "@/utils/smallDict";

export default function (t, multiple = true) {
  return {
    name: "series",
    label: t("grapesjs-echarts-presets.dict.group.series"),
    multiple,
    options: [{
      name: "type",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.series.type.label"),
      placeholder: t("grapesjs-echarts-presets.config.series.type.placeholder"),
      candidate: SERIES,
      default: "bar"
    }, {
      name: "xAxisIndex",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.series.xAxisIndex.label"),
      default: 0,
      valid(option) {
        console.log(option)
        if (option.series instanceof Array) {

          return option.series.find(item => item.type  && item.type !== ("pie" || "funnel"))
        }
        else {
          return option.series.type && option.series.type !== ("pie" || "funnel")
        }
      }
    }, {
      name: "yAxisIndex",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.series.yAxisIndex.label"),
      default: 0,
      valid(option) {
        if (option.series instanceof Array) {
          return option.series.find(item => item.type  && item.type !== ("pie" || "funnel"))
        }
        else {
          return option.series.type && option.series.type !== ("pie" || "funnel")
        }
      }
    }, {
      name: "polarIndex",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.series.polarIndex.label"),
      default: 0,
      valid(option) {
        if (option.series instanceof Array) {
          return option.series.find(item => item.type  && item.type !== ("pie" || "funnel"))
        }
        else {
          return option.series.type && option.series.type !== ("pie" || "funnel")
        }
      }
    }, {
      name: "datasetIndex",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.series.datasetIndex.label"),
      default: 0
    }, {
      name: "name",
      type: "String",
      label: t("grapesjs-echarts-presets.config.series.name.label"),
      default: ""
    }, {
      name: "coordinateSystem",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.series.coordinateSystem.label"),
      placeholder: t("grapesjs-echarts-presets.config.series.coordinateSystem.placeholder"),
      default: "cartesian2d",
      candidate: ["cartesian2d", "polar"],
      // valid(option) {
      //
      //
      //   if (option.series instanceof Array) {
      //     // console.log(111)
      //     console.log(option.series)
      //     return option.series.find(item => item.type  && item.type !== "pie" || "funnel")
      //   }
      //   else {
      //     return option.series.type && option.series.type !== "pie" || "funnel"
      //   }
      // }
    }, {
      name: "colorBy",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.series.colorBy.label"),
      placeholder: t("grapesjs-echarts-presets.config.series.colorBy.placeholder"),
      candidate: ["series", "data"],
      default: ""
    }, zIndex(t, 2, 0), {
      name: "silent",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.series.silent.label"),
      default: false
    }, ...animation(t)]
  };
}