<template>
    <div class="gjs-traits gjs-sm-sectors gjs-one-bg gjs-two-color">
        <div :class="['gjs-sm-sector', 'gjs-sm-sector__general', 'no-select', { 'gjs-sm-open': isOpen }]" @click="isOpen = !isOpen">
            <div class="gjs-sm-sector-title" data-sector-title="">
                <div class="gjs-sm-sector-caret">
                    <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7,10L12,15L17,10H7Z"></path></svg>
                </div>
                <div class="gjs-sm-sector-label">{{title}}</div>
            </div>
        </div>
        <div class="gjs-traits-content" v-show="isOpen">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "chart-section",
    props: {
      title: String
    },
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>

<style lang="scss">

    @import "../assets/style.scss";

    .echarts-opt-section {
        padding: 10px 5px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: #463a3c;
        position: relative;

        .echarts-opt-section-title {
            position: absolute;
            left: 12px;
            top: -7px;
            padding: 5px;
            background: #463a3c;
        }
    }
</style>
