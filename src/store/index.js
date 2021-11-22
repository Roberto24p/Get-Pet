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
        console.log(payload)
        state.token = payload.token
       // localStorage.setItem(state.token.key, state.token.value)
       // console.log("En el Store")
     },
     removeToken(state){
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        state.token = null
     },
     loadToken(state){
        let token = localStorage.getItem('token');
        if( token != null) state.token = token
     }
  },
  actions: {
    async login({commit}, user){
       try{
          alert(process.env.RUTA_LOGIN)
         const resp = await fetch(/*'http://192.168.100.6:8090/login'*/ process.env.VUE_APP_RUTA_LOGIN, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(user),
         })
         const userR = await resp.json()
         commit('setToken', userR)
         localStorage.setItem('token', userR.token)
         localStorage.setItem('id', userR.user)

         return true
       }catch(e){
         console.log("Error: "+e)
       }
    }
  },
  modules: {
    
  }
})
