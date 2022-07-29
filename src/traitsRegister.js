import options from "./options"
import main from "@/vue/index"

function constructTrait(ec_option) {
  return {
    noLabel: true,
    createInput({component}){
      const editor = component.em.get("Editor");
      const intl = editor.I18n;
      const { Vue } = editor;
      let option = ec_option((key) => intl.t(key), component.attributes.multiple)
      Vue.use({
        install(instance, options) {
          Vue.prototype.$t = (key) => intl.t(key)
        }
      });
      let vueInstance = new Vue({
        render: (h) =>
          h(main, {
            props: {
              editor,
              meta: option,
              onChange: () => this.onEvent({ component }),
            },
          }),
      }).$mount();
      const [inputInstance] = vueInstance.$children;
      this.inputInstance = inputInstance;
      return vueInstance.$el;
    },
    onEvent({component}){
      const { options, meta } = this.inputInstance;
      let attributes = {}
      // console.log(`data-ecg-${meta.name}`, options)
      attributes[`data-ecg-${meta.name}`] = JSON.stringify(options)
      component.addAttributes(attributes);
      component.clearChart()
      component.view.render();
    },
    onUpdate({component}){
      const index = component.getAttributes()[`data-ecg-${this.inputInstance.meta.name}`] || null;
      // console.log(index)
      if (index) {
        this.inputInstance.options = JSON.parse(index);
        // console.log(this.inputInstance.options)
      }
    }
  }
}

export default (editor) => {
  const tm = editor.TraitManager;
  Object.entries(options).map(([name, ec_option]) => {
    tm.addType(`echarts-${name}-trait`, constructTrait(ec_option));
  });
};
