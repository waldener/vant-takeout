import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import Vant from 'vant'
import "vant/lib/index.css";
import "./mock/mockServer";

import { Tabbar, TabbarItem , NavBar , Toast , Lazyload , Swipe, SwipeItem , Card , Rate , Icon , Popup , Tab, Tabs , GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use( Tabbar , TabbarItem , NavBar , Toast, Lazyload , Swipe, SwipeItem , Card , Rate , Icon , Popup , Tab, Tabs , GoodsAction, GoodsActionIcon, GoodsActionButton );
Vue.use(Vant)
Vue.use(Lazyload,{loading:require('assets/images/home/loading.jpg')})

Toast.setDefaultOptions({ position: 'bottom' });


Vue.config.productionTip = false

Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
