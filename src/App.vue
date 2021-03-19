<template>
  <div>
    <keep-alive><router-view /></keep-alive>
    <Footer v-show="$route.meta.Footshow"></Footer>
  </div>
</template>
<script>
import { apiUserinfo } from './request/api'
import Footer from './components/FootGuide/FooterGuide'
import { Toast } from 'vant'
export default {
  mounted() {
    let res = {
      "code": 0,
      "data": {
        "_id": "5a9cd9c6ad5b2d34d42b385d",
        "phone": "13716962779"
      }
    }
    if (res.code == 0) {
      this.$store.commit('re_userInfo', {
        id: res.data._id,
        name: res.data.name,
        phone: res.data.phone
      })
    }
  },
  components: {
    Footer
  }
}
</script>



<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
