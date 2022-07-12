import build from "../build";
import icon from "../../icons/圆角环形图.svg"
//圆角环形饼图
export default (editor) =>
  build(editor)({
    icon,
    label: "grapesjs-echarts-presets.components.roundedPie.name",
    type: "echarts-roundedPie",
  });