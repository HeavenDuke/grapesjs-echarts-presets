import {DIRECTIONS} from "@/utils/smallDict";
import {feature, iconStyle, position, size, textIconStyle, zIndex} from "@/options/shared";
import tooltip from "@/options/tooltip";

export default function (t, multiple = false) {
  return {
    name: "toolbox",
    label: t("grapesjs-echarts-presets.dict.group.toolbox"),
    options: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.show.label"),
      default: true
    }, {
      name: "orient",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.toolbox.orient.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.orient.placeholder"),
      candidate: DIRECTIONS,
      default: "horizontal"
    }, {
      name: "itemSize",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.toolbox.itemSize.label"),
      default: 15
    }, {
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.toolbox.itemGap.label"),
      default: 8
    }, {
      name: "showTitle",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.showTitle.label"),
      default: true
    }, {
      name: "feature",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.label"),
      children: [{
        name: "saveAsImage",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.label"),
        children: feature(t).saveAsImage
      }, {
        name: "restore",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.restore.label"),
        children: feature(t).restore
      }, {
        name: "dataView",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.label"),
        children: feature(t).dataView
      }, {
        name: "dataZoom",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.label"),
        children: feature(t).dataZoom
      }, {
        name: "magicType",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.label"),
        children: feature(t).magicType
      }, {
        name: "brush",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.brush.label"),
        children: feature(t).brush
      },]
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t, {color: "", Bcolor: "#666666", Bwidth: 1})
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: [...iconStyle(t), ...textIconStyle(t)]
      }]
    }, ...zIndex(t, 2, 0), ...position(t), ...size(t), {
      name: "tooltip",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.tooltip.label"),
      children: tooltip(t).options
    }]
  };
}
