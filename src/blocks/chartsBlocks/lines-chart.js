import build from "../build";
import icon from "../../icons/折线图.svg";
export default (editor) =>
  build(editor)({
    icon,
    label: "grapesjs-echarts-presets.components.lines.name",
    type: "echarts-lines",
  });
