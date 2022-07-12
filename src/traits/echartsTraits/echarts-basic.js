import BasicEditor from "../../vue/basic-editor"

export default {
  noLabel:true,
  createInput({component}){
    const editor=component.em.get("Editor");
    const intl =editor.I18n;
    const {Vue}=editor;
    const vueInstance = new Vue({
      render: (h) =>
        h(BasicEditor, {
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
  onEvent({component}){
    const { basic } = this.inputInstance;

    component.addAttributes({
      "data-ecg-basic": JSON.stringify(basic)
    });
    component.clearChart()
    component.view.render();
  },
  onUpdate({component}){
    const basic = component.getAttributes()["data-ecg-basic"] || null;

    if (basic) {
      this.inputInstance.grid = JSON.parse(basic);
    }
  },

}