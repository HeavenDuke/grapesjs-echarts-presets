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
      default: true,

    }, {
      name: "orient",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.toolbox.orient.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.orient.placeholder"),
      candidate: DIRECTIONS,
      default: "horizontal",
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }, {
      name: "itemSize",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.toolbox.itemSize.label"),
      default: 15,
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }, {
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.toolbox.itemGap.label"),
      default: 8,
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }, {
      name: "showTitle",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.showTitle.label"),
      default: true,
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
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
      },],
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t, {color: "none", Bcolor: "#666666", Bwidth: 1}),
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: [...iconStyle(t), ...textIconStyle(t)]
      }],
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
    valid(option) {
      return option.toolbox && option.toolbox.show;
    }
  })), ...(position(t)).map(item => Object.assign(item, {
    valid(option) {
      return option.toolbox && option.toolbox.show;
    }
  })), ...(size(t)).map(item => Object.assign(item, {
    valid(option) {
      return option.toolbox && option.toolbox.show;
    }
  })), {
      name: "tooltip",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.tooltip.label"),
      children: tooltip(t,false,false).options,
      valid(option) {
        return option.toolbox && option.toolbox.show;
      }
    }]
  };
}
