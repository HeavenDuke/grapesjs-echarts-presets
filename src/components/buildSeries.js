import {extractOptions, toChangeName} from "@/options/shared";
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
          this.on("change:attributes:data-ecg-x-axis", this.updateChart);
          this.on("change:attributes:data-ecg-y-axis", this.updateChart);
          this.on("change:attributes:data-ecg-polar", this.updateChart);
          this.on("change:attributes:data-ecg-radius-axis", this.updateChart);
          this.on("change:attributes:data-ecg-angle-axis", this.updateChart);
          this.on("change:attributes:data-ecg-radar", this.updateChart);
          this.on("change:attributes:data-ecg-parallel", this.updateChart);
          this.on("change:attributes:data-ecg-parallel-axis", this.updateChart);
        },
        updateChart(component, value) {
          let changedAttr = null
          let attributes = this.get("attributes")
          for(let key in attributes) {
            if (attributes[key] === value) {
              changedAttr = key
            }
          }

          let options = {}
          for(let i = 0; i < this.attributes.traits.models.length; i++) {
            let trait = this.attributes.traits.models[i]
            let name = trait.attributes.type
            let option_name = name.match(/echarts-(.*)-trait/)[1]
            options[option_name] = JSON.parse(this.get("attributes")[`data-ecg-${option_name}-filtered`] || "{}")
          }

          this.renderChart(options);
          if (changedAttr) {
            this.syncTraits(changedAttr, options)
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
          const option = this.getOptions(options)
          console.log(option)
          this.addAttributes({"data-ecg-options-finalized": JSON.stringify(option)})
          if (option) {
            let that = this

            setTimeout(function () {
              const chart = editor.echarts.init(that.view.el, {
                renderer: "canvas",
              })

              chart.setOption(option)

              that.chart = chart
            }, 10)
          }
          this.addAttributes({"data-ecg-options": JSON.stringify(options)})
        },
        defaults: {
          // Default props
          name: editor.I18n.t(name),
          resizable: true,
          multiple,
          script: function() {
            if (!window.$grapesEcharts) {
              window.$grapesEcharts = {
                themes: [],
              };
            }
            const options = JSON.parse(this.getAttribute("data-ecg-options-finalized"));
            const theme = this.getAttribute("data-ecg-theme") || null;
            const init = () => {
              try {
                const instance = echarts.getInstanceByDom(this);
                if (instance) {
                  echarts.dispose(instance);
                }
                const chart = echarts.init(this, theme);
                if (options) {
                  chart.setOption(options);
                }
              } catch (e) {
                console.log(e);
              }
            };
            const themeCheck = () => {
              if (theme) {
                if (!window.$grapesEcharts.themes.includes(theme)) {
                  const script = document.createElement("script");
                  script.onload = init;
                  window.$grapesEcharts.themes.push(theme);
                  script.src = `https://unpkg.com/echarts@4.6.0/theme/${theme}.js`;
                  document.body.appendChild(script);
                } else {
                  init();
                }
              } else {
                init();
              }
            };
            if (typeof echarts === "undefined") {
              const script = document.createElement("script");
              script.onload = themeCheck;
              script.src =
                "https://cdnjs.cloudflare.com/ajax/libs/echarts/4.6.0/echarts-en.min.js";
              document.body.appendChild(script);
            } else {
              themeCheck();
            }
          },
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
              type: "echarts-tooltip-trait"
            },
            {
              type: "echarts-toolbox-trait"
            },
            {
              type: "echarts-legend-trait"
            },
            {
              type: "echarts-series-trait",
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
