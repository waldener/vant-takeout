<template>
  <div id="goods-list">
    <van-card v-for="(item , index) in shopList" :thumb="require('assets/images/home/shopImage.jpeg')"
              class="shop" :key="index" @click="toShop">
      <div slot="title" class="title"><span>品牌</span>{{item.name}}</div>
      <van-rate
          v-model="item.rating"
          :size="14"
          color="lightsalmon"
          void-icon="star"
          allow-half
          void-color="#eee"
          slot="desc"
          class="desc"
      />
      <div slot="price" class="price">{{'￥' + item.float_minimum_order_amount + '元起送 配送费约2元'}}</div>
    </van-card>
  </div>
</template>

<script>
  import {getShopList} from "@/network/home";

  export default {
    name: "GoodsList",
    components:{
    },
    data(){
      return {
        shopList:[],
        baseUrl:'http://elm.cangdu.org/img/'
      }
    },
    created() {
      this._getShopList()
    },
    methods:{
      _getShopList(){
        getShopList({latitude:'40.10038',longitude:'116.36867'})
        .then(res => {
          this.shopList = res.data
        }).catch(err => {
          console.log(err);
        })
      },
      toShop(){
        this.$router.push('/shop')
      }
    },
  }
</script>

<style scoped>
.shop{
  background: white;
}
.title{
  font-size: 14px;
  font-weight: bold;
  font-family: 微软雅黑;
}
.title span{
  font-size: 12px;
  padding: 2px;
  background: lightcoral;
  margin-right: 5px;
}
.desc{
  margin-top: 40px;
}
.price{
  font-size: 12px;
  font-weight: bold;
}
</style>