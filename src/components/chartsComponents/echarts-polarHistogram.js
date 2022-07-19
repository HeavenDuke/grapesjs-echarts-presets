import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.polarHistogram.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic=options.basic ||{};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
    const series = [
      {
        type: "bar",
        data: map.map(({ value, color, label }) => ({
          value,
          name: label,
          itemStyle: { color },
        })),
        coordinateSystem: 'polar',
      },
    ];

    const radiusAxis = [
      {
        type:'category',
        data: map.map(({ label }) => label),
      },
    ];
    return {
      ...basic,
      grid,
      title,
      series,
      toolbox,
      radiusAxis,
      angleAxis:{

      },
      legend,
      tooltip,
      polar:{
        radius:[30,'80%']
      }
    };
  },
});
