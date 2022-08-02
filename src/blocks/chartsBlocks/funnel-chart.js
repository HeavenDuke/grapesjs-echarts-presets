import build from "../build";

export default (editor) =>
  build(editor)({
    icon:'icon-funnel-chart',
    label: "grapesjs-echarts-presets.components.funnel.name",
    type: "echarts-funnel",
  });
