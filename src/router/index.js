import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Search = () => import('views/search/Search')
const Order = () => import('views/order/Order')
const Profile = () => import('views/profile/Profile')
const Shop = () => import('views/shop/Shop')

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home,
    meta:{
      show:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      show:true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      show:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      show:true
    }
  },
  {
    path: '/shop',
    component: Shop,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
