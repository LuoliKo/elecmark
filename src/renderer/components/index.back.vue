<template>
    <div class="index">
        <div class="left-bar">
            <div class="avatar-wrapper">
                <img :src="defaultAvatar">
            </div>
            <div class="tool-bar">
                <div title="new article" class="new-article-btn">
                    <i class="iconfont icon-androidadd"></i>
                </div>
                <ul>
                    <li title="blog information"><i class="iconfont icon-androidlist"></i></li>
                    <li title="clean"><i class="iconfont icon-androidsync"></i></li>
                    <li title="generate"><i class="iconfont icon-androidlocate"></i></li>
                    <li title="run dev"><i class="iconfont icon-androidglobe"></i></li>
                    <li title="deploy"><i class="iconfont icon-androidcloud"></i></li>
                </ul>
            </div>
            <div class="tool-bar bottom-bar">
                <ul>
                    <li title="setting"><i class="iconfont icon-androidsettings"></i></li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="top-bar" ref="topBar">
                <ul class="edit-file-list">
                    <li></li>
                </ul>
            </div>
            <div class="main-content">
                <mavon-editor class="editor"
                              v-model="value"
                              :toolbarsFlag="true"
                              :toolbars="toolbars"
                              :boxShadow="false">
                </mavon-editor>
                <div class="right-bar"></div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import { toolbars } from '../common/js/toolbars-options'
  import defaultAvatar from './default-avatar.jpg'

  export default {
    name: 'editor',
    data () {
      return {
        value: '',
        toolbars: toolbars,
        defaultAvatar
      }
    },
    created () {

    },
    methods: {},
    components: {
      mavonEditor
    }
  }
</script>

<style lang="stylus">
    .index
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        display: flex
        width: 95%
        height: 95%
        overflow: hidden
        background: #fff
        border-radius: 6px
        box-shadow: 0px 10px 15px rgba(55, 55, 55, .7)
        .left-bar
            position: relative
            flex: 0 0 80px
            background: #484a4a
            .avatar-wrapper
                margin: 20px auto
                width: 60px
                height: 60px
                box-sizing: border-box
                border-radius: 10px
                overflow: hidden
                border-radius: 10px
                img
                    width: 100%
                    height: 100%
            .tool-bar
                width: 100%
                text-align: center
                color: #fff
                &.bottom-bar
                    position: absolute
                    bottom: 0
                    left: 0
                .new-article-btn
                    position: relative
                    margin: 10px auto
                    padding: 8px
                    width: 35px
                    height: 35px
                    border-radius: 50%
                    background: #6b6868
                    line-height: 35px
                    cursor: pointer
                    &:hover
                        background: #fff
                        color: #ffb72a
                ul
                    margin-top: 20px
                    -webkit-padding-start: 0;
                    li
                        display: block
                        padding: 10px
                        cursor: pointer
                        &:hover
                            background: #6b6868
                .iconfont
                    font-size: 20px !important
        .main
            display: flex
            flex-direction: column
            flex: 1 1 auto
            width: 0px
            .top-bar
                flex: 0 0 40px
                border-left: 1px solid #e0e0e0
                border-right: 1px solid #e0e0e0
                color: #999
                -webkit-app-region: drag
            .main-content
                display: flex
                flex: 1
                .editor
                    flex: 1
                .right-bar
                    flex: 0 0 20px
                    border-top: 1px solid #e0e0e0
</style>