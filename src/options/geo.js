import {itemStyle, zIndex, position, removeItems} from "@/options/shared";
import tooltip from "@/options/tooltip";

export default function (t, multiple = false) {
  let newTooltip = removeItems(tooltip(t).options, ["show", "trigger", "axisPointer", "position", "formatter",
    "valueFormatter", "backgroundColor", "borderColor", "borderWidth", "padding", "textStyle", "extraCssText"]);
  return {
    name: "geo",
    label: t("grapesjs-echarts-presets.dict.group.geo"),
    multiple,
    valid(option) {
      if (option.series instanceof Array) {
        return option.series.find(item => (item.type === "scatter" || item.type === "map"));
      } else {
        return (option.series.type === "scatter" || option.series.type === "map");
      }
    },
    options: [{
      name: "show",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.geo.show.label"),
      default: false
    }, {
      name: "map",
      type: "String",
      label: t("grapesjs-echarts-presets.config.geo.map.label"),
      default: "",
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "roam",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.geo.roam.label"),
      default: true,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      //  projection
    }, {
      name: "center",
      type: "Size",
      label: t("grapesjs-echarts-presets.config.geo.center.label"),
      default: [115.97, 29.71],
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "aspectScale",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.aspectScale.label"),
      default: 0.75,
      min: 0,
      max: 1,
      step: 0.01,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      //  boundingCoords
    }, {
      name: "zoom",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.zoom.label"),
      default: 1,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "scaleLimit",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.scaleLimit.label"),
      children: [{
        name: "min",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.geo.scaleLimit.min.label"),
        default: 1
      }, {
        name: "max",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.geo.scaleLimit.max.label"),
        default: 1
      }],
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      //  nameMap,nameProperty
    }, {
      name: "selectedMode",
      type: "Boolean",
      label: t("grapesjs-echarts-presets.config.geo.selectedMode.label"),
      default: false,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "label",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.label.label"),
      children: [],
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "itemStyle",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.itemStyle.label"),
      children: itemStyle(t),
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      //  emphasis,select,blur
    }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
  })), ...(position(t)).map(item => Object.assign(item, {
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
  })), {
      name: "layoutCenter",
      type: "Size",
      label: t("grapesjs-echarts-presets.config.geo.layoutCenter.label"),
      default: [115.97, 29.71],
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "layoutSize",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.layoutSize.label"),
      min: 0,
      step: 0.1,
      default: 100,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "silent",
      type: "Number",
      label: t("grapesjs-echarts-presets.config.geo.silent.label"),
      default: false,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }, {
      name: "tooltip",
      type: "Object",
      label: t("grapesjs-echarts-presets.config.geo.tooltip.label"),
      children: newTooltip,
      valid(option) {
        if (option.geo instanceof Array) {
          return option.geo && option.geo.find(item => item.show );
        } else {
          return option.geo && option.geo.show ;
        }
      }
    }]
  };
}
