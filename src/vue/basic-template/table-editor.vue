<template>
    <ep-more :label="label" width="500px">
        <div v-if="table.length === 0" class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div class="gjs-trt-trait custom">
                <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                    <label class="gjs-field gjs-field--button" data-input="">
                        <button class="btn btn-full" @click="initTable">
                            {{$t('grapesjs-echarts-presets.actions.init')}}
                        </button>
                    </label>
                </div>
            </div>
        </div>
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color" v-else>
            <div class="row">
                <div class="cell" v-for="i in table[0].length">
                    <div class="gjs-trt-trait custom">
                        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                            <label class="gjs-field gjs-field--button" data-input="">
                                <button class="btn btn-full" @click="removeColumn(i - 1)">-</button>
                            </label>
                        </div>
                    </div>
                    <ep-select v-model="types[i - 1]">
                        <ep-option v-for="it in inputTypes" :key="it" :value="it" :label="it"></ep-option>
                    </ep-select>
                    <div v-for="(row, rIndex) in table">
                        <ep-color-picker v-if="types[i - 1] === 'Color'" v-model="table[rIndex][i - 1].value"></ep-color-picker>
                        <ep-number-input v-if="types[i - 1] === 'Number'" v-model="table[rIndex][i - 1].value"></ep-number-input>
                        <ep-input v-if="types[i - 1] === 'String'" v-model="table[rIndex][i - 1].value"></ep-input>
                    </div>
                </div>
                <div>
                    <div class="gjs-trt-trait">
                        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                            <label class="gjs-field gjs-field--button" data-input="">
                                <button class="btn btn-icon add-col" @click="addColumn">+</button>
                            </label>
                        </div>
                    </div>
                    <div v-for="(row, rIndex) in table">
                        <div class="gjs-trt-trait">
                            <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                                <label class="gjs-field gjs-field--button" data-input="">
                                    <button class="btn btn-icon" @click="removeRow(rIndex)">-</button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="cell">
                    <div class="gjs-trt-trait">
                        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                            <label class="gjs-field gjs-field--button" data-input="">
                                <button class="btn btn-full" @click="addRow">+</button>
                            </label>
                        </div>
                    </div>
                </div>
                <button style="visibility: hidden;" class="btn btn-icon"></button>
            </div>
        </div>
    </ep-more>
</template>

<script>

  import EpInput from "./input"
  import EpSelect from "./select"
  import EpOption from "./option"
  import EpColorPicker from "./color-picker"
  import EpNumberInput from "./number-input"
  import EpMore from "./editor-more"
  import { INPUT_TYPES } from "@/utils/smallDict";

  export default {
    name: "table-editor",
    props: {
      label: String,
      value: Array
    },
    components: {
      EpMore,
      EpSelect,
      EpOption,
      EpInput,
      EpNumberInput,
      EpColorPicker
    },
    watch: {
      table: {
        handler(newValue) {
          this.$emit("input", newValue.map(row => row.map(cell => cell.value)))
        },
        deep: true
      },
      value: {
        handler(newValue) {
          this.flushData(newValue)
        },
        deep: true
      }
    },
    data() {
      return {
        types: [],
        inputTypes: INPUT_TYPES,
        table: []
      }
    },
    methods: {
      match(value) {
        // 如果行数不通，则不一致
        if (this.table.length !== value.length) return false
        // 否则如果行数都为0，则按一致处理
        if (this.table.length === 0) return true
        // 否则如果列数不等，则不一致
        if (this.table[0].length !== value[0].length) return false
        // 否则逐项检查，若不一致则不一致
        for(let i = 0; i < this.table.length; i++) {
          for(let j = 0; j < this.table[i].length; j++) {
            if(this.table[i][j].value !== value[i][j]) {
              return false
            }
          }
        }
        // 否则一致
        return true
      },
      flushData(value) {
        if (!this.match(value)) {
          this.table = value.map(row => row.map(cell => ({value: cell})))
          if (this.table.length > 0) {
            this.types = this.table[0].map(item => "String")
          }
          else {
            this.types = []
          }
        }
      },
      initTable() {
        this.table = [[{value: ""}]]
        this.types = ["String"]
      },
      moveUp(index) {

      },
      moveDown(index) {

      },
      moveLeft(index) {

      },
      moveRight(index) {

      },
      removeRow(index) {
        this.table.splice(index, 1)
      },
      removeColumn(index) {
        this.types.splice(index, 1)
        for (let i = 0; i < this.table.length; i++) {
          this.table[i].splice(index, 1)
        }
      },
      addColumn(index) {
        for (let i = 0; i < this.table.length; i++) {
          this.table[i].push({value: ""})
        }
        this.types.push("String")
      },
      addRow(index) {
        let row = []
        let colCount = this.table[0].length
        for (let i = 0; i < colCount; i++) {
          row.push({value: ""})
        }
        this.table = this.table.concat([row])
      }
    },
    created() {
      this.flushData(this.value)
    }
  }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        align-items: center;
        width: 100%;

        .cell {
            flex-grow: 1;
        }

        button.btn {
            flex-shrink: 0;
            background: rgba(0, 0, 0, .2);
            border: none;
            cursor: pointer;
            color: #b9a5a6;
            font-family: Arial;
            font-size: 14px;
            font-weight: 800;
            width: 26px;
            height: 25px;
        }

        button.btn.add-col {
            height: 64px;
            line-height: 64px;
        }

        .gjs-field--button {
            background-color: transparent;
        }
    }
</style>
