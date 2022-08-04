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
      line: {
        name: "Line Chart",
      },
      pie: {
        name: "Pie Chart",
      },
      polarHistogram: {
        name: "Polar histogram Chart"
      },
      roundedPie: {
        name: "Rounded Pie Chart"
      },
      rose: {
        name: "Rose Chart"
      },
      funnel: {
        name: "Funnel Chart"
      },
      scatter: {
        name: "Scatter Chart"
      },
      stackedArea: {
        name: "Stacked Area Chart"
      },
      stackedBar: {
        name: "Stacked Bar Chart"
      },
      nestedPies: {
        name: "Nested Pies Chart"
      },
      multipleY: {
        name: "Multiple Y Chart"
      },
      custom: {
        name: "Custom Chart"
      }
    },
    dict: {
      group: {
        title: "Title",
        basic: "Basic",
        singleAxis: "Single Axis",
        grid: "Grid Coordinate",
        xAxis: "X Axis",
        yAxis: "Y Axis",
        polar: "Polar Coordinate",
        radiusAxis: "Radius Axis",
        angleAxis: "Angle Axis",
        radar: "Radar Coordinate",
        parallel: "Parallel Coordinate",
        parallelAxis: "Parallel Axis",
        geo: "Geo Coordinate",
        tooltip: "ToolTip",
        toolbox: "ToolBox",
        legend: "Legend",
        dataset: "Dataset",
        series: "Series"
      },
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
        value: "Value",
        category: "Category",
        time: "Time",
        log: "Logarithm"
      },
      direction: {
        vertical: "Vertical",
        horizontal: "Horizontal"
      },
      animation: {
        label: "Animation",
        animationThreshold: {
          label: "Animation Threshold"
        },
        animationDuration: {
          label: "Animation Duration"
        },
        animationDurationUpdate: {
          label: "Animation Duration Update"
        },
        animationEasing: {
          label: "Animation Easing"
        },
        animationEasingUpdate: {
          label: "Animation Easing Update"
        },
        animationDelay: {
          label: "Animation Delay"
        },
        animationDelayUpdate: {
          label: "Animation Delay Update"
        }
      },
      zIndex: {
        z: {
          label: "Z"
        },
        zlevel: {
          label: "Z Level"
        }
      },
      shadow: {
        shadowBlur: {
          label: "Shadow Blur"
        }, shadowColor: {
          label: "Shadow Color"
        }, shadowOffsetX: {
          label: "Shadow Offset X"
        }, shadowOffsetY: {
          label: "Shadow Offset Y"
        },
      },
      border: {
        borderColor: {
          label: "Border Color"
        },
        borderWidth: {
          label: "Border Width"
        },
        borderType: {
          label: "Border Type",
          placeholder: "Select Border Type"
        },
        borderRadius: {
          label: "Border Radius"
        },
        borderDashOffset: {
          label: "Border Dash Offset"
        },
        borderCap: {
          label: "Border Cap",
          placeholder: "Select BorderCap"
        },
        borderJoin: {
          label: "Border Join",
          placeholder: "Select BorderJoin"
        },
        borderMiterLimit: {
          label: "Border Miter Limit"
        }
      },
      align:{
        label:'Align',
        verticalAlign: {
          label:'Vertical Align'
        }
      }
    },
    actions: {
      addItem: "Add Item",
      edit: "Edit",
      init: "Initialize"
    },
    dialogs: {
      textStyle: "Edit Text Style",
      lineStyle: "Edit Line Style",
      axisLineStyle: "Edit Axis Line",
      axisSplitLine: "Edit Axis Split Line",
      axisTick: "Edit Axis Tick",
      axisSplitArea: "Edit Axis Split Area",
      axisLabel: "Edit Axis Label"
    },
    config: {
      dataset: {
        dimensions: {
          label: "Dimensions"
        },
        source: {
          label: "Data Source"
        },
        sourceHeader: {
          label: "Has Header"
        },
      },
      polar: {
        center: {
          label: "Center"
        },
        radius: {
          label: "Radius"
        },
        tooltip: {
          label: "Tooltip"
        }
      },
      radar: {
        center: {
          label: "Center"
        },
        radius: {
          label: "Radius"
        },
        startAngle: {
          label: "Start Angle"
        },
        axisName: {
          label: "Axis Name"
        },
        shape: {
          label: "Axis Name"
        }
      },
      parallel: {
        layout: {
          label: "Layout"
        },
        axisExpandable: {
          label: "Expandable"
        },
        axisExpandCenter: {
          label: "Expand Center"
        },
        axisExpandCount: {
          label: "Expand Count"
        },
        axisExpandWidth: {
          label: "Expand Width"
        },
        axisExpandTriggerOn: {
          label: "Expand On"
        },
        parallelAxisDefault: {
          label: "Default Axis"
        }
      },
      toolbox: {
        label: "Toolbox",
        show: {
          label: "Show"
        },
        orient: {
          label: "Orient"
        },
        itemSize: {
          label: "ItemSize"
        },
        itemGap: {
          label: "ItemGap"
        },
        showTitle: {
          label: "ShowTitle"
        },
        feature: {
          label: "Feature",
          saveAsImage: {
            label: "Save As Image",
            show: {
              label: "Show"
            },
            type: {
              label: "Image Type",
              placeholder: "Select Image Type"
            },
            name: {
              label: "Image Name",
              placeholder: "Input Image Name"
            },
            backgroundColor: {
              label: "Image BackgroundColor"
            },
            connectBackgroundColor: {
              label: "Connect BackgroundColor"
            },
            title: {
              label: "Title"
            },
            icon: {
              label: "Icon Link",
              placeholder: "Input Icon Link"
            },
            emphasis: {
              label: "Emphasis",
            },
            pixelRatio: {
              label: "Resolution Scale",
            },

          },
          restore: {
            label: "Restore",
            show: {
              label: "Show"
            },
            title: {
              label: "Title"
            },
            icon: {
              label: "Icon Link",
              placeholder: "Input Icon Link"
            },
            emphasis: {
              label: "Emphasis"
            },
          },
          dataView: {
            label: "Data View",
            show: {
              label: "Show"
            },
            title: {
              label: "Title"
            },
            icon: {
              label: "Icon Link",
              placeholder: "Input Icon Link"
            },
            emphasis: {
              label: "Emphasis"
            },
            readOnly: {
              label: "ReadOnly"
            },
            optionToContent: {
              label: "Option To Content"
            },
            contentToOption: {
              label: "Content To Option"
            },
            lang:{
              label:'Lang'
            },
            backgroundColor: {
              label: "BackgroundColor"
            },
            textareaColor: {
              label: "Textarea Color"
            },
            textColor: {
              label: "Text Color"
            },
            buttonColor: {
              label: "Button Color"
            },
            buttonTextColor: {
              label: "Button Text Color"
            },
          },
          dataZoom: {
            label: "Data Zoom",
            show: {
              label: "Show"
            },
            title: {
              label: "Title",
              zoom: "Input Zoom Title",
              back: "Input Back Title"
            },
            icon: {
              label: "Icon Link",
              zoom: "Input Zoom Icon Link",
              back: "Input Back Icon Link"
            },
            emphasis: {
              label: "Emphasis"
            },
            filterMode: {
              label: "FilterMode"
            },
            brushStyle: {
              label: "Brush Style",
              color: "Color",
              opacity: "Opacity"
            }
          },
          magicType: {
            label: "Magic Type",
            show: {
              label: "Show"
            },
            type: {
              label: "Type",
              placeholder: "Select Type"
            },
            title: {
              label: "Title",
              line: "Input Line Title",
              bar: "Input Bar Title",
              stack: "Input Stack Title",
              tiled: "Input Tiled Title",
            },
            icon: {
              label: "Icon Link",
              line: "Input Line Icon Link",
              bar: "Input Bar Icon Link",
              stack: "Input Stack Icon Link",
              tiled: "Input Tiled Icon Link",
            },
            emphasis: {
              label: "Emphasis"
            },
          },
          brush: {
            label: "Brush",
            type: {
              label: "Type",
              placeholder: "Select Type"
            },
            title: {
              label: "Title",
              rect: "Input rect Title",
              polygon: "Input polygon Title",
              lineX: "Input lineX Title",
              lineY: "Input lineY Title",
              keep: "Input keep Title",
              clear: "Input clear Title",
            },
            icon: {
              label: "Icon Link",
              rect: "Input rect Icon Link",
              polygon: "Input polygon Icon Link",
              lineX: "Input lineX Icon Link",
              lineY: "Input lineY Icon Link",
              keep: "Input keep Icon Link",
              clear: "Input clear Icon Link",
            },
          }
        },
        iconStyle: {
          label: "IconStyle"
        },
        emphasis: {
          label: "Emphasis"
        },
      },
      tooltip: {
        label: "Tooltip",
        show: {
          label: "Show"
        },
        trigger: {
          label: "Trigger",
          placeholder: "Select trigger type"
        },
        axisPointer: {
          label: "Axis Pointer",
          axis: {
            label: "Axis"
          },
          type: {
            label: "Type"
          },

          crossStyle: {
            label: "Cross Style",
            color: "Color",
            width: "Width",
            type: {
              label: "type"
            },
            dashOffset: "Dash Offset",
            cap: {
              label: "Cap"
            },
            join: {
              label: "Join"
            },
            miterLimit: "Miter Limit",
            opacity: "Opacity"

          }
        },
        showContent: {
          label: "Show Content"
        },
        alwaysShowContent: {
          label: "Always Show Content"
        },
        triggerOn: {
          label: "TriggerOn"
        },
        showDelay: {
          label: "Show Delay"
        },
        hideDelay: {
          label: "Hide Delay"
        },
        enterable: {
          label: "Enterable"
        },
        renderMode: {
          label: "Render Mode"
        },
        className: {
          label: "ClassName"
        },
        confine: {
          label: "Confine"
        },
        appendToBody: {
          label: "Append To Body"
        },
        transitionDuration: {
          label: "Transition Duration"
        },
        position: {
          label: "Position"
        },
        formatter: {
          label: "Formatter"
        },
        valueFormatter: {
          label: "Value Formatter"
        },
        backgroundColor: {
          label: "BackgroundColor"
        },
        borderColor: {
          label: "BorderColor"
        },
        borderWidth: {
          label: "Border Width"
        },
        padding: {
          label: "Padding"
        },
        textStyle: {
          label: "Text Style"
        },
        extraCssText: {
          label: "Extra Css Text"
        },
        order: {
          label: "Order"
        }
      },
      legend: {
        label: "Legend",
        type: {
          label: "Type"
        },
        show: {
          label: "Show"
        },
        orient: {
          label: "Orient"
        },
        align: {
          label: "Align"
        },
        padding: {
          label: "Padding"
        },
        itemGap: {
          label: "ItemGap"
        },
        itemWidth: {
          label: "ItemWidth"
        },
        itemHeight: {
          label: "ItemHeight"
        },
        itemStyle: {
          label: "ItemStyle"
        },
        lineStyle: {
          label: "LineStyle"
        },
        symbolRotate: {
          label: "Symbol Rotate"
        },
        formatter: {
          label: "Formatter"
        },
        selectedMode: {
          label: "Selected Mode"
        },
        inactiveColor: {
          label: "Inactive Color"
        },
        inactiveBorderColor: {
          label: "Inactive BorderColor"
        },
        inactiveBorderWidth: {
          label: "Inactive BorderWidth"
        },
        selected: {
          label: "Selected"
        },
        icon: {
          label: "Icon"
        },
        backgroundColor: {
          label: "BackgroundColor"
        },
        borderColor: {
          label: "BorderColor"
        },
        borderWidth: {
          label: "BorderWidth"
        },
        borderRadius: {
          label: "BorderRadius"
        },
        scrollDataIndex: {
          label: "Scroll DataIndex"
        },
        pageButtonItemGap: {
          label: "PageButtonItemGap"
        },
        pageButtonGap: {
          label: "PageButtonGap"
        },
        pageFormatter: {
          label: "PageFormatter"
        },
        pageButtonPosition: {
          label: "PageButtonPosition"
        },
        pageIcons: {
          label: "PageIcons",
          horizontal: 'Horizontal',
          vertical: 'Vertical'
        },
        pageIconColor: {
          label: "PageIconColor"
        },
        pageIconInactiveColor: {
          label: "PageIconInactiveColor"
        },
        pageIconSize: {
          label: "PageIconSize"
        },
        pageTextStyle: {
          label: "PageTextStyle"
        },
        emphasis: {
          label: "Emphasis",
          selectorLabel: {
            label: "SelectorLabel"
          }
        },
        selector: {
          label: "Selector"
        },
        selectorLabel: {
          label: "SelectorLabel",
          show:'Show',
          distance:'Distance',
          rotate:'Rotate',
          offset:'Offset'
        },
        selectorPosition: {
          label: "SelectorPosition"
        },
        selectorItemGap: {
          label: "SelectorItemGap"
        },
        selectorButtonGap: {
          label: "SelectorButtonGap"
        }
      },
      basic: {
        label: "Basic",
        color: {
          label: "Color"
        },
        backgroundColor: {
          label: "BackgroundColor"
        },
        axisPointer: {
          label: "Axis Pointer"
        },
        stateAnimation: {
          label: "State Animation",
          duration: {
            label: "Duration"
          },
          easing: {
            label: "Easing"
          },
        },

        blendMode: {
          label: "BlendMode"
        },
        hoverLayerThreshold: {
          label: "HoverLayerThreshold"
        },
        useUTC: {
          label: "UseUTC"
        }
      },
      grid: {
        label: "Grid",
        show: {
          label: "Show"
        },
        position: {
          label: "Position"
        },
        borderColor: {
          label: "Border Color"
        }, backgroundColor: {
          label: "BackgroundColor"
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
          placeholder: "Specify the shadow blur size"
        },
      },
      geo: {
        label: "Geo",
        show: {
          label: "Show"
        },
        map: {
          label: "Map"
        },
        roam: {
          label: "Roam"
        },
        center: {
          label: "Center"
        },
        aspectScale: {
          label: "Aspect Scale"
        },
        zoom: {
          label: "zoom"
        },
        scaleLimit: {
          label: "Scale Limit",
          max: {
            label: "Maximum"
          },
          min: {
            label: "Minimum"
          }
        },
        selectedMode: {
          label: "Select Mode"
        },
        itemStyle: {
          label: "Item Style"
        },
        emphasis: {
          label: "Emphasis Style"
        },
        select: {
          label: "Select Style"
        },
        blur: {
          label: "Blur Style"
        },
        layoutCenter: {
          label: "Layout Center"
        },
        layoutSize: {
          label: "Layout Size"
        },
        silent: {
          label: "Silent Mode"
        },
        tooltip: {
          label: "Tooltip"
        }
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
        target: {
          label: "Title Target"
        },
        subtarget: {
          label: "Subtitle Target"
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
          label: "Title Style"
        },
        subtextStyle: {
          label: "Subtitle Style",
          align: {
            label: "Align"
          },
          verticalAlign: {
            label: "Vertical Align"
          }
        },
        padding: {
          label: "Padding"
        },
        triggerEvent: {
          label: "Trigger Event"
        },
        backgroundColor: {
          label: "BackgroundColor"
        },
        borderRadius: {
          label: "Border Radius"
        },
      },
      xAxis: {
        label: "X Axis"
      },
      yAxis: {
        label: "Y Axis"
      },
      radiusAxis: {
        label: "Radius Axis"
      },
      angleAxis: {
        label: "Angle Axis",
        startAngle: {
          label: "Start Angle"
        },
        clockwise: {
          label: "Clockwise"
        }
      },
      singleAxis: {
        label: "Single Axis"
      },
      parallelAxis: {
        label: "Parallel Axis",
        dim: {
          label: "Dimension Index"
        },
        realtime: {
          label: "Realtime Rendering"
        },
        areaSelectStyle: {
          label: "Area Select Style",
          width: {
            label: "Width"
          },
          borderWidth: {
            label: "Border Width"
          },
          borderColor: {
            label: "Border Color"
          },
          color: {
            label: "Color"
          },
          opacity: {
            label: "Opacity"
          }
        },
      },
      axis: {
        show: {
          label: "Show"
        },
        polarIndex: {
          label: "Polar Index"
        },
        parallelIndex: {
          label: "Parallel Index"
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
        offset: {
          label: "Offset"
        },
        size: {
          label: "Size"
        },
        orient: {
          label: "Orientation"
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
          label: "Minor Split Line"
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
          splitNumber: {
            label: "Split Number"
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
        },
        splitArea: {
          label: "Split Area",
          show: {
            label: "Show"
          },
          interval: {
            label: "Interval"
          },
          areaStyle: {
            label: "Style"
          }
        },
        axisPointer: {
          label: "Axis Pointer"
        }
      },
      areaStyle: {
        color: {
          label: "Color"
        },
        opacity: {
          label: "Opacity"
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
        fontStyle: {
          label: "Font Style"
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
        textBorderColor: {
          label: "Text Border Color"
        },
        textBorderWidth: {
          label: "Text Border Width"
        },
        textBorderDashOffset: {
          label: "Text Border Dash Offset"
        },
        textBorderType: {
          label: "Text Border Type"
        }, borderRadius: {
          label: "Border Radius"
        },
        padding: {
          label: "Padding"
        },
        textShadowColor: {
          label: "Text ShadowColor"
        }, textShadowBlur: {
          label: "Text ShadowBlur"
        }, textShadowOffsetX: {
          label: "Text Shadow OffsetX"
        }, textShadowOffsetY: {
          label: "Text Shadow OffsetY"
        }, overflow: {
          label: "Overflow"
        }, ellipsis: {
          label: "Ellipsis"
        }
      },
      lineStyle: {
        label: "Line Style",
        color: {
          label: "Color"
        },
        width: {
          label: "Thickness"
        },
        type: {
          label: "Line Type"
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
        opacity: {
          label: "Opacity"
        }
      },
      itemStyle: {
        label: "Item Style",
        color: {
          label: "Color"
        },
        borderCap: {
          label: "Border Cap"
        },
        borderJoin: {
          label: "Border Join"
        },
        borderMiterLimit: {
          label: "Border Miter Limit"
        }, opacity: {
          label: "Opacity"
        },
        decal: {
          label: "Decal"
        }
      },
      iconStyle: {
        label: "Icon Style",
        color: {
          label: "Color"
        },
        borderCap: {
          label: "Border Cap"
        },
        borderJoin: {
          label: "Border Join"
        },
        borderMiterLimit: {
          label: "Border Miter Limit"
        },
        opacity: {
          label: "Opacity"
        },
        textIconStyle:{
          textPosition:{
            label:'Text Position'
          },
          textFill:{
            label:'Text Fill'
          },
          textAlign:{
            label:'Text Align'
          },
          textBackgroundColor:{
            label:'Text BackgroundColor'
          },
          textBorderRadius:{
            label:'Text Border Radius'
          },
          textPadding:{
            label:'Text Padding'
          }
        }
      },
      axisPointer: {
        show: {
          label: "Show"
        },
        type: {
          label: "Type"
        },
        snap: {
          label: "Snap"
        },
        z: {
          label: "Z Index"
        },
        label: {
          label: "Label",
          show:'Show',
          precision:'Precision',
          formatter:'Formatter',
          margin:'Margin'
        },
        triggerTooltip: {
          label: "Trigger Tooltip"
        },
        value: {
          label: "Value"
        },
        status: {
          label: "Status"
        },
        handle: {
          label: "Handle",
          show: {
            label: "Show"
          },
          icon: {
            label: "Icon"
          },
          size: {
            label: "Size"
          },
          margin: {
            label: "Margin"
          },
          color: {
            label: "Color"
          },
        },
        triggerOn: {
          label: "Trigger On"
        },
        shadowStyle: {
          label: "Shadow Style",
          color:'Color',
          opacity:'Opacity'
        }
      },
      event: {
        silent: {
          label: "Silent Mode"
        },
        triggerEvent: {
          label: "Trigger Event"
        }
      },
      series: {
        label: "Series",
        type: {
          label: "Type"
        },
        name: {
          label: "Name",
        },
        colorBy: {
          label: "ColorBy"
        },
        silent: {
          label: "Silent"
        },
        xAxisIndex: {
          label: "X Axis Index"
        },
        yAxisIndex: {
          label: "Y Axis Index"
        },
        polarIndex: {
          label: "Polar Index"
        },
        datasetIndex: {
          label: "Dataset Index"
        },
        coordinateSystem: {
          label: "Coordinate System"
        }
      }
    }
  },
};
