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
        <div class="good-item" v-for="goodItem in item.foods" :key="goodItem.id">
          <van-card class="food-info">
            <img :src="goodItem.image" alt="" slot="thumb" class="food-img" @load="refresh">
            <p slot="title" class="food-name">{{goodItem.name}}</p>
            <div slot="desc" class="food-desc">
              <p class="desc">{{goodItem.description}}</p>
              <p>月售{{goodItem.sellCount}}份 好评率{{goodItem.rating}}%</p>
            </div>
            <p slot="price" class="food-price"><span>￥</span>{{goodItem.price}}</p>
            <div slot="footer" class="footer">
              <van-icon name="minus" size="16px" color="lightcoral" @click="delFood(goodItem.id)" v-if="foods[goodItem.id].count"/>
              <span class="food-count" v-if="foods[goodItem.id].count">{{foods[goodItem.id].count}}</span>
              <van-icon name="plus" size="16px" color="lightcoral" @click="addFood(goodItem.id)"/>
            </div>

            <!--<div slot="num" class="food-count" v-if="foods[index2].count">{{foods[index2].count}}</div>
            <van-icon name="minus" slot="footer" size="16px" class="food-select" color="lightcoral" @click="delFood(index2)" v-if="foods[index2].count"/>
            <van-icon name="plus" slot="footer" size="16px" class="food-select" color="lightcoral" @click="addFood(index2)"/>-->
          </van-card>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import {mapState,mapActions} from 'vuex'
  export default {
    name: "Good",
    components:{
      Scroll
    },
    data(){
      return{
        currentIndex:0,
        offsetTop:[],
      }
    },
    computed:{
      ...mapState(['goods','foods'])
    },
    mounted() {

    },
    created() {
      this._getGoods()
    },
    methods:{
      ...mapActions({
        _getGoods:'_shopsGoods'
      }),
      refresh(){
        this.$refs.scrollLeft.refresh()
        this.$refs.scrollRight.refresh()
        let nameDiv = document.getElementsByClassName('item-name')
        this.offsetTop = []
        for(let i of nameDiv){
          this.offsetTop.push(i.offsetTop)
        }
        this.offsetTop.push(Number.MAX_VALUE)
      },
      listClick(index){
        this.currentIndex = index
        this.$refs.scrollRight.scrollTo(0,-this.offsetTop[index],0)
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
      },
      addFood(index){
        let flag = true
        this.$store.dispatch('selectFood', {flag , index})
      },
      delFood(index){
        let flag = false
        this.$store.dispatch('selectFood', {flag , index})
      }
    }
  }
</script>

<style scoped>
#good{
  position: relative;
  /*计算高度*/
  height: calc(100vh - 284px);
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
.footer{
  transform: translateY(-22px);
}
.food-count{
  font-size: 14px;
  padding: 0 3px;
  color: darkorange;
  display: inline-block;
  transform: translateY(-2px);
}
</style>