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
  return function (t, multiple) {
    return {
      name: `${type}-axis`,
      label: t(`grapesjs-echarts-presets.dict.group.${type}Axis`),
      multiple,
      // valid (option) {
      //   if (option.series instanceof Array) {
      //     return option.series.find(item => item.coordinateSystem && item.coordinateSystem === "cartesian2d")
      //   }
      //   else {
      //     return option.series.coordinateSystem && option.series.coordinateSystem === "cartesian2d"
      //   }
      // },
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
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {

              return option.xAxis.findIndex(item => item.show&&item.show===true)+1;
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show&&item.show===true);
            }

        }
      }, {
        name: "inverse",
        label: t("grapesjs-echarts-presets.config.axis.inverse.label"),
        type: "Boolean",
        default: false,
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
            }

        }
      }, {
        name: "alignTicks",
        label: t("grapesjs-echarts-presets.config.axis.alignTicks.label"),
        type: "Boolean",
        default: false,
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show && item.type === ("value" || "log"));
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show && item.type === ("value" || "log"));
            }

        }
      }, {
        name: "position",
        label: t("grapesjs-echarts-presets.config.axis.position.label"),
        type: "Enum",
        candidate: type === "x" ? BINARY_POSITION_VERTICAL : BINARY_POSITION_HORIZONTAL,
        default: "",
        valid(option) {
          if (option.xAxis instanceof Array && option.yAxis instanceof Array) {
            // if(type==='x oreturn {
            // ption.xAxis.axisLine.onZero && option.xAxis.find(item => item.axisLine.onZero === false) : option.yAxis.axisLine.onZero && option.yAxis.find(item => item.axisLine.onZero === false);
          }
        }
      }, {
        name: "offset",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.axis.offset.label"),
        default: 0,
        valid(option) {
          if (option.xAxis instanceof Array && option.yAxis instanceof Array) {
            // if(type==='x oreturn {
            // ption.xAxis.axisLine.onZero && option.xAxis.find(item => item.axisLine.onZero === false) : option.yAxis.axisLine.onZero && option.yAxis.find(item => item.axisLine.onZero === false);
          }
        }
      }, {
        name: "name",
        label: t("grapesjs-echarts-presets.config.axis.name.label"),
        type: "String",
        default: "",
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
            }

        }
      }, {
        name: "nameLocation",
        label: t("grapesjs-echarts-presets.config.axis.nameLocation.label"),
        type: "Enum",
        candidate: FLEX_POSITIONS,
        default: "end",
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
            }

        }
      }, {
        name: "nameTextStyle",
        label: t("grapesjs-echarts-presets.config.axis.nameTextStyle.label"),
        type: "Object",
        children: [...textStyle(t), ...align(t)],
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
            }

        }
      }, {
        name: "nameGap",
        label: t("grapesjs-echarts-presets.config.axis.nameGap.label"),
        type: "Number",
        default: 15,
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
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
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
            }

        }
      }, {
        name: "boundaryGap",
        type: "Boolean",
        label: t("grapesjs-echarts-presets.config.axis.boundaryGap.label"),
        default: true,
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show);
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show);
            }

        }
      }, {
      //   name: "min",
      //   type: "Number",
      //   label: t("grapesjs-echarts-presets.config.axis.min.label"),
      //   default: "",
      //   valid(option) {
      //
      //       if (type === "x" && option.xAxis instanceof Array) {
      //         return option.xAxis.find(item => item.show);
      //       }
      //       if (type === "y" && option.yAxis instanceof Array) {
      //         return option.yAxis.find(item => item.show);
      //       }
      //
      //   }
      // }, {
      //   name: "max",
      //   type: "Number",
      //   label: t("grapesjs-echarts-presets.config.axis.max.label"),
      //   default: "",
      //   valid(option) {
      //
      //       if (type === "x" && option.xAxis instanceof Array) {
      //         return option.xAxis.find(item => item.show);
      //       }
      //       if (type === "y" && option.yAxis instanceof Array) {
      //         return option.yAxis.find(item => item.show);
      //       }
      //
      //   }
      }, {
        name: "scale",
        label: t("grapesjs-echarts-presets.config.axis.scale.label"),
        type: "Boolean",
        default: false,
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show && item.type === "value" );
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show && item.type === "value");
            }

        }
      }, {
        name: "splitNumber",
        label: t("grapesjs-echarts-presets.config.axis.splitNumber.label"),
        type: "Number",
        default: 5,
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show && item.type !== "category");
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show && item.type !== "category");
            }

        }
      }, {
        name: "minInterval",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.axis.minInterval.label"),
        default: "",
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show && item.type === ("value" || "time"));
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show && item.type === ("value" || "time"));
            }
         }

      }, {
        name: "maxInterval",
        type: "Number",
        label: t("grapesjs-echarts-presets.config.axis.maxInterval.label"),
        default: "",
        valid(option) {

            if (type === "x" && option.xAxis instanceof Array) {
              return option.xAxis.find(item => item.show && item.type === ("value" || "time"));
            }
            if (type === "y" && option.yAxis instanceof Array) {
              return option.yAxis.find(item => item.show && item.type === ("value" || "time"));
            }

        }
      },
        //lost interval
        {
          name: "logBase",
          label: t("grapesjs-echarts-presets.config.axis.logBase.label"),
          type: "Number",
          default: 10,
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show && item.type === "log");
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show && item.type === "log");
              }

          }
        }, {
          name: "silent",
          label: t("grapesjs-echarts-presets.config.axis.silent.label"),
          type: "Boolean",
          default: false,
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "triggerEvent",
          label: t("grapesjs-echarts-presets.config.axis.triggerEvent.label"),
          type: "Boolean",
          default: false,
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "axisLine",
          label: t("grapesjs-echarts-presets.config.axis.axisLine.label"),
          type: "Object",
          children: axisLine(t),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "axisTick",
          label: t("grapesjs-echarts-presets.config.axis.axisTick.label"),
          type: "Object",
          children: axisTick(t, false),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "minorTick",
          label: t("grapesjs-echarts-presets.config.axis.minorAxisTick.label"),
          type: "Object",
          children: axisTick(t, true, false, 3),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "axisLabel",
          label: t("grapesjs-echarts-presets.config.axis.axisLabel.label"),
          type: "Object",
          children: axisLabel(t),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "splitLine",
          label: t("grapesjs-echarts-presets.config.axis.splitLine.label"),
          type: "Object",
          children: splitLine(t, false, true),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "minorSplitLine",
          label: t("grapesjs-echarts-presets.config.axis.minorSplitLine.label"),
          type: "Object",
          children: splitLine(t, true, false),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          name: "splitArea",
          label: t("grapesjs-echarts-presets.config.axis.splitArea.label"),
          type: "Object",
          children: splitArea(t, true),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, {
          // name:"data",
          // type: "Object",
        }, {
          name: "axisPointer",
          label: t("grapesjs-echarts-presets.config.axis.axisPointer.label"),
          type: "Object",
          children: axisPointer(t),
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }, ...(zIndex(t, 2, 0)).map(item => Object.assign(item, {
          valid(option) {

              if (type === "x" && option.xAxis instanceof Array) {
                return option.xAxis.find(item => item.show);
              }
              if (type === "y" && option.yAxis instanceof Array) {
                return option.yAxis.find(item => item.show);
              }

          }
        }))]
    };
  };
}
