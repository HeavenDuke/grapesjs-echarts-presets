<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.toolbox.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <ep-check-box v-model="toolbox.show"
                    :label="t('grapesjs-echarts-presets.config.toolbox.show.label')"></ep-check-box>
      <ep-select v-model="toolbox.orient" :label="t('grapesjs-echarts-presets.config.toolbox.orient.label')"
                 :placeholder="t('grapesjs-echarts-presets.config.toolbox.orient.placeholder')">
        <ep-option value="horizontal">horizontal</ep-option>
        <ep-option value="vertical">vertical</ep-option>
      </ep-select>
      <ep-number-input v-model="toolbox.itemSize"
                       :label="t('grapesjs-echarts-presets.config.toolbox.itemSize.label')"></ep-number-input>
      <ep-number-input v-model="toolbox.itemGap"
                       :label="t('grapesjs-echarts-presets.config.toolbox.itemGap.label')"></ep-number-input>
      <ep-check-box v-model="toolbox.showTitle"
                    :label="t('grapesjs-echarts-presets.config.toolbox.showTitle.label')"></ep-check-box>
      <div class="gjs-sm-label" data-sm-label="">
            <span class="gjs-sm-icon " title="position">
              {{ t("grapesjs-echarts-presets.config.toolbox.feature.label") }}
            </span>
      </div>
      <div class="gjs-trt-trait">
        <div class="gjs-sm-field gjs-sm-composite">
          <span>
            <ep-check-box v-for="(val, index) in toolbox.feature" :key="index" v-model="val.show" :label="index"></ep-check-box>
          </span>
        </div>
      </div>
      <ep-number-input v-model="toolbox.zlevel" :label="t('grapesjs-echarts-presets.config.toolbox.zlevel.label')"/>
      <ep-number-input v-model="toolbox.z" :label="t('grapesjs-echarts-presets.config.toolbox.z.label')"/>
      <!--        position-->
      <div class="gjs-trt-trait">
        <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full" style="">
          <div class="gjs-sm-label" data-sm-label="">
            <span class="gjs-sm-icon " title="position">
              {{ t("grapesjs-echarts-presets.config.toolbox.position.label") }}
            </span>
          </div>
          <div class="gjs-fields" data-sm-fields="">
            <div class="gjs-sm-field gjs-sm-composite">
              <span id="gjs-sm-input-holder">
                <div class="gjs-sm-properties">
                  <div :key="pos.name" v-for="pos in positions"
                       class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                    <div class="gjs-sm-label" data-sm-label="">
                      <span class="gjs-sm-icon "
                            title="">{{ t(`grapesjs-echarts-presets.dict.position.${pos.name}`) }}</span>
                      <!--                      标题×符号 -->
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
                          <input v-model="pos.value" type="text">
                        </span>
                        <span class="gjs-field-units">
                          <select v-model="pos.unit" class="gjs-input-unit">
                            <option value="" disabled="" hidden="">-</option>
                            <option :key="unit" v-for="unit in units">{{ unit }}</option>
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


    </div>
  </chart-section>
</template>

<script>
import ChartSection from "../widgets/chart-section";
import EpCheckBox from "../editor-components/checkbox";
import EpSelect from "../editor-components/select";
import EpInput from "../editor-components/input";
import EpNumberInput from "../editor-components/number-input";
import EpOption from "../editor-components/option";
import EpColorPicker from "../editor-components/color-picker";
import EpTextArea from "../editor-components/textarea";

export default {
  name: "toolbox-editor",
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    EpColorPicker,
    EpSelect,
    EpCheckBox,
    EpInput,
    EpOption,
    EpNumberInput,
    EpTextArea
  },
  data() {
    return {
      toolbox: {
        show: true,
        orient: "",
        itemSize: 15,
        itemGap: 8,
        showTitle: true,
        feature: {
          saveAsImage: {show: true},
          restore: {show: true},
          dataView: {show: true},
          dataZoom:{show:true},
          magicType: {show: true},
          brush: {show: true}
        },
        iconStyle: {},
        emphasis: {},
        zlevel: 0,
        z: 2,
        left: "",
        top: "",
        right: "",
        bottom: "",
        width: "",
        height: ""
      },
      positions: [{
        name: "top",
        value: "auto",
        unit: "px"
      }, {
        name: "right",
        value: "auto",
        unit: "%"
      }, {
        name: "bottom",
        value: "auto",
        unit: "px"
      }, {
        name: "left",
        value: "auto",
        unit: "%"
      }],
      units: ["px", "%", "em", "rem", "vh", "vw"],
    };
  },
  watch: {
    toolbox: {
      handler() {
        // this.toolbox.feature={...this.toolbox.feature};
        this.onChange();
      },
      deep: true
    },

    positions: {
      handler(newValue) {
        for (let i = 0; i < newValue.length; i++) {
          let pos = newValue[i];
          this.toolbox[pos.name] = `${pos.value}${pos.unit}`;
        }
        this.onChange();
      },
      deep: true
    }
  },
};
</script>

<style lang='scss' scoped>
@import "../assets/style";
</style>