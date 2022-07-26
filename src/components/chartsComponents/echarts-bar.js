import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.bars.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const basic=options.basic ||{};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    let xAxis = options.xAxis || {}
    const yAxis = options.yAxis || {}
    const series = [
      {
        type: "bar",
        data: map.map(({ value, color, label }) => ({
          value,
          name: label,
          itemStyle: { color },
        })),
      },
    ];


    xAxis.data = map.map(({ label }) => label)
    return {
      ...basic,
      grid,
      legend,
      title,
      toolbox,
      series,
      xAxis,
      tooltip,
      yAxis
    };
  },
});
