<template>
    <ep-more :label="label">
        <div class="gjs-trt-trait custom">
            <div class="gjs-field-wrp gjs-field-wrp--textarea" data-input="">
                <label class="gjs-field gjs-field-textarea" data-input="">
                    <textarea :rows="8" v-model="strValue"></textarea>
                </label>
            </div>
        </div>
    </ep-more>
</template>

<script>
    import EpMore from "./editor-more"
    import EpTextarea from "@/vue/basic-template/textarea";

  export default {
    name: "function-editor",
    props: {
      label: String,
      value: Function
    },
    components: {
      EpTextarea,
      EpMore
    },
    data () {
      return {
        strValue: ""
      }
    },
    watch: {
      strValue (newValue) {
        try {
          this.$emit('input', this.str2Func(newValue))
        }
        catch(err) {}
      }
    },
    methods: {
      str2Func (str) {
        return new Function("return " + str)()
      },
      func2Str (func) {
        return func.toString()
      }
    },
    created() {
      this.strValue = this.func2Str(this.value)
    }
  }
</script>

<style lang="scss" scoped>
    .gjs-field-textarea {
        display: block;

        textarea {
            color: #FFF;
        }
    }
</style>
