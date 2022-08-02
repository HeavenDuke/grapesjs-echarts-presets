import build from "../build";

export default (editor) =>
  build(editor)({
    icon:'icon-line-chart',
    label: "grapesjs-echarts-presets.components.line.name",
    type: "echarts-line",
  });
