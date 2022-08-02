import build from "../build";

//散点图
export default (editor) =>
  build(editor)({
    icon:'icon-nested-pies-chart',
    label: "grapesjs-echarts-presets.components.nestedPies.name",
    type: "echarts-nested-pies",
  });