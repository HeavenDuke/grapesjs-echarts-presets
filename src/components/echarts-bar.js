import build from "./buildSeries";
export default build({
  name: "grapesjs-echarts.components.bars.name",
  getOptions: (newSeries) => {
    const map = JSON.parse(newSeries);
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
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
    const options = {
    return {
      title,
      series,
      xAxis,
      yAxis: [
        {
          type: "value",
        },
      ],
    };

    return options;
  },
});
