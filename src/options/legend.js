import {itemStyle, lineStyle, position, shadow, size, textStyle, zIndex} from "@/options/shared";
import {DIRECTIONS} from "@/utils/smallDict";
import tooltip from "@/options/tooltip";

export default function (t) {
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
    },...zIndex(t,2,0),...position(t),...size(t),{
      name: "orient",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.orient.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.orient.placeholder"),
      candidate: DIRECTIONS,
      default: "horizontal"
    },{
      name: "align",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.legend.align.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.align.placeholder"),
      candidate: ['auto','left','right'],
      default: "auto"
    },{
      name: "padding",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.padding.label"),
      default: 5,
    },{
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemGap.label"),
      default: 10,
    },{
      name: "itemWidth",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemWidth.label"),
      default: 25,
    },{
      name: "itemHeight",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.legend.itemHeight.label"),
      default: 14,
    },{
      name:'itemStyle',
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.itemStyle.label"),
      children:itemStyle(t)
    },{
      name:'lineStyle',
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.lineStyle.label"),
      children:lineStyle(t)
    },{
      name:'symbolRotate',
      type: 'Number',
      label:t("grapesjs-echarts-presets.config.legend.symbolRotate.label"),
      default: 0
    },{
      name:'formatter',
      type:'Text',
      label:t("grapesjs-echarts-presets.config.legend.formatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.formatter.placeholder"),
      default: ''
    },{
      name: 'selectedMode',
      type: 'Boolean',
      label: t("grapesjs-echarts-presets.config.legend.selectedMode.label"),
      default: true
    },{
      name: 'inactiveColor',
      type: 'Color',
      label: t("grapesjs-echarts-presets.config.legend.inactiveColor.label"),
      default: '#cccccc'
    },{
      name: 'inactiveBorderColor',
      type: 'Color',
      label: t("grapesjs-echarts-presets.config.legend.inactiveBorderColor.label"),
      default: '#cccccc'
    },{
      name: 'inactiveBorderWidth',
      type: 'Color',
      label: t("grapesjs-echarts-presets.config.legend.inactiveBorderWidth.label"),
      default: '#cccccc'
    },{
      name:'selected',
      type: 'Text',
      label: t("grapesjs-echarts-presets.config.legend.selected.label"),
      default:''
    },{
      name:'textStyle',
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.textStyle.label"),
      children:textStyle(t)
    },{
      name:'tooltip',
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.tooltip.label"),
      children:tooltip(t)
    },{
      name:'icon',
      type: 'Text',
      label: t("grapesjs-echarts-presets.config.legend.icon.label"),
      default: ''
    },{
      // data
    },{
      name:'backgroundColor',
      type: 'Color',
      label:t("grapesjs-echarts-presets.config.legend.backgroundColor.label"),
      default: ''
    },{
      name:'borderColor',
      type: 'Color',
      label:t("grapesjs-echarts-presets.dict.border.borderColor"),
      default: '#cccccc'
    },{
      name:'borderWidth',
      type: 'Number',
      label:t("grapesjs-echarts-presets.dict.border.borderWidth"),
      default: 1
    },{
      name:'borderRadius',
      type: 'Number',
      label:t("grapesjs-echarts-presets.legend.title.borderRadius.label"),
      default: 0
    },...shadow(t),{
      name: 'scrollDataIndex',
      type: 'Number',
      label: t("grapesjs-echarts-presets.config.legend.scrollDataIndex.label"),
      default: 0
    },{
      name: 'pageButtonItemGap',
      type: 'Number',
      label: t("grapesjs-echarts-presets.config.legend.pageButtonItemGap.label"),
      default: 5
    },{
      name: 'pageButtonGap',
      type: 'Number',
      label: t("grapesjs-echarts-presets.config.legend.pageButtonGap.label"),
      default: undefined
    },{
      name: 'pageButtonPosition',
      type: 'Enum',
      label: t("grapesjs-echarts-presets.config.legend.pageButtonPosition.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageButtonPosition.placeholder"),
      default: 'end',
      candidate:['end','start']
    },{
      name:'pageFormatter',
      type:'Text',
      label:t("grapesjs-echarts-presets.config.legend.pageFormatter.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageFormatter.placeholder"),
      default: ''
    },{
      name: 'pageIcon',
      type: 'Text',
      label: t("grapesjs-echarts-presets.config.legend.pageIcon.label"),
      placeholder: t("grapesjs-echarts-presets.config.legend.pageIcon.placeholder"),
      default: ''
    },{
      name:'pageIconColor',
      type: 'Color',
      label:  t("grapesjs-echarts-presets.config.legend.pageIconColor.label"),
      default: '#2f4554'
    },{
      name:'pageIconInactiveColor',
      type: 'Color',
      label:  t("grapesjs-echarts-presets.config.legend.pageIconInactiveColor.label"),
      default: '#aaaaaa'
    },{
      name: 'pageIconSize',
      type: 'Number',
      label:t("grapesjs-echarts-presets.config.legend.pageIconSize.label"),
      default: 15
    },{
      name:'pageTextStyle',
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.legend.pageTextStyle.label"),
      children:textStyle(t)
    },{
      name:'animation',
      type: 'Boolean',
      label: t("grapesjs-echarts-presets.dict.animation.label"),
      default: false
    },{
      name:'animationDurationUpdate',
      type: 'Number',
      label:t("grapesjs-echarts-presets.dict.animation.animationDurationUpdate.label"),
      default: 800
    },{
      name:'emphasis',
      type: 'Object',
      label:t("grapesjs-echarts-presets.config.legend.emphasis.label"),
      children: [{
        name:'selectorLabel',
        label:t("grapesjs-echarts-presets.config.legend.emphasis.selectorLabel.label"),
        type: 'Object',
        children:textStyle(t,true)
      }]
    },{
      name:'selector',
      type: 'Boolean',
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      default: false
    },{
      name:'selectorLabel',
      type: "Object",
      label:t("grapesjs-echarts-presets.config.legend.selector.label"),
      children: textStyle(t,true)
    },{
      name:'selectorPosition',
      type: 'String',
      label: t("grapesjs-echarts-presets.config.legend.selector.label"),
      default: 'auto'
    },{
      name:'selectorItemGap',
      type: 'Number',
      label:t("grapesjs-echarts-presets.config.legend.selectorItemGap.label"),
      default: 7
    },{
      name:'selectorButtonGap',
      type: 'Number',
      label:t("grapesjs-echarts-presets.config.legend.selectorButtonGap.label"),
      default: 10
    }
    ]
  };
}