import TitleEditor from "../vue/title-editor.vue";
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
        h(TitleEditor, {
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
    const { title } = this.inputInstance;
    component.addAttributes({
      "data-ecg-title": JSON.stringify(title)
    });
    component.view.render();
  },
  onUpdate({ component }) {
    const title = component.getAttributes()["data-ecg-title"] || null;

    if (title) {
      this.inputInstance.title = JSON.parse(title);
    }
  },
};
