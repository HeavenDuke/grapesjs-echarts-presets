<template>

</template>

<script>
  export default {
    name: "cartesian-axis-editor",
    props: ["t", "editor", "onChange", "axis"],
    data () {
      return {
        axis: {

        }
      }
    },
    watch: {
      title: {
        handler() {
          this.onChange();
        },
        deep: true
      }
    },
  }
</script>

<style scoped>

</style>
