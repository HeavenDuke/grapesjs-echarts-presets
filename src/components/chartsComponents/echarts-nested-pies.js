import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.nestedPie.name",
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
    let series = [];
    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
          series.push({type: "pie",z:10*-i,radius: [`${20*(i-1)}%`,`${20*i}%`],encode:{value:i},...map});
      }
    }

    // console.log(series,dataset)
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