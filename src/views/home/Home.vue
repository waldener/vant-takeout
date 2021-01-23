<template>
  <div id="home">
    <nav-bar></nav-bar>
    <scroll class="scroll" ref="scroll">
      <swiper @imageLoad="imageLoad"></swiper>
      <goods-list class="shop-list"></goods-list>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "@/views/home/child/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";
  import Swiper from "@/views/home/child/Swiper";
  import GoodsList from "@/views/home/child/GoodsList";
  export default {
    name: "Home",
    components:{
      NavBar,
      Scroll,
      Swiper,
      GoodsList
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .scroll{
    position: absolute;
    top:46px;
    bottom: 50px;
    left: 0;
    right: 0;
    background: #f7f7f7;
  }
  .shop-list{
    margin: 10px 0;
  }
</style>