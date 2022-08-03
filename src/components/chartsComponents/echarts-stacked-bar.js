import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.stackedBar.name",
  getOptions: (options) => {
    const map = options.series || {};
    const title = options.title || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options.xAxis || {};
    let yAxis = options.yAxis || {};
    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };
    let series = [];
    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
        series.push({...map,
          type: "bar", stack: "1", emphasis: {focus: "series"}
        });
      }
    }
    let x={
      axisPointer: {
        show:true
      }
    }
    xAxis={...xAxis,...x}
    let y={
      axisPointer: {
        show:true
      }
    }
    yAxis={...yAxis,...y}
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
