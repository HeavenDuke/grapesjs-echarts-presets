import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.bars.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const grid = options.grid || {};
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

    const xAxis = [
      {
        data: map.map(({ label }) => label),
      },
    ];
    return {
      grid,
      title,
      series,
      xAxis,
      tooltip: {
        trigger: 'item'
      },
      yAxis: [
        {
          type: "value",
        },
      ],
    };
  },
});
