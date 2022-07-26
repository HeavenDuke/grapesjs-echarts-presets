<template>
  <div>
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color aa">
      <div v-for="(item,index) in meta" :key="index">
        <ep-list-editor v-if="item.array" :label="item.label" v-model="value[item.name]">
          <template v-slot:default="scope">
            <ep-input v-if="item.type==='String'" v-model="scope.item" :placeholder="item.placeholder"></ep-input>
            <ep-color-picker v-else-if="item.type==='Color'" v-model="scope.item"></ep-color-picker>
            <ep-number-input v-else-if="item.type==='Number'" v-model="scope.item" :step="item.step"
                             :max="item.max" :min="item.min"></ep-number-input>
            <ep-select v-else-if="item.type==='Enum'" v-model="scope.item" :placeholder="item.placeholder">
              <ep-option v-for="val in item.candidate" :value="val.value || val" :label="val.name||val"></ep-option>
            </ep-select>
          </template>
        </ep-list-editor>
        <ep-input v-else-if="item.type==='String'" v-model="value[item.name]" :label="item.label"
                  :placeholder="item.placeholder"></ep-input>
        <ep-check-box v-else-if="item.type==='Boolean'" v-model="value[item.name]" :label="item.label"></ep-check-box>
        <ep-color-picker v-else-if="item.type==='Color'" v-model="value[item.name]" :label="item.label"></ep-color-picker>
        <ep-number-input v-else-if="item.type==='Number'" v-model="value[item.name]" :label="item.label" :step="item.step"
                         :max="item.max" :min="item.min"></ep-number-input>
        <ep-text-area v-else-if="item.type==='Text'" v-model="value[item.name]" :label="item.label"
                      :placeholder="item.placeholder"></ep-text-area>
        <ep-select v-else-if="item.type==='Enum'" v-model="value[item.name]" :label="item.label" :placeholder="item.placeholder">
          <ep-option v-for="val in item.candidate" :value="val.value || val" :label="val.name||val"></ep-option>
        </ep-select>
        <ep-size v-else-if="item.type ==='Size'" :use-unit="item.useUnit" :label="item.label" v-model="value[item.name]"></ep-size>
        <ep-function v-else-if="item.type ==='Function'" :label="item.label" v-model="value[item.name]"></ep-function>
        <ep-position v-else-if="item.type==='Position'" :title="item.label" v-model="value[item.name]" :use-unit="item.useUnit"></ep-position>
        <ep-more v-else-if="item.type==='Object'" :label="item.label">
          <recursion-list v-model="value[item.name]" :meta="item.children"></recursion-list>
        </ep-more>
      </div>
    </div>
  </div>
</template>

<script>
// import ChartSection from "./widgets/chart-section";
import EpListEditor from "./basic-template/list-editor"
import EpCheckBox from "./basic-template/checkbox";
import EpSelect from "./basic-template/select";
import EpInput from "./basic-template/input";
import EpNumberInput from "./basic-template/number-input";
import EpOption from "./basic-template/option";
import EpColorPicker from "./basic-template/color-picker";
import EpTextArea from "./basic-template/textarea";
import EpFunction from "./basic-template/function-editor"
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
    EpListEditor,
    EpFunction,
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
