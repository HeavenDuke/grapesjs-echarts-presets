import {align, itemStyle, lineStyle, position, shadow, size, textStyle, zIndex} from "@/options/shared";
import {DIRECTIONS} from "@/utils/smallDict";
import tooltip from "@/options/tooltip";
//finished
export default function (t, multiple = false) {
  return {
    name: "legend",
    label: t("grapesjs-echarts-presets.dict.group.legend"),
    options: [{
      name: "type",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.type.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.type.placeholder"),
      candidate: ["plain", "scroll"],
      default: "plain",
      valid(option) {
        return option.legend.show && option.legend.show;
      }
    }, {
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.legend.show.label"),
      default: true
    }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
      valid(option) {
        return option.legend && option.legend.show;
      }
    })), ...(position(t)).map(item => Object.assign(item, {
      valid(option) {
        return option.legend && option.legend.show;
      }
    })), ...(size(t)).map(item => Object.assign(item, {
      valid(option) {
        return option.legend && option.legend.show;
      }
    })), {
      name: "orient",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.orient.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.orient.placeholder"),
      candidate: DIRECTIONS,
      default: "horizontal",
      valid(option) {
        return option.legend.show && option.legend.show;
      }
    }, {
      name: "align",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.align.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.align.placeholder"),
      candidate: ["auto", "left", "right"],
      default: "right",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "padding",
      type: "Number",
      array: true,
      label: t("grapesjs-echarts-presets.config.legend.padding.label"),
      default: [5, 5, 5, 5],
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemGap.label"),
      default: 10,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "itemWidth",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemWidth.label"),
      default: 25,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "itemHeight",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemHeight.label"),
      default: 14,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "itemStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.itemStyle.label"),
      children: itemStyle(t),
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "lineStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.lineStyle.label"),
      children: lineStyle(t),
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "symbolRotate",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.symbolRotate.label"),
      default: "inherit" ,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "formatter",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.formatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.formatter.placeholder"),
      default: "",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "selectedMode",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.legend.selectedMode.label"),
      default: true,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "inactiveColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.inactiveColor.label"),
      default: "#cccccc",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "inactiveBorderColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.inactiveBorderColor.label"),
      default: "#cccccc",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "inactiveBorderWidth",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.inactiveBorderWidth.label"),
      default: "auto",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "selected",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.selected.label"),
      default: "",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "textStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.textStyle.label"),
      children: textStyle(t, {complex: true, color: "#333333",}),
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "tooltip",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.tooltip.label"),
      children: tooltip(t).options,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      // name: "icon",
      // type: "Text",
      // label: t("grapesjs-echarts-presets.config.legend.icon.label"),
      // default: ""
    }, {
      name: "backgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.backgroundColor.label"),
      default: "none",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "borderColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.dict.border.borderColor.label"),
      default: "#cccccc",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "borderWidth",
      type: "Number",
      label: t("grapesjs-echarts-presets.dict.border.borderWidth.label"),
      default: 1,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "borderRadius",
      type: "Number",
      label: t("grapesjs-echarts-presets.dict.border.borderRadius.label"),
      default: 0,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, ...(shadow(t)).map(item => Object.assign(item, {
    valid(option) {
      return option.legend && option.legend.show;
    }
  })), {
      name: "scrollDataIndex",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.scrollDataIndex.label"),
      default: 0,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageButtonItemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.pageButtonItemGap.label"),
      default: 5,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageButtonGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.pageButtonGap.label"),
      default: 0,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageButtonPosition",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.pageButtonPosition.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageButtonPosition.placeholder"),
      default: "end",
      candidate: ["end", "start"],
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageFormatter",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.pageFormatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageFormatter.placeholder"),
      default: "{current}/{total}",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageIcons",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.pageIcons.label"),
      children: [{
        name: "horizontal",
        type: "String",
        array: true,
        label: t("grapesjs-echarts-presets.config.legend.pageIcons.horizontal"),
        default: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"]
      }, {
        name: "vertical",
        type: "String",
        array: true,
        label: t("grapesjs-echarts-presets.config.legend.pageIcons.vertical"),
        default: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },],
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageIconColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.pageIconColor.label"),
      default: "#2f4554",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageIconInactiveColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.pageIconInactiveColor.label"),
      default: "#aaaaaa",
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageIconSize",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.pageIconSize.label"),
      default: 15,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "pageTextStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.pageTextStyle.label"),
      children: textStyle(t, {color: "#333333"}),
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "animation",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.dict.animation.label"),
      default: true,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "animationDurationUpdate",
      type: "Number",
      label: t("grapesjs-echarts-presets.dict.animation.animationDurationUpdate.label"),
      default: 800,
      valid(option) {
        return option.legend.animation ;
      }
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.emphasis.label"),
      children: [{
        name: "selectorLabel",
        label: t("grapesjs-echarts-presets.config.legend.emphasis.selectorLabel.label"),
        type: "Object",
        children: [{
          name: "show",
          type: "Boolean",
          label: t("grapesjs-echarts-presets.config.legend.selector.show"),
          default: true
        }, {
          name: "distance",
          type: "Number",
          label: t("grapesjs-echarts-presets.config.legend.selector.distance"),
          default: 5
        }, {
          name: "rotate",
          type: "Number",
          label: t("grapesjs-echarts-presets.config.legend.selector.rotate"),
          min: -90,
          max: 90,
          default: 0
        }, {
          name: "offset",
          type: "Size",
          label: t("grapesjs-echarts-presets.config.legend.selector.offset"),
          default: [0, 0]
        }, ...align(t), ...textStyle(t, {complex: true})]
      }],
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "selector",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      default: false,
      valid(option) {
        return option.legend && option.legend.show;
      }
    }, {
      name: "selectorLabel",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      children: [{
        name: "show",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.legend.selector.show"),
        default: true
      }, {
        name: "distance",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.legend.selector.distance"),
        default: 5
      }, {
        name: "rotate",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.legend.selector.rotate"),
        min: -90,
        max: 90,
        default: 0
      }, {
        name: "offset",
        type: "Size",
        label: t("grapesjs-echarts-presets.config.legend.selector.offset"),
        default: [0, 0]
      }, ...align(t), ...textStyle(t, {complex: true})],
      valid(option) {
        return option.legend.selector
      }
    }, {
      name: "selectorPosition",
      type: "String",
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      default: "auto",
      valid(option) {
        return option.legend.selector
      }
    }, {
      name: "selectorItemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.selectorItemGap.label"),
      default: 7,
      valid(option) {
        return option.legend.selector
      }
    }, {
      name: "selectorButtonGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.selectorButtonGap.label"),
      default: 10,
      valid(option) {
        return option.legend.selector
      }
    }
    ]
  };
}
