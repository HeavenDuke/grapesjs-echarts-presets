import options from "./options"
import main from "@/vue/index"
import {extractOptions} from "@/options/shared";

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
      let overall = JSON.parse(component.get("attributes")["data-ecg-options"] || "{}")
      overall[meta.name] = options
      let attributes = {}, name = `data-ecg-${meta.name}`
      attributes[name] = JSON.stringify(options)
      attributes[`${name}-filtered`] = JSON.stringify(extractOptions(overall, meta, options))
      if (component.get("attributes")[name] !== attributes[name]) {
        component.addAttributes(attributes);
        component.clearChart()
        component.view.render();
      }
    },
    onUpdate({component}){
      const index = component.getAttributes()[`data-ecg-${this.inputInstance.meta.name}`] || null;
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
