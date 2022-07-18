import AxisEditor from "../../vue/echartsEditors/radius-axis-editor.vue";
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
        h(AxisEditor, {
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
    const { axis } = this.inputInstance;
    component.addAttributes({
      "data-ecg-radius-axis": JSON.stringify(axis)
    });
    component.clearChart()
    component.view.render();
  },
  onUpdate({ component }) {
    const axis = component.getAttributes()["data-ecg-radius-axis"] || null;

    if (axis) {
      this.inputInstance.axis = JSON.parse(axis);
    }
  },
};
