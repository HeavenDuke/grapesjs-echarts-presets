import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.pie.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};


    let dataset = {
      source: options.dataset.source || [],
      // sourceHeader: options.dataset.sourceHeader || false
    };
    let series = [{
      type: "pie", radius: "60%", ...map
    }];


    // console.log(series,dataset)
    return {
      ...basic,
      grid,
      title,
      dataset,
      toolbox,
      series,
      legend: {},
      tooltip
    };

  },
});