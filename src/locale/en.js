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
      }
    },
    actions: {
      edit: "Edit"
    },
    dialogs: {
      textStyle: 'Edit Text Style'
    },
    config: {
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
        position: {
          label: "Position"
        },
        textStyle: {
          label: "Text Style",
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
        }
      },
      series: {
        label: 'Series'
      }
    }
  },
};
