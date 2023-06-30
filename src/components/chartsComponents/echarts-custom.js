import build from "../buildSeries";
import {toChangeName} from "@/options/shared";

export default build({
  name: "grapesjs-echarts.components.custom.name",
  getOptions: (options) => {
    let basic = options.basic || {};
    let result = {...basic};
    for (let attribute in options) {
      if (JSON.stringify(options[attribute]) !== "{}" && attribute !== "basic") {
        let name = attribute;
        if (name.indexOf("-")) {
          name = toChangeName(name);
        }
        result[`${name}`] = options[attribute];
      }
    }
    return result;
  },
  multiple: true
});
