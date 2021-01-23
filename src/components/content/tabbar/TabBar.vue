<template>
  <van-tabbar v-model="active" active-color="lightskyblue">
    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search" to="/search">发现</van-tabbar-item>
    <van-tabbar-item name="order" icon="shopping-cart-o" to="/order">订单</van-tabbar-item>
    <van-tabbar-item name="profile" icon="user-o" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        active: 'home',
      };
    },
  }
</script>

<style scoped>

</style>