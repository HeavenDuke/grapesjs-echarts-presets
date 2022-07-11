import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.funnel.name",
  getOptions: (options) => {
    const map = options.series || [];
    const title = options.title || {};
    const series = [

      {
        type: "funnel",
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        // min: 0,
        // max: 1000,
        // minSize: '0%',
        // maxSize: '100%',
        sort: 'descending',
        // gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
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
        trigger: 'item',
        formatter: '{b} : {c}'
      }
    };

  },
});