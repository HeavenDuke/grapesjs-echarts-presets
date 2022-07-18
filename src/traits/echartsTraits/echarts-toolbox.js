import ToolboxEditor from "../../vue/echartsEditors/toolbox-editor.vue";
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
        h(ToolboxEditor, {
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
    const { toolbox } = this.inputInstance;
    // console.log(toolbox)
    component.addAttributes({
      "data-ecg-toolbox": JSON.stringify(toolbox)
    });
    component.clearChart()
    component.view.render();
  },
  onUpdate({ component }) {
    const toolbox = component.getAttributes()["data-ecg-toolbox"] || null;

    if (toolbox) {
      this.inputInstance.toolbox = JSON.parse(toolbox);
    }
  },
};
