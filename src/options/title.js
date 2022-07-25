
import { textStyle } from "@/options/shared";

export default function (t) {
  console.log(t)
  return {
    name: "title",
    label: t("grapesjs-echarts-presets.dict.group.title"),
    options: [{
      name: "show",
      label: t(""),
      type: "Boolean",
      default: false
    }, {
      name: "textStyle",
      type: "Object",
      children: textStyle(t)
    }]
  }
}
