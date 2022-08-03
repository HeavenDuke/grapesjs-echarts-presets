import {align, position, shadow, textStyle, zIndex} from "@/options/shared";
import {ALIGN, TARGET, VERTICAL_ALIGN} from "@/utils/smallDict";
//finished
export default function (t, multiple = false) {
  return {
    name: "title",
    label: t("grapesjs-echarts-presets.dict.group.title"),
    options: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.title.show.label"),
      default: true
    }, {
      name: "text",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.text.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.text.placeholder"),
      default: "",
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "link",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.link.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.link.placeholder"),
      default: "",
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "target",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.target.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.target.placeholder"),
      candidate: TARGET,
      default: "blank",
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "textStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.title.textStyle.label"),
      children: textStyle(t, {color: "#333333", fontWeight: "bolder", fontSize: 18}),
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "subtext",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.subtext.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.subtext.placeholder"),
      default: "",
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "sublink",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.sublink.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.sublink.placeholder"),
      default: "",
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "subtarget",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.subtarget.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.subtarget.placeholder"),
      candidate: TARGET,
      default: "blank",
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "subtextStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.title.subtextStyle.label"),
      children: [...textStyle(t, {color: "#aaaaaa"}), ...align(t)],
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "textAlign",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.textAlign.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.textAlign.placeholder"),
      default: "auto",
      candidate: ALIGN,
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "textVerticalAlign",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.textVerticalAlign.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.textVerticalAlign.placeholder"),
      default: "auto",
      candidate: VERTICAL_ALIGN,
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "triggerEvent",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.title.triggerEvent.label"),
      default: false,
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.title.itemGap.label"),
      default: 10,
      valid(option) {
        return option.title && option.title.show
      }
    }, {
      name: "padding",
      type: "Number",
      array:true,
      label: t("grapesjs-echarts-presets.config.title.padding.label"),
      default: [5,5,5,5],
      valid(option) {
        return option.title && option.title.show
      }
    },
      ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
        valid(option) {
          return option.title && option.title.show
        }
      })),
      ...position(t).map(item => Object.assign(item, {
        valid(option) {
          return option.title && option.title.show
        }
      })),
      {
        name: "backgroundColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.title.backgroundColor.label"),
        default: "",
        valid(option) {
          return option.title && option.title.show
        }
      }, {
        name: "borderColor",
        type: "Color",
        label: t("grapesjs-echarts-presets.dict.border.borderColor.label"),
        default: "#cccccc",
        valid(option) {
          return option.title && option.title.show
        }
      }, {
        name: "borderWidth",
        type: "Number",
        label: t("grapesjs-echarts-presets.dict.border.borderWidth.label"),
        default: 0,
        valid(option) {
          return option.title && option.title.show
        }
      }, {
        name: "borderRadius",
        type: "Number",
        array: true,
        label: t("grapesjs-echarts-presets.config.title.borderRadius.label"),
        default: [0,0,0,0],
        valid(option) {
          return option.title && option.title.show
        }
      },
      ...shadow(t).map(item => Object.assign(item, {
        valid(option) {
          return option.title && option.title.show
        }
      }))],
  };
}
