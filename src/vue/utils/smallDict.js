export const TOOLTIP = {
  trigger: ["item", "axis", "none"],
  triggerOn: ["mousemove", "click", "mousemove|click", "none"],
  renderMode: ["html", "richText"],
  position: ["inside", "top", "left", "right", "bottom"],
  order:['seriesAsc','seriesDesc', 'valueAsc', 'valueDesc'],
};

export let SERIES_TYPES = [
  'category',
  'value',
  'time',
  'log'
]

export let UNITS = ["px", "%", "em", "rem", "vh", "vw"]

export let LINE_CAPS = ["butt", "round", "square"]

export let LINE_JOINS = ["bevel", "round", "miter"]

export let DIRECTIONS = ["vertical", "horizontal"]
