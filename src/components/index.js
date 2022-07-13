import Bar from "./chartsComponents/echarts-bar";
import Line from "./chartsComponents/echarts-line";
import Pie from "./chartsComponents/echarts-pie";
import polarHistogram from "./chartsComponents/echarts-polarHistogram";
import roundedPie from "./chartsComponents/echarts-roundedPie";
import Rose from "./chartsComponents/echarts-rose";
import Funnel from "./chartsComponents/echarts-funnel";
import Scatter from "./chartsComponents/echarts-scatter";

//组件注册
export default {
  "echarts-bar": Bar,
  "echarts-line": Line,
  "echarts-pie": Pie,
  "echarts-polarHistogram":polarHistogram,
  "echarts-roundedPie":roundedPie,
  "echarts-rose":Rose,
  "echarts-funnel":Funnel,
  "echarts-scatter":Scatter
};
