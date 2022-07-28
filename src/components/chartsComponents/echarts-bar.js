import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.bars.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options.xAxis || {};
    const yAxis = options.yAxis || {};
    let dataset = {
      source: options.dataset.source||[],
      sourceHeader:options.dataset.sourceHeader||false
    };
    // console.log(11111, dataset.source);
    let series =[]
    for (let i = 0; i < dataset.source[0].length - 1; i++) {
      series.push({type: "bar"});
    }
    // let series = [{type: "bar"}, {type: "bar"}, {type: "bar"},];


    xAxis = {type: "category"};
    return {
      ...basic,
      grid,
      dataset,
      legend,
      title,
      toolbox,
      xAxis,
      series,
      tooltip,
      yAxis
    };
  },
});
