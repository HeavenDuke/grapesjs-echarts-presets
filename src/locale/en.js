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
      lines:{
        name: "Lines Chart",
      },
      pie:{
        name: "Pie Chart",
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
    config: {
      title: {
        show: {
          label: "Show"
        },
        text: {
          label: "Title",
          placeholder: "Input title"
        },
        subtext: {
          label: "Subtitle",
          placeholder: "Input subtitle."
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
        }
      }
    }


  },
};
