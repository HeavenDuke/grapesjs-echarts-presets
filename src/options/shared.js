import {BLENDMODE, ANIMATIONEASING, FONTS} from "@/utils/dict";
import {TOOLTIP, BORDER_TYPE, LINE_CAPS, LINE_JOINS, POINTER_TYPES, VISIBLE_STATUS, TRIGGERS} from "@/utils/smallDict";
import fa from "grapesjs/src/i18n/locale/fa";
import el from "grapesjs/src/i18n/locale/el";

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

function extract(overall, meta, option) {
  let obj = {};
  for (let i = 0; i < meta.length; i++) {
    if (!meta[i].valid || meta[i].valid(overall)) {
      if (meta[i].type === "Object") {
        obj[meta[i].name] = extract(overall, meta[i].children, option[meta[i].name]);
      } else {
        obj[meta[i].name] = option[meta[i].name];
      }
    }
  }
  return obj;
}

export function extractOptions(overall, meta, option) {
  return !meta.multiple ? extract(overall, meta, option) : option.map(item => extract(overall, meta, item));
}

/**
 *
 * @param options | type: Array
 * @param names | type: Array<String> or String;
 * @returns {*}
 */
export function removeItems(options, names) {
  if (names instanceof Array) {
    let nameMap = names.reduce((result, name) => {
      result[name] = name;
      return result;
    }, {});
    return options.filter(item => nameMap[item.name]);
  } else {
    return options.filter(item => item.name !== names);
  }
}

//tool

//finished 4 top,right,bottom,left
export function position(t, top = "auto" || 0, right = "auto" || 0, bottom = "auto" || 0, left = "auto" || 0) {
  return [{
    name: "top",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.top"),
    default: top
  }, {
    name: "right",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.right"),
    default: right
  }, {
    name: "bottom",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.bottom"),
    default: bottom
  }, {
    name: "left",
    type: "String",
    label: t("grapesjs-echarts-presets.dict.position.left"),
    default: left
  },];
}

//finished 2 width,height
export function size(t, width = "auto", height = "auto") {
  return [{
    name: "width",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.size.width"),
    default: width
  }, {
    name: "height",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.size.height"),
    default: height
  }];
}

//finished 8 animation,animationThreshold,animationDuration,animationDurationUpdate,
// animationEasing,animationEasingUpdate,animationDelay,animationDelayUpdate
export function animation(t, {
  animation = true,
  aThreshold = 2000,
  aDuration = 1000,
  aDurationU = 300,
  aEasing = "cubicOut",
  aEasingU = "cubicOut",
  aDelay = 0,
  aDelayU = 0
} = {}) {
  return [{
    name: "animation",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.dict.animation.label"),
    default: animation,
  }, {
    name: "animationThreshold",
    type: "Number",
    min:0,
    label: t("grapesjs-echarts-presets.dict.animation.animationThreshold.label"),
    default: aThreshold,
  }, {
    name: "animationDuration",
    type: "Number",
    min:0,
    label: t("grapesjs-echarts-presets.dict.animation.animationDuration.label"),
    default: aDuration,
  }, {
    name: "animationDurationUpdate",
    type: "Number",
    min:0,
    label: t("grapesjs-echarts-presets.dict.animation.animationDurationUpdate.label"),
    default: aDurationU,
  }, {
    name: "animationEasing",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.animation.animationEasing.label"),
    default: aEasing,
    placeholder: t("grapesjs-echarts-presets.dict.animation.animationEasing.placeholder"),
    candidate: ANIMATIONEASING
  }, {
    name: "animationEasingUpdate",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.animation.animationEasingUpdate.label"),
    placeholder: t("grapesjs-echarts-presets.dict.animation.animationEasingUpdate.placeholder"),
    default: aEasingU,
    candidate: ANIMATIONEASING
  }, {
    name: "animationDelay",
    type: "Number",
    min:0,
    label: t("grapesjs-echarts-presets.dict.animation.animationDelay.label"),
    default: aDelay,
  }, {
    name: "animationDelayUpdate",
    type: "Number",
    min:0,
    label: t("grapesjs-echarts-presets.dict.animation.animationDelayUpdate.label"),
    default: aDelayU,
  }];
}

