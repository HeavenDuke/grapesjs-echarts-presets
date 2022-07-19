<template>
  <chart-section :title="t('grapesjs-echarts-presets.config.series.label')">
    <div class="gjs-trt-traits gjs-one-bg gjs-two-color">

      <ep-select :label="t('grapesjs-echarts-presets.theme.label')"
                 :placeholder='t("grapesjs-echarts-presets.theme.placeholder")' v-model="theme"
      >
        <option value="macarons">Macarons</option>
        <option value="dark">Dark</option>
        <option value="dark-blue">Dark Blue</option>
      </ep-select>

      <div class="gjs-traits-label trait-header">
        {{ t("grapesjs-echarts-presets.items.label") }}
        <button @click="add" class="btn btn-icon">+</button>
      </div>
      <div class="gjs-trt-trait" v-for="serie in series" :key="serie.id">
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input>
          <div class="gjs-field gjs-field-text" data-input>
            <input type="text" placeholder="eg. 2019" v-model="serie.label"/>
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input>
          <div class="gjs-field gjs-field-text" data-input>
            <input type="number" placeholder="eg. 2000" v-model="serie.value"/>
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--color" data-input>
          <div class="gjs-field gjs-field-color">
            <div class="gjs-input-holder">
              <input type="text" placeholder="none" v-model="serie.color">
            </div>
            <div class="gjs-field-colorp">
              <div class="gjs-field-colorp-c" data-colorp-c="">
                <div class="gjs-checker-bg"></div>
                <input class="gjs-field-color-picker" :style="{ background: serie.color }" type="color"
                       v-model="serie.color">
              </div>
            </div>
          </div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input>
          <button class="btn btn-icon" @click="remove(serie.id)">-</button>
        </div>
      </div>
    </div>
  </chart-section>
</template>

<script>
import EpSelect from "@/vue/basic-template/select";

import ChartSection from "../widgets/chart-section";

export default {
  props: ["t", "editor", "onChange"],
  components: {
    ChartSection,
    EpSelect
  },
  data() {
    return {
      series: [],
      theme: ""
    };
  },
  watch: {
    theme() {
      this.onChange();
    },
    series: {
      handler() {
        this.onChange();
      },
      deep: true
    }
  },
  methods: {
    add() {
      const categoryLabel = this.t("grapesjs-echarts-presets.items.category");
      this.series.push({
        id: new Date().getTime(),
        label: `${categoryLabel} ${this.series.length + 1}`,
        value: 100,
        color: null
      });
    },
    change(event) {
      console.log(event);
    },
    remove(serie) {
      this.series = this.series.filter(({id}) => id !== serie);
    },
    save() {
      this.onChange();
    }
  }
};
</script>

<style lang='scss' scoped>
.gjs-trt-traits {
  .trait-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .gjs-field-wrp {
    margin: 2px;
  }

  .save-button-wrapper {
    width: 100%;

    .gjs-field {
      width: calc(100% - 12px);
    }
  }

  input.gjs-field-color-picker {
    background-color: #ddd !important;
    cursor: pointer !important;
    height: 100% !important;
    width: 100% !important;
    box-shadow: none !important;
    border-radius: 1px !important;
    border: none;
    position: absolute !important;
    top: 0 !important;
    padding: 0;
  }

  .btn {
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;

    &.btn-icon {
      font-size: 20px;
    }

    &.btn-full {
      width: 100%;
      font-size: 14px;
    }
  }
}
</style>
