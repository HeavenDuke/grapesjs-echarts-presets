//unfinished
import {TOOLTIP} from "@/utils/smallDict";

export function tooltip(t) {
  return [{
    name: "show",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.show.label"),
    default: false
  }, {
    name: "trigger",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.tooltip.trigger.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.trigger.placeholder"),
    candidate: TOOLTIP.trigger,
    default: "item"
  }, {
    name: "axisPointer",
    type: "Object",
    label: t("grapesjs-echarts-presets.config.tooltip.trigger.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.trigger.placeholder"),
    children: []
  }, {
    name: "showContent",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.showContent.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.showContent.placeholder"),
    default: true
  }, {
    name: "alwaysShowContent",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.alwaysShowContent.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.alwaysShowContent.placeholder"),
    default: false
  }, {
    name: "triggerOn",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.tooltip.triggerOn.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.triggerOn.placeholder"),
    candidate: TOOLTIP.triggerOn,
    default: "mousemove|click"
  }, {
    name: "showDelay",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.tooltip.showDelay.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.showDelay.placeholder"),
    default: 0
  }, {
    name: "hideDelay",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.tooltip.hideDelay.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.hideDelay.placeholder"),
    default: 100
  }, {
    name: "enterable",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.enterable.label"),
    default: false
  }, {
    name: "renderMode",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.tooltip.renderMode.label"),
    placeholder: t("grapesjs-echarts-presets.config.tooltip.renderMode.placeholder"),
    candidate: TOOLTIP.renderMode,
    default: "html"
  }, {
    name: "confine",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.confine.label"),
    default: false
  }, {
    name: "appendToBody",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.appendToBody.label"),
    default: false
  }, {
    name: "appendToBody",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.tooltip.appendToBody.label"),
    default: false
  }, {
    name: "className",
    type: "Text",
    label: t("grapesjs-echarts-presets.config.tooltip.className.label"),
    default: ""
  }];
}