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
      },
      seriesType: {
        value: '连续型',
        category: '离散型',
        time: '时间型',
        log: '对数型'
      }
    },
    actions: {
      edit: "编辑"
    },
    dialogs: {
      textStyle: '编辑文本样式',
      lineStyle: '编辑线条样式',
      areaStyle: '编辑区域样式',
      axisLineStyle: '配置坐标轴线',
      axisSplitLine: '配置坐标轴分隔线',
      axisTick: "配置坐标轴刻度",
      axisSplitArea: '配置坐标轴分割区域'
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
        },
        type: {
          label: "类型",
        },
        alignTicks: {
          label: "对齐刻度"
        },
        position: {
          label: "位置"
        },
        nameLocation: {
          label: "名牌的位置"
        },
        nameGap: {
          label: "名牌-轴线间距"
        },
        nameTextStyle: {
          label: "名牌样式"
        },
        nameRotate: {
          label: "旋转角度"
        },
        inverse: {
          label: "反转坐标轴"
        },
        boundaryGap: {
          label: "两端边距"
        },
        min: {
          label: "最小值"
        },
        max: {
          label: "最大值"
        },
        scale: {
          label: "脱离零值"
        },
        splitNumber: {
          label: "分割段数"
        },
        minInterval: {
          label: "刻度最小间隔"
        },
        maxInterval: {
          label: "刻度最大间隔"
        },
        interval: {
          label: "刻度间隔"
        },
        logBase: {
          label: "对数底"
        },
        silent: {
          label: "静默模式"
        },
        triggerEvent: {
          label: "响应鼠标事件"
        },
        z: {
          label: "Z"
        },
        zlevel: {
          label: "Z Level"
        },
        axisLine: {
          label: "轴线",
          show: {
            label: "显示"
          },
          onZero: {
            label: "对齐零刻度"
          },
          onZeroAxisIndex: {
            label: "零刻度坐标轴"
          },
          symbol: {
            label: "端点类型"
          },
          symbolSize: {
            label: "端点大小"
          },
          symbolOffset: {
            label: "端点偏移量"
          }
        },
        splitArea: {
          label: "分隔区域",
          show: {
            label: "显示"
          },
          interval: {
            label: "间距"
          }
        },
        splitLine: {
          label: "分隔线",
          show: {
            label: "显示"
          },
          interval: {
            label: "间隔"
          }
        },
        minorSplitLine: {
          label: '次分隔线'
        },
        axisTick: {
          label: "刻度",
          show: {
            label: "显示"
          },
          alignWithLabel: {
            label: "与标签对齐"
          },
          interval: {
            label: "间隔"
          },
          inside: {
            label: "朝内"
          },
          length: {
            label: "长度"
          }
        },
        minorAxisTick: {
          label: "次级刻度",
          splitNumber: {
            label: "分割数"
          }
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
        },
        backgroundColor: {
          label: "背景色"
        },
        align: {
          label: "水平对齐"
        },
        verticalAlign: {
          label: "垂直对齐"
        },
        borderColor: {
          label: "边框颜色"
        },
        borderWidth: {
          label: "边框粗细"
        },
        borderType: {
          label: "边框类型"
        },
        padding: {
          label: "内边距"
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
        },
        miterLimit: {
          label: "斜接面限制比例"
        },
        dashOffset: {
          label: "虚线段间距"
        },
        join: {
          label: "线段相连方式"
        },
        cap: {
          label: "末端绘制方式"
        },
        shadowColor: {
          label: "阴影颜色"
        },
        shadowBlur: {
          label: "阴影模糊"
        },
        shadowOffsetX: {
          label: "阴影水平偏移量"
        },
        shadowOffsetY: {
          label: "阴影垂直偏移量"
        },
        opacity: {
          label: "透明度"
        }
      },
      areaStyle: {
        label: '区域样式',
        color: {
          label: '颜色'
        },
        shadowColor: {
          label: "阴影颜色"
        },
        shadowBlur: {
          label: "阴影模糊"
        },
        shadowOffsetX: {
          label: "阴影水平偏移量"
        },
        shadowOffsetY: {
          label: "阴影垂直偏移量"
        },
        opacity: {
          label: "透明度"
        }
      },
      series: {
        label: '数据'
      }
    },
  },
};
