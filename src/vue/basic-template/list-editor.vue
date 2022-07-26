<template>
    <ep-more :label="label">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div v-for="item in list">
                <slot :item="item"></slot>
            </div>
            <div class="gjs-trt-trait">
                <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                    <label class="gjs-field gjs-field-text" data-input="">
                        <button class="btn btn-full" @click="addItem">
                            {{$t('grapesjs-echarts-presets.actions.addItem')}}
                        </button>
                    </label>
                </div>
            </div>
        </div>
    </ep-more>
</template>

<script>

  import EpMore from "./editor-more"

  export default {
    name: "list-editor",
    props: {
      label: String,
      value: Array,
      type: String,
    },
    components: {
      EpMore
    },
    watch: {
      list: {
        handler(newValue) {
          this.$emit('input', newValue)
        },
        deep: true
      }
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      addItem() {
        this.list = this.list.concat([''])
      }
    },
    created() {
      this.list = this.list.concat(this.value)
    }
  }
</script>

<style scoped>

</style>
