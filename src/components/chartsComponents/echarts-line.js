import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.line.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic = options.basic ||{};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || {};

    const series = [
      {
        type: "line",
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
      tooltip,
      xAxis,
      yAxis: [
        {
          type: "value",
        },
      ],
    };

  },
});
