import { extractOptions } from "@/options/shared"
const DEFAULT_GET_OPTIONS = function (options = {}) {
  return options
}

export default ({
                  getOptions = DEFAULT_GET_OPTIONS,
                  name = "grapesjs-echarts.components.MY_COMPONENT.name",
                  multiple = false
                }) => {
  return function (editor) {
    return {
      extend: "default",
      model: {
        init() {
          this.on("change:attributes:data-ecg-series", this.updateChart);
          this.on("change:attributes:data-ecg-theme", this.updateChart);
          this.on("change:attributes:data-ecg-title", this.updateChart);
          this.on("change:attributes:data-ecg-basic", this.updateChart);
          this.on("change:attributes:data-ecg-tooltip", this.updateChart);
          this.on("change:attributes:data-ecg-toolbox", this.updateChart);
          this.on("change:attributes:data-ecg-legend", this.updateChart);
          this.on("change:attributes:data-ecg-dataset", this.updateChart);
          this.on("change:attributes:data-ecg-single-axis", this.updateChart);
          this.on("change:attributes:data-ecg-grid", this.updateChart);
          this.on("change:attributes:data-ecg-xAxis", this.updateChart);
          this.on("change:attributes:data-ecg-yAxis", this.updateChart);
          this.on("change:attributes:data-ecg-polar", this.updateChart);
          this.on("change:attributes:data-ecg-radius-axis", this.updateChart);
          this.on("change:attributes:data-ecg-angle-axis", this.updateChart);
          this.on("change:attributes:data-ecg-radar", this.updateChart);
          this.on("change:attributes:data-ecg-parallel", this.updateChart);
          this.on("change:attributes:data-ecg-parallel-axis", this.updateChart);
          setTimeout(() => {
            this.updateChart();
          }, 100);
        },
        updateChart(component, value) {
          let changedAttr = null
          let attributes = this.get("attributes")
          for(let key in attributes) {
            if (attributes[key] === value) {
              changedAttr = key
            }
          }

          function toUpper(str){
            return str.toLowerCase().replace(/( |^)[a-z]/g,(L)=>L.toUpperCase());
          }
          let options = {}
          for(let i = 0; i < this.attributes.traits.models.length; i++) {
            let trait = this.attributes.traits.models[i]
            let name = trait.attributes.type
            // console.log(name)
            let option_name = name.match(/echarts-(.*)-trait/)[1]
            if(option_name.split('-').length>1){
              let a = option_name.split('-')[0]
              let b = option_name.split('-')[1]
              option_name=a+toUpper(b)
              // console.log(option_name)
            }

            options[option_name] = JSON.parse(this.get("attributes")[`data-ecg-${option_name}-filtered`] || "{}")
          }

          const option = this.getOptions(options);

          this.renderChart(option);
          if (changedAttr) {
            this.syncTraits(changedAttr, option)
          }
        },
        getOptions,
        clearChart() {
          if (this.chart) {
            editor.echarts.dispose(this.chart);
          }
        },
        syncTraits (source) {
          for(let i = 0; i < this.attributes.traits.models.length; i++) {
            try {
              let trait = this.attributes.traits.models[i]
              trait.view.onUpdate({ component: this })
            }
            catch (err) {}
          }
        },
        renderChart(options) {
          if (options) {
            const chart = editor.echarts.init(this.view.el, {
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
          multiple,
          traits: [
            {
              type: "echarts-basic-trait",
            },
            {
              type: "echarts-dataset-trait"
            },
            {
              type: "echarts-title-trait"
            },
            {
              type: "echarts-single-axis-trait"
            },
            {
              type: "echarts-grid-trait"
            },
            {
              type: "echarts-x-axis-trait"
            },
            {
              type: "echarts-y-axis-trait"
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
              type: "echarts-polar-trait"
            },
            {
              type: "echarts-radius-axis-trait"
            },
            {
              type: "echarts-angle-axis-trait"
            },
            {
              type: "echarts-parallel-trait"
            },
            {
              type: "echarts-parallel-axis-trait"
            },
            {
              type: "echarts-radar-trait"
            },
            {
              type: "echarts-geo-trait"
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
