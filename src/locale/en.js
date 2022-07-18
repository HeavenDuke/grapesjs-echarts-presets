export default {
  "grapesjs-echarts-presets": {
    theme: {
      label: "Theme",
      placeholder: "Select a theme",
    },
    items: {
      label: "Items",
      name: "Item",
      category: "Category",
      color: "Color",
      save: "Save",
    },
    category: "Charts",
    components: {
      bar: {
        name: "Bar Chart",
      },
      line:{
        name: "Line Chart",
      },
      pie:{
        name: "Pie Chart",
      },
      polarHistogram:{
        name:"Polar histogram Chart"
      },
      roundedPie:{
        name:"Rounded Pie Chart"
      },
      rose:{
        name:"Rose Chart"
      },
      funnel:{
        name:"Funnel Chart"
      },
      scatter:{
        name:"Scatter Chart"
      }
    },
    dict: {
      position: {
        left: "Left",
        right: "Right",
        top: "Top",
        bottom: "Bottom"
      },
      size: {
        width: "Width",
        height: "Height"
      },
      seriesType: {
        value: 'Value',
        category: 'Category',
        time: 'Time',
        log: 'Logarithm'
      }
    },
    actions: {
      edit: "Edit"
    },
    dialogs: {
      textStyle: 'Edit Text Style',
      lineStyle: 'Edit Line Style',
      areaStyle: 'Edit Area Style',
      axisLineStyle: 'Edit Axis Line',
      axisSplitLine: 'Edit Axis Split Line',
      axisTick: "Edit Axis Tick",
      axisSplitArea: 'Edit Axis Split Area',
      axisLabel: 'Edit Axis Label'
    },
    config: {
      toolbox:{
        label:"Toolbox",
        show:{
          label:"Show"
        },
        orient:{
          label:"Orient"
        },
        itemSize:{
          label:"ItemSize"
        },
        itemGap:{
          label:"ItemGap"
        },
        showTitle:{
          label:"ShowTitle"
        },
        feature:{
          label:"Feature"
        },
        iconStyle:{
          label:"IconStyle"
        },
        emphasis:{
          label:"Emphasis"
        },
        zlevel: {
          label: "Z Level"
        },
        z: {
          label: "Z"
        },
        position: {
          label: "Position"
        },

      },
      tooltip:{
        label:'Tooltip',
        show:{
          label:"Show"
        },
        trigger:{
          label:"Trigger",
          placeholder: "Select trigger type"
        },
        axisPointer:{
          label:"Axis Pointer"
        },
        showContent:{
          label:"Show Content"
        },
        alwaysShowContent:{
          label:"Always Show Content"
        },
        triggerOn:{
          label:"TriggerOn"
        },
        showDelay:{
          label:"Show Delay"
        },
        hideDelay:{
          label:"Hide Delay"
        },
        enterable:{
          label:"Enterable"
        },
        renderMode:{
          label:"Render Mode"
        },
        className:{
          label:"ClassName"
        },
        confine:{
          label:"Confine"
        },
        appendToBody: {
          label:"Append To Body"
        },
        transitionDuration:{
          label:"Transition Duration"
        },
        position:{
          label:"Position"
        },
        formatter:{
          label:"Formatter"
        },
        valueFormatter:{
          label:"Value Formatter"
        },
        backgroundColor: {
          label:"BackgroundColor"
        },
        borderColor: {
          label:"BorderColor"
        },
        borderWidth: {
          label:"Border Width"
        },
        padding:{
          label:"Padding"
        },
        textStyle:{
          label:"Text Style"
        },
        extraCssText:{
          label:"Extra Css Text"
        },
        order:{
          label:"Order"
        }
      },
      basic:{
        label: 'Basic',
        color: {
          label: "Color"
        },
        backgroundColor:{
          label:"BackgroundColor"
        },
        animation:{
          label: "Animation",

        },
        animationThreshold:{
          label:"AnimationThreshold"
        },
        animationDuration:{
          label:"AnimationDuration"
        },
        animationEasing: {
          label: "AnimationEasing",
          placeholder:"Choose an initial animation"
        },
        animationDelay: {
          label: "AnimationDelay"
        },
        animationDurationUpdate: {
          label: "AnimationDurationUpdate"
        },
        animationEasingUpdate: {
          label: "AnimationEasingUpdate",
          placeholder:"Select data update animation"
        },
        animationDelayUpdate: {
          label: "AnimationDelayUpdate"
        },
        blendMode:{
          label:"BlendMode"
        },
        hoverLayerThreshold:{
          label:"HoverLayerThreshold"
        },
        useUTC:{
          label:"UseUTC"
        }
      },
      grid: {
        label: 'Grid',
        show: {
          label: "Show"
        },
        position: {
          label: "Position"
        },
        borderColor: {
          label: "Border Color"
        },
        borderWidth: {
          label: "Border Width",
          placeholder: "Specify width"
        },
        containLabel: {
          label: "Contain Label"
        },
        zlevel: {
          label: "Z Level"
        },
        z: {
          label: "Z"
        },
        shadowColor: {
          label: "Shadow Color"
        },
        shadowBlur: {
          label: "Shadow Blur",
          placeholder:"Specify the shadow blur size"
        },
      },
      title: {
        label: "Title",
        show: {
          label: "Show"
        },
        text: {
          label: "Title",
          placeholder: "Input title"
        },
        link: {
          label: "Title Link",
          placeholder: "Input title link"
        },
        subtext: {
          label: "Subtitle",
          placeholder: "Input subtitle"
        },
        sublink: {
          label: "Subtitle Link",
          placeholder: "Input subtitle link"
        },
        textAlign: {
          label: "Alignment",
          placeholder: "Select text alignment"
        },
        textVerticalAlign: {
          label: "Vertical Alignment",
          placeholder: "Select vertical text alignment"
        },
        itemGap: {
          label: "Gap"
        },
        position: {
          label: "Position"
        },
        textStyle: {
          label: "Text Style"
        },
        subTextStyle: {
          label: "Subtitle Style"
        }
      },
      xAxis: {
        label: 'X Axis'
      },
      yAxis: {
        label: 'Y Axis'
      },
      radiusAxis: {
        label: "Radius Axis"
      },
      axis: {
        show: {
          label: "Show"
        },
        polarIndex: {
          label: "Polar Index"
        },
        name: {
          label: "Name"
        },
        type: {
          label: "Type",
        },
        alignTicks: {
          label: "Align Ticks"
        },
        position: {
          label: "Position"
        },
        nameLocation: {
          label: "Name Location"
        },
        nameGap: {
          label: "Name-Axis Gap"
        },
        nameTextStyle: {
          label: "Name Style"
        },
        nameRotate: {
          label: "Rotation"
        },
        inverse: {
          label: "Inverse"
        },
        boundaryGap: {
          label: "Boundary Gap"
        },
        min: {
          label: "Minimum"
        },
        max: {
          label: "Maximum"
        },
        scale: {
          label: "Scale"
        },
        splitNumber: {
          label: "Split Number"
        },
        minInterval: {
          label: "Minimum Interval"
        },
        maxInterval: {
          label: "Maximum Interval"
        },
        interval: {
          label: "Interval"
        },
        logBase: {
          label: "Logarithm Base"
        },
        silent: {
          label: "Silent Mode"
        },
        triggerEvent: {
          label: "Trigger Event"
        },
        z: {
          label: "Z"
        },
        zlevel: {
          label: "Z Level"
        },
        axisLine: {
          label: "Axis Line",
          show: {
            label: "Show"
          },
          onZero: {
            label: "On Zero"
          },
          onZeroAxisIndex: {
            label: "On Zero Axis Index"
          },
          symbol: {
            label: "Symbol"
          },
          symbolSize: {
            label: "Symbol Size"
          },
          symbolOffset: {
            label: "Symbol Offset"
          }
        },
        splitArea: {
          label: "Split Area",
          show: {
            label: "Show"
          },
          interval: {
            label: "Interval"
          }
        },
        splitLine: {
          label: "Split Line",
          show: {
            label: "Show"
          },
          interval: {
            label: "Interval"
          }
        },
        minorSplitLine: {
          label: 'Minor Split Line'
        },
        axisTick: {
          label: "Axis Tick",
          show: {
            label: "Show"
          },
          alignWithLabel: {
            label: "Align With Label"
          },
          interval: {
            label: "Interval"
          },
          inside: {
            label: "Inside"
          },
          length: {
            label: "Length"
          }
        },
        minorAxisTick: {
          label: "Minor Axis Tick",
          splitNumber: {
            label: "Split Number"
          }
        },
        axisLabel: {
          label: "Axis Label",
          show: {
            label: "Show"
          },
          interval: {
            label: "Interval"
          },
          inside: {
            label: "Inside"
          },
          rotate: {
            label: "Rotate"
          },
          margin: {
            label: "Margin"
          },
          showMinLabel: {
            label: "Show Minimum Label"
          },
          showMaxLabel: {
            label: "Show Maximum Label"
          },
          hideOverlap: {
            label: "Hide Overlap"
          },
        }
      },
      textStyle: {
        label: "Text Style",
        fontFamily: {
          label: "Font"
        },
        fontSize: {
          label: "Font Size"
        },
        fontWeight: {
          label: "Font Weight"
        },
        lineHeight: {
          label: "Line Height"
        },
        color: {
          label: "Color"
        },
        backgroundColor: {
          label: "Background"
        },
        align: {
          label: "Align"
        },
        verticalAlign: {
          label: "Vertical Align"
        },
        borderColor: {
          label: "Border Color"
        },
        borderWidth: {
          label: "Border Width"
        },
        borderType: {
          label: "Border Type"
        },
        padding: {
          label: "Padding"
        }
      },
      lineStyle: {
        label: 'Line Style',
        color: {
          label: 'Color'
        },
        width: {
          label: 'Thickness'
        },
        type: {
          label: 'Line Type'
        },
        dashOffset: {
          label: "Dash Offset"
        },
        join: {
          label: "Line Join"
        },
        cap: {
          label: "Line Cap"
        },
        miterLimit: {
          label: "Miter Limit"
        },
        shadowColor: {
          label: "Shadow Color"
        },
        shadowBlur: {
          label: "Shadow Blur"
        },
        shadowOffsetX: {
          label: "Shadow Offset X"
        },
        shadowOffsetY: {
          label: "Shadow Offset Y"
        },
        opacity: {
          label: "Opacity"
        }
      },
      areaStyle: {
        label: 'Area Style',
        color: {
          label: 'Color'
        },
        shadowColor: {
          label: "Shadow Color"
        },
        shadowBlur: {
          label: "Shadow Blur"
        },
        shadowOffsetX: {
          label: "Shadow Offset X"
        },
        shadowOffsetY: {
          label: "Shadow Offset Y"
        },
        opacity: {
          label: "Opacity"
        }
      },
      series: {
        label: 'Series'
      }
    }
  },
};
