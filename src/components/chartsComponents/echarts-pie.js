import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.pie.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic=options.basic ||{};
    const grid = options.grid || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    const series = [

      {
        type: "pie",
        radius:'50%',
        data: map.map(({ value, color, label }) => ({
          value,
          name: label,
          itemStyle: { color },
        })),
      },

    ];
    return  {
      ...basic,
      grid,
      title,
      toolbox,
      series,
      selectedMode: 'single',
      legend,
      tooltip
    };

  },
});