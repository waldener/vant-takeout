<template>
  <div class="home">
    <Head title="好吃外卖" class="head">
      <div slot="left" v-text="address.city"></div>
      <div slot="center">共乐餐厅</div>
      <div slot="right" @click="$router.push('/login')" v-if="!userInfo.id">登录|注册</div>
      <van-icon
        style="transform:translateY(2px)"
        slot="right"
        size="20"
        color="#fff"
        name="user-o"
        v-else
      ></van-icon>
    </Head>
    <swiper :images1="images1" :images2="images2" class="swiper"></swiper>
    <shop-list></shop-list>
  </div>
</template>

<script>
import Head from '../HeadTop/HeadTop.vue'
import ShopList from '../../components/ShopList/shoplist.vue'
import Swiper from "@/pages/home/child/Swiper"

import { mapState } from 'vuex'
import { apiAdress, apiGetFood, apiLogin } from '../../request/api'
import { Toast } from 'vant'

export default {
  components: {
    Head,
    ShopList,
    Swiper
  },
  data () {
    return {
      images1: [],
      images2: [],
      address: {},
      position: '40.10038,116.36867'
    }
  },
  watch: {
    position () {
      this.getAddress()
    }
  },

  created () {
    this.getSwiper()
    this.getLocation()
    this.getAddress()
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getSuccess, this.geError)
        // 支持
        console.log("支持地理位置接口")
      } else {
        // 不支持
        console.log("不支持地理位置接口")
      }
    },
    //同意授权
    getSuccess (event) {
      this.position = event.coords.latitude.toFixed(5) + ',' + event.coords.longitude.toFixed(5)
      console.log(this.position)
    },
    //拒绝授权
    geoError (error) {
      console.log(error)
      console.log("Error code " + error.code + ". " + error.message)
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("定位失败,用户拒绝请求地理定位")
          break
        case error.POSITION_UNAVAILABLE:
          alert("定位失败,位置信息是不可用")
          break
        case error.TIMEOUT:
          alert("定位失败,请求获取用户位置超时")
          break
        case error.UNKNOWN_ERROR:
          alert("定位失败,定位系统失效")
          break
      }
    },
    getAddress () {
      apiAdress(this.position).then(res => {
        this.address = res.data
      })
    },
    getSwiper () {
      apiGetFood()
        .then(res => {
          if (res.code == 0) {
            this.images1 = res.data.slice(0, res.data.length / 2)
            this.images2 = res.data.slice(8, res.data.length)
          } else {
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
.home
  overflow hidden
  .swiper
    margin-top 46px
</style>
