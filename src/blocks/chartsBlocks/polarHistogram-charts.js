import build from "../build";
import icon from "../../icons/bar-chart.svg";
//极坐标环形柱状图
export default (editor) =>
  build(editor)({
    icon,
    label: "grapesjs-echarts-presets.components.polarHistogram.name",
    type: "echarts-polarHistogram",
  });
