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
      lineStyle: 'Edit Line Style'
    },
    config: {
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
          label:"AxisPointer"
        },
        showContent:{
          label:"ShowContent"
        },
        alwaysShowContent:{
          label:"AlwaysShowContent"
        },
        triggerOn:{
          label:"TriggerOn"
        },
        showDelay:{
          label:"ShowDelay"
        },
        hideDelay:{
          label:"HideDelay"
        },
        enterable:{
          label:"Enterable"
        },
        renderMode:{
          label:"RenderMode"
        },
        className:{
          label:"ClassName"
        },
        confine:{
          label:"Confine"
        },
        appendToBody: {
          label:"AppendToBody"
        },
        transitionDuration:{
          label:"TransitionDuration"
        },
        position:{
          label:"Position"
        },
        formatter:{
          label:"Formatter"
        },
        valueFormatter:{
          label:"ValueFormatter"
        },
        backgroundColor: {
          label:"BackgroundColor"
        },
        borderColor: {
          label:"BorderColor"
        },
        borderWidth: {
          label:"BorderWidth"
        },
        padding:{
          label:"Padding"
        },
        textStyle:{
          label:"TextStyle"
        },
        extraCssText:{
          label:"ExtraCssText"
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
      axis: {
        show: {
          label: "Show"
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
        }
      },
      series: {
        label: 'Series'
      }
    }
  },
};
