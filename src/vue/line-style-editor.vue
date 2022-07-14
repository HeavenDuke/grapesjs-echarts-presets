<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" title="show">{{title || t('grapesjs-echarts-presets.config.lineStyle.label')}}</div>
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
                        <div title="color" class="gjs-label">{{t('grapesjs-echarts-presets.config.lineStyle.color.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <input name="color" type="color" v-model="value.color" data-input/>
                        </div>
                    </div>
                </div>
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="width" class="gjs-label">{{t('grapesjs-echarts-presets.config.lineStyle.width.label')}}</div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <input name="width" type="number" v-model="value.width" data-input/>
                        </div>
                    </div>
                </div>
                <div class="gjs-trt-trait">
                    <div data-label="" class="gjs-label-wrp">
                        <div title="fontSize" class="gjs-label">
                            {{t('grapesjs-echarts-presets.config.lineStyle.type.label')}}
                        </div>
                    </div>
                    <div class="gjs-field-wrp gjs-field-wrp--text">
                        <div class="gjs-field gjs-field-text">
                            <select v-model="value.type">
                                <option v-for="type in lineTypes" :key="type.value" :value="type.value">{{type.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </content-dialog>
    </div>
</template>

<script>

  import ContentDialog from "./widgets/content-dialog"
  import {LINE_TYPES, FONTS} from "./utils/dict";

export default {
  name: "line-style-editor",
  props: {
    value: Object,
    t: Function,
    title: String
  },
  components: {
    ContentDialog
  },
  watch: {
    value: {
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  },
  data () {
    return {
      dialog: {
        visibility: false,
        title: this.t('grapesjs-echarts-presets.dialogs.lineStyle')
      },
      fonts: FONTS,
      lineTypes: LINE_TYPES
    }
  }
};
</script>

<style scoped>

</style>
