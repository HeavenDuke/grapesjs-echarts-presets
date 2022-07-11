<template>

</template>

<script>
export default {
  name: "line-style-editor",
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
