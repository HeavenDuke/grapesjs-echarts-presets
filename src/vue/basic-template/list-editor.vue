<template>
    <ep-more :label="label">
        <div class="gjs-trt-traits gjs-one-bg gjs-two-color">
            <div class="gjs-trt-list-item" v-for="(item, index) in list">
                <slot :item="item"></slot>
                <button class="btn btn-icon" @click="removeItem(index)">-</button>
            </div>
            <div class="gjs-trt-trait custom">
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
          this.$emit('input', newValue.map(item => item.value))
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
        this.list = this.list.concat([{ value: '' }])
      },
      removeItem (index) {
        this.list.splice(index, 1)
      }
    },
    created() {
      this.list = this.list.concat(this.value)
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
    .gjs-trt-list-item {
        display: flex;

        /deep/ > div {
            flex-grow: 1;
        }

        button.btn {
            background: rgba(0,0,0,.2);
            border: none;
            cursor: pointer;
            color: #b9a5a6;
            font-family: Arial;
            margin: 7px 0;
            font-size: 14px;
        }
    }
</style>
