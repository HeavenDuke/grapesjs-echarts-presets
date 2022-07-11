export default {
  "grapesjs-echarts-presets": {
    theme: {
      label: "主题",
      placeholder: "选择一个主题",
    },
    items: {
      label: "数据",
      name: "Item",
      category: "类别",
      color: "颜色",
      save: "保存",
    },
    category: "图表",
    components: {
      bar: {
        name: "柱状图",
      },
      lines:{
        name: "折线图",
      },
      pie:{
        name:"饼图"
      },
      polarHistogram:{
        name:"极坐标柱状图"
      },
      roundedPie:{
        name:"圆角环形图"
      },
      rose:{
        name:"玫瑰图"
      }
    },
    dict: {
      position: {
        left: "左",
        right: "右",
        top: "上",
        bottom: "下"
      }
    },
    actions: {
      edit: "编辑"
    },
    config: {
      title: {
        show: {
          label: "显示"
        },
        text: {
          label: "标题",
          placeholder: "请输入标题"
        },
        subtext: {
          label: "副标题",
          placeholder: "请输入副标题"
        },
        textAlign: {
          label: "文本对齐",
          placeholder: "请设置"
        },
        textVerticalAlign: {
          label: "垂直对齐",
          placeholder: "请设置"
        },
        position: {
          label: "位置"
        },
        textStyle: {
          label: "文字样式"
        }
      }

    },
  },
};
