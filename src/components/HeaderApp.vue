<template>
<v-container>
    <v-toolbar flat  color="primary">
      <v-toolbar-title>GET PET</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn  text  to="/" >
          Home 
      </v-btn> 
      <v-btn text v-on:click="showSignIn"  v-if="token == null">
        Únete
      </v-btn>
      <v-btn text v-on:click="showLogIn" v-if="token == null">
        Accede
      </v-btn>
   
     <v-btn  text to="/perfil" v-if="token !=null">
          Perfil 
      </v-btn> 
     
      <v-btn text>
        Ayudanos
      </v-btn>
      <v-btn text v-on:click="logOut" v-if="token !=null">
        Cerrar Sesion
      </v-btn>
    </v-toolbar-items>
    <v-menu bottom left v-if="$vuetify.breakpoint.xsOnly|| $vuetify.breakpoint.smOnly" offset-y>
      <template v-slot:activator="{ on,attrs}">
        <v-btn icon color="secundary" v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list dense>
         <v-list-item link  to="/" >
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link v-on:click="showLogIn" v-if="token == null">
          <v-list-item-title>Acceder</v-list-item-title>
        </v-list-item>
        <v-list-item link v-on:click="showSignIn" v-if="token == null">
          <v-list-item-title>Únete</v-list-item-title>
        </v-list-item>
        <v-list-item link  to="/perfil" v-if="token !=null">
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Ayudanos</v-list-item-title>
        </v-list-item> 
         <v-list-item link v-on:click="logOut" v-if="token !=null">
          <v-list-item-title>Cerrar Sesion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-toolbar>
    <v-dialog
	    v-model="dialog"
	    transition="dialog-top-transition"
	    max-width="400px" >
        <sigIn v-show="dialogSignIn" @close="close" ></sigIn>
        <login-frm v-show="dialogLogIn" @close="close"> </login-frm>
    </v-dialog>
 </v-container>
  
</template>

<script>
import LoginFrm from "@/components/LoginFrm.vue"
import sigIn from "@/components/signIn.vue"
import { mapState } from 'vuex';
export default {
  components:{
    LoginFrm,
    sigIn
  },
 
  data(){
    return{
      dialog: false, 
      dialogLogIn: false,
      dialogSignIn: false, 
    }
  },
  computed: mapState(['token']),
 
  methods:{ 
    showLogIn(){
      this.dialogLogIn = true
      this.dialog = true
      this.dialogSignIn = false
    },
    push(){
      this.$router.push('perfil')
    },
     showSignIn(){
      this.dialogSignIn = true
      this.dialog = true
      this.dialogLogIn = false
    }, 
    close(){ 
      this.dialog = false
    
    },
    logOut(){
      this.$store.commit("removeToken")

    },
     },
  mounted(){
    this.$store.commit('loadToken')
    console.log(this.token)
    //this.token = localStorage.getItem('key')
  }
}
</script>

<style>

</style>
