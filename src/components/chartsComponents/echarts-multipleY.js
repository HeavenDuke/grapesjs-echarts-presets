import build from "../buildSeries";
import dataSample from "echarts/src/processor/dataSample";

export default build({
  name: "grapesjs-echarts.components.multipleY.name",
  getOptions: (options) => {
    const series = options.series || [];
    const title = options.title || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options["x-axis"] || [];
    let yAxis = options["y-axis"] || [];
    let dataset = options.dataset || [];

    return {
      ...basic,
      grid,
      dataset,
      legend,
      title,
      toolbox,
      xAxis,
      series,
      tooltip,
      yAxis
    };
  },
  multiple: true
});
