<template>
    <option :value="value || label" >{{label || value}}</option>
</template>

<script>
//下拉框option复用模板组件
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
