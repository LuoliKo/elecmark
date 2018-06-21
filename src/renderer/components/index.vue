<template>
    <div class="index">
        <div class="left-bar">

        </div>
        <div class="main">
            <div class="top-bar">

            </div>
            <mavon-editor class="editor"
                          v-model="value"
                          :toolbars="toolbars"
                          :boxShadow="false">
            </mavon-editor>
        </div>
        <div class="right-bar"></div>
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
        display: flex
        .left-bar
            flex: 0 0 20px
        .main
            display: flex
            flex-direction: column
            flex: 1
            .top-bar
                flex: 0 0 40px
                border-left: 1px solid #e0e0e0
                border-right: 1px solid #e0e0e0
            .editor
                flex: 1
        .right-bar
            flex: 0 0 20px
</style>