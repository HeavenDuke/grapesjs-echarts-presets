import build from "../build";

export default (editor) =>
  build(editor)({
    icon:'icon-rose-chart',
    label: "grapesjs-echarts-presets.components.rose.name",
    type: "echarts-rose",
  });