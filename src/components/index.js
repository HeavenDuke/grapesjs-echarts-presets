import Bar from "./chartsComponents/echarts-bar";
import Line from "./chartsComponents/echarts-line";
import Pie from "./chartsComponents/echarts-pie";
import polarHistogram from "./chartsComponents/echarts-polarHistogram";
import roundedPie from "./chartsComponents/echarts-roundedPie";
import Rose from "./chartsComponents/echarts-rose";
import Funnel from "./chartsComponents/echarts-funnel";
import Scatter from "./chartsComponents/echarts-scatter";
import StackedArea from "./chartsComponents/echarts-stacked-area"
import StackedBar from "./chartsComponents/echarts-stacked-bar"
import NestedPies from "./chartsComponents/echarts-nested-pies"
import MultipleY from "./chartsComponents/echarts-multipleY"

//组件注册
export default {
  "echarts-bar": Bar,
  "echarts-line": Line,
  "echarts-pie": Pie,
  "echarts-polarHistogram":polarHistogram,
  "echarts-roundedPie":roundedPie,
  "echarts-rose":Rose,
  "echarts-funnel":Funnel,
  "echarts-scatter":Scatter,
  "echarts-stacked-area":StackedArea,
  "echarts-stacked-bar":StackedBar,
  "echarts-nested-pies":NestedPies,
  "echarts-multipleY":MultipleY
};
