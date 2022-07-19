import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.scatter.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic=options.basic ||{};
    const title = options.title || {};
    const grid = options.grid || {};
    const tooltip = options.tooltip || null;
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};
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
      toolbox,
      xAxis,
      tooltip,
      legend,
      yAxis: [
        {
          type: "value",
        },
      ],
    };
  },
});
