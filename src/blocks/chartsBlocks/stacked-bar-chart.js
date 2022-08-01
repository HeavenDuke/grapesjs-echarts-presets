import build from "../build";
import icon from "../../icons/散点图.svg"
//散点图
export default (editor) =>
  build(editor)({
    // icon,
    label: "grapesjs-echarts-presets.components.stackedBar.name",
    type: "echarts-stacked-bar",
  });