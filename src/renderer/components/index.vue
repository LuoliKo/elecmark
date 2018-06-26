<template>
    <div class="index">
        <div class="left-content">
            <ul class="article-list">
                <li>
                    <span class="title">环境搭建</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊时代发生的发是地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊速度发啊</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">环境啊第三方撒地方撒搭建</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">爱的色放</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">按时打撒</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊时代发生的发撒地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">阿什顿飞撒地方撒发生的发生地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">环境搭建</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊时代发生的发是地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊速度发啊</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">环境啊第三方撒地方撒搭建</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">爱的色放</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">按时打撒</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊时代发生的发撒地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">阿什顿飞撒地方撒发生的发生地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">环境搭建</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊时代发生的发是地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊速度发啊</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">环境啊第三方撒地方撒搭建</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">爱的色放</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">按时打撒</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">啊时代发生的发撒地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                <li>
                    <span class="title">阿什顿飞撒地方撒发生的发生地方</span>
                    <span class="date">{{new Date()}}</span>
                </li>
                s
            </ul>
        </div>
        <div class="main-content">
            <div class="top-bar drag"></div>
            <div class="main">
                <mavon-editor class="editor"
                              v-model="value"
                              :toolbarsFlag="false"
                              :toolbars="toolbars"
                              :boxShadow="false">
                </mavon-editor>
            </div>
            <div class="bottom-bar"></div>
        </div>
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
    methods: {},
    components: {
      mavonEditor
    }
  }
</script>

<style lang="stylus">
    .index
        position: absolute
        display: flex
        width: 100%
        height: 100%
        overflow: hidden
        border-radius: 6px
        .left-content
            position: relative
            flex: 0 0 300px
            width: 0
            background: rgba(255, 255, 255, .9)
            overflow-y: auto
            &::-webkit-scrollbar
                width: 5px
                background: rgba(225, 225, 225, .9)
            &::-webkit-scrollbar-thumb
                background: #bbb
            ul.article-list
                -webkit-padding-start: 0
                li
                    padding: 8px 20px
                    cursor: pointer
                    &:hover
                        background: rgba(200, 200, 200, .9)
                    span
                        display: block
                        &.title
                            color: #111
                            font-size: 18px
                            white-space: nowrap
                            text-overflow: ellipsis
                            overflow: hidden
                        &.date
                            color: #666
                            font-size: 13px
        .main-content
            display: flex
            flex-direction: column
            flex: 1
            width: 0
            background: #fff
            .top-bar
                flex: 0 0 25px
            .main
                flex: 1
                height: 0
                .editor
                    width: 100%
                    height: 100%
            .bottom-bar
                flex: 0 0 30px
        .drag
            -webkit-app-region: drag
        .no-drag
            -webkit-app-region: no-drag
</style>