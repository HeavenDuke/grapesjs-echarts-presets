import build from "../build";
import icon from "../../icons/柱状图.svg";
export default (editor) =>
  build(editor)({
    icon:'icon-bar-chart',
    label: "grapesjs-echarts-presets.components.bar.name",
    type: "echarts-bar",
  });
