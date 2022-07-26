<template>
    <chart-section :title="meta.label">
        <recursion-list v-if="!meta.multiple" :meta="meta.options" v-model="options"/>
        <div class="gjs-traits-group" v-else>
            <div class="gjs-traits-group-tabs">
                <div class="gjs-traits-group-tab" v-for="(option, index) in options" @click="switchOption(index)">
                    {{ option.id || index }}
                    <small class="gjs-traits-group-tab-close" @click="removeOption(index)">×</small>
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
    watch: {
      options: {
        handler() {
          this.onChange()
        },
        deep: true
      }
    },
    data() {
      let options = constructOptions(this.meta.options)
      return {
        options: this.meta.multiple ? [options] : options,
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
      // console.log(this.meta, this.options)
    }
  };
</script>

<style scoped>

</style>
