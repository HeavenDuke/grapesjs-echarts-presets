import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.scatter.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic=options.basic ||{};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || null;
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
    // const tooltip={
    //   formatter: 'Group {a}: ({c})'
    // }

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
      tooltip,
      yAxis: [
        {
          type: "value",
        },
      ],
    };
  },
});
