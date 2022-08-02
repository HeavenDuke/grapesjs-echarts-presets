import build from "../build";

//散点图
export default (editor) =>
  build(editor)({
    icon:'icon-stacked-bar-chart',
    label: "grapesjs-echarts-presets.components.stackedBar.name",
    type: "echarts-stacked-bar",
  });