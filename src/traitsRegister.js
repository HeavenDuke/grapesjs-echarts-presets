import options from "./options";
import main from "@/vue/index"

function constructTrait(ec_option) {
  let name = ec_option.name;
  return {
    noLabel: true,
    createInput({component}){
      const editor = component.em.get("Editor");
      const intl = editor.I18n;
      const { Vue } = editor;
      let option = ec_option((key) => intl.t(key))
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
      const { options } = this.inputInstance;
      component.addAttributes({
        [`data-ecg-${name}`]: JSON.stringify(options)
      });
      component.clearChart()
      component.view.render();
    },
    onUpdate({component}){
      const index = component.getAttributes()[`data-ecg-${name}`] || null;
      if (index) {
        this.inputInstance.options = JSON.parse(index);
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
