import build from "../build";

//圆角环形饼图
export default (editor) =>
  build(editor)({
    icon:'icon-rounded-pie-chart',
    label: "grapesjs-echarts-presets.components.roundedPie.name",
    type: "echarts-roundedPie",
  });