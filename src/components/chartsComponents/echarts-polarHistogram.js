import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.polarHistogram.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let radiusAxis = options['radius-axis'] || {};
    let angleAxis = options['angle-axis'] || {};
    let polar = options.polar || {};
    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };


    let series = [];

    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
        series.push({...map, type: "bar", coordinateSystem: "polar"});

      }
    }
    polar = {...polar, radius: [30, "80%"]};
    radiusAxis = {...radiusAxis, type: "category"};
    angleAxis = {...angleAxis, type: "value"};
    return {
      ...basic,
      title,
      dataset,
      series,
      toolbox,
      radiusAxis,
      angleAxis,
      legend,
      tooltip,
      polar
    };
  },
});
