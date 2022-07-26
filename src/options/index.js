
// import BasicOptions from "@/options/basic"
import TitleOptions from "@/options/title"
import PolarOptions from "@/options/polar"
import RadiusAxisOptions from "@/options/radius-axis"
import AngleAxisOptions from "@/options/angle-axis"
import RadarOptions from "@/options/radar"
import ParallelOptions from "@/options/parallel"
import ParallelAxisOptions from "@/options/parallel-axis"
import GridOptions from "@/options/grid"
import CartesianAxisOptions from "@/options/cartesian-axis"
import SingleAxisOptions from "@/options/single-axis"

export default {
  // basic: BasicOptions,
  "title": TitleOptions,
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
