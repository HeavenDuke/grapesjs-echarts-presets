<template>
  <div class="gjs-trt-trait">
    <div class="gjs-label-wrp" data-label>
      <div class="gjs-label" :title="label">{{ label }}</div>
    </div>
    <div class="gjs-field-wrp gjs-field-wrp--text" data-input="">
      <label class="gjs-field gjs-field-text" data-input="">
        <button class="btn btn-full" @click="showDialog">Edit</button>
      </label>
    </div>
    <content-dialog v-if="visibility" :width="width" :dialog-visibility="visibility"
                    :title="label"
                    @close="visibility = false">
      <slot></slot>
    </content-dialog>
  </div>
</template>

<script>
import ContentDialog from "../widgets/content-dialog";

export default {
  name: "editor-more",
  props: {
    label: String,
    width: {
      type: String,
      default: "350px"
    }
  },
  components: {
    ContentDialog
  },
  data() {
    return {
        visibility: false,
    };
  },
  methods: {
    showDialog() {
      this.visibility = true;
    }
  }

};
</script>

<style scoped>

</style>
