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
        <content-dialog v-if="dialog.visibility" :dialog-visibility="dialog.visibility" :title="dialog.title" @close="dialog.visibility = false">

        </content-dialog>
    </div>
</template>

<script>

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
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  },
  data () {
    return {
      style: {},
      dialog: {
        visibility: false,
        title: 'test'
      }
    }
  },
  methods: {
    showDialog () {
      this.dialog.visibility = true
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "./assets/style.scss";
</style>
