<template>
  <div class="home">
    <Head title="好吃外卖" class="head">
      <div slot="left" v-text="address.city"></div>
      <div slot="center">共乐餐厅</div>
      <div slot="right" @click="$router.push('/login')" v-if="!userInfo.id">登录|注册</div>
      <van-icon slot="login" size="30" color="#fff" name="share" v-else></van-icon>
    </Head>
    <swiper :images1="images1" :images2="images2" class="swiper"></swiper>
    <shop-list></shop-list>
  </div>
</template>

<script>
import Head from '../HeadTop/HeadTop.vue'
import ShopList from '../../components/ShopList/shoplist.vue'
import Swiper from "@/pages/home/child/Swiper";

import { mapState } from 'vuex'
import { apiAdress, apiGetFood, apiLogin } from '../../request/api'
import { Toast } from 'vant'

export default {
  components: {
    Head,
    ShopList,
    Swiper
  },
  data() {
    return {
      images1: [],
      images2: [],
      address:{}
    }
  },
  created() {
    this.getSwiper()
    this.getAddress()
  },
  methods: {
    getAddress(){
      apiAdress('40.10038,116.36867').then(res => {
        this.address = res.data
      })
    },
    getSwiper() {
      apiGetFood()
        .then(res => {
          if (res.code==0) {
            this.images1 = res.data.slice(0, res.data.length / 2)
            this.images2 = res.data.slice(8, res.data.length)
          }else{
            console.log(res)
            console.log('没有获取到数据')
          }
        })
        .catch(err => {
          console.log(err)
          Toast('数据获取失败')
        })
    }
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped lang="stylus">
  .home {
    overflow: hidden;
    .swiper{
      margin-top 46px
    }
  }
</style>
