import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.scatter.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || null;
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options["x-axis"] || [];
    let yAxis = options["y-axis"] || [];
    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };
    let series = [];
    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {

        series.push({...map, type: "scatter"});
      }
    }
    tooltip.formatter = "Group {a}: ({c})";



    return {
      ...basic,
      grid,
      title,
      series,
      dataset,
      toolbox,
      xAxis,
      tooltip,
      legend,
      yAxis

    };
  },
});
