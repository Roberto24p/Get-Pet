<template lang="es">
    <div max-width="80%">
      <v-card >
	      <v-card-title class="justify-center">
	        <span class="headline">Login</span>
	      </v-card-title>
  	    <v-card-text>
  	      <v-text-field label="Usuario" required v-model="user.username"></v-text-field>
  	    </v-card-text> 
  	    <v-card-text>
  	      <v-text-field type="password" label="Password" v-model="user.password"> </v-text-field>
  	    </v-card-text> 
      	<v-card-actions class="justify-center pb-6">
    	    <v-btn @click="loginMethod">Login </v-btn>
          <v-btn @click="close">Close </v-btn>
      	</v-card-actions>
      </v-card>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default { 
  data: function () {
    return {
      user: {
        username: "",
        password: ""
      }
      ,
      nameErrors: null,
      listaUsuarios: [],
      show: true
    };
  },
  methods: {
   loginMethod(){
      const val = this.login(this.user)
      val.then(e=>{
        if(e == true){
          this.close()
        }
      })
    },
    showSignIn(){
      this.$emit("showSignIn")
    },
    close(){
      this.$emit("close")
    },
    ...mapActions(['login'])
  },
  mounted(){
  	console.log(this.show)
  }
};
</script>
<style lang="">
</style>
