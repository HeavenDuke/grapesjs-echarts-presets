import {textStyle} from "@/options/shared";

function title(t) {
  return [{
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
      label:t("grapesjs-echarts-presets.config.title.link.label"),
      placeholder:t("grapesjs-echarts-presets.config.title.link.placeholder"),
      default:''
    },{
    name: "textStyle",
    type: 'Object',
    label: t("grapesjs-echarts-presets.config.textStyle.label"),
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
  }, {
    name: "subtextStyle",
    type: 'Object',
    label: t("grapesjs-echarts-presets.config.subtextStyle.label"),
    children: textStyle(t)
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
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.title.triggerEvent.label"),
    default: false,
  }, {
    name: "padding",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.title.triggerEvent.label"),
    default: false,
  }];
}

export default function (t) {
  return {
    name: "title",
    label: t("grapesjs-echarts-presets.dict.group.title"),
    options: [{
      name: "show",
      label: t(""),
      type: "Boolean",
      default: false
    }, {
      name: "textStyle",
      label: "",
      type: "Object",
      children: textStyle(t)
    }]
  }
}
