export default (editor) => {
  return function({
    icon = 'icon-custom-chart',
    label = "grapesjs-echarts-presets.components.MY-COMPONENT.name",
    type = "my-echart",
    category = "grapesjs-echarts-presets.category",
  }) {
    return {
      label: `<div class="gjs-block-icon iconfont ${icon}"></div> ${editor.I18n.t(label)}`,
      category: `${editor.I18n.t(category)}`,
      content: {
        type,
        tagName: "div",
        style: {
          width: "300px",
          "min-height": "300px",
        },

      },
    };
  };
};
