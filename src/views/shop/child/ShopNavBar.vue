<template>
  <div class="shop-nav-bar">
    <van-nav-bar class="tab-bar">
      <div slot="left" class="back" @click="back">
        <van-icon name="arrow-left" color="white" size="24" class="arrow"/>
      </div>
      <div slot="title" class="title"></div>
    </van-nav-bar>
    <div class="content">
      <div class="shop-icon">
        <img :src="shopsInfo.avatar" alt="">
      </div>
      <div class="shop-info">
        <span class="brand">品牌</span>
        <span class="name">{{shopsInfo.name}}</span>
        <van-icon name="play" color="#b4b4b4" size="18" class="play" @click="showInfo"/>
      </div>
      <div class="msg">
        <span class="food-score">{{shopsInfo.foodScore}}</span>
        <span class="sell-count">月售{{shopsInfo.sellCount}}单</span>
        <span class="time">好吃专送 约{{shopsInfo.deliveryTime}}分钟</span>
        <span class="distance">距离{{shopsInfo.distance}}</span>
      </div>
      <div is-link @click="showPopup" class="first-order">
        <span>首单</span> 新用户下单立减17元 (4个优惠)
        <van-icon name="arrow-down" color="#b4b4b4" size="12" class="icon-down"/>
      </div>
      <div class="detail-info" v-show="showDetail">
          <span class="brand">品牌</span>
          <span class="name">{{shopsInfo.name}}</span>
          <ul class="etc-info">
            <li>
              <h3>3.5</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>90 单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>好吃专送</h3>
              <p>约 28 分钟</p>
            </li>
            <li>
              <h3>4 元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>1000m</h3>
              <p>距离</p>
            </li>
          </ul>
          <div class="notice">
            <h2>公告</h2>
            <div class="brief-notice">{{shopsInfo.bulletin}}</div>
          </div>
      </div>
      <!--    此处有遮罩bug，暂时不知道如何解决，所以取消vant原生遮罩，使用自定义遮罩代替实现效果-->
      <van-popup v-model="popShow" get-container=".first-order" position="bottom" class="pop"  :overlay="false">
        <h2>优惠活动</h2>
        <ul>
          <li>
            <span>首单</span><span>新用户下单立减17元</span>
          </li>
          <li>
            <span>满减</span><span>满35减16 满70减35</span>
          </li>
          <li>
            <span>特价</span><span>【立减19元】 欢乐小食餐</span>
          </li>
          <li>
            <span>首单</span><span>新用户下单立减17元</span>
          </li>
          <li>
            <span>满减</span><span>满35减16 满70减35</span>
          </li>
          <li>
            <span>特价</span><span>【立减19元】 欢乐小食餐</span>
          </li>
        </ul>
      </van-popup>
    </div>
    <!--    自定义遮罩效果-->
    <div class="cover" @click="showInfo" v-show="showDetail"></div>
    <div class="cover" @click="showPopup" v-show="popShow"></div>
  </div>
</template>

<script>
  import {shopsInfo} from "@/network/home";
  import {shopsinfo} from "@/network/api";

  export default {
    name: "ShopNavBar",
    data(){
      return{
        shopsInfo:{},
        showDetail:false,
        popShow:false
      }
    },
    created() {
      this._getShopInfo()
    },
    methods:{
      back(){
        this.$router.back()
      },
      _getShopInfo(){
        shopsInfo().then(res => {
          this.shopsInfo = res.data
        }).catch(err => {
          console.log('获取商家信息失败')
        })
      },
      showInfo(){
        this.showDetail = !this.showDetail
      },
      showPopup(){
        this.popShow = !this.popShow
      }
    },
  }
</script>

<style scoped>
.shop-nav-bar{
}
.tab-bar{
  background-image: url("~assets/images/shop/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.back{
  color: white;
  font-size: 15px;
}
.back .arrow{
  transform: translate(-10px,3px);
}
.title{
  color: white;
}
.shop-icon{
  position: relative;
}
.shop-icon img{
  width: 66px;
  height: 66px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: -38px;
  z-index: 1;
  box-shadow: 0 0 1px #e4e4e4;
}
.shop-info{
  margin-top: -25px;
  text-align: center;
}
.brand{
  background: lightcoral;
  font-size: 12px;
  padding: 2px;
  display: inline-block;
  transform: translateY(-1px);
}
.name{
  font-size: 18px;
  font-weight: bold;
  margin-left: 6px;
}
.shop-info .play{
  transform: translateY(3.5px);
}
.msg{
  text-align: center;
  font-size: 12px;
  margin: 20px auto;
}
.msg span{
  margin: 2%;
  color: dimgray;
}
.msg .time{
  width: 40%;
}
.first-order{
  width: 60%;
  height: 18px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  color: #d1d4d4;
  margin: 0 auto;
  margin-top: -10px;
  padding: 1px;
  border: 1px solid #e4e4e4;
}
.first-order .icon-down{
  transform: translateY(1px);
}
.first-order span:first-child{
  background: #ff5777;
  color: #666666;
}
.pop{
  text-align: left;
  padding: 10px;
}
.pop li{
  padding: 5px 0;
  color: #666666;
  font-size: 12px;
}
.pop li span:first-child{
  background: #ff5777;
  margin-right: 2px;
}
.pop h2{
  color: #666666;
  margin-bottom: 5px;
}
.detail-info{
  position: relative;
  top: 40px;
  width: 90%;
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  background: white;
  z-index: 9;
}
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.etc-info{
  display: flex;
  margin: 40px 0;
}
.etc-info li{
  flex: 1;
  font-size: 12px;
  text-align: left;
}
.etc-info p{
  margin-top: 5px;
}
.notice{
  text-align: left;
  font-size: 14px;
}
.notice .brief-notice{
  margin-top: 10px;
  font-size: 13px;
  letter-spacing: 1px;
}
</style>