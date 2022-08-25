import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.custom.name",
  getOptions: (options) => {
    const series = options.series || null;
    const basic = options.basic || null;
    const title = options.title || null;
    let dataset = options.dataset || null;
    const grid = options.grid || null;
    const tooltip = options.tooltip || null;
    const toolbox = options.toolbox || null;
    const legend = options.legend || null;
    let xAxis = options["x-axis"] || null;
    let yAxis = options["y-axis"] || null;
    let polar = options.polar || null;
    let angleAxis = options["angle-axis"] || null;
    let radiusAxis = options["radius-axis"] || null;
    let parallel = options.parallel || null;
    let parallelAxis = options["parallel-axis"] || null;
    let singleAxis = options["single-axis"] || null;
    let geo = options.geo || null;


    return {
      ...basic,
      grid,
      polar,
      angleAxis,
      radiusAxis,
      parallel,
      parallelAxis,
      singleAxis,
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
  multiple: true
});
