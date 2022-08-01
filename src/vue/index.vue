<template>
    <chart-section :title="meta.label" v-show="!meta.valid || meta.valid(chartOption)">
        <recursion-list v-if="!meta.multiple" :meta="meta.options" v-model="options"/>
        <div class="gjs-traits-group" v-else>
            <div class="gjs-traits-group-tabs">
                <div :class="['gjs-traits-group-tab', { active: index === optionIndex }]" v-for="(option, index) in options" @click="switchOption(index)">
                    {{ option.id || index }}
                    <small class="gjs-traits-group-tab-close" @click="removeOption(index)" v-if="options.length > 1">×</small>
                </div>
                <div class="gjs-traits-group-tab add" @click="addOption">+</div>
            </div>
            <recursion-list :meta="meta.options" v-model="options[optionIndex]"/>
        </div>
    </chart-section>
</template>

<script>
  import RecursionList from "./recursion-list";
  import ChartSection from "./widgets/chart-section"
  import {constructOptions} from "@/options/shared";

  export default {
    name: "index",
    props: ["editor", "onChange", "meta", "title"],
    components: {
      RecursionList,
      ChartSection
    },
    computed: {
      chartOption () {
        return JSON.parse(this.editor.getSelected().get("attributes")["data-ecg-options"]) || {}
      }
    },
    watch: {
      options: {
        handler() {
          this.onChange()
        },
        deep: true
      }
    },
    data() {
      return {
        test: {
          bar: "2333",
          foo () {
            return Math.random()
          }
        },
        options: {},
        optionIndex: 0
      }
    },
    methods: {
      addOption () {
        this.options = this.options.concat([constructOptions(this.meta.options)])
      },
      removeOption(index) {
        this.options.splice(index, 1)
        if (this.optionIndex > index) {
          this.optionIndex--
        }
        else if (this.optionIndex === index) {
          this.optionIndex = Math.min(this.optionIndex, this.options.length - 1)
        }
      },
      switchOption(index) {
        this.optionIndex = index
      }
    },
    created() {
      let options = constructOptions(this.meta.options)
      this.options = this.meta.multiple ? [options] : options
      // console.log(this.meta.name, this.options)
    }
  };
</script>

<style lang="scss" scoped>
    .gjs-traits-group-tabs {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        margin-bottom: 10px;

        .gjs-traits-group-tab {
            cursor: pointer;
            padding: 5px;
            background-color: rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgb(185, 165, 166);
            border-bottom: 1px solid rgb(185, 165, 166);
            border-left: 1px solid rgb(185, 165, 166);
            color: rgb(185, 165, 166);
            font-size: 14px;

            small {
                color: rgb(161, 40, 47)
            }
        }

        .gjs-traits-group-tab.active {
            background-color: rgb(185, 165, 166);
            color: rgb(0, 0, 0);
        }

        .gjs-traits-group-tab:first-child {
            border-radius: 5px 0 0 5px;
        }

        .gjs-traits-group-tab:last-child {
            background-color: rgb(185, 165, 166);
            color: rgb(0, 0, 0);
            border-radius: 0 5px 5px 0;
            border-right: 1px solid rgb(185, 165, 166);
            border-left: 1px solid rgba(0, 0, 0, 0.2);
        }

    }
</style>
