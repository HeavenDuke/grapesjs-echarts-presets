<template>
    <h1>2333</h1>
</template>

<script>
export default {
  name: "item-style-editor",
  props: {
    value: Object
  },
  watch: {
    value: {
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  }
};
</script>

<style scoped>

</style>
