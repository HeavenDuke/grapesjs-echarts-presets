import {position, shadow, textStyle, zIndex} from "@/options/shared";
import {TARGET} from "@/utils/smallDict";
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
      default: ""
    }, {
      name: "link",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.link.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.link.placeholder"),
      default: ""
    }, {
      name:'target',
      type:'Enum',
      label:t("grapesjs-echarts-presets.config.title.target.label"),
      placeholder:t("grapesjs-echarts-presets.config.title.target.placeholder"),
      candidate:TARGET,
      default: "blank"
    },{
      name: "textStyle",
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.title.textStyle.label"),
      children: textStyle(t)
    }, {
      name: "subtext",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.subtext.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.subtext.placeholder"),
      default: ""
    }, {
      name: "sublink",
      type: "String",
      label: t("grapesjs-echarts-presets.config.title.sublink.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.sublink.placeholder"),
      default: ""
    },{
      name: "subtarget",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.subtarget.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.subtarget.placeholder"),
      candidate:TARGET,
      default: "blank"
    }, {
      name: "subtextStyle",
      type: 'Object',
      label: t("grapesjs-echarts-presets.config.title.subtextStyle.label"),
      children: textStyle(t,false,'#333333','bolder',18)
    }, {
      name: "textAlign",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.textAlign.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.textAlign.placeholder"),
      default: "auto",
      candidate:['auto','left','right','center']
    }, {
      name: "textVerticalAlign",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.title.textVerticalAlign.label"),
      placeholder: t("grapesjs-echarts-presets.config.title.textVerticalAlign.placeholder"),
      default: "auto",
      candidate:['auto','top','bottom','middle']
    }, {
      name: "triggerEvent",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.title.triggerEvent.label"),
      default: false,
    }, {
      name: "itemGap",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.title.itemGap.label"),
      default: 10,
    }, {
      name: "padding",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.title.padding.label"),
      default: 5,
    },...zIndex(t,2,0),...position(t),{
      name:'backgroundColor',
      type: 'Color',
      label:t("grapesjs-echarts-presets.config.title.backgroundColor.label"),
      default: ''
    },{
      name:'borderColor',
      type: 'Color',
      label:t("grapesjs-echarts-presets.dict.border.borderColor.label"),
      default: '#cccccc'
    },{
      name:'borderWidth',
      type: 'Number',
      label:t("grapesjs-echarts-presets.dict.border.borderWidth.label"),
      default: 0
    },{
      name:'borderRadius',
      type: 'Number',
      label:t("grapesjs-echarts-presets.config.title.borderRadius.label"),
      default: 0
    },...shadow(t)],
  }
}
