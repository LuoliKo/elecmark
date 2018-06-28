<template>
    <div class="index">
        <div class="top-bar drag">
            <ul class="window-control-bar">
                <li class="no-drag minimize" @click="minimize"><i class="iconfont icon-androidarrowdown"></i></li>
                <li class="no-drag close" @click="close"><i class="iconfont icon-androidclose"></i></li>
            </ul>
        </div>
        <div class="main">
            <mavon-editor class="editor"
                          v-model="value"
                          :toolbarsFlag="false"
                          :toolbars="toolbars"
                          :boxShadow="false">
            </mavon-editor>
        </div>
        <div class="bottom-bar">
            <ul class="bottom-left-bar">
                <li><i class="iconfont icon-androidapps"></i></li>
                <li><i class="iconfont icon-androidcalendar"></i></li>
            </ul>
            <ul class="bottom-middle-bar">
                <li><i class="iconfont icon-androidadd"></i></li>
                <li><i class="iconfont icon-androiddelete"></i></li>
                <li><i class="iconfont icon-androidsync"></i></li>
                <li><i class="iconfont icon-androidglobe"></i></li>
                <li><i class="iconfont icon-androidcloud"></i></li>
            </ul>
            <ul class="bottom-right-bar">
                <li><i class="iconfont icon-androidoptions"></i></li>
                <li><i class="iconfont icon-androiddesktop"></i></li>
                <li><i class="iconfont icon-androidcreate"></i></li>
            </ul>
        </div>
    </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import { toolbars } from '../common/js/toolbars-options'
  import { ipcRenderer } from 'electron'

  export default {
    name: 'editor',
    data () {
      return {
        value: '',
        toolbars: toolbars
      }
    },
    methods: {
      minimize () {
        ipcRenderer.send('window-minimize')
      },
      close () {
        ipcRenderer.send('window-close')
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
        display: flex
        flex-direction: column
        width: 100%
        height: 100%
        overflow: hidden
        border: 1px solid #e0e0e0
        border-radius: 6px
        box-sizing: border-box
        background: #fff
        .top-bar
            position: absolute
            top: 0
            left: 0
            right: 0
            height: 25px
            z-index: 100000
            .editing-file-list
                display: flex
                margin-right: 60px
                height: 100%
                -webkit-padding-start: 0
                li
                    display: flex
                    padding: 0 5px
                    flex: 0 0 110px
                    height: 25px
                    line-height: 25px
                    vertical-align: top
                    border-right: 1px solid #e0e0e0
                    -webkit-app-region: no-drag
                    &.more-btn
                        flex: 0 0 15px !important
                        cursor: pointer
                        &:hover
                            background: #e0e0e0
                        .iconfont
                            font-size: 18px
                    span
                        display: inline-block
                        &.file-name
                            flex: 1
                            width: 0px
                            font-size: 14px
                            white-space: nowrap
                            overflow: hidden
                            text-overflow: ellipsis
                        &.close-icon
                            padding-left: 5px
                            flex: 0 0 15px
                            height: 25px
                            .iconfont
                                font-size: 13px
                                border-radius: 3px
                                cursor: pointer
                                &:hover
                                    background: #ff851b
                                    color: #fff
            .window-control-bar
                position: absolute
                right: 8px
                top: 5px
                li
                    display: inline-block
                    margin: 0 3px
                    width: 15px
                    height: 15px
                    border-radius: 50%
                    vertical-align: top
                    text-align: center
                    line-height: 15px
                    cursor: pointer
                    &:hover
                        color: #fff !important
                    &.minimize
                        background: #ffba14
                        color: #ffba14
                    &.close
                        background: #ff5347
                        color: #ff5347
                    .iconfont
                        font-size: 12px
        .main
            flex: 1
            height: 0
            .editor
                width: 100%
                height: 100%
                *
                    border: none !important
        .bottom-bar
            display: flex
            flex: 0 0 30px
            border-top: 1px solid #e0e0e0
            ul
                display: flex
                flex: 1
                width: 0
                height: 30px
                -webkit-padding-start: 0
                &.bottom-left-bar
                    flex-direction: row
                &.bottom-right-bar
                    flex-direction: row-reverse
                &.bottom-middle-bar
                    justify-content: center
                li
                    padding: 0 2px
                    line-height: 30px
                    color: #b2b8a6
                    cursor: pointer
                    &:hover
                        color: #333
                    .iconfont
                        font-size: 20px
        .drag
            -webkit-app-region: drag
        .no-drag
            -webkit-app-region: no-drag
</style>