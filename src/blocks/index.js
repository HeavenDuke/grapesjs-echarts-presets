import BarChart from "./chartsBlocks/bar-chart";
import LineChart from "./chartsBlocks/line-chart";
import PieChart from "./chartsBlocks/pie-chart";
import polarHistogram from "./chartsBlocks/polarHistogram-chart";
import roundedPie from "./chartsBlocks/roundedPie-chart";
import RoseChart from "./chartsBlocks/rose-chart";
import FunnelChart from "./chartsBlocks/funnel-chart";
import ScatterChart from "./chartsBlocks/scatter-chart";
import StackedLineChart from "./chartsBlocks/stacked-line-chart"
import StackedBarChart from "./chartsBlocks/stacked-bar-chart"
import NestedPiesChart from "./chartsBlocks/nested-pies-chart"
import MultipleYChart from "./chartsBlocks/multipleY-chart"
//模块按钮注册
export default {
  "bar-chart": BarChart,
  "line-chart": LineChart,
  "pie-chart": PieChart,
  "polarHistogram-chart":polarHistogram,
  "roundedPie-chart":roundedPie,
  "rose-chart":RoseChart,
  "funnel-chart":FunnelChart,
  "scatter-chart":ScatterChart,
  "stacked-line-chart":StackedLineChart,
  "stacked-line-bar":StackedBarChart,
  "nested-pies-chart":NestedPiesChart,
  "multipleY-chart":MultipleYChart
};
