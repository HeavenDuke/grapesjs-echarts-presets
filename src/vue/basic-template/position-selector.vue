<template>
    <div class="gjs-trt-trait">
        <div class="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full" style="">
            <div class="gjs-sm-label" data-sm-label="">
                <span class="gjs-sm-icon " title="position">{{title}}</span>
            </div>
            <div class="gjs-fields" data-sm-fields="">
                <div class="gjs-sm-field gjs-sm-composite">
                <span id="gjs-sm-input-holder">
                    <div class="gjs-sm-properties">
                        <div :key="pos.name" v-for="pos in positions"
                             class="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                            <div class="gjs-sm-label" data-sm-label="">
                                <span class="gjs-sm-icon " title="">{{t(`grapesjs-echarts-presets.dict.position.${pos.name}`)}}</span>
                                <div class="gjs-sm-clear" style="display: none" data-clear-style="">
                                    <svg viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="gjs-fields" data-sm-fields="">
                                <div class="gjs-field gjs-field-integer">
                                    <span class="gjs-input-holder">
                                        <input v-model="pos.value" type="text" placeholder="0"/>
                                    </span>
                                    <span class="gjs-field-units" v-if="useUnit">
                                        <select v-model="pos.unit" class="gjs-input-unit">
                                            <option value="-" disabled="" hidden="">-</option>
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
  import {UNITS} from "@/vue/utils/smallDict";

  export default {
    name: "position-selector",
    props: {
      t: Function,
      title: String,
      useUnit: Boolean,
      value: [Object, Array]
    },
    data() {
      return {
        positions: [{
          name: "top",
          value: "",
          unit: "px"
        }, {
          name: "right",
          value: "",
          unit: "px"
        }, {
          name: "bottom",
          value: "",
          unit: "px"
        }, {
          name: "left",
          value: "",
          unit: "px"
        }],
        units: UNITS,
      }
    },
    watch: {
      positions: {
        handler(newValue) {
          if (this.value instanceof Array) {
            if (this.useUnit) {
              this.$emit('input', this.positions.map(pos => `${pos.value}${this.useUnit ? pos.unit : ''}`))
            }
            else {
              this.$emit('input', this.positions.map(pos => parseFloat(pos.value)))
            }
          } else {
            if (this.useUnit) {
              this.$emit('input', this.positions.reduce((result, pos) => {
                result[pos.name] = pos.value ? `${pos.value}${this.useUnit ? pos.unit : ''}` : ''
                return result
              }, {}))
            }
            else {
              this.$emit('input', this.positions.reduce((result, pos) => {
                result[pos.name] = pos.value ? parseFloat(pos.value) : null
                return result
              }, {}))
            }
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
      }
    },
    created() {
      if (this.value instanceof Array) {
        for (let i = 0; i < this.value.length; i++) {
          let res = this.parseValue(this.value[i])
          if (res) {
            [this.positions[i].value, this.positions[i].unit] = res
          }
        }
      }
      else {
        for(let i = 0; i < this.positions.length; i++) {
          let res = this.parseValue(this.value[this.positions[i].name])
          if (res) {
            [this.positions[i].value, this.positions[i].unit] = res
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
