<template>
  <van-goods-action id="order-bar">
    <van-goods-action-icon icon="cart-o" text="购物车" @click="" :badge="foodsCar.length"/>
    <div class="price">
      <h2>￥{{total}}</h2>
      <p>配送费￥4元</p>
    </div>
    <div :class="['notice',{'pay':total >= 20}]">
      {{ notice }}
    </div>
  </van-goods-action>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "OrderBar",
    data(){
      return {
      }
    },
    computed:{
      ...mapState(["foodsCar"]),
      total(){
        let total = 0;
        for (let item of this.foodsCar){
          total += item.count*item.price
        }
        return total
      },
      notice(){
        let notice = '￥20元起送'
        if(this.foodsCar.length == 0){
          notice = '￥20元起送'
        }else if(this.total < 20){
          notice = `还差￥${20 - this.total}元`
        }else {
          notice = '去结算'
        }
        return notice
      }
    }
  }
</script>

<style scoped>
  #order-bar{
    box-shadow:0 0 1px #c5c5c5;
  }
  .price{
    padding: 10px;
    color: #666666;
  }
  .price h2{
    font-size: 19px;
  }
  .price p{
    font-size: 10px;
  }
  .notice{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    width: 100px;
    text-align: center;
    background: #c5c5c5;
    font-size: 14px;
  }
  .pay{
    background: lightcoral;
    color: white;
  }
</style>