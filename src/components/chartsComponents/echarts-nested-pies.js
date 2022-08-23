import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.nestedPie.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let data = options.dataset || [];
    let series = [];
    let dataset = [];


    for (let i = 0; i < data.length; i++) {
      let obj = {
        source: data[i].source || []
      };
      dataset.push(obj);
      series.push({
        ...map,
        datasetIndex: i,
        type: "pie",
        z: -10 * (i + 1),
        radius: [`${25 * (i)}%`, `${25 * (i + 1)}%`],
      });
    }

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
  multiple: true
});