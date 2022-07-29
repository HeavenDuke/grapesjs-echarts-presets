import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.polarHistogram.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    const radiusAxis = options.radiusAxis || {};
    const angleAxis = options.angleAxis || {};
    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };

    radiusAxis.type = "category";
    angleAxis.type = "";
    let series = [];
    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
        let obj = {type: "bar", coordinateSystem: "polar", ...map};
        series.push(obj);
      }
    }
    return {
      ...basic,
      grid,
      title,
      dataset,
      series,
      toolbox,
      radiusAxis,
      angleAxis,
      legend,
      tooltip,
      polar: {
        radius: [30, "80%"]
      }
    };
  },
});
