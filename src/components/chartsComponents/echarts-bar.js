import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.bars.name",
  getOptions: (options) => {

    const map = options.series || {};
    const title = options.title || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox ||{};
    const legend = options.legend || {};
    let xAxis = options['x-axis'] || [];
    let yAxis = options['y-axis'] || [];
    let data=options.dataset||[];
    let dataset=[]
    let series = [];
    if(data instanceof Array){
       dataset = [{
        source: options.dataset[0].source || [],
        sourceHeader: options.dataset[0].sourceHeader || false
      }];
      if (dataset[0].source.length >= 1 && dataset[0].source[0].length >= 2) {
        for (let i = 1; i < dataset[0].source[0].length; i++) {
          let obj = { ...map[0],type: "bar"};
          series.push(obj);
        }
      }
    }

    return {
      ...basic,
      grid,
      dataset,
      legend,
      title,
      toolbox,
      xAxis,
      yAxis,
      series,
      tooltip,
    };
  },
multiple:true
});
