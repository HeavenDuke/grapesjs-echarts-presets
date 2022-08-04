import build from "../buildSeries";

export default build({
  name: "grapesjs-echarts.components.pie.name",
  getOptions: (options) => {
    let map = options.series || {};
    const basic = options.basic || {};
    const grid = options.grid || {};
    const title = options.title || {};
    const tooltip = options.tooltip || {};
    const toolbox = options.toolbox || {};
    const legend = options.legend || {};

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
    let series = {
      ...map, type: "pie", radius: "60%", label: {show: true}
    };

    console.log(series)

    // console.log(series,dataset)
    return {
      ...basic,
      grid,
      title,
      dataset,
      toolbox,
      series,
      legend,
      tooltip
    };

  },
});