<template>
    <div class="index">
        <mavon-editor style="height: 100%;"
                      v-model="value"
                      :toolbars="toolbars"></mavon-editor>
    </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import { toolbars } from '../common/js/toolbars-options'

  export default {
    name: 'editor',
    data () {
      return {
        value: '',
        toolbars: toolbars
      }
    },
    components: {
      mavonEditor
    }
  }
</script>

<style lang="stylus">
    .index
        position: absolute
        left: 0
        top: 0
        bottom: 0
        right: 0
</style>