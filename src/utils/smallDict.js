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
export let TARGET = ["self", "blank"];
export let BORDER_TYPE = ["solid", "dashed", "dotted"];
export let UNITS = ["px", "%", "em", "rem", "vh", "vw"];

export let LINE_CAPS = ["butt", "round", "square"];

export let LINE_JOINS = ["bevel", "round", "miter"];

export let DIRECTIONS = ["vertical", "horizontal"];

export let TRIGGERS = ["mousemove|click", "click", "mousemove", "none"];

export let POINTER_TYPES = ["line", "shadow", "none"]

export let VISIBLE_STATUS = ["show", "hide"]