//finished 2 z,zlevel
export function zIndex(t, z = 0, zLevel = 0) {
  return [{
    name: "z",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.zIndex.z.label"),
    default: z
  }, {
    name: "zlevel",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.zIndex.zlevel.label"),
    default: zLevel
  }];
}

//finished 4 shadowBlur,shadowColor,shadowOffsetX,shadowOffsetY
export function shadow(t, {
  shadowBlur = 0,
  shadowColor = "rgba(0, 0, 0, 0)",
  OffsetX=0,
  OffsetY=0
}={}) {
  return [{
    name: "shadowBlur",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowBlur.label"),
    default: shadowBlur
  }, {
    name: "shadowColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowColor.label"),
    default: shadowColor
  }, {
    name: "shadowOffsetX",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowOffsetX.label"),
    default: OffsetX
  }, {
    name: "shadowOffsetY",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.shadow.shadowOffsetY.label"),
    default: OffsetY
  }];
}

//finished 4 borderColor,borderWidth,borderType,borderDashOffset
export function border(t, more = false, color = "#000000") {
  let basic = [{
    name: "borderColor",
    type: "Color",
    label: t("grapesjs-echarts-presets.dict.border.borderColor.label"),
    default: color
  }, {
    name: "borderWidth",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.border.borderWidth.label"),
    default: "auto"
  }, {
    name: "borderType",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.border.borderType.label"),
    placeholder: t("grapesjs-echarts-presets.dict.border.borderType.placeholder"),
    default: "solid",
    candidate: BORDER_TYPE
  }, {
    name: "borderDashOffset",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.border.borderDashOffset.label"),
    default: 0
  }];
  let m = [{
    name: "borderCap",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.border.borderCap.label"),
    placeholder: t("grapesjs-echarts-presets.dict.border.borderCap.placeholder"),
    candidate: LINE_CAPS,
    default: "butt"
  }, {
    name: "borderJoin",
    type: "Enum",
    label: t("grapesjs-echarts-presets.dict.border.borderJoin.label"),
    placeholder: t("grapesjs-echarts-presets.dict.border.borderJoin.placeholder"),
    candidate: LINE_JOINS,
    default: "bevel"
  }, {
    name: "borderMiterLimit",
    type: "Number",
    label: t("grapesjs-echarts-presets.dict.border.borderMiterLimit.label"),
    default: 10
  }];
  if (more) {
    return [...basic, ...m];
  } else {
    return basic;
  }
}

