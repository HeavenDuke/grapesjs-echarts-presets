<template>
    <chart-section :title="meta.label">
        <recursion-list :meta="meta.options" v-model="options"/>
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
      return {
        options: constructOptions(this.meta.options)
      }
    },
    created() {
      // console.log(this.options)
    }
  };
</script>

<style scoped>

</style>
