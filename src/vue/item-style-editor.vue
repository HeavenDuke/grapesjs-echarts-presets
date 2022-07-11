<template>

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
