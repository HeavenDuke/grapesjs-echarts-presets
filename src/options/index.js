
import BasicOptions from "@/options/basic"
import TitleOptions from "@/options/title"
import LegendOption from "@/options/legend"
import PolarOptions from "@/options/polar"
import RadarOptions from "@/options/radar"
import ParallelOptions from "@/options/parallel"
import GridOptions from "@/options/grid"
import TooltipOptions from "@/options/tooltip"
import ToolboxOptions from "@/options/toolbox"
import CartesianAxisOptions from "@/options/cartesian-axis"

export default {
  "basic": BasicOptions,
  "x-axis": CartesianAxisOptions("x"),
  "y-axis": CartesianAxisOptions("y"),
  "grid": GridOptions,
  "title": TitleOptions,
  "polar": PolarOptions,
  "radar": RadarOptions,
  "parallel": ParallelOptions,
  "legend": LegendOption,
  "tooltip":TooltipOptions,
  "toolbox":ToolboxOptions
}
