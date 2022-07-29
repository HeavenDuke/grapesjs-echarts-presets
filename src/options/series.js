import {animation, zIndex} from "@/options/shared";
import {SERIES} from "@/utils/smallDict";

export default function (t, multiple = true) {
  return {
    name: "series",
    label: t("grapesjs-echarts-presets.dict.group.series"),
    options: [{
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
// const a= {
//   type: 'line',
//   name: '',
//   colorBy: 'series',
//   zlevel: 0,
//   z: 2,
//   silent: false,
//   animationDuration: 1000,
//   animationEasing: 'linear',
//   animationDelay: 0,
// }