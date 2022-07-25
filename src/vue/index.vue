<template>
  <chart-section :title="t(`grapesjs-echarts-presets.config.${title}.label`)">
    <recursion-list :meta="meta" v-model="options"/>
  </chart-section>
</template>

<script>
import RecursionList from "./recursion-list";
import ChartSection from "./widgets/chart-section"
import { constructOptions } from "@/options/shared";

export default {
  name: "index",
  props: ["t", "editor", "onChange", "meta","title"],
  components: {
    RecursionList,
    ChartSection
  },
  watch:{
    options:{
      handler(){

        this.onChange()
      },
      deep:true
    }
  },
  data(){
    return{
      options: constructOptions(this.meta)
    }
  },
created() {
    console.log(this.options)
}
};
</script>

<style scoped>

</style>