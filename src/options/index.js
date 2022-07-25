
// import BasicOptions from "@/options/basic"
import TitleOptions from "@/options/title"
import PolarOptions from "@/options/polar"
import RadarOptions from "@/options/radar"
import ParallelOptions from "@/options/parallel"
import GridOptions from "@/options/grid"
import CartesianAxisOptions from "@/options/cartesian-axis"
import SingleAxisOptions from "@/options/single-axis"

export default {
  // basic: BasicOptions,
  "single-axis": SingleAxisOptions,
  "grid": GridOptions,
  "x-axis": CartesianAxisOptions("x"),
  "y-axis": CartesianAxisOptions("y"),
  "title": TitleOptions,
  "polar": PolarOptions,
  "radar": RadarOptions,
  "parallel": ParallelOptions
}
