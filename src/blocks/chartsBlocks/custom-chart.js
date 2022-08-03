import build from "../build";
export default (editor) =>
  build(editor)({
    icon: "icon-custom-chart",
    label: "grapesjs-echarts-presets.components.custom.name",
    type: "echarts-custom",
  });
