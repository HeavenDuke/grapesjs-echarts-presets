<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label v-if="label">
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text">
            <div class="gjs-field gjs-select">
                <select v-model="value" data-input>
                    <ep-option :value="placeholder" disabled>{{placeholder}}</ep-option>
                    <slot></slot>
                </select>
                <div class="gjs-sel-arrow">
                    <div class="gjs-d-s-arrow"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  //下拉框复用模板组件
  import EpOption from './option'

  export default {
    name: "ep-select",
    props: {
      label: String,
      value: String,
      placeholder: {
        type: String,
        default: '-select-'
      }
    },
    components: {
      EpOption
    },
    data () {
      return {
        selection: ''
      }
    },
    watch: {
      value(val) {
        this.selection = val
      },
      selection(val) {
        this.$emit('input', val)
      }
    },
    created() {
      this.selection= this.value
    }
  }
</script>

<style scoped>

</style>
