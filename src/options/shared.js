import {BLENDMODE, ANIMATIONEASING, FONTS} from "@/utils/dict";
import {TOOLTIP, BORDER_TYPE, LINE_CAPS, LINE_JOINS} from "@/utils/smallDict";

//function for translate data
export function constructOptions(meta) {
  let obj = {};
  for (let i = 0; i < meta.length; i++) {
    if (meta[i].type === "Object") {
      obj[meta[i].name] = constructOptions(meta[i].children);
    } else {
      obj[meta[i].name] = meta[i].default;
    }
  }
  return obj;
}

//tool

//finished 4 top,right,bottom,left
export function position(t) {
  return [{
    name: "left",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.left"),
    default: "10%"
  }, {
    name: "top",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.top"),
    default: "60px"
  }, {
    name: "right",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.right"),
    default: "10%"
  }, {
    name: "bottom",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.bottom"),
    default: "60px"
  }];
}

//finished 2 width,height
export function size(t) {
  return [{
    name: "width",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.size.width"),
    default: "auto"
  }, {
    name: "height",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.size.height"),
    default: "auto"
  }];
}

//finished 8 animation,animationThreshold,animationDuration,animationDurationUpdate,
// animationEasing,animationEasingUpdate,animationDelay,animationDelayUpdate
export function animation(t) {
  return [{
    name: "animation",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.dict.animation.label"),
    default: true,
  }, {
    name: "animationThreshold",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.animation.animationThreshold.label"),
    default: 2000,
  }, {
    name: "animationDuration",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.animation.animationDuration.label"),
    default: 1000,
  }, {
    name: "animationDurationUpdate",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.animation.animationDurationUpdate.label"),
    default: 300,
  }, {
    name: "animationEasing",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.animation.animationEasing.label"),
    default: "cubicOut",
    placeholder: t("grapesjs-echarts-presets.dict.animation.animationEasing.placeholder"),
    candidate: ANIMATIONEASING
  }, {
    name: "animationEasingUpdate",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.basic.animationEasingUpdate.label"),
    placeholder: t("grapesjs-echarts-presets.dict.animation.animationEasingUpdate.placeholder"),
    default: "cubicOut",
    candidate: ANIMATIONEASING
  }, {
    name: "animationDelay",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.animation.animationDelay.label"),
    default: 0,
  }, {
    name: "animationDelayUpdate",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.animation.animationDelayUpdate.label"),
    default: 0,
  }];
}

//finished 4 shadowBlur,shadowColor,shadowOffsetX,shadowOffsetY
export function shadow(t) {
  return [{
    name: "shadowBlur",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowBlur.label"),
    default: 0
  }, {
    name: "shadowColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowColor.label"),
    default: "rgba(0, 0, 0, 0)"
  }, {
    name: "shadowOffsetX",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowOffsetX.label"),
    default: 0
  }, {
    name: "shadowOffsetY",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowOffsetY.label"),
    default: 0
  }];
}
//finished 4 borderColor,borderWidth,borderType,borderDashOffset
export function border(t) {
  return [{
    name: "borderColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.border.borderColor.label"),
    default: ""
  }, {
    name: "borderWidth",
    type: "number",
    label: t("grapesjs-echarts-presets.border.borderWidth.label"),
    default: "auto"
  }, {
    name: "borderType",
    type: "Enum",
    label: t("grapesjs-echarts-presets.border.borderType.label"),
    default: ""
  }, {
    name: "borderDashOffset",
    type: "Number",
    label: t("grapesjs-echarts-presets.border.borderDashOffset.label"),
    default: 0
  }];
}

