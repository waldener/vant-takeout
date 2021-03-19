<template>
  <van-swipe indicator-color="skyblue" class="swiper" v-if="images1.length">
    <van-swipe-item>
      <div>
        <ul class="swiper-item">
          <li v-for="(item,index) of images1" :key="index">
            <img v-lazy="item.image_url" :src="item.image_url" />
            <span class="food-font">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <ul class="swiper-item">
        <li v-for="(item,index) of images2" :key="index">
          <img v-lazy="item.image_url" :src="item.image_url" />
          <span class="food-font">{{item.title}}</span>
        </li>
      </ul>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swiper",
  props:{
    images1:{
      type:Array,
      default(){
        return []
      }
    },
    images2: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.swiper-item {
  width: 100%;
  height 90%
  padding-bottom  8px
  box-sizing border-box
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
li {
  width: 25%
  height: 50%
  padding 15px
  box-sizing border-box
  text-align: center;
img{
  width 100%
  height 100%
}
.food-font {
  font-size: 9px;
  display: inline-block;
  margin: 5 auto;
}
}
}
</style>
