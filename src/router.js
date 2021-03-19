  import Vue from "vue";
  import Router from "vue-router";
  Vue.use(Router);
  import login from "./pages/login/login.vue";
  import Shop from "./pages/Shop/Shop.vue";
  import {before} from "better-scroll/src/util/dom";
  const msite = () =>import('./pages/home/Home.vue')
  const Order = () =>import('./pages/Order/Order.vue')
  const Profile = () =>import('./pages/Profile/Profile.vue')

const router =  new Router({
  mode:'hash',
  routes: [
    {
      path: "/msite",
      component: msite,
      meta: {
        Footshow: true,
        title:'主页'
      }
    },
    {
      path: "/order",
      component: Order,
      meta: {
        Footshow: true,
        title:'购物车'
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        Footshow: true,
        title: '我的'
      }
    },
    {
      path: "/shop",

      component: Shop,
      meta: {
        title: '详情'
      }
    },
    {
      path: "/",
      redirect: "/msite"
    },
    {
      path: "/login",
      component: login,
      meta: {
        title: '注册'
      }
    },
  ],
  linkActiveClass: "mui-active",
});
  export default router
  router.beforeEach((to,from,next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    next()
  })
