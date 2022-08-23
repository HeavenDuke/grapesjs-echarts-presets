import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.roundedPie.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const basic = options.basic || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};

    let dataset = {
      source: options.dataset.source || [],
      // sourceHeader: options.dataset.sourceHeader || false
    };
    let series = [{
      ...map[0],
      type: "pie",
      radius: ["25%", "50%"],
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2
      },
    }];

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