import build from "../build";
import icon from "../../icons/bar-chart.svg"
//圆角环形饼图
export default (editor) =>
  build(editor)({
    // icon,
    label: "grapesjs-echarts-presets.components.scatter.name",
    type: "echarts-scatter",
  });