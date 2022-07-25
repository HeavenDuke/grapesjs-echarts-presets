
import { textStyle } from "@/options/shared";

export default function (t) {
  return {
    name: "title",
    label: t(""),
    options: [{
      name: "show",
      label: t(""),
      type: "Boolean",
    }, {
      name: "text",
      label: t(""),
      type: "String",
    }, {
      name: "link",
      label: t(""),
      type: "String",
    }, {
      name: "target",
      label: "",
      type: "String",
    }, {
      name: "subtext",
      label: "",
      type: "String",
    }, {
      name: "sublink",
      label: "",
      type: "String",
    }, {
      name: "subtarget",
      label: "",
      type: "String",
    }, {
      name: "triggerEvent",
      label: "",
      type: "Boolean",
    }, {
      name: "textStyle",
      type: "Object",
      children: textStyle(t)
    }]
  }
}
