import series from "@/options/series";

export const TOOLTIP = {
  trigger: ["item", "axis", "none"],
  triggerOn: ["mousemove", "click", "mousemove|click", "none"],
  renderMode: ["html", "richText"],
  position: ["inside", "top", "left", "right", "bottom"],
  order: ["seriesAsc", "seriesDesc", "valueAsc", "valueDesc"],
};

export let SERIES_TYPES = [
  "category",
  "value",
  "time",
  "log"
];
export let SERIES=['line','bar','pie','scatter','effectScatter','candlestick','parallel','map','funnel','custom']
export let POSITION=['left','right','top','bottom']
export let AXIS=['x','y','radius','angle']
export let ALIGN=["auto", "left", "right", "center"]
export let VERTICAL_ALIGN=["auto", "top", "bottom", "middle"]
export let TARGET = ["self", "blank"];
export let BORDER_TYPE = ["solid", "dashed", "dotted"];
export let UNITS = ["px", "%", "em", "rem", "vh", "vw"];

export let LINE_CAPS = ["butt", "round", "square"];

export let LINE_JOINS = ["bevel", "round", "miter"];

export let DIRECTIONS = ["vertical", "horizontal"];

export let TRIGGERS = ["mousemove|click", "click", "mousemove", "none"];

export let POINTER_TYPES = ["line", "shadow", "none"]

export let VISIBLE_STATUS = ["show", "hide"]

export let BINARY_POSITION_VERTICAL = ["top", "bottom"]

export let BINARY_POSITION_HORIZONTAL = ["left", "right"]

export let FLEX_POSITIONS = ["start", "middle", "end"]

export let INPUT_TYPES = ["String", "Color", "Number"]
