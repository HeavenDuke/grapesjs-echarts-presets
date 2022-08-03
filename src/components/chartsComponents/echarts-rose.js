import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.rose.name",
  getOptions: (options) => {
    const map = options.series || {};
    const title = options.title || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};

    let dataset = {
      source: options.dataset.source || [],
      // sourceHeader: options.dataset.sourceHeader || false
    };
    const series = [

      {
        ...map,
        type: "pie",
        radius: ["25%", "65%"],
        roseType: "area",

      },

    ];
    return {
      ...basic,
      grid,
      title,
      dataset,
      toolbox,
      series,
      legend,
      tooltip
    };

  },
});