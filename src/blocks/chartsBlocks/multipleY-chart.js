import build from "../build";

export default (editor) =>
  build(editor)({
    icon:'icon-multiple-y-chart',
    label: "grapesjs-echarts-presets.components.multipleY.name",
    type: "echarts-multipleY",
  });