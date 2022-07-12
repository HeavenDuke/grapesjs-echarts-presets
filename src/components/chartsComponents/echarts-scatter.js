import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.scatter.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic=options.basic ||{};
    const title = options.title || {};
    const grid = options.grid || {};
    const series = [
      {
        type: "scatter",
        data: map.map(({ value, color, label }) => ({
          value,
          name: label,
          itemStyle: { color },
        })),
      },
    ];

    const xAxis = [
      {
        data: map.map(({ label }) => label),
      },
    ];
    return {
      ...basic,
      grid,
      title,
      series,
      xAxis,
      tooltip: {
        formatter: 'Group {a}: ({c})'
      },
      yAxis: [
        {
          type: "value",
        },
      ],
    };
  },
});
