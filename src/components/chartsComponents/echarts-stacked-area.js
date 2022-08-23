import build from "../buildSeries";
import fa from "grapesjs/src/i18n/locale/fa";

export default build({
  name: "grapesjs-echarts.components.stackedArea.name",
  getOptions: (options) => {
    const map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    let tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options["x-axis"] || {};
    let yAxis = options["y-axis"] || {};
    let dataset = {
      source: options.dataset.source || [],
      sourceHeader: options.dataset.sourceHeader || false
    };
    let series = [];
    if (dataset.source.length >= 1 && dataset.source[0].length >= 2) {
      for (let i = 1; i < dataset.source[0].length; i++) {
        series.push({...map, type: "line", stack: "1", areaStyle: {}, emphasis: {focus: "series"}});
      }
    }

    return {
      ...basic,
      grid,
      title,
      dataset,
      series,
      legend,
      toolbox,
      tooltip,
      xAxis,
      yAxis,
    };

  },
});
