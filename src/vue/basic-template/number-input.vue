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
                    <div class="gjs-field-arrow-u" @click="value = (max || max === 0) && value + step > max ? max : value + step"></div>
                    <div class="gjs-field-arrow-d" @click="value = (min || min === 0) && value - step < min ? min : value - step"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
//数字输入框复用模板组件
  export default {
    name: "ep-number-input",
    props: {
      label: String,
      value: Number,
      min: Number,
      max: Number,
      step: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {}
    },
    watch: {
      value(val) {
        if (typeof val === 'string') {
          val = parseFloat(val)
        }
        this.$emit('input', parseFloat(val.toFixed(this.getPrecision())))
      }
    },
    methods: {
      getPrecision () {
        return Math.round(-Math.log10(this.step) + 6)
      }
    }
  };
</script>

<style scoped>

</style>
