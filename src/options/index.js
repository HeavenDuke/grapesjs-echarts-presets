
import BasicOptions from "@/options/basic"
import DatasetOptions from "@/options/dataset"
import TitleOptions from "@/options/title"
import LegendOption from "@/options/legend"
import TooltipOptions from "@/options/tooltip"
import ToolboxOptions from "@/options/toolbox"
import SingleAxisOptions from "@/options/single-axis"
import GridOptions from "@/options/grid"
import CartesianAxisOptions from "@/options/cartesian-axis"
import PolarOptions from "@/options/polar"
import RadiusAxisOptions from "@/options/radius-axis"
import AngleAxisOptions from "@/options/angle-axis"
import RadarOptions from "@/options/radar"
import ParallelOptions from "@/options/parallel"
import ParallelAxisOptions from "@/options/parallel-axis"
import SeriesOption from "@/options/series";

export default {
  "basic": BasicOptions,
  "dataset": DatasetOptions,
  "title": TitleOptions,
  "legend": LegendOption,
  "tooltip":TooltipOptions,
  "toolbox":ToolboxOptions,
  "single-axis": SingleAxisOptions,
  "grid": GridOptions,
  "x-axis": CartesianAxisOptions("x"),
  "y-axis": CartesianAxisOptions("y"),
  "polar": PolarOptions,
  "radius-axis": RadiusAxisOptions,
  "angle-axis": AngleAxisOptions,
  "radar": RadarOptions,
  "parallel": ParallelOptions,
  "parallel-axis": ParallelAxisOptions,
  "series":SeriesOption
}
