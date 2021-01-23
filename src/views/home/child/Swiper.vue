<template>
  <!--使用v-show会导致滑动swiper报错，不经常改变状态使用v-if较为合适-->
  <div id="swiper" v-if="image1.length*image2.length">
    <van-swipe indicator-color="lightskyblue" class="swiper" autoplay="5000" duration="1000">
      <van-swipe-item>
        <div>
          <ul class="contain">
            <li v-for="(item,index) of image1" :key="index">
              <img v-lazy="item.image_url" :src="item.image_url" />
              <span class="food-font">{{item.title}}</span>
            </li>
          </ul>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="contain">
          <li v-for="(item,index) of image2" :key="index">
            <img v-lazy="item.image_url" :src="item.image_url" @load="imageLoad"/>
            <span class="food-font">{{item.title}}</span>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  // 使用axios.create创建一个新的axios
  import {getFood} from "@/network/home";
  //使用axios默认get和post请求
  import {apiGetFood} from "@/network/api";

  export default {
    name: "Swiper",
    data() {
      return {
        image1: [],
        image2: [],
      }
    },
    mounted() {
      this.getImage()
    },
    methods:{
      getImage() {
        getFood().then(res => {
              if (res.code==0) {
                this.image1 = res.data.slice(0, res.data.length / 2)
                this.image2 = res.data.slice(8, res.data.length)
              }else{
                console.log('没有获取到数据')
              }
            })
            .catch(err => {
              console.log(err)
              this.$toast('数据获取失败')
            })
      },
      imageLoad(){
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
.swiper{
  padding-bottom: 20px;
  background: white;
}
.contain {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex: 1;
  text-align: center;
}
li img{
  width: 90px;
  height: 90px;
}
li .food-font {
  font-size: 10px;
  display: inline-block;
  margin: 5px auto;
  color: black;
  font-family: 微软雅黑;
  letter-spacing: 1px;
}

</style>