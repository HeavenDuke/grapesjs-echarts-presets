import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.rose.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const basic=options.basic ||{};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    const series = [

      {
        type: "pie",
        data: map.map(({ value, color, label }) => ({
          value,
          name: label,
          itemStyle: { color },
        })).sort(function (a, b) {
            return a.value - b.value;
          }),
        radius: ['25%', '65%'],
        roseType: 'area',

      },

    ];
    return  {
      ...basic,
      grid,
      title,
      toolbox,
      series,
      legend,
      tooltip
    };

  },
});