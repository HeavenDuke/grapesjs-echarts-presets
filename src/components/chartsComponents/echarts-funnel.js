import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.funnel.name",
  getOptions: (options) => {
    let map = options.series || {};
    const basic = options.basic || {};
    const title = options.title || {};
    const grid = options.grid || {};
    const legend = options.legend || {};
    let tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};

    let dataset = {
      source: options.dataset.source || [],
      // sourceHeader: options.dataset.sourceHeader || false
    };

    // map = {
    //   dataIndex: map.dataIndex,
    //   name: map.name,
    //   colorBy:map.colorBy,
    //   silent:map.silent,
    //   z:map.z,
    //   zIndex:map.zIndex,
    //   animation: map.animation,
    //   animationDelay: map.animationDelay,
    //   animationDelayUpdate: map.animationDelayUpdate,
    //   animationDuration: map.animationDuration,
    //   animationDurationUpdate: map.animationDurationUpdate,
    //   animationEasing: map.animationEasing,
    //   animationEasingUpdate: map.animationEasingUpdate,
    //   animationThreshold: map.animationThreshold,
    // };
    const series = [
      {
        ...map[0],
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        sort: "descending",
        label: {
          show: true,
          position: "inside"
        }

      },

    ];
    // console.log(series[0],map)
    tooltip.trigger='item';
    tooltip.formatter='{b} : {c}'
    // console.log(map,series)
    return {
      ...basic,
      grid,
      title,
      dataset,
      legend,
      tooltip,
      // toolbox,
      series,


    };

  },
});