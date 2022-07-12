import build from "../build";
import icon from "../../icons/漏斗图.svg";
export default (editor) =>
  build(editor)({
    icon,
    label: "grapesjs-echarts-presets.components.funnel.name",
    type: "echarts-funnel",
  });
