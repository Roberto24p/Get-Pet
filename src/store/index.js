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
       // localStorage.setItem(state.token.key, state.token.value)
       // console.log("En el Store")
     },
     removeToken(state){
        localStorage.removeItem('token')
        state.token = null
     },
     loadToken(state){
        let token = localStorage.getItem('key');
        if( token != null) state.token = token
     }
  },
  actions: {
    async login({commit}, user){
       try{
         const resp = await fetch('http://localhost:8090/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(user),
         })
         const userR = await resp.json()
         commit('setToken', userR)
         localStorage.setItem('token', userR.token)
         return true
       }catch(e){
         console.log("Error: "+e)
       }
    }
  },
  modules: {
    
  }
})
