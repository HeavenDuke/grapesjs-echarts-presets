import build from "../build";
export default (editor) =>
  build(editor)({
    icon:'icon-pie-chart',
    label: "grapesjs-echarts-presets.components.pie.name",
    type: "echarts-pie",
  });