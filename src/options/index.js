
import BasicOptions from "@/options/basic"
import TitleOptions from "@/options/title"
import LegendOption from "@/options/legend"
import PolarOptions from "@/options/polar"
import RadiusAxisOptions from "@/options/radius-axis"
import AngleAxisOptions from "@/options/angle-axis"
import RadarOptions from "@/options/radar"
import ParallelOptions from "@/options/parallel"
import ParallelAxisOptions from "@/options/parallel-axis"
import GridOptions from "@/options/grid"
import TooltipOptions from "@/options/tooltip"
import CartesianAxisOptions from "@/options/cartesian-axis"

export default {
  "basic": BasicOptions,
  "title": TitleOptions,
  "legend": LegendOption,
  "tooltip":TooltipOptions,
  "single-axis": SingleAxisOptions,
  "grid": GridOptions,
  "x-axis": CartesianAxisOptions("x"),
  "y-axis": CartesianAxisOptions("y"),
  "polar": PolarOptions,
  "radius-axis": RadiusAxisOptions,
  "angle-axis": AngleAxisOptions,
  "radar": RadarOptions,
  "parallel": ParallelOptions,
  "parallel-axis": ParallelAxisOptions
}
