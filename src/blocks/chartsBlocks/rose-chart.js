import build from "../build";
import icon from "../../icons/bar-chart.svg"
export default (editor) =>
  build(editor)({
    // icon,
    label: "grapesjs-echarts-presets.components.rose.name",
    type: "echarts-rose",
  });