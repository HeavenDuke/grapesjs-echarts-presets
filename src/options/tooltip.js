import {AXIS, BORDER_TYPE, LINE_CAPS, LINE_JOINS, POINTER_TYPES, TOOLTIP} from "@/utils/smallDict";
import {animation, axisPointer, removeItems, shadow, textStyle} from "@/options/shared";
import {LINE_TYPES} from "@/utils/dict";
//finished
export default function (t, multiple = false, show = true,) {
  let newAxisPointer = removeItems(axisPointer(t), ["snap", "z", "label", "lineStyle", "shadowStyle"]).concat([
    {
      name: "axis",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.axis.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.axisPointer.axis.placeholder"),
      candidate: AXIS,
      default: "auto"
    }, {
      name: "type",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.type.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.axisPointer.type.placeholder"),
      candidate: [...POINTER_TYPES, "cross"],
      default: "line"
    }, {
      name: "crossStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.label"),
      children: [{
        name: "color",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.color"),
        default: "#555555"
      }, {
        name: "width",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.width"),
        default: 1
      }, {
        name: "type",
        type: "Enum",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.type.label"),
        placeholder: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.type.placeholder"),
        candidate: BORDER_TYPE,
        default: "dashed"
      }, {
        name: "dashOffset",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.dashOffset"),
        default: 0
      }, {
        name: "cap",
        type: "Enum",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.cap.label"),
        placeholder: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.cap.placeholder"),
        candidate: LINE_CAPS,
        default: "butt"
      }, {
        name: "join",
        type: "Enum",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.join.label"),
        placeholder: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.join.placeholder"),
        candidate: LINE_JOINS,
        default: "bevel"
      }, {
        name: "miterLimit",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.miterLimit"),
        default: 10
      }, ...shadow(t), {
        name: "opacity",
        type: "Number",
        min: 0,
        max: 1,
        step: 0.1,
        label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.crossStyle.opacity"),
        default: 1
      }]
    }, ...animation(t, {aDurationU: 200, aEasingU: "exponent"})
  ]);
  // console.log(newAxisPointer)
  return {
    name: "tooltip",
    label: t("grapesjs-echarts-presets.dict.group.tooltip"),
    options: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.tooltip.show.label"),
      default: show
    }, {
      name: "trigger",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.trigger.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.trigger.placeholder"),
      candidate: TOOLTIP.trigger,
      default: "item",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "axisPointer",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.tooltip.axisPointer.label"),
      children: newAxisPointer,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "showContent",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.tooltip.showContent.label"),
      default: true,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "alwaysShowContent",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.tooltip.alwaysShowContent.label"),
      default: false,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "triggerOn",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.triggerOn.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.triggerOn.placeholder"),
      candidate: TOOLTIP.triggerOn,
      default: "mousemove|click",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "showDelay",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.tooltip.showDelay.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.showDelay.placeholder"),
      default: 0,
      valid(option) {
        return option.tooltip.show && (option.tooltip.triggerOn === "mousemove" || option.tooltip.triggerOn ==="mousemove|click");
      }
    }, {
      name: "hideDelay",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.tooltip.hideDelay.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.hideDelay.placeholder"),
      default: 100,
      valid(option) {
        return option.tooltip.show && option.tooltip.alwaysShowContent === false;
      }
    }, {
      name: "enterable",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.tooltip.enterable.label"),
      default: false,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "renderMode",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.renderMode.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.renderMode.placeholder"),
      candidate: TOOLTIP.renderMode,
      default: "html",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "confine",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.tooltip.confine.label"),
      default: false,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "appendToBody",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.tooltip.appendToBody.label"),
      default: false,
      valid(option) {
        return option.tooltip.show && option.tooltip.renderMode === "html";
      }
    }, {
      name: "className",
      type: "String",
      label: t("grapesjs-echarts-presets.config.tooltip.className.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.className.placeholder"),
      default: "",
      valid(option) {
        return option.tooltip.show && option.tooltip.renderMode === "html";
      }
    }, {
      name: "transitionDuration",
      type: "Number",
      step: 0.1,
      min: 0,
      label: t("grapesjs-echarts-presets.config.tooltip.transitionDuration.label"),
      default: 0.4,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "position",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.position.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.position.placeholder"),
      candidate: TOOLTIP.position,
      default: undefined,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "formatter",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.tooltip.formatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.formatter.placeholder"),
      default: "",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "valueFormatter",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.tooltip.valueFormatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.valueFormatter.placeholder"),
      default: "",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "backgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.tooltip.backgroundColor.label"),
      default: "rgba(50,50,50,0.7)",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "borderColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.tooltip.borderColor.label"),
      default: "#333333",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "borderWidth",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.tooltip.borderColor.label"),
      default: 0,
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "padding",
      type: "Number",
      array: true,
      label: t("grapesjs-echarts-presets.config.tooltip.padding.label"),
      default: [5, 5, 5, 5],
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "textStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.textStyle.label"),
      children: textStyle(t, {fontSize: 14}),
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "extraCssText",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.tooltip.extraCssText.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.extraCssText.placeholder"),
      default: "",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }, {
      name: "order",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.tooltip.order.label"),
      placeholder: t("grapesjs-echarts-presets.config.tooltip.order.placeholder"),
      candidate: TOOLTIP.order,
      default: "seriesAsc",
      valid(option) {
        return option.tooltip && option.tooltip.show;
      }
    }],
  };
}
