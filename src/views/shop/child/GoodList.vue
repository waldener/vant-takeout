<template>

</template>

<script>
  import {shopsGoods} from "@/network/home";
  import Scroll from "@/components/common/scroll/Scroll";
  export default {
    name: "GoodList",
    components:{
      Scroll
    },
    data(){
      return{
        goods:[],
        currentIndex:0
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.scroll.refresh()
        console.log('1');
      },1000)
    },
    created() {
      this._getGoods()
    },
    methods:{
      listClick(index){
        this.currentIndex = index
        console.log(this.currentIndex);
      },
      _getGoods(){
        shopsGoods().then(res => {
          this.goods = res.data
          console.log(this.goods);
        })
      }
    }
  }
</script>

<style scoped>
#left{
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80px;
  text-align: center;
}
#left div{
  height: 60px;
  font-size: 12px;
  line-height: 60px;
  background: #f7f7f7;
}
#left .active{
  background: white;
  color: lightcoral;
}
</style>