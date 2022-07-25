import {zIndex, position, size} from "@/options/shared"
import {DIRECTIONS, TRIGGERS} from "@/utils/smallDict";

export default function (t) {
  return {
    name: "geo",
    label: t("grapesjs-echarts-presets.dict.group.geo"),
    options: [{
      name: "test",
      label: t("grapesjs-echarts-presets.config.parallel.layout.label") || "Test",
      type: "Function",
      params: ["params"],
      default: (params) => {}
    }]
  }
}
