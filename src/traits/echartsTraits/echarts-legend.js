import LegendEditor from "../../vue/echartsEditors/legend-editor.vue";
export default {
  // Expects as return a simple HTML string or an HTML element
  noLabel: true,
  createInput({ component }) {
    // Construct a vue instance and pass its DOM to grapesjs
    const editor = component.em.get("Editor");
    const intl = editor.I18n;
    const { Vue } = editor;
    const vueInstance = new Vue({
      render: (h) =>
        h(LegendEditor, {
          props: {
            editor,
            t: (key) => intl.t(key),
            onChange: () => this.onEvent({ component }),
          },
        }),
    }).$mount();
    const [inputInstance] = vueInstance.$children;
    this.inputInstance = inputInstance;
    return vueInstance.$el;
  },
  // Update the component based element changes
  onEvent({ component }) {
    const { legend } = this.inputInstance;
    // console.log(legend)
    component.addAttributes({
      "data-ecg-legend": JSON.stringify(legend)
    });
    component.clearChart()
    component.view.render();
  },
  onUpdate({ component }) {
    const legend = component.getAttributes()["data-ecg-legend"] || null;

    if (legend) {
      this.inputInstance.legend = JSON.parse(legend);
    }
  },
};
