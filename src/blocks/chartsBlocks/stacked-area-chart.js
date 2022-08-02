import build from "../build";

//散点图
export default (editor) =>
  build(editor)({
    icon:'icon-stacked-area-chart',
    label: "grapesjs-echarts-presets.components.stackedArea.name",
    type: "echarts-stacked-area",
  });