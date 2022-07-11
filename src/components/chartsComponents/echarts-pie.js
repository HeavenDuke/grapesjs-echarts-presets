import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.pie.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const series = [

      {
        type: "pie",
        radius:'50%',
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
      selectedMode: 'single',
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