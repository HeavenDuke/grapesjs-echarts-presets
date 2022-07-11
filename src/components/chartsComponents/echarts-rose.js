import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.rose.name",
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
        })).sort(function (a, b) {
            return a.value - b.value;
          }),
        radius: ['25%', '75%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
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