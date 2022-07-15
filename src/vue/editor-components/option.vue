<template>
    <option :value="value || label" >{{label || value}}</option>
</template>

<script>
  export default {
    name: "ep-option",
    props: {
      label: String,
      value: String,
    }
  }
</script>

<style scoped>

</style>
