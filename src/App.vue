<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab-bar class="tab-bar" v-show="$route.meta.show"></tab-bar>
  </div>
</template>
<script>
import TabBar from "@/components/content/tabbar/TabBar";
export default {
  name:'App',
  components:{
    TabBar,
  }
}
</script>
<style>
  @import "assets/css/base.css";
  .tab-bar{
    box-shadow: -1px 0 1px #e4e4e4;
  }
</style>
