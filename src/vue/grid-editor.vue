<template>
    <chart-section :title="t('grapesjs-echarts-presets.config.grid.label')">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="show">{{t('grapesjs-echarts-presets.config.grid.show.label')}}</div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
                    <label class="gjs-field gjs-field-checkbox" data-input="">
                        <input type="checkbox" v-model="grid.show">
                        <i class="gjs-chk-icon"></i>
                    </label>
                </div>
            </div>
            <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full" style="">
                <div class="gjs-sm-label" data-sm-label="">
                    <span class="gjs-sm-icon " title="position">
                        {{t("grapesjs-echarts-presets.config.grid.position.label")}}
                    </span>
                </div>
                <div class="gjs-fields" data-sm-fields="">
                    <div class="gjs-sm-field gjs-sm-composite">
                        <span id="gjs-sm-input-holder">
                            <div class="gjs-sm-properties">
                                <div :key="pos.name" v-for="pos in positions"
                                     class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                                    <div class="gjs-sm-label" data-sm-label="">
                                        <span class="gjs-sm-icon " title="">{{t(`grapesjs-echarts-presets.dict.position.${pos.name}`)}}</span>
                                        <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                            <svg viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="gjs-fields" data-sm-fields="">
                                        <div class="gjs-field gjs-field-integer">
                                            <span class="gjs-input-holder">
                                                <input v-model="pos.value" type="text" placeholder="0">
                                            </span>
                                            <span class="gjs-field-units">
                                                <select v-model="pos.unit" class="gjs-input-unit">
                                                    <option value="" disabled="" hidden="">-</option>
                                                    <option :key="unit" v-for="unit in units">{{unit}}</option>
                                                </select>
                                            </span>
                                            <div class="gjs-field-arrows" data-arrows="">
                                                <div class="gjs-field-arrow-u" data-arrow-up=""></div>
                                                <div class="gjs-field-arrow-d" data-arrow-down=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </chart-section>
</template>

<script>

  import ChartSection from "./widgets/chart-section"

  export default {
    name: "grid-editor",
    props: ["t", "editor", "onChange"],
    components: {
      ChartSection
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
      grid: {
        handler() {
          this.onChange();
        },
        deep: true
      },
      positions: {
        handler(newValue) {
          for (let i = 0; i < newValue.length; i++) {
            let pos = newValue[i];
            this.grid[pos.name] = `${pos.value}${pos.unit}`;
          }
          this.onChange();
        },
        deep: true
      }
    },
    methods: {}
  };
</script>

<style lang='scss' scoped>
    @import "./assets/style.scss";
</style>
