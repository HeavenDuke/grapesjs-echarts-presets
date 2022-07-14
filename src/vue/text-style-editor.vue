<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{t('grapesjs-echarts-presets.config.title.textStyle.label')}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <label class="gjs-field gjs-field-text" data-input="">
                <button class="btn btn-full" @click="showDialog">{{t('grapesjs-echarts-presets.actions.edit')}}</button>
            </label>
        </div>
        <content-dialog v-if="dialog.visibility" width="350px" :dialog-visibility="dialog.visibility" :title="dialog.title"
                        @close="dialog.visibility = false">
            <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="fontSize" class="gjs-label">{{t('grapesjs-echarts-presets.config.title.textStyle.fontFamily.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <select v-model="value.fontFamily">
                                <option v-for="font in fonts" :key="font.value" :value="font.value">{{font.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="fontSize" class="gjs-label">{{t('grapesjs-echarts-presets.config.title.textStyle.fontSize.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <input type="number" v-model="value.fontSize" data-input/>
                        </div>
                    </div>
                </div>
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="fontWeight" class="gjs-label">{{t('grapesjs-echarts-presets.config.title.textStyle.fontWeight.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <input v-model="value.fontWeight" data-input/>
                        </div>
                    </div>
                </div>
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="lineHeight" class="gjs-label">{{t('grapesjs-echarts-presets.config.title.textStyle.lineHeight.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <input type="number" v-model="value.lineHeight" data-input/>
                        </div>
                    </div>
                </div>
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="color" class="gjs-label">{{t('grapesjs-echarts-presets.config.title.textStyle.color.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <input name="color" type="color" v-model="value.color" data-input/>
                        </div>
                    </div>
                </div>
            </div>
        </content-dialog>
    </div>
</template>

<script>

    import { FONTS, BORDER_TYPES } from "./utils/dict";
    import ContentDialog from "./widgets/content-dialog"

  export default {
    name: "text-style-editor",
    props: {
      value: Object,
      t: Function
    },
    components: {
      ContentDialog
    },
    watch: {
      value: {
        handler(newValue) {
          this.$emit('input', newValue)
        },
        deep: true
      }
    },

    data() {
      return {
        dialog: {
          visibility: false,
          title: this.t('grapesjs-echarts-presets.dialogs.textStyle')
        },
        fonts: FONTS,
        borderTypes: BORDER_TYPES
      }
    },
    methods: {
      showDialog() {
        this.dialog.visibility = true
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "./assets/style.scss";
</style>
