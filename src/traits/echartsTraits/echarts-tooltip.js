import GridEditor from "../../vue/echartsEditors/tooltip-editor.vue";
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
        h(GridEditor, {
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
    const { tooltip } = this.inputInstance;
    // console.log(tooltip)
    component.addAttributes({
      "data-ecg-tooltip": JSON.stringify(tooltip)
    });
    component.clearChart()
    component.view.render();
  },
  onUpdate({ component }) {
    const tooltip = component.getAttributes()["data-ecg-tooltip"] || null;

    if (tooltip) {
      this.inputInstance.tooltip = JSON.parse(tooltip);
    }
  },
};
