import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.scatter.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
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
