<template>
    <chart-section :title="t('grapesjs-echarts-presets.config.grid.label')">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

          <ep-check-box v-model="grid.show" :label="t('grapesjs-echarts-presets.config.grid.show.label')"></ep-check-box>


          <ep-number-input v-model="grid.zlevel" :label="t('grapesjs-echarts-presets.config.grid.zlevel.label')" ></ep-number-input>
          <ep-number-input v-model="grid.z" :label="t('grapesjs-echarts-presets.config.grid.z.label')" ></ep-number-input>
          <ep-check-box v-model="grid.containLabel" :label="t('grapesjs-echarts-presets.config.grid.containLabel.label')"></ep-check-box>
<!--        position-->


          <ep-color-picker v-model="grid.borderColor" :label="t('grapesjs-echarts-presets.config.grid.borderColor.label')"></ep-color-picker>

            <ep-number-input v-model="grid.borderWidth" :label="t('grapesjs-echarts-presets.config.grid.borderWidth.label')" ></ep-number-input>


          <ep-color-picker v-model="grid.shadowColor" :label="t('grapesjs-echarts-presets.config.grid.shadowColor.label')"></ep-color-picker>
          <ep-number-input v-model="grid.shadowBlur" :label="t('grapesjs-echarts-presets.config.grid.shadowBlur.label')" ></ep-number-input>
          <ep-position :use-unit="true" :t="t" v-model="positions" :title="t('grapesjs-echarts-presets.config.grid.position.label')"></ep-position>
        </div>
    </chart-section>
</template>

<script>
//已完成，待完善
import EpCheckBox from "../basic-template/checkbox";
import EpSelect from "../basic-template/select";
import EpInput from "../basic-template/input";
import EpNumberInput from "../basic-template/number-input";
import EpOption from "../basic-template/option";
import EpColorPicker from "../basic-template/color-picker";
  import ChartSection from "../widgets/chart-section";
  import EpPosition from "../basic-template/position-selector"

  export default {
    name: "grid-editor",
    props: ["t", "editor", "onChange"],
    components: {
      ChartSection,
      EpNumberInput,
      EpOption,
      EpInput,
      EpCheckBox,
      EpSelect,
      EpColorPicker,
      EpPosition
    },
    data() {
      return {
        grid: {
          show: false,
          zlevel: 0,
          z: 2,
          left: "10%",
          top: "60px",
          right: "10%",
          bottom: "60px",
          containLabel: false,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: [0, 0, 0, 0],
          shadowBlur: 0,
          shadowColor: "rgba(0, 0, 0, 0)",
          shadowOffsetX: 0,
          shadowOffsetY: 0
        },
        positions: {
          top:'',
          right:'',
          bottom:'',
          left: ''
        },
        units: ["px", "%", "em", "rem", "vh", "vw"],
      };
    },
    watch: {
      grid: {
        handler() {
          this.onChange();
        },
        deep: true
      },
      positions: {
        handler(newValue) {
          this.grid.top = newValue.top;
          this.grid.right = newValue.right;
          this.grid.bottom = newValue.bottom;
          this.grid.left = newValue.left;
          this.onChange();
        },
        deep: true
      }
    },
    methods: {}
  };
</script>

<style lang='scss' scoped>
    @import "../assets/style";
</style>
