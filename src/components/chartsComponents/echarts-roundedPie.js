import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.roundedPie.name",
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
        radius:['25%','50%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
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