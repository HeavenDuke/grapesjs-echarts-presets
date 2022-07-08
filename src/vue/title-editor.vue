<template>
    <div>
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="show">{{t('grapesjs-echarts-presets.config.title.show.label')}}</div>
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
                    <div class="gjs-label" title="text">{{t('grapesjs-echarts-presets.config.title.text.label')}}</div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text">
                    <div class="gjs-field gjs-field-text">
                        <input v-model="title.text" data-input
                               :placeholder="t('grapesjs-echarts-presets.config.title.text.placeholder')"/>
                    </div>
                </div>
            </div>
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="subtext">
                        {{t('grapesjs-echarts-presets.config.title.subtext.label')}}
                    </div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text">
                    <div class="gjs-field gjs-field-text">
                        <input v-model="title.subtext" data-input
                               :placeholder="t('grapesjs-echarts-presets.config.title.subtext.placeholder')"/>
                    </div>
                </div>
            </div>
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="textAlign">
                        {{t('grapesjs-echarts-presets.config.title.textAlign.label')}}
                    </div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text">
                    <div class="gjs-field gjs-select">
                        <select v-model="title.textAlign" data-input>
                            <option value disabled selected>
                                {{t("grapesjs-echarts-presets.config.title.textAlign.placeholder")}}
                            </option>
                            <option value="auto">auto</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="center">center</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="gjs-trt-trait">
                <div class="gjs-label-wrp" data-label>
                    <div class="gjs-label" title="textVerticalAlign">
                        {{t('grapesjs-echarts-presets.config.title.textVerticalAlign.label')}}
                    </div>
                </div>
                <div class="gjs-field-wrp gjs-field-wrp--text">
                    <div class="gjs-field gjs-select">
                        <select v-model="title.textVerticalAlign" data-input>
                            <option value disabled selected>
                                {{t("grapesjs-echarts-presets.config.title.textVerticalAlign.placeholder")}}
                            </option>
                            <option value="auto">auto</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                            <option value="middle">middle</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full" style="">
                <div class="gjs-sm-label" data-sm-label="">
                    <span class="gjs-sm-icon " title="position">
                        {{t("grapesjs-echarts-presets.config.title.position.label")}}
                    </span>
                </div>
                <div class="gjs-fields" data-sm-fields="">
                    <div class="gjs-sm-field gjs-sm-composite">
                        <span id="gjs-sm-input-holder">
                            <div class="gjs-sm-properties">
                                <div :key="pos.name" v-for="pos in positions" class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                                    <div class="gjs-sm-label" data-sm-label="">
                                        <span class="gjs-sm-icon " title="">{{t(`grapesjs-echarts-presets.dict.position.${pos.name}`)}}</span>
                                        <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                            <svg viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
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
        link: "",
        target: "",
        subtext: "",
        sublink: "",
        subtarget: "",
        textAlign: "auto",
        textVerticalAlign: "auto",
        left: "auto",
        top: "auto",
        right: "auto",
        bottom: "auto",
        triggerEvent: "",
        padding: [0, 0, 0, 0],
        itemGap: "",
        zlevel: 0,
        z: 2,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#ccc",
        borderWidth: 0,
        borderRadius: [0, 0, 0, 0],
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0)",
        shadowOffsetX: "",
        shadowOffsetY: "",
      },
      positions: [{
        name: "top",
        value: "",
        unit: "px"
      }, {
        name: "right",
        value: "",
        unit: "px"
      }, {
        name: "bottom",
        value: "",
        unit: "px"
      }, {
        name: "left",
        value: "",
        unit: "px"
      }],
      units: ["px", "%", "em", "rem", "vh", "vw"],
    };
  },
  watch: {
    title: {
      handler() {
        this.onChange();
      },
      deep: true
    },
    positions: {
      handler (newValue) {
        for(let i = 0; i < newValue.length; i++) {
          let pos = newValue[i];
          this.title[pos.name] = `${pos.value}${pos.unit}`;
        }
        console.log(this.title);
        this.onChange();
      },
      deep: true
    }
  },
  methods: {},
  created() {
    console.log(this.title);
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
