<template>
    <div class="gjs-trt-trait custom">
        <div class="gjs-label-wrp" data-label v-if="label">
            <div class="gjs-label" :title="label">{{label}}</div>
        </div>
        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
            <div class="gjs-field gjs-field-integer">
                <span class="gjs-input-holder">
                    <input type="text" placeholder="auto" v-model="number">
                </span>
                <div class="gjs-field-arrows" data-arrows="">
                    <div class="gjs-field-arrow-u"
                         @click="number = (max || max === 0) && number + step > max ? max : number + step"></div>
                    <div class="gjs-field-arrow-d"
                         @click="number = (min || min === 0) && number - step < min ? min : number - step"></div>
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
      label: {
        type: String,
        default: ""
      },
      value: {
        type: [Number, String]
      },
      min: Number,
      max: Number,
      step: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        number: ''
      }
    },
    watch: {
      number(val) {
        if (val === "auto") {
          this.$emit('input', val)
        } else if (typeof val === 'string') {
          val = parseFloat(val)
          if (!isNaN(val)) {
            this.$emit('input', parseFloat(val.toFixed(this.getPrecision())))
          }
        } else if (typeof val === 'number') {
          this.$emit('input', parseFloat(val.toFixed(this.getPrecision())))
        }
      },
      value(val) {
        this.number = val
      }
    },
    methods: {
      getPrecision() {
        return Math.round(-Math.log10(this.step) + 6)
      }
    },
    created() {
      this.number = this.value
    }
  };
</script>

<style scoped>

</style>
