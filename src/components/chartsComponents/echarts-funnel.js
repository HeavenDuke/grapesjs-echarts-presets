import build from "../buildSeries";
export default build({
  name: "grapesjs-echarts.components.funnel.name",
  getOptions: (options) => {
    const map = options.series || [];
    const basic=options.basic ||{};
    const title = options.title || {};
    const grid = options.grid || {};
    const legend = options.legend || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const series = [

      {
        type: "funnel",
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        sort: 'descending',
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
    // const tooltip= {
    //
    //   trigger: 'item',
    //   formatter: '{b} : {c}'
    // }
    return  {
      ...basic,
      grid,
      title,
      legend,
      tooltip,
      toolbox,
      series,


    };

  },
});