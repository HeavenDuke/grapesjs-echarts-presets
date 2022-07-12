const DEFAULT_GET_OPTIONS = function(options = {}) {
  return options;
};

export default ({
  getOptions = DEFAULT_GET_OPTIONS,
  name = "grapesjs-echarts.components.MY_COMPONENT.name",
}) => {
  return function(editor) {
    return {
      extend: "default",
      model: {
        init() {
          this.on("change:attributes:data-ecg-series", this.updateChart);
          this.on("change:attributes:data-ecg-theme", this.updateChart);
          this.on("change:attributes:data-ecg-title", this.updateChart);
          this.on("change:attributes:data-ecg-grid", this.updateChart);
          this.on("change:attributes:data-ecg-basic", this.updateChart);
          setTimeout(() => {
            this.updateChart();
          }, 100);
        },
        updateChart () {
          //基础项
          const basic = JSON.parse(this.get("attributes")["data-ecg-basic"] || "{}");

          const title = JSON.parse(this.get("attributes")["data-ecg-title"] || "{}");
          const series = JSON.parse(this.get("attributes")["data-ecg-series"] || "[]");
          const grid = JSON.parse(this.get("attributes")["data-ecg-grid"] || "{}");
          const theme = this.get("attributes")["data-ecg-theme"] || null;

          const option = this.getOptions({basic,series, title, grid });

          console.log(grid)
          this.renderChart(option, theme);
        },
        getOptions,
        clearChart() {
          if (this.chart) {
            editor.echarts.dispose(this.chart);
          }
        },
        renderChart(options, theme) {
          if (options) {
            const chart = editor.echarts.init(this.view.el, theme, {
              renderer: "canvas",
            });
            chart.setOption(options);
            this.addAttributes({ "data-ecg-options": JSON.stringify(options) });
            this.chart = chart;
          }
        },
        defaults: {
          // Default props
          name: editor.I18n.t(name),
          resizable: true,
          traits: [
            {
              type: "echarts-basic-trait"
            },
            {
              type: "echarts-grid-trait"
            },
            {
              type: "echarts-title-trait"
            },
            {
              type: "echarts-series-trait",
            }
          ],
        },
      },
      view: {
        onRender({ model }) {
          setTimeout(() => {
            model.updateChart();
          }, 50);
        },
      },
    };
  };
};
