<template>
    <div class="gjs-trt-trait">
        <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full" style="">
            <div class="gjs-sm-label" data-sm-label="">
                <span class="gjs-sm-icon " title="size">{{label}}</span>
            </div>
            <div class="gjs-fields" data-sm-fields="">
                <div class="gjs-sm-field gjs-sm-composite">
                <span id="gjs-sm-input-holder">
                    <div class="gjs-sm-properties">
                        <div :key="pos.name" v-for="pos in sizes"
                             class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                            <div class="gjs-fields" data-sm-fields="">
                                <div class="gjs-field gjs-field-integer">
                                    <span class="gjs-input-holder">
                                        <input v-model="pos.value" type="text" placeholder="0"/>
                                    </span>
                                    <span class="gjs-field-units" v-if="useUnit">
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
</template>

<script>
  import {UNITS} from "@/utils/smallDict";

  export default {
    name: "size-selector",
    props: {
      label: String,
      useUnit: Boolean, // 用不用单位
      value: Array // 二维数组
    },
    data() {
      return {
        sizes: [{
          value: "",
          unit: "px"
        }, {
          value: "",
          unit: "px"
        }],
        units: UNITS,
      }
    },
    watch: {
      value: {
        handler(newValue) {
            this.flushData(newValue)
        },
        deep: true
      },
      sizes: {
        handler(newValue) {
          if (this.useUnit) {
            this.$emit('input', newValue.map(pos => `${pos.value}${this.useUnit ? pos.unit : ''}`))
          }
          else {
            this.$emit('input', newValue.map(pos => parseFloat(pos.value)))
          }
        },
        deep: true
      }
    },
    methods: {
      parseValue(val) {
        let res = `${val}`.match(new RegExp(`(\\d+\\.?\\d*)(${UNITS.join('|')})?`))
        if (res) {
          return [res[1], res[2]]
        }
        return null
      },
      flushData (val) {
        for (let i = 0; i < val.length; i++) {
          let res = this.parseValue(val[i])
          if (res) {
            [this.sizes[i].value, this.sizes[i].unit] = res
          }
        }
      }
    },
    created() {
      this.flushData(this.value)
    }
  }
</script>

<style scoped>

</style>
