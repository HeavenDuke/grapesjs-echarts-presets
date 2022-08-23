import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.custom.name",
  getOptions: (options) => {
    const series = options.series || [];
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options["x-axis"] || [];
    let yAxis = options["y-axis"] || [];
    let dataset = options.dataset||[];



    return {
      ...basic,
      grid,
      title,
      dataset,
      series,
      legend,
      toolbox,
      tooltip,
      xAxis,
      yAxis,
    };

  },
  multiple:true
});
