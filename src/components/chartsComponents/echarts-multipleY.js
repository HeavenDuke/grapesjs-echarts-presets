import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.multipleY.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let data = options.dataset||[];
    let series = [];
    let dataset=[];



    for(let i=0;i<data.length;i++){
      let obj={
        source:data[i].source||[]
      }
      dataset.push(obj)
      series.push({datasetIndex:i,yAxisIndex:i,type: "bar",...map});
    }

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
  multiple: true
});
