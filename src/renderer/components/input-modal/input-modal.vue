<template>
    <div class="modal">
        <transition name="fade">
            <div class="input-modal">
                <Input v-model="value" placeholder="new article title" size="large" :autofocus="true"></Input>
            </div>
        </transition>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style lang="stylus">
    .modal
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: transparent
        z-index: 99999
        border-radius: 6px
        overflow: hidden
        .input-modal
            position: fixed
            top: 50px
            left: 50%
            transform: translate(-50%, 0)
            background: #fff
            input
                width: 400px
                height: 40px
        .fade-enter-active, &.fade-leave-active
            transition: opacity .5s
        .fade-enter, &.fade-leave-to
            opacity: 0
</style>