export function feature(t) {
  return {
    saveAsImage: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.show.label"),
      default: true
    }, {
      name: "type",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.type.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.type.placeholder"),
      candidate: ["png", "jpg", "svg"],
      default: "png"
    }, {
      name: "name",
      type: "String",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.name.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.name.placeholder"),
      default: ""
    }, {
      name: "backgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.backgroundColor.label"),
      default: ""
    }, {
      name: "connectBackgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.connectBackgroundColor.label"),
      default: "#ffffff"
    }, {
      name: "title",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.title.label"),
      default: true
    }, {
      name: "icon",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.icon.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.icon.placeholder"),
      default: ""
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t)
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: iconStyle(t)
      }]
    }, {
      name: "pixelRatio",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.saveAsImage.pixelRatio.label"),
      min: 1,
      default: 1
    }],
    restore: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.restore.show.label"),
      default: true
    }, {
      name: "title",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.restore.title.label"),
      default: true
    }, {
      name: "icon",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.restore.icon.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.restore.icon.placeholder"),
      default: ""
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t)
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.restore.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: iconStyle(t)
      }]
    }],
    dataView: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.show.label"),
      default: true
    }, {
      name: "title",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.title.label"),
      default: true
    }, {
      name: "icon",
      type: "Text",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.icon.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.icon.placeholder"),
      default: ""
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t)
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: iconStyle(t)
      }]
    }, {
      name: "readOnly",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.emphasis.label"),
      default: false
    }, {
      name: "optionToContent",
      type: "Function",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.optionToContent.label"),
      default: ""
    }, {
      name: "contentToOption",
      type: "Function",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.contentToOption.label"),
      default: ""
    }, {
      //  lang
    }, {
      name: "backgroundColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.backgroundColor.label"),
      default: "#ffffff"
    }, {
      name: "textareaColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.textareaColor.label"),
      default: "#ffffff"
    }, {
      name: "textareaBorderColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.textareaBorderColor.label"),
      default: "#333333"
    }, {
      name: "textColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.textColor.label"),
      default: "#000000"
    }, {
      name: "buttonColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.buttonColor.label"),
      default: "#c23531"
    }, {
      name: "buttonTextColor",
      type: "Color",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataView.buttonTextColor.label"),
      default: "#ffffff"
    }],
    dataZoom: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.show.label"),
      default: true
    }, {
      name: "title",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.title.label"),
      children: [{
        name: "zoom",
        type: "String",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.title.zoom"),
        label: "Zoom",
        default: "区域缩放"
      }, {
        name: "back",
        label: "Back",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.title.back"),
        type: "String",
        default: "区域缩放还原"
      },]
    }, {
      name: "icon",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.icon.label"),
      children: [{
        name: "zoom",
        type: "Text",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.icon.zoom"),
        label: "Zoom",
        default: ""
      }, {
        name: "back",
        type: "Text",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.icon.back"),
        label: "back",
        default: ""
      }]
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t)
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: iconStyle(t)
      }]
    }, {
      name: "filterMode",
      type: "String",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.filterMode.label"),
      default: "filter"
    }, {
      name: "brushStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.brushStyle.label"),
      children: [{
        name: "color",
        type: "Color",
        label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.brushStyle.color"),
        default: ""
      }, ...border(t, true), ...shadow(t), {
        name: "opacity",
        type: "Number",
        step: 0.1,
        min: 0,
        max: 1,
        label: t("grapesjs-echarts-presets.config.toolbox.feature.dataZoom.brushStyle.opacity"),
        default: 1
      }]
    }],
    magicType: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.show.label"),
      default: true
    }, {
      name: "type",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.type.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.type.placeholder"),
      candidate: ["line", "bar", "stack"],
      default: ""
    }, {
      name: "title",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.title.label"),
      children: [{
        name: "line",
        type: "String",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.title.line"),
        label: "Line",
        default: "切换为折线图"
      }, {
        name: "bar",
        label: "Bar",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.title.bar"),
        type: "String",
        default: "切换为柱状图"
      }, {
        name: "stack",
        label: "Stack",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.title.stack"),
        type: "String",
        default: "切换为堆叠"
      }, {
        name: "tiled",
        label: "Tiled",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.title.tiled"),
        type: "String",
        default: "切换为平铺"
      },]
    }, {
      name: "icon",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.icon.label"),
      children: [{
        name: "line",
        type: "Text",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.icon.line"),
        label: "Line",
        default: ""
      }, {
        name: "bar",
        label: "Bar",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.icon.bar"),
        type: "Text",
        default: ""
      }, {
        name: "stack",
        label: "Stack",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.icon.stack"),
        type: "Text",
        default: ""
      }]
    }, {
      name: "iconStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.iconStyle.label"),
      children: iconStyle(t)
    }, {
      name: "emphasis",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.magicType.emphasis.label"),
      children: [{
        name: "iconStyle",
        type: "Object",
        label: t("grapesjs-echarts-presets.config.iconStyle.label"),
        children: iconStyle(t)
      }, {
        //  option
        //  seriesIndex
      }]
    }],
    brush: [{
      name: "type",
      type: "Enum",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.brush.type.label"),
      placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.type.placeholder"),
      candidate: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
      default: ""
    }, {
      name: "icon",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.label"),
      children: [{
        name: "rect",
        type: "Text",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.rect"),
        label: "Rect",
        default: ""
      }, {
        name: "polygon",
        label: "Polygon",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.polygon"),
        type: "Text",
        default: ""
      }, {
        name: "lineX",
        label: "LineX",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.lineX"),
        type: "Text",
        default: ""
      }, {
        name: "lineY",
        label: "LineY",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.lineY"),
        type: "Text",
        default: ""
      }, {
        name: "keep",
        label: "Keep",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.keep"),
        type: "Text",
        default: ""
      }, {
        name: "clear",
        label: "Clear",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.icon.clear"),
        type: "Text",
        default: ""
      }]
    }, {
      name: "title",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.label"),
      children: [{
        name: "rect",
        type: "String",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.rect"),
        label: "Rect",
        default: "矩形选择"
      }, {
        name: "polygon",
        label: "Polygon",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.polygon"),
        type: "String",
        default: "圈选"
      }, {
        name: "lineX",
        label: "LineX",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.lineX"),
        type: "String",
        default: "横向选择"
      }, {
        name: "lineY",
        label: "LineY",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.lineY"),
        type: "String",
        default: "纵向选择"
      }, {
        name: "keep",
        label: "Keep",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.keep"),
        type: "String",
        default: "保持选择"
      }, {
        name: "clear",
        label: "Clear",
        placeholder: t("grapesjs-echarts-presets.config.toolbox.feature.brush.title.clear"),
        type: "String",
        default: "清楚选择"
      }]
    }]
  };
}


