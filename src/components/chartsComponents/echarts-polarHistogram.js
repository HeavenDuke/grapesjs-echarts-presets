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
    const polar =options.polar||{};
    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };


    let series = [];

    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
        map.coordinateSystem="polar";
        map.type="bar"
        // let obj = {type: "bar", ...map};
        series.push(map);
        // console.log(i)
      }
    }
    console.log(series)
    polar.radius=[30, "80%"]
    radiusAxis.type = "category";
    angleAxis.type = "";
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
      polar
    };
  },
});
