import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.polarHistogram.name",
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
      title,
      series,
      radiusAxis,
      angleAxis:{

      },
      tooltip: {},
      polar:{
        radius:[30,'80%']
      }
    };
  },
});
