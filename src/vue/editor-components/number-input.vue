<template>
    <div class="gjs-trt-trait">
        <div class="gjs-label-wrp" data-label>
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <div class="gjs-field gjs-field-integer">
                <span class="gjs-input-holder">
                    <input type="text" placeholder="auto" v-model="value">
                </span>
                <div class="gjs-field-arrows" data-arrows="">
                    <div class="gjs-field-arrow-u" @click="value = value + 1"></div>
                    <div class="gjs-field-arrow-d" @click="value = value - 1"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "ep-number-input",
    props: {
      label: String,
      value: Number
    },
    data() {
      return {}
    },
    watch: {
      value(val) {
        console.log('number', val)
        this.$emit('input', parseFloat(val))
      }
    },

  };
</script>

<style scoped>

</style>
