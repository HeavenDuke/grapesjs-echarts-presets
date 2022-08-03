import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.custom.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    const xAxis = options.xAxis || {};
    const yAxis = options.yAxis || {};
    let dataset = options.dataset||[];

    let series = [];
    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
        series.push({...map,type: "line"});
      }
    }

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
});
