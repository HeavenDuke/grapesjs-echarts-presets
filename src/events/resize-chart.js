export default {
  listenTo: ["style:property:update"],
  action({ property }) {
    const editor = this.get("Editor");
    const component = editor.getSelected();
    editor.registeredComponents.map((name) => {
      if (component.is(name)) {
        const instanceId = component.view.el.getAttribute("_echarts_instance_");
        if (instanceId) {
          const instance = editor.echarts.getInstanceById(instanceId);
          if (instance) {
            component.chart = instance;
          }
        }

        if (component.chart && ["width", "height", "max-width", "max-height"].includes(property.id)) {
          component.chart.resize();
        }
      }
    });
  },
};
