<template>
    <ep-more :label="label">
        <div></div>
    </ep-more>
</template>

<script>

  import EpMore from "./editor-more"

  export default {
    name: "table-editor",
    props: {
      label: String,
      value: Array
    },
    components: {
      EpMore
    },
    data () {
      return {

      }
    },
    created() {

    }
  }
</script>

<style scoped>

</style>
