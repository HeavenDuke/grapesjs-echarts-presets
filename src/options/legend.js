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
      default: "plain"
    }, {
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.legend.show.label"),
      default: true
    }, ...zIndex(t, 2, 0), ...position(t), ...size(t), {
      name: "orient",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.orient.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.orient.placeholder"),
      candidate: DIRECTIONS,
      default: "horizontal"
    }, {
      name: "align",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.align.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.align.placeholder"),
      candidate: ["auto", "left", "right"],
      default: "auto"
    }, {
      name: "padding",
      type: "Number",
      array:true,
      label: t("grapesjs-echarts-presets.config.legend.padding.label"),
      default: [5,5,5,5],
    }, {
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemGap.label"),
      default: 10,
    }, {
      name: "itemWidth",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemWidth.label"),
      default: 25,
    }, {
      name: "itemHeight",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemHeight.label"),
      default: 14,
    }, {
      name: "itemStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.itemStyle.label"),
      children: itemStyle(t)
    }, {
      name: "lineStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.lineStyle.label"),
      children: lineStyle(t)
    }, {
      name: "symbolRotate",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.symbolRotate.label"),
      default: 'inherit'||0
    }, {
      name: "formatter",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.formatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.formatter.placeholder"),
      default: ""
    }, {
      name: "selectedMode",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.legend.selectedMode.label"),
      default: true
    }, {
      name: "inactiveColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.inactiveColor.label"),
      default: "#cccccc"
    }, {
      name: "inactiveBorderColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.inactiveBorderColor.label"),
      default: "#cccccc"
    }, {
      name: "inactiveBorderWidth",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.inactiveBorderWidth.label"),
      default: "auto"
    }, {
      name: "selected",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.selected.label"),
      default: ""
    }, {
      name: "textStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.textStyle.label"),
      children: textStyle(t,{complex:true,color:'#333333',})
    }, {
      name: "tooltip",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.tooltip.label"),
      children: tooltip(t).options
    }, {
      name: "icon",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.icon.label"),
      default: ""
    }, {
      // data
    }, {
      name: "backgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.backgroundColor.label"),
      default: ""
    }, {
      name: "borderColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.dict.border.borderColor.label"),
      default: "#cccccc"
    }, {
      name: "borderWidth",
      type: "Number",
      label: t("grapesjs-echarts-presets.dict.border.borderWidth.label"),
      default: 1
    }, {
      name: "borderRadius",
      type: "Number",
      label: t("grapesjs-echarts-presets.dict.border.borderRadius.label"),
      default: 0
    }, ...shadow(t), {
      name: "scrollDataIndex",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.scrollDataIndex.label"),
      default: 0
    }, {
      name: "pageButtonItemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.pageButtonItemGap.label"),
      default: 5
    }, {
      name: "pageButtonGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.pageButtonGap.label"),
      default: 0
    }, {
      name: "pageButtonPosition",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.pageButtonPosition.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageButtonPosition.placeholder"),
      default: "end",
      candidate: ["end", "start"]
    }, {
      name: "pageFormatter",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.legend.pageFormatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageFormatter.placeholder"),
      default: '{current}/{total}'
    }, {
      name: "pageIcons",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.pageIcons.label"),
      children: [{
        name:'horizontal',
        type: "String",
        array:true,
        label: t("grapesjs-echarts-presets.config.legend.pageIcons.horizontal"),
        default: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z']
      },{
        name:'vertical',
        type: "String",
        array:true,
        label: t("grapesjs-echarts-presets.config.legend.pageIcons.vertical"),
        default: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']
      },]
    }, {
      name: "pageIconColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.pageIconColor.label"),
      default: "#2f4554"
    }, {
      name: "pageIconInactiveColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.legend.pageIconInactiveColor.label"),
      default: "#aaaaaa"
    }, {
      name: "pageIconSize",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.pageIconSize.label"),
      default: 15
    }, {
      name: "pageTextStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.pageTextStyle.label"),
      children: textStyle(t,{color:'#333333'})
    }, {
      name: "animation",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.dict.animation.label"),
      default: true
    }, {
      name: "animationDurationUpdate",
      type: "Number",
      label: t("grapesjs-echarts-presets.dict.animation.animationDurationUpdate.label"),
      default: 800
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.emphasis.label"),
      children: [{
        name: "selectorLabel",
        label: t("grapesjs-echarts-presets.config.legend.emphasis.selectorLabel.label"),
        type: "Object",
        children: [{
          name:'show',
          type:'Boolean',
          label:t("grapesjs-echarts-presets.config.legend.selector.show"),
          default:true
        },{
          name:'distance',
          type:'Number',
          label:t("grapesjs-echarts-presets.config.legend.selector.distance"),
          default:5
        },{
          name:'rotate',
          type:'Number',
          label:t("grapesjs-echarts-presets.config.legend.selector.rotate"),
          min:-90,
          max:90,
          default:0
        },{
          name:'offset',
          type:'Size',
          label:t("grapesjs-echarts-presets.config.legend.selector.offset"),
          default:[0,0]
        },...align(t),...textStyle(t, {complex:true})]
      }]
    }, {
      name: "selector",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      default: false
    }, {
      name: "selectorLabel",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      children: [{
        name:'show',
        type:'Boolean',
        label:t("grapesjs-echarts-presets.config.legend.selector.show"),
        default:true
      },{
        name:'distance',
        type:'Number',
        label:t("grapesjs-echarts-presets.config.legend.selector.distance"),
        default:5
      },{
        name:'rotate',
        type:'Number',
        label:t("grapesjs-echarts-presets.config.legend.selector.rotate"),
        min:-90,
        max:90,
        default:0
      },{
        name:'offset',
        type:'Size',
        label:t("grapesjs-echarts-presets.config.legend.selector.offset"),
        default:[0,0]
      },...align(t),...textStyle(t, {complex:true})]

    }, {
      name: "selectorPosition",
      type: "String",
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      default: "auto"
    }, {
      name: "selectorItemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.selectorItemGap.label"),
      default: 7
    }, {
      name: "selectorButtonGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.selectorButtonGap.label"),
      default: 10
    }
    ]
  };
}
