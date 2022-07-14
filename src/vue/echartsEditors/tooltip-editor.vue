<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.tooltip.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
<!--      内容区-->

      <check-box :label="t('grapesjs-echarts-presets.config.tooltip.show.label')" v-model="tooltip.show"></check-box>
      <Select :label="t('grapesjs-echarts-presets.config.tooltip.trigger')" v-model="tooltip.trigger" :data="trigger"></Select>
      <check-box :label="t('grapesjs-echarts-presets.config.tooltip.showContent.label')" v-model="tooltip.showContent"></check-box>
      <check-box :label="t('grapesjs-echarts-presets.config.tooltip.alwaysShowContent.label')" v-model="tooltip.alwaysShowContent"></check-box>
      <Select :label="t('grapesjs-echarts-presets.config.tooltip.triggerOn')" v-model="tooltip.triggerOn" :data="triggerOn"></Select>
      <Input :label="t('grapesjs-echarts-presets.config.tooltip.showDelay.label')" Type="number" v-model="tooltip.showDelay"></Input>
      <Input :label="t('grapesjs-echarts-presets.config.tooltip.hideDelay.label')" Type="number" v-model="tooltip.hideDelay"></Input>


      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="enterable">{{t('grapesjs-echarts-presets.config.tooltip.enterable.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
          <label class="gjs-field gjs-field-checkbox" data-input="">
            <input type="checkbox" v-model="tooltip.enterable">
            <i class="gjs-chk-icon"></i>
          </label>
        </div>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="triggerOn">{{t('grapesjs-echarts-presets.config.tooltip.renderMode.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text">
          <div class="gjs-field gjs-select">

            <select v-model="tooltip.renderMode" data-input>
              <option disabled selected>{{t('grapesjs-echarts-presets.config.tooltip.renderMode.placeholder')}}</option>
              <option  v-for="val in renderMode" :value="val">{{val}}</option>
            </select>
            <div class="gjs-sel-arrow">
              <div class="gjs-d-s-arrow"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="confine">{{t('grapesjs-echarts-presets.config.tooltip.confine.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
          <label class="gjs-field gjs-field-checkbox" data-input="">
            <input type="checkbox" v-model="tooltip.confine">
            <i class="gjs-chk-icon"></i>
          </label>
        </div>
      </div>

<!--      <CheckBox :data="tooltip.appendToBody" :show-name="t('grapesjs-echarts-presets.config.tooltip.appendToBody.label')"></CheckBox>-->
      <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
          <div class="gjs-label" title="appendToBody">{{t('grapesjs-echarts-presets.config.tooltip.appendToBody.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
          <label class="gjs-field gjs-field-checkbox" data-input="">
            <input type="checkbox" v-model="tooltip.appendToBody">
            <i class="gjs-chk-icon"></i>
          </label>
        </div>
      </div>

    </div>
  </chart-section>
</template>

<script>
import CheckBox from "../editor-components/checkbox"
import ChartSection from "../widgets/chart-section"
import Select from "../editor-components/select"
import Input from "../editor-components/input"
export default {
  name: "tooltip-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    CheckBox,
    Select,
    Input
  },
  data() {
    return {
      tooltip: {
        show: true,
        trigger:"item",
        // axisPointer:{},
        showContent:true,
        alwaysShowContent:false,
        triggerOn:"mousemove|click",
        showDelay:'0',
        hideDelay:'100',
        enterable:false,
        renderMode:'html',
        confine:false,
        appendToBody:false,
        // className:'',
        // transitionDuration:'0.4',
        // position:'',
        // formatter:'',
        // valueFormatter:'',
        // backgroundColor:'rgba(50,50,50,0.7)',
        // borderColor:'#333',
        // borderWidth:'0',
        // padding:'5',
        // textStyle:{},
        // extraCssText:'',
        // order:['seriesAsc','seriesDesc','valueAsc','valueDesc']

      },
      trigger:['item','axis','none'],
      triggerOn:['mousemove','click','mousemove|click','none'],
      renderMode:['html','richText'],
      positions: [{
        name: "top",
        value: "60",
        unit: "px"
      }, {
        name: "right",
        value: "10",
        unit: "%"
      }, {
        name: "bottom",
        value: "60",
        unit: "px"
      }, {
        name: "left",
        value: "10",
        unit: "%"
      }],
      units: ["px", "%", "em", "rem", "vh", "vw"],
    };
  },
  watch: {
    tooltip: {
      handler() {
        this.onChange();
      },
      deep: true
    },
    positions: {
      handler(newValue) {
        for (let i = 0; i < newValue.length; i++) {
          let pos = newValue[i];
          this.tooltip[pos.name] = `${pos.value}${pos.unit}`;
        }
        this.onChange();
      },
      deep: true
    }
  },
  methods: {

  }
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>
