<template>
  <div>
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color aa">
      <div v-for="(item,index) in meta" :key="index">
        <ep-input v-if="item.type==='String'" v-model="value[item.name]" :label="item.label"
                  :placeholder="item.placeholder"></ep-input>
        <ep-check-box v-if="item.type==='Boolean'" v-model="value[item.name]" :label="item.label"></ep-check-box>
        <ep-color-picker v-if="item.type==='Color'" v-model="value[item.name]" :label="item.label"></ep-color-picker>
        <ep-number-input v-if="item.type==='Number'" v-model="value[item.name]" :label="item.label" :step="item.step"
                         :max="item.max" :min="item.min"></ep-number-input>
        <ep-text-area v-if="item.type==='Text'" v-model="value[item.name]" :label="item.label"
                      :placeholder="item.placeholder"></ep-text-area>
        <ep-select v-if="item.type==='Enum'" v-model="value[item.name]" :label="item.label" :placeholder="item.placeholder">
          <ep-option v-for="val in item.candidate" :value="val.value || val" :label="val.name||val"></ep-option>
        </ep-select>
        <ep-size v-if="item.type ==='Size'" :use-unit="item.useUnit" :label="item.label" v-model="value[item.name]"></ep-size>
        <ep-position v-if="false"></ep-position>
        <ep-more v-if="item.type==='Object'" :label="item.label">
          <recursion-list v-model="value[item.name]" :meta="item.children"></recursion-list>
        </ep-more>
      </div>
    </div>
  </div>
</template>

<script>
// import ChartSection from "./widgets/chart-section";
import EpCheckBox from "./basic-template/checkbox";
import EpSelect from "./basic-template/select";
import EpInput from "./basic-template/input";
import EpNumberInput from "./basic-template/number-input";
import EpOption from "./basic-template/option";
import EpColorPicker from "./basic-template/color-picker";
import EpTextArea from "./basic-template/textarea";
import EpPosition from "./basic-template/position-selector";
import EpSize from "./basic-template/size-selector";
import EpMore from "./basic-template/editor-more";
import ContentDialog from "./widgets/content-dialog";

export default {
  name: "recursion-list",
  props: {
    meta: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: Object,
    }
  },
  components: {
    // ChartSection,
    EpSize,
    EpColorPicker,
    EpSelect,
    EpCheckBox,
    EpInput,
    EpOption,
    EpNumberInput,
    EpTextArea,
    EpPosition,
    EpMore,
    ContentDialog
  },
  data () {
    return {}
  }
};
</script>

<style scoped>

</style>
