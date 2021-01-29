<template>
  <div id="shop">
    <shop-nav-bar></shop-nav-bar>
    <van-tabs v-model="active" class="content">
      <van-tab title="点餐"><good></good></van-tab>
      <van-tab title="评价">内容 2</van-tab>
      <van-tab title="商家">内容 3</van-tab>
    </van-tabs>
    <order-bar></order-bar>
  </div>
</template>

<script>
  import ShopNavBar from "@/views/shop/child/ShopNavBar";
  import OrderBar from "@/views/shop/child/OrderBar";
  import Good from "@/views/shop/child/Good";
  export default {
    name: "Shop",
    components:{
      ShopNavBar,
      Good,
      OrderBar
    },
    data(){
      return{
        active:0
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
#shop{
  height: 100Vh;
  position: relative;
}
.content{
  position: absolute;
  top: 190px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>