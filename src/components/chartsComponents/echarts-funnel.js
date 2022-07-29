import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.funnel.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    const legend = options.legend || {};
    let tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};

    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };
    const series = [
      {
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        sort: "descending",
        label: {
          show: true,
          position: "inside"
        },
        ...map
      },

    ];
    tooltip.trigger='item';
    tooltip.formatter='{b} : {c}'
    return {
      ...basic,
      grid,
      title,
      dataset,
      legend,
      tooltip,
      toolbox,
      series,


    };

  },
});