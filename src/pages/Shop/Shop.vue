<template>
  <div class="shopContain">
    <ShopHead></ShopHead>
    <van-tabs v-model="active">
      <van-tab title="点餐"><ShopFood></ShopFood></van-tab>
      <van-tab title="评价"><ShopContent></ShopContent></van-tab>
      <van-tab title="商家"><ShopActivity></ShopActivity></van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { shopsinfo } from '../../request/api'
import ShopHead from './child/shopHead.vue'
import ShopFood from './child/shopFoods'
import ShopContent from './child/shopContent'
import ShopActivity from './child/shopActivity'
import ShopCar from './child/shopcar'
export default {
  data(){
    return {
      active: 0
    }
  },
  // mounted() {
  //   shopsinfo()
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  components: {
    ShopHead,
    ShopFood,
    ShopContent,
    ShopActivity,
    ShopCar
  }
}
</script>

<style lang="stylus" scoped>
  .shopContain{
    height 97vh
    width 100%
    overflow hidden
  }

</style>
