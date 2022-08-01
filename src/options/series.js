import {animation, zIndex} from "@/options/shared";
import {SERIES} from "@/utils/smallDict";

export default function (t, multiple = true) {
  return {
    name: "series",
    label: t("grapesjs-echarts-presets.dict.group.series"),
    multiple,
    options: [{
      name:'type',
      type: "Enum",
      label:  t("grapesjs-echarts-presets.config.series.type.label"),
      placeholder:  t("grapesjs-echarts-presets.config.series.type.placeholder"),
      candidate:[]
    },{
      name:'xAxisIndex',
      type: 'Number',
      label:  t("grapesjs-echarts-presets.config.series.xAxisIndex.label"),
      default: 0
    },{
      name:'yAxisIndex',
      type: 'Number',
      label:  t("grapesjs-echarts-presets.config.series.yAxisIndex.label"),
      default: 0
    },{
      name:'polarIndex',
      type: 'Number',
      label:  t("grapesjs-echarts-presets.config.series.polarIndex.label"),
      default: 0
    },{
      name:'datasetIndex',
      type: 'Number',
      label:  t("grapesjs-echarts-presets.config.series.datasetIndex.label"),
      default: 0
    },{
      name: "name",
      type: "String",
      label: t("grapesjs-echarts-presets.config.series.name.label"),
      default: ""
    }, {
      name: "colorBy",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.series.colorBy.label"),
      placeholder: t("grapesjs-echarts-presets.config.series.colorBy.placeholder"),
      candidate: ["series", "data"],
      default: ""
    }, zIndex(t, 2, 0),{
      name:'silent',
      type: 'Boolean',
      label:t("grapesjs-echarts-presets.config.series.silent.label"),
      default: false
    }, ...animation(t)]
  };
}