//branch
//finished
export function textStyle(t, complex = false) {
  let basic = [{
    name: "color",
    type: "Color",
    default: "#fff",
    label: t("grapesjs-echarts-presets.config.textStyle.color.label")
  }, {
    name: "fontStyle",
    type: "Enum",
    default: "normal",
    label: t("grapesjs-echarts-presets.config.textStyle.fontStyle.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.fontStyle.placeholder"),
    candidate: ["normal", "italic", "oblique"]
  }, {
    name: "fontWeight",
    type: "Enum",
    default: "normal",
    label: t("grapesjs-echarts-presets.config.textStyle.fontWeight.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.fontWeight.placeholder"),
    candidate: ["normal", "bold", "bolder", "lighter"]
  }, {
    name: "fontFamily",
    type: "Enum",
    default: "sans-serif",
    label: t("grapesjs-echarts-presets.config.textStyle.fontFamily.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.fontFamily.placeholder"),
    candidate: FONTS
  }, {
    name: "fontSize",
    type: "Number",
    default: 12,
    label: t("grapesjs-echarts-presets.config.textStyle.fontSize.label"),
  }, {
    name: "lineHeight",
    type: "Number",
    default: 0,
    label: t("grapesjs-echarts-presets.config.textStyle.lineHeight.label"),
  }, ...size(t), {
    name: "textBorderColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.textStyle.textBorderColor.label"),
    default: ""
  }, {
    name: "textBorderWidth",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.textBorderWidth.label"),
    default: 0
  }, {
    name: "textBorderType",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.textStyle.textBorderType.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.textBorderType.placeholder"),
    default: "solid",
    candidate: BORDER_TYPE
  }, {
    name: "textBorderDashOffset",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.textBorderDashOffset.label"),
    default: 0
  }, {
    name: "textShadowColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.textStyle.textShadowColor.label"),
    default: ""
  }, {
    name: "textShadowBlur",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.textShadowBlur.label"),
    default: 0
  }, {
    name: "textShadowOffsetX",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.textShadowOffsetX.label"),
    default: 0
  }, {
    name: "textShadowOffsetY",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.textShadowOffsetY.label"),
    default: 0
  }, {
    name: "overflow",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.textStyle.overflow.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.overflow.placeholder"),
    default: "none",
    candidate: ["none", "truncate", "break", "breakAll"]
  }, {
    name: "ellipsis",
    type: "Text",
    label: t("grapesjs-echarts-presets.config.textStyle.ellipsis.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.ellipsis.placeholder"),
    default: ""
  }];
  let more = [{
    name: "backgroundColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.textStyle.backgroundColor.label"),
    default: ""
  }, ...border(t), {
    name: "borderRadius",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.borderRadius.label"),
    default: 0
  }, {
    name: "padding",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.textStyle.padding.label"),
    default: 0
  }, ...shadow(t)];
  if (complex) {
    return [...basic, ...more];
  } else {
    return basic;
  }
}

//finished
export function lineStyle(t) {
  return [{
    name: "color",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.lineStyle.color.label"),
    default: ""
  }, {
    name: "width",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.lineStyle.width.label"),
    default: ""
  }, {
    name: "type",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.lineStyle.type.label"),
    placeholder: t("grapesjs-echarts-presets.config.lineStyle.type.placeholder"),
    default: "",
    candidate: BORDER_TYPE
  }, {
    name: "dashOffset",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.lineStyle.dashOffset.label"),
    default: 0
  }, {
    name: "cap",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.lineStyle.cap.label"),
    placeholder: t("grapesjs-echarts-presets.config.lineStyle.cap.placeholder"),
    default: "butt",
    candidate: LINE_CAPS
  }, {
    name: "join",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.lineStyle.join.label"),
    placeholder: t("grapesjs-echarts-presets.config.lineStyle.join.placeholder"),
    default: "bevel",
    candidate: LINE_JOINS
  }, {
    name: "miterLimit",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.lineStyle.miterLimit.label"),
    default: 10
  }, ...shadow(t), {
    name: "opacity",
    type: "Number",
    step: 0.1,
    min: 0,
    max: 1,
    label: t("grapesjs-echarts-presets.config.lineStyle.opacity.label"),
    default: 1
  }];
}
//finished
export function itemStyle(t) {
  return [{
    name: "color",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.itemStyle.color.label"),
    default: ""
  }, ...border(t), {
    name: "borderCap",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.itemStyle.borderCap.label"),
    placeholder: t("grapesjs-echarts-presets.config.itemStyle.borderCap.placeholder"),
    candidate: LINE_CAPS,
    default: ""
  }, {
    name: "borderJoin",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.itemStyle.borderJoin.label"),
    placeholder: t("grapesjs-echarts-presets.config.itemStyle.borderJoin.placeholder"),
    candidate: LINE_JOINS,
    default: ""
  }, {
    name: "borderMiterLimit",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.itemStyle.borderMiterLimit.label"),
    default: 10
  }, ...shadow(t), {
    name: "opacity",
    type: "Number",
    step: 0.1,
    min: 0,
    max: 1,
    label: t("grapesjs-echarts-presets.config.itemStyle.opacity.label"),
    default: 1
  }, {
    name: "decal",
    type: "Text",
    label: t("grapesjs-echarts-presets.config.itemStyle.decal.label"),
    default: ""
  }];
}

export function iconStyle(t) {
}

export function areaStyle(t) {

}