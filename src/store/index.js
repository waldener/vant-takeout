import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {shopsGoods} from "@/network/home";

export default new Vuex.Store({
  state: {
    goods:[],
    foods:[],
    foodsCar:[]
  },
  mutations: {
    getGoods(state,res){
      state.goods = res.data
      for(let item of state.goods){
        for(let food of item.foods){
          state.foods.push(food)
        }
      }
      for(let index in state.foods){
        state.foods[index].id = index
      }
    },
    addCount(state,index){
      let food = state.foods[index]
      if(!food.count){
        state.foodsCar.push(food)
        food.count = 1
      }else {
        food.count += 1
      }
    },
    delCount(state,index){
      let food = state.foods[index]
      if(food.count){
        food.count -= 1
      }
      state.foodsCar = state.foodsCar.filter(item => !item.count == 0)
      /*if(food.count == 0){
        state.foodsCar.splice(index,1)
        console.log('删除'+index);
      }*/
      /*for(let i in state.foodsCar){
        if(!state.foodsCar[i].count){
          state.foodsCar.splice(i,1)
        }
      }*/
   }
  },
  actions: {
    _shopsGoods({commit}){
      shopsGoods().then(res => {
        commit('getGoods',res)
      })
    },
    selectFood({state,commit},{flag , index}){
      if(!state.foods[index].count){
        Vue.set(state.foods[index],'count',0)
      }
      if(flag){
        commit("addCount",index)
      }else {
        commit("delCount",index)
      }
      console.log(state.foodsCar);
    }
  },
  modules: {
  }
})
