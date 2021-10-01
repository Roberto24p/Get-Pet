import Vue from 'vue'
import Vuex from 'vuex'
import {services} from '../services/Service.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services,
     token: null
  },
  mutations: {
     setToken(state, payload){
        state.token = payload
        localStorage.setItem(state.token.key, state.token.value)
        console.log("En el Store")
     },
     removeToken(state){
        localStorage.removeItem(state.token.key)
        state.token = null
     },
     loadToken(state){
        let token = localStorage.getItem('key');
        if( token != null) state.token = token
     }
  },
  actions: {
    
  },
  modules: {
    
  }
})
