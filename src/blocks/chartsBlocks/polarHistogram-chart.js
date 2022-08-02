import build from "../build";

//极坐标环形柱状图
export default (editor) =>
  build(editor)({
    icon:'icon-polar-histogram-chart',
    label: "grapesjs-echarts-presets.components.polarHistogram.name",
    type: "echarts-polarHistogram",
  });
