<template>
   <div class="tab-bar">
      <van-tabbar route active-color="skyblue"  v-model="active" class="tab-bar">
        <van-tabbar-item to='/msite' icon="shop"  >
          <span >首页</span>
          <template slot="icon"  >
            <van-icon size="20" class="iconfont" class-prefix='icon' name='waimaifuwu-shiyongfangbian' />
          </template>
        </van-tabbar-item>

          <!--<van-tabbar-item to='/search' icon="shop">
          <span>发现</span>
          <template slot="icon" >
            <van-icon size="20" class="iconfont" class-prefix='icon' name='faxian' />
          </template>
        </van-tabbar-item>-->

          <van-tabbar-item to='/order' icon="shop">
          <span>订单</span>
          <template slot="icon" >
            <van-icon size="20" class="iconfont" class-prefix='icon' name='dingdan' />
          </template>
        </van-tabbar-item>

          <van-tabbar-item to='/profile' icon="shop">
          <span>我的</span>
          <template slot="icon">
            <van-icon size="20" class="iconfont" class-prefix='icon' name='ziyuan' />
          </template>
        </van-tabbar-item>

      </van-tabbar>
    </div>

</template>
  <!-- 底部导航栏 -->

<script>
export default {
    data() {
        return {
            active: 1,
        }
    }
};
</script>
<style lang="stylus" scoped>
.tab-bar{
  border-top 1px solid #e4e4e4
}

span
  font-size 15px


.van-tabbar-item
  width 40px
  display flex
  justify-content center


</style>>


