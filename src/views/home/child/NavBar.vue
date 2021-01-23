<template>
  <van-nav-bar class="nav-bar">
    <div slot="left">
      <a href="">地区</a>
    </div>
    <div slot="title" class="title">
      蓝白餐厅
    </div>
    <div slot="right">
      登录<span></span>注册
    </div>
  </van-nav-bar>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .nav-bar{
    background: lightskyblue;
  }
  .nav-bar div{
    color: white;
  }
  a{
    color: white;
  }
  span{
    display: inline-block;
    width: 1px;
    height: 14px;
    background: #e4e4e4;
    margin: 0 2px;
    transform: translateY(3px);
  }
</style>