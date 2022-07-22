import main from "@/vue/index"
import { options } from "@/vue/utils/options"
let title='grid';
export default {
  noLabel:true,
  createInput({component}){
    const editor=component.em.get("Editor");
    const intl =editor.I18n;
    const {Vue}=editor;
    let option = options((key) => intl.t(key))
    const vueInstance = new Vue({
      render: (h) =>
        h(main, {
          props: {
            title: title,
            meta: option,
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
    const { options } = this.inputInstance;
    console.log(options)
    component.addAttributes({
      [`data-ecg-${title}`]: JSON.stringify(options)
    });
    component.clearChart()
    component.view.render();
  },
  onUpdate({component}){
    const index = component.getAttributes()[`data-ecg-${title}`] || null;
    if (index) {
      this.inputInstance.options = JSON.parse(index);
    }
  },

}