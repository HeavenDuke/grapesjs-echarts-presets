<template>
    <div class="gjs-ep-dialog" @click="close">
        <div class="gjs-traits gjs-ep-dialog-body" :style="{ width }" @click.stop>
            <div class="gjs-ep-dialog-header">
                <div class="gjs-ep-dialog-title">{{title}}</div>
                <i class="gjs-ep-dialog-close" @click="close">×</i>
            </div>
            <div class="gjs-ep-dialog-content">
                <slot></slot>
            </div>
            <div class="gjs-el-dialog-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "content-dialog",
    props: {
      dialogVisibility: Boolean, // true则显示dialog，否则不显示
      title: String, // 标题，支持多语言
      width: { // 宽度，默认为45%，可以自由定义
        type: String,
        default: '45%'
      }
    },
    watch: {
      dialogVisibility (newValue) {
        if (newValue) {
          document.body.appendChild(this.$el)
        }
      }
    },
    data () {
      return {

      }
    },
    methods: {
      close () {
        this.$emit('close')
      }
    },
    mounted() {
      if (this.dialogVisibility) {
        document.body.append(this.$el)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .gjs-ep-dialog {
        position: absolute;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;

        .gjs-ep-dialog-body {
            background: #463a3c;
            max-height: 75%;
          //overflow: auto;
            .gjs-ep-dialog-header {
                padding: 15px;
                border-bottom: 1px solid #b9a5a6;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 20px;
                color: #b9a5a6;
                .gjs-ep-dialog-close {
                    cursor: pointer;
                    font-style: normal;
                }
            }
            .gjs-ep-dialog-content {
              max-height: 545px;
                padding: 15px;
              overflow: auto;
            }

        }
    }
</style>
