<template>
  <div id="good">
    <scroll class="left" ref="scrollLeft" :bounce="false">
      <div v-for="(item,index) in goods"
           :key="index"
           @click="listClick(index)"
           :class="{'active':currentIndex == index}">
        {{item.name}}
      </div>
    </scroll>
    <scroll class="right" ref="scrollRight" :probe-type="3" @scroll="itemScroll">
      <div class="good-info" v-for="(item,index1) in goods" :key="index1">
        <div class="item-name">{{item.name}}</div>
        <div class="good-item" v-for="(goodItem,index2) in item.foods" :key="index2">
          <van-card class="food-info">
            <img :src="goodItem.image" alt="" slot="thumb" class="food-img">
            <p slot="title" class="food-name">{{goodItem.name}}</p>
            <div slot="desc" class="food-desc">
              <p class="desc">{{goodItem.description}}</p>
              <p>月售{{goodItem.sellCount}}份 好评率{{goodItem.rating}}%</p>
            </div>
            <p slot="price" class="food-price"><span>￥</span>{{goodItem.price}}</p>
            <van-icon name="add-o" slot="footer" size="16px" class="food-add" color="lightcoral"/>
          </van-card>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import {shopsGoods} from "@/network/home";
import GoodList from "@/views/shop/child/GoodList";
import Scroll from "@/components/common/scroll/Scroll";
  export default {
    name: "Good",
    components:{
      GoodList,
      Scroll
    },
    data(){
      return{
        goods:[],
        currentIndex:0,
        offsetTop:[],
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.scrollLeft.refresh()
      },1000)
      setTimeout(() => {
        this.$refs.scrollRight.refresh()
        let nameDiv = document.getElementsByClassName('item-name')
        for(let i of nameDiv){
          this.offsetTop.push(i.offsetTop)
        }
        this.offsetTop.push(Number.MAX_VALUE)
      },1000)
    },
    created() {
      this._getGoods()
    },
    methods:{
      listClick(index){
        this.currentIndex = index
        this.$refs.scrollRight.scrollTo(0,-this.offsetTop[index],1000)
      },
      _getGoods(){
        shopsGoods().then(res => {
          this.goods = res.data
        })
      },
      itemScroll(position){
        for(let i in this.offsetTop){
          i = i*1
          if(-position.y >= this.offsetTop[i]&&-position.y < this.offsetTop[i+1]){
            if(this.currentIndex != i){
              this.currentIndex = i
              break
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
#good{
  position: relative;
  /*计算高度*/
  height: calc(100vh - 234px);
  display: flex;
}
.left{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80px;
  text-align: center;
}
.left div{
  height: 60px;
  font-size: 12px;
  line-height: 60px;
  background: #f7f7f7;
}
.left .active{
  background: white;
  color: lightcoral;
}
.right{
  flex: 1;
  position: absolute;
  top:0;
  bottom: 0;
  left: 80px;
  right: 0;
}
.right .item-name{
  background:#f3f5f7;
  border-left: 2px solid #c5c5c5;
  font-size: 12px;
  padding: 5px;
}
.right .info{
  margin: 5px auto;
}
.food-info{
  height: 100px;
}
.food-info .food-img{
  width: 70px;
  height: 70px;
  border-radius: 0;
}
.food-info .food-name{
  font-size: 16px;
  font-weight: bold;
}
.food-desc{
  font-size: 10px;
  color:#93999f;
}
.food-desc .desc{
  height: 14px;
}
.food-desc p{
  margin-top: 13px;
}
.food-price{
  font-size: 14px;
  font-weight: bold;
  color: lightcoral;
}
.food-add{
  transform: translateY(-21px);
}

</style>