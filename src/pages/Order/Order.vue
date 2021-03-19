<template>
  <div class="fat">
    <Head>
      <div slot="center">订单</div>
    </Head>
    <div class="container">
      <div class="boottom">
        <span class="font">登录后查看外卖订单</span>
        <van-button to="./login" class="btn" type="primary" color="skyblue">立即登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../HeadTop/HeadTop";
export default {
  components: {
    Head
  }
};
</script>

<style scoped>
.fat {
  width: 100vw;
  height: calc(100vh - 46px);
  overflow: hidden;
  position: relative;
}
.container {
  /* margin: 0 auto; */
  width: 300px;
  left: 50%;
  top: 50%;
  height: 300px;
  margin-top: -230px;
  margin-left: -150px;
  background-repeat: no-repeat;
  position: relative;
  background-image: url("../../assets/images/order/person.png");
}
.boottom {
 position: relative;
 top: 280.687px;
}
.btn{
  margin: 0 auto;
  left: 35%;
  margin-top: 10px;

}
.font{
  display: block;
  color: #a5a1a1;
  text-align: center
}
</style>
