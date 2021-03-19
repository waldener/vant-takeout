<template>
  <van-nav-bar class="nav-bar">
    <div slot="left" class="left">
      <slot name="left"></slot>
    </div>
    <div slot="title" class="title">
      <slot name="center"></slot>
    </div>
    <div slot="right" class="right">
      <slot name="right"></slot>
    </div>
  </van-nav-bar>
</template>

<script>
export default {
};
</script>

<style lang="stylus" scoped>
  .nav-bar{
    height 49px
    background skyblue
    color white
    position fixed
    top 0
    left 0
    right 0
    z-index 999
    box-shadow 1px 0 1px #fefefe
    .title{
      color white
    }
  }
</style>
