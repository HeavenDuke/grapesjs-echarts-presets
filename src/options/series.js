
import  { animation, zIndex, itemStyle, lineStyle, areaStyle } from "@/options/shared";

export default function (t, multiple = true) {
  return {
    name: "",
    label: "",
    options: [{
      name: "type",
      label: t(""),
      type: "Enum"
    }, zIndex(2, 0), ...animation(t)]
  }
}
