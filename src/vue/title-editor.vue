<template>
    <div>
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="Id">{{t('grapesjs-echarts-presets.config.title.show.label')}}</div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--checkbox" data-input="">
                    <label class="gjs-field gjs-field-checkbox" data-input="">
                        <input type="checkbox" v-model="title.show">
                        <i class="gjs-chk-icon"></i>
                    </label>
                </div>
            </div>
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="Id">{{t('grapesjs-echarts-presets.config.title.text.label')}}</div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text">
                    <div class="gjs-field gjs-field-text">
                        <input v-model="title.text" data-input :placeholder="t('grapesjs-echarts-presets.config.title.text.placeholder')" />
                    </div>
                </div>
            </div>
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="Id">{{t('grapesjs-echarts-presets.config.title.subtext.label')}}</div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text">
                    <div class="gjs-field gjs-field-text">
                        <input v-model="title.subtext" data-input :placeholder="t('grapesjs-echarts-presets.config.title.subtext.placeholder')" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "title-modifier",
  props: ["t", "editor", "onChange"],
  data() {
    return {
      title: {
        show: false,
        text: "",
        subtext: "",
      }
    };
  },
  watch: {
    title: {
      handler () {
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
