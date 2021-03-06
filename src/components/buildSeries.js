const DEFAULT_GET_OPTIONS = function (options = {}) {
  return options;
};

export default ({
                  getOptions = DEFAULT_GET_OPTIONS,
                  name = "grapesjs-echarts.components.MY_COMPONENT.name",
                }) => {
  return function (editor) {
    return {
      extend: "default",
      model: {
        init() {
          this.on("change:attributes:data-ecg-series", this.updateChart);
          this.on("change:attributes:data-ecg-theme", this.updateChart);
          this.on("change:attributes:data-ecg-title", this.updateChart);
          this.on("change:attributes:data-ecg-grid", this.updateChart);
          this.on("change:attributes:data-ecg-basic", this.updateChart);
          this.on("change:attributes:data-ecg-tooltip", this.updateChart);
          this.on("change:attributes:data-ecg-toolbox", this.updateChart);
          this.on("change:attributes:data-ecg-legend", this.updateChart);
          this.on("change:attributes:data-ecg-x-axis", this.updateChart);
          this.on("change:attributes:data-ecg-y-axis", this.updateChart);
          this.on("change:attributes:data-ecg-radius-axis", this.updateChart);
          this.on("change:attributes:data-ecg-angle-axis", this.updateChart);
          this.on("change:attributes:data-ecg-single-axis", this.updateChart);
          this.on("change:attributes:data-ecg-parallel-axis", this.updateChart);
          setTimeout(() => {
            this.updateChart();
          }, 100);
        },
        updateChart() {
          //基础项
          const basic = JSON.parse(this.get("attributes")["data-ecg-basic"] || "{}");
          const tooltip = JSON.parse(this.get("attributes")["data-ecg-tooltip"] || "{}");
          const title = JSON.parse(this.get("attributes")["data-ecg-title"] || "{}");
          const series = JSON.parse(this.get("attributes")["data-ecg-series"] || "[]");
          const grid = JSON.parse(this.get("attributes")["data-ecg-grid"] || "{}");
          const toolbox = JSON.parse(this.get("attributes")["data-ecg-toolbox"] || "{}");
          const legend = JSON.parse(this.get("attributes")["data-ecg-legend"] || "{}");
          const theme = this.get("attributes")["data-ecg-theme"] || null;


          const xAxis = JSON.parse(this.get("attributes")["data-ecg-x-axis"] || "{}");
          const yAxis = JSON.parse(this.get("attributes")["data-ecg-y-axis"] || "{}");
          const radiusAxis = JSON.parse(this.get("attributes")["data-ecg-radius-axis"] || "{}");
          const angleAxis = JSON.parse(this.get("attributes")["data-ecg-angle-axis"] || "{}");
          const singleAxis = JSON.parse(this.get("attributes")["data-ecg-single-axis"] || "{}");
          const parallelAxis = JSON.parse(this.get("attributes")["data-ecg-parallel-axis"] || "{}");

          const option = this.getOptions({
            basic,
            tooltip,
            toolbox,
            legend,
            series,
            title,
            grid,
            xAxis,
            yAxis,
            radiusAxis,
            angleAxis,
            singleAxis,
            parallelAxis
          });

          // console.log(option)
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
            this.addAttributes({"data-ecg-options": JSON.stringify(options)});
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
              type: "echarts-tooltip-trait"
            },
            {
              type: "echarts-toolbox-trait"
            },
            {
              type: "echarts-legend-trait"
            },
            {
              type: "echarts-single-axis-trait"
            },
            {
              type: "echarts-x-axis-trait"
            },
            {
              type: "echarts-y-axis-trait"
            },
            {
              type: "echarts-radius-axis-trait"
            },
            {
              type: "echarts-angle-axis-trait"
            },
            {
              type: "echarts-parallel-axis-trait"
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
        onRender({model}) {
          setTimeout(() => {
            model.updateChart();
          }, 50);
        },
      },
    };
  };
};
