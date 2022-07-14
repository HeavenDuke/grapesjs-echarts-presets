<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text">
            <div class="gjs-field gjs-select">
                <select v-model="value" data-input>
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
  export default {
    name: "ep-select",
    props: {
      label: String,
      value: String
    },
    watch: {
      value(val) {
        this.$emit('input', val)
      }
    },
  }
</script>

<style scoped>

</style>
