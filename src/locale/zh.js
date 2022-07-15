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
      line:{
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
      },
      funnel:{
        name:"漏斗图"
      },
      scatter:{
        name:"散点图"
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
    dialogs: {
      textStyle: '编辑文本样式',
      lineStyle: '编辑线条样式'
    },
    config: {
      basic:{
        label: '基础配置',
        color: {
          label: "内容颜色"
        },
        backgroundColor:{
          label:"背景颜色"
        },
        animation:{
          label: "动画",

        },
        animationThreshold:{
          label:"动画显示阈值"
        },
        animationDuration:{
          label:"初始动画时长"
        },
        animationEasing: {
          label: "动画缓动效果",
          placeholder:"选择初始缓动动画"
        },
        animationDelay: {
          label: "初始动画延迟"
        },
        animationDurationUpdate: {
          label: "数据更新动画时长"
        },
        animationEasingUpdate: {
          label: "数据更新动画缓动效果",
          placeholder:"选择数据更新缓动动画"
        },
        animationDelayUpdate: {
          label: "数据更新动画延迟"
        },
        blendMode:{
          label:"图形混合模式"
        },
        hoverLayerThreshold:{
          label:"图形数量阈值"
        },
        useUTC:{
          label:"使用UTC时间"
        }
      },
      grid: {
        label: '网格',
        show: {
          label: "显示"
        },
        position: {
          label: "位置"
        },
        borderColor: {
          label: "边框颜色"
        },
        borderWidth: {
          label: "边框粗细",
          placeholder: ""
        },
        shadowColor: {
          label: "阴影颜色"
        },
        shadowBlur: {
          label: "阴影长度"
        },
        containLabel: {
          label: "包含刻度标签"
        },
        zlevel: {
          label: "Z Level"
        },
        z: {
          label: "Z"
        }
      },
      title: {
        label: "图表标题",
        show: {
          label: "显示"
        },
        text: {
          label: "标题",
          placeholder: "请输入标题"
        },
        link: {
          label: "标题链接",
          placeholder: "请输入标题关联的链接"
        },
        subtext: {
          label: "副标题",
          placeholder: "请输入副标题"
        },
        sublink: {
          label: "副标题",
          placeholder: "请输入副标题关联的链接"
        },
        textAlign: {
          label: "文本对齐",
          placeholder: "请设置"
        },
        textVerticalAlign: {
          label: "垂直对齐",
          placeholder: "请设置"
        },
        itemGap: {
          label: "正副标题间距"
        },
        position: {
          label: "位置"
        },
        textStyle: {
          label: "标题样式"
        },
        subTextStyle: {
          label: "副标题样式"
        }
      },
      xAxis: {
        label: 'X轴'
      },
      yAxis: {
        label: 'Y轴'
      },
      axis: {
        show: {
          label: "显示/隐藏"
        },
        name: {
          label: "名称"
        }
      },
      textStyle: {
        label: "文字样式",
        fontFamily: {
          label: '字体'
        },
        fontSize: {
          label: '字号'
        },
        fontWeight: {
          label: '粗细'
        },
        lineHeight: {
          label: '行高'
        },
        color: {
          label: '颜色'
        }
      },
      lineStyle: {
        label: '线条样式',
        color: {
          label: '颜色'
        },
        width: {
          label: '粗细'
        },
        type: {
          label: '线形'
        }
      },
      series: {
        label: '数据'
      }
    },
  },
};