//branch


//finished
export function textStyle(t, {
  color = "#ffffff",
  fontWeight = "normal",
  fontSize = 12,
  padding = [0, 0],
  Sblur = 0,
  Scolor = "rgba(0, 0, 0, 0)",
  complex = false
} = {}) {
  let basic = [{
    name: "color",
    type: "Color",
    default: color,
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
    default: fontWeight,
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
    default: fontSize,
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
    candidate: ["truncate", "break", "breakAll"]
  }, {
    name: "ellipsis",
    type: "String",
    label: t("grapesjs-echarts-presets.config.textStyle.ellipsis.label"),
    placeholder: t("grapesjs-echarts-presets.config.textStyle.ellipsis.placeholder"),
    default: "..."
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
    type: "Size",
    label: t("grapesjs-echarts-presets.config.textStyle.padding.label"),
    default: padding
  }, ...shadow(t, {shadowBlur: Sblur, shadowColor: Scolor})];
  if (complex) {
    return [...basic, ...more];
  } else {
    return basic;
  }
}

//finished
export function lineStyle(t,{color=''}={}) {
  return [{
    name: "color",
    type: "Color",
    label: t("grapesjs-echarts-presets.config.lineStyle.color.label"),
    default: color
  }, {
    name: "width",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.lineStyle.width.label"),
    default: 1
  }, {
    name: "type",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.lineStyle.type.label"),
    placeholder: t("grapesjs-echarts-presets.config.lineStyle.type.placeholder"),
    default: 'solid',
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

//finished
export function iconStyle(t) {
  return [{
    name: "color",
    label: t("grapesjs-echarts-presets.config.iconStyle.color.label"),
    type: "Color",
    default: ""
  }, ...border(t), {
    name: "borderCap",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.iconStyle.borderCap.label"),
    placeholder: t("grapesjs-echarts-presets.config.iconStyle.borderCap.placeholder"),
    candidate: LINE_CAPS,
    default: ""
  }, {
    name: "borderJoin",
    type: "Enum",
    label: t("grapesjs-echarts-presets.config.iconStyle.borderJoin.label"),
    placeholder: t("grapesjs-echarts-presets.config.iconStyle.borderJoin.placeholder"),
    candidate: LINE_JOINS,
    default: ""
  }, {
    name: "borderMiterLimit",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.iconStyle.borderMiterLimit.label"),
    default: 10
  }, ...shadow(t), {
    name: "opacity",
    type: "Number",
    step: 0.1,
    min: 0,
    max: 1,
    label: t("grapesjs-echarts-presets.config.iconStyle.opacity.label"),
    default: 1
  }];
}

export function areaStyle(t) {
  return [{
    name: "color",
    label: t("grapesjs-echarts-presets.config.areaStyle.color.label"),
    type: "Color",
    default: "#333"
  }, {
    name: "opacity",
    label: t("grapesjs-echarts-presets.config.areaStyle.opacity.label"),
    type: "Number",
    max: 1,
    min: 0,
    step: 0.05,
    default: 1
  }, ...shadow(t)];
}

export function axisTick(t, minor = false, show = true, length = 5) {
  let basic = [{
    name: "show",
    label: t("grapesjs-echarts-presets.config.axis.axisTick.show.label"),
    type: "Boolean",
    default: show
  }, {
    name: "length",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.axis.axisTick.length.label"),
    default: length
  }, {
    name: "lineStyle",
    type: "Object",
    label: t("grapesjs-echarts-presets.config.lineStyle.label"),
    children: lineStyle(t)
  }];
  let big = [{
    name: "alignWithLabel",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisTick.alignWithLabel.label"),
    default: false
  }, {
    name: "interval",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.axis.axisTick.interval.label"),
    default: "auto"
  }, {
    name: "inside",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisTick.inside.label"),
    default: false
  }];
  if (!minor) {
    return [...basic, ...big];
  } else {
    return [...basic, {
      name: "splitNumber",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.axis.axisTick.splitNumber.label"),
    }];
  }

}

export function axisLabel(t) {

  return [{
    name: "show",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.show.label"),
    default: true
  }, {
    name: "interval",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.interval.label"),
    default: "auto"
  }, {
    name: "inside",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.inside.label"),
    default: false
  }, {
    name: "rotate",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.rotate.label"),
    min: -90,
    max: 90,
    default: 0
  }, {
    name: "margin",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.margin.label"),
    default: 8
  }, {
    name: "formatter",
    type: "Text",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.formatter.label"),
    placeholder: t("grapesjs-echarts-presets.config.axis.axisLabel.formatter.placeholder"),
    default: ""
  }, {
    name: "showMinLabel",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.showMinLabel.label"),
    default: true
  }, {
    name: "showMaxLabel",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.showMaxLabel.label"),
    default: true
  }, {
    name: "hideOverlap",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLabel.hideOverlap.label"),
    default: false
  }, ...textStyle(t, {complex: true})];
}

export function axisLine(t) {
  return [{
    name: "show",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLine.show.label"),
    default: true
  }, {
    name: "onZero",
    type: "Boolean",
    label: t("grapesjs-echarts-presets.config.axis.axisLine.onZero.label"),
    default: true
  }, {
    name: "onZeroAxisIndex",
    type: "Number",
    label: t("grapesjs-echarts-presets.config.axis.axisLine.onZeroAxisIndex.label"),
    default: undefined
  }, {
    name: "symbol",
    type: "String",
    array: true,
    label: t("grapesjs-echarts-presets.config.axis.axisLine.symbol.label"),
    default: "none"
  }, {
    name: "symbolSize",
    type: "Size",
    useUnit: false,
    label: t("grapesjs-echarts-presets.config.axis.axisLine.symbolSize.label"),
    default: [10, 15]
  }, {
    name: "symbolOffset",
    type: "Number",
    array: true,
    label: t("grapesjs-echarts-presets.config.axis.axisLine.symbolOffset.label"),
    default: [0, 0]
  }, {
    name: "lineStyle",
    type: "Object",
    label: t("grapesjs-echarts-presets.config.lineStyle.label"),
    children: lineStyle(t)
  }];
}

export function splitLine(t, minor = false, show = true) {
  let result = [{
    name: "show",
    label: t("grapesjs-echarts-presets.config.axis.show.label"),
    type: "Boolean",
    default: show
  }];
  if (!minor) {
    result.push({
      name: "interval",
      label: t("grapesjs-echarts-presets.config.axis.interval.label"),
      type: "Number",
      default: "auto"
    });
  }
  result.push({
    name: "lineStyle",
    label: t("grapesjs-echarts-presets.config.lineStyle.label"),
    type: "Object",
    children: lineStyle(t)
  });
  return result;
}

export function splitArea(t, show = true) {
  return [{
    name: "show",
    label: t("grapesjs-echarts-presets.config.axis.splitArea.show.label"),
    type: "Boolean",
    default: show
  }, {
    name: "interval",
    label: t("grapesjs-echarts-presets.config.axis.splitArea.interval.label"),
    type: "Number",
    default: "auto"
  }, {
    name: "areaStyle",
    label: t("grapesjs-echarts-presets.config.axis.splitArea.areaStyle.label"),
    type: "Object",
    children: [{
      name: "color",
      label: t("grapesjs-echarts-presets.config.areaStyle.color.label"),
      type: "Color",
      array: true,
      default: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
    }, {
      name: "opacity",
      label: t("grapesjs-echarts-presets.config.areaStyle.opacity.label"),
      type: "Number",
      max: 1,
      min: 0,
      step: 0.05,
      default: 1
    }, ...shadow(t)]
  }];
}

export function axisPointer(t) {
  return [{
    name: "show",
    label: t("grapesjs-echarts-presets.config.axisPointer.show.label"),
    type: "Boolean",
    default: false
  }, {
    name: "type",
    label: t("grapesjs-echarts-presets.config.axisPointer.type.label"),
    type: "Enum",
    candidate: POINTER_TYPES,
    default: "line"
  }, {
    name: "snap",
    label: t("grapesjs-echarts-presets.config.axisPointer.snap.label"),
    type: "Boolean",
    default: false
  }, {
    name: "z",
    label: t("grapesjs-echarts-presets.config.axisPointer.z.label"),
    type: "Number",
    default: 0
  }, {
    name: "label",
    label: t("grapesjs-echarts-presets.config.axisPointer.label.label"),
    type: "Object",
    children: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.axisPointer.label.show"),
      default: false
    }, {
      name: "precision",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.axisPointer.label.precision"),
      default: "auto"
    }, {
      name: "formatter",
      type: "String",
      label: t("grapesjs-echarts-presets.config.axisPointer.label.formatter"),
      default: ""
    }, {
      name: "margin",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.axisPointer.label.margin"),
      default: 3
    }, ...textStyle(t, {complex: true,padding:[5,7],Sblur:3,Scolor:'#aaaaaa'})]
  }, {
    name: "lineStyle",
    label: t("grapesjs-echarts-presets.config.lineStyle.label"),
    type: "Object",
    children: lineStyle(t,{color:'#555'})
  }, {
    name: "shadowStyle",
    label: t("grapesjs-echarts-presets.config.axisPointer.shadowStyle.label"),
    type: "Object",
    children: [{
      name: 'color',
      type: 'Color',
      label:t("grapesjs-echarts-presets.config.axisPointer.shadowStyle.color"),
      default: 'rgba(150,150,150,0.3)'
    },...shadow(t),{
      name: "opacity",
      type: "Number",
      step: 0.1,
      min: 0,
      max: 1,
      label: t("grapesjs-echarts-presets.config.axisPointer.shadowStyle.opacity"),
      default: 1
    }]
  }, {
    name: "triggerTooltip",
    label: t("grapesjs-echarts-presets.config.axisPointer.triggerTooltip.label"),
    type: "Boolean",
    default: true
  }, {
    name: "value",
    label: t("grapesjs-echarts-presets.config.axisPointer.value.label"),
    type: "Number",
    default: 0
  }, {
    name: "status",
    label: t("grapesjs-echarts-presets.config.axisPointer.status.label"),
    type: "Enum",
    candidate: VISIBLE_STATUS,
    default: "hide"
  }, {
    name: "handle",
    label: t("grapesjs-echarts-presets.config.axisPointer.handle.label"),
    type: "Object",
    children: [{
      name: "show",
      label: t("grapesjs-echarts-presets.config.axisPointer.handle.show.label"),
      type: "Boolean",
      default: false
    }, {
      name: "icon",
      label: t("grapesjs-echarts-presets.config.axisPointer.handle.icon.label"),
      type: "Image",
      default: false
    }, {
      name: "size",
      label: t("grapesjs-echarts-presets.config.axisPointer.handle.size.label"),
      type: "Size",
      useUnit: false,
      default: [45, 45]
    }, {
      name: "margin",
      label: t("grapesjs-echarts-presets.config.axisPointer.handle.margin.label"),
      type: "Number",
      default: 50
    }, {
      name: "color",
      label: t("grapesjs-echarts-presets.config.axisPointer.handle.color.label"),
      type: "Color",
      default: "#333333"
    }, ...shadow(t,{shadowColor:"#aaaaaa",shadowBlur:3,OffsetX:2})]
  }, {
    name: "triggerOn",
    label: t("grapesjs-echarts-presets.config.axisPointer.triggerOn.label"),
    type: "Enum",
    candidate: TRIGGERS,
    default: "mousemove|click"
  }];
}

export function actionTrigger(t) {
  return [{
    name: "silent",
    label: t("grapesjs-echarts-presets.config.event.silent.label"),
    type: "Boolean",
    default: false
  }, {
    name: "triggerEvent",
    label: t("grapesjs-echarts-presets.config.event.triggerEvent.label"),
    type: "Boolean",
    default: false
  }];
}
