
// import BasicOptions from "@/options/basic"
import TitleOptions from "@/options/title"
import PolarOptions from "@/options/polar"
import RadarOptions from "@/options/radar"
import ParallelOptions from "@/options/parallel"
import GridOptions from "@/options/grid"
import CartesianAxisOptions from "@/options/cartesian-axis"

export default {
  // basic: BasicOptions,
  "x-axis": CartesianAxisOptions("x"),
  "y-axis": CartesianAxisOptions("y"),
  "grid": GridOptions,
  "title": TitleOptions,
  "polar": PolarOptions,
  "radar": RadarOptions,
  "parallel": ParallelOptions
}
