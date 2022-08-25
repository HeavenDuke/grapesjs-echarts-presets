import {BINARY_POSITION_HORIZONTAL, BINARY_POSITION_VERTICAL, FLEX_POSITIONS, SERIES_TYPES} from "@/utils/smallDict";
import {
  zIndex,
  textStyle,
  axisLine,
  axisTick,
  axisLabel,
  splitLine,
  splitArea,
  axisPointer,
  align
} from "@/options/shared";
import ToolTip from "@/options/tooltip";

export default function (type = "x") {
  return function (t, multiple = true) {
    return {
      name: `${type}-axis`,
      label: t(`grapesjs-echarts-presets.dict.group.${type}Axis`),
      multiple,
      valid(option) {
        if (option.series instanceof Array) {
          return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "cartesian2d");
        } else {
          return option.series.coordinateSystem && option.series.coordinateSystem === "cartesian2d";
        }
      },
      options: [{
        name: "show",
        label: t("grapesjs-echarts-presets.config.axis.show.label"),
        type: "Boolean",
        default: true
      }, {
        name: "type",
        label: t("grapesjs-echarts-presets.config.axis.type.label"),
        type: "Enum",
        candidate: SERIES_TYPES,
        default: type === "x" ? "category" : "value",
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "inverse",
        label: t("grapesjs-echarts-presets.config.axis.inverse.label"),
        type: "Boolean",
        default: false,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "alignTicks",
        label: t("grapesjs-echarts-presets.config.axis.alignTicks.label"),
        type: "Boolean",
        default: false,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && (item.type === "value" || item.type === "log"));
          } else {
            return option[module] && option[module].show && (option[module].type === "value" || option[module].type === "log");
          }
        }
      }, {
        name: "position",
        label: t("grapesjs-echarts-presets.config.axis.position.label"),
        type: "Enum",
        candidate: type === "x" ? BINARY_POSITION_VERTICAL : BINARY_POSITION_HORIZONTAL,
        default: "",
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && (item.type === "value" || item.type === "log"));
          } else {
            return option[module] && option[module].show && (option[module].type === "value" || option[module].type === "log");
          }
        }
      }, {
        name: "offset",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.axis.offset.label"),
        default: 0,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && (item.type === "value" || item.type === "log"));
          } else {
            return option[module] && option[module].show && (option[module].type === "value" || option[module].type === "log");
          }
        }
      }, {
        name: "name",
        label: t("grapesjs-echarts-presets.config.axis.name.label"),
        type: "String",
        default: "",
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "nameLocation",
        label: t("grapesjs-echarts-presets.config.axis.nameLocation.label"),
        type: "Enum",
        candidate: FLEX_POSITIONS,
        default: "end",
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "nameTextStyle",
        label: t("grapesjs-echarts-presets.config.axis.nameTextStyle.label"),
        type: "Object",
        children: [...textStyle(t), ...align(t)],
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "nameGap",
        label: t("grapesjs-echarts-presets.config.axis.nameGap.label"),
        type: "Number",
        default: 15,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "nameRotate",
        label: t("grapesjs-echarts-presets.config.axis.nameRotate.label"),
        type: "Number",
        default: 0,
        min: 0,
        max: 360,
        step: 1,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "boundaryGap",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.axis.boundaryGap.label"),
        default: true,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "min",
        type: "String",
        label: t("grapesjs-echarts-presets.config.axis.min.label"),
        default: undefined,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "max",
        type: "String",
        label: t("grapesjs-echarts-presets.config.axis.max.label"),
        default: undefined,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show);
          } else {
            return option[module] && option[module].show;
          }
        }
      }, {
        name: "scale",
        label: t("grapesjs-echarts-presets.config.axis.scale.label"),
        type: "Boolean",
        default: false,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && item.type === "value");
          } else {
            return option[module] && option[module].show && option[module].type === "value";
          }
        }
      }, {
        name: "splitNumber",
        label: t("grapesjs-echarts-presets.config.axis.splitNumber.label"),
        type: "Number",
        default: 5,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && item.type !== "category");
          } else {
            return option[module] && option[module].show && option[module].type !== "category";
          }
        }
      }, {
        name: "minInterval",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.axis.minInterval.label"),
        default: undefined,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && (item.type === "value" || item.type === "time"));
          } else {
            return option[module] && option[module].show && (option[module].type === "value" || option[module].type === "time");
          }
        }

      }, {
        name: "maxInterval",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.axis.maxInterval.label"),
        default: undefined,
        valid(option, module) {
          if (option[module] instanceof Array) {
            return option[module] && option[module].find(item => item.show && (item.type === "value" || item.type === "time"));
          } else {
            return option[module] && option[module].show && (option[module].type === "value" || option[module].type === "time");
          }
        }
      },
        //lost interval
        {
          name: "logBase",
          label: t("grapesjs-echarts-presets.config.axis.logBase.label"),
          type: "Number",
          default: 10,
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show && item.type === "log");
            } else {
              return option[module] && option[module].show && option[module].type === "log";
            }
          }
        }, {
          name: "silent",
          label: t("grapesjs-echarts-presets.config.axis.silent.label"),
          type: "Boolean",
          default: false,
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "triggerEvent",
          label: t("grapesjs-echarts-presets.config.axis.triggerEvent.label"),
          type: "Boolean",
          default: false,
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "axisLine",
          label: t("grapesjs-echarts-presets.config.axis.axisLine.label"),
          type: "Object",
          children: axisLine(t),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "axisTick",
          label: t("grapesjs-echarts-presets.config.axis.axisTick.label"),
          type: "Object",
          children: axisTick(t, false),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "minorTick",
          label: t("grapesjs-echarts-presets.config.axis.minorAxisTick.label"),
          type: "Object",
          children: axisTick(t, true, false, 3),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "axisLabel",
          label: t("grapesjs-echarts-presets.config.axis.axisLabel.label"),
          type: "Object",
          children: axisLabel(t),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "splitLine",
          label: t("grapesjs-echarts-presets.config.axis.splitLine.label"),
          type: "Object",
          children: splitLine(t, false, true),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "minorSplitLine",
          label: t("grapesjs-echarts-presets.config.axis.minorSplitLine.label"),
          type: "Object",
          children: splitLine(t, true, false),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, {
          name: "splitArea",
          label: t("grapesjs-echarts-presets.config.axis.splitArea.label"),
          type: "Object",
          children: splitArea(t, true),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
          //   }, {
          //     // name:"data",
          //     // type: "Object",
        }, {
          name: "axisPointer",
          label: t("grapesjs-echarts-presets.config.axis.axisPointer.label"),
          type: "Object",
          children: axisPointer(t),
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
          valid(option, module) {
            if (option[module] instanceof Array) {
              return option[module] && option[module].find(item => item.show);
            } else {
              return option[module] && option[module].show;
            }
          }
        }))]

    };
  };
}
