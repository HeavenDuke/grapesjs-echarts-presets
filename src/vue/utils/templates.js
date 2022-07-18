export let TEXT_STYLE = {
  color: '#333',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  fontSize: 12,
  align: 'left',
  verticalAlign: 'top',
  lineHeight: 24,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderWidth: 0,
  borderType: 'solid',
  // borderDashOffset: 0,
  // borderRadius: 0,
  padding: [0, 0, 0, 0]
  // shadowColor: 'transparent',
  // shadowBlur: 0,
  // shadowOffsetX: 0,
  // shadowOffsetY: 0,
  // width: 'auto',
  // height: 'auto',
  // textBorderColor: 'auto',
  // textBorderWidth: 0,
  // textBorderType: 'solid',
  // textBorderDashOffset: 0,
  // textShadowColor: 'transparent',
  // textShadowBlur: 0,
  // textShadowOffsetX: 0,
  // textShadowOffsetY: 0,
  // overflow: 'none',
  // ellipsis: '...',
}

export let LINE_STYLE = {
  color: '#333',
  width: 1,
  type: 'solid',
  dashOffset: 0,
  cap: 'butt',
  join: 'bevel',
  miterLimit: 10,
  shadowBlur: 'auto',
  shadowColor: 'auto',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  opacity: 1
}

export let AREA_STYLE = {
  color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
  shadowBlur: 0,
  shadowColor: 'transparent',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  opacity: 1,
}

export let AXIS_TICK_STYLE = {
  show: true,
  alignWithLabel: false,
  interval: 'auto',
  inside: false,
  length: 5,
  lineStyle: Object.assign({}, LINE_STYLE)
}

export let AXIS_MINOR_TICK_STYLE = {
  show: false,
  splitNumber: 5,
  length: 3,
  lineStyle: Object.assign({}, LINE_STYLE)
}

export let AXIS_LINE_STYLE = {
  show: true,
  onZero: true,
  onZeroAxisIndex: 0,
  symbol: 'none',
  symbolSize: [10, 15],
  symbolOffset: [0, 0],
  lineStyle: Object.assign({}, LINE_STYLE)
}

export let AXIS_LABEL_STYLE = Object.assign({
  show: true,
  interval: 'auto',
  inside: false,
  rotate: 0,
  margin: [8, 8, 8, 8],
  showMinLabel: false,
  showMaxLabel: false,
  hideOverlap: true,
}, TEXT_STYLE)

export let SPLIT_LINE_STYLE = {
  show: true,
  interval: 'auto',
  lineStyle: Object.assign({}, LINE_STYLE)
}

export let MINOR_SPLIT_LINE_STYLE = {
  show: true,
  lineStyle: Object.assign({}, LINE_STYLE)
}

export let SPLIT_AREA_STYLE = {
  show: true,
  interval: 'auto',
  areaStyle: Object.assign({}, AREA_STYLE)
}
