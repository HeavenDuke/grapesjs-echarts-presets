import build from "./build";
import icon from "../icons/custom-chart.svg";
export default (editor) =>
  build(editor)({
    icon,
    label: "grapesjs-echarts-presets.components.lines.name",
    type: "echarts-lines",
  });
