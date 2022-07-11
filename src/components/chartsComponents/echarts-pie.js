import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.pie.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const series = [

      {
        type: "pie",
        data: map.map(({ value, color, label }) => ({
          value,
          name: label,
          itemStyle: { color },
        })),
      },

    ];
    return  {
      title,
      series,
      legend: {
        bottom:'5%',
        left:'center'
      },
      tooltip: {
        trigger: 'item'
      }
    };

  },
});