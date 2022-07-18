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
      size:{
        width: "Width",
        height:"Height"
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
      textStyle: {
        label: 'Text Style',
        fontFamily: {
          label: 'Font'
        },
        fontSize: {
          label: 'Font Size'
        },
        fontWeight: {
          label: 'Font Weight'
        },
        lineHeight: {
          label: 'Line Height'
        },
        color: {
          label: 'Color'
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
