import build from "../build";
import icon from "../../icons/玫瑰图.svg"
export default (editor) =>
  build(editor)({
    icon,
    label: "grapesjs-echarts-presets.components.rose.name",
    type: "echarts-rose",
  });