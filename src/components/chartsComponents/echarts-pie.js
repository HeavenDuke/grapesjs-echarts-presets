import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.pie.name",
  getOptions: (options) => {
    let map = options.series || [];
    const basic = options.basic || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};

    let dataset = {
      source: options.dataset.source || [],
      // sourceHeader: options.dataset.sourceHeader || false
    };
    let series = {
      ...map[0], type: "pie", radius: "60%", label: {show: true}
    };



    return {
      ...basic,
      title,
      dataset,
      toolbox,
      series,
      legend,
      tooltip
    };

  },
});