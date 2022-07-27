<template>
    <ep-more :label="label" width="500px">
        <div v-if="table.length === 0" class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div class="gjs-trt-trait">
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
                <div class="cell" v-for="i in columnCount">
                    <div class="gjs-trt-trait">
                        <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
                            <label class="gjs-field gjs-field--button" data-input="">
                                <button class="btn btn-full" @click="removeColumn(i)">-</button>
                            </label>
                        </div>
                    </div>
                </div>
                <button class="btn btn-icon" @click="addColumn">+</button>
            </div>
            <div class="row" v-for="(row, index) in table">
                <div class="cell" v-for="cell in row">
                    <ep-input v-model="cell.value"></ep-input>
                </div>
                <button class="btn btn-icon" @click="removeRow(index)">-</button>
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
                <button style="opacity: 0;" class="btn btn-icon"></button>
            </div>
        </div>
    </ep-more>
</template>

<script>

  import EpSelect from "./select"
  import EpOption from "./option"
  import EpInput from "./input"
  import EpMore from "./editor-more"

  export default {
    name: "table-editor",
    props: {
      label: String,
      value: Array
    },
    components: {
      EpMore,
      EpInput,
      EpSelect,
      EpOption
    },
    computed: {
      rowCount() {
        return this.table.length
      },
      columnCount() {
        return this.table[0] ? this.table[0].length : 0
      }
    },
    watch: {
      table: {
        handler(newValue) {
          this.$emit("input", newValue.map(row => row.map(cell => cell.value)))
        },
        deep: true
      }
    },
    data() {
      return {
        table: []
      }
    },
    methods: {
      flushData(value) {
        this.table = value.map(row => row.map(cell => ({value: cell})))
      },
      initTable() {
        this.table = [[{value: ""}]]
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
        for (let i = 0; i < this.table.length; i++) {
          this.table[i].splice(index, 1)
        }
      },
      addColumn(index) {
        for (let i = 0; i < this.table.length; i++) {
          this.table[i].push({value: ""})
        }
      },
      addRow(index) {
        let row = []
        let colCount = this.columnCount
        for (let i = 0; i < colCount; i++) {
          row.push({value: ""})
        }
        this.table.push(row)
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

        .gjs-field--button {
            background-color: transparent;
        }
    }
</style>
