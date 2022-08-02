import build from "../build";

//散点图
export default (editor) =>
  build(editor)({
    icon:'icon-scatter-chart',
    label: "grapesjs-echarts-presets.components.scatter.name",
    type: "echarts-scatter",
  });