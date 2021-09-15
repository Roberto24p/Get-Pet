<template lang="es">
    <div max-width="80%">
      <v-card >
	      <v-card-title class="justify-center">
	        <span class="headline">Login</span>
	      </v-card-title>
  	    <v-card-text>
  	      <v-text-field label="Usuario" required v-model="username"></v-text-field>
  	    </v-card-text> 
  	    <v-card-text>
  	      <v-text-field type="password" label="Password" v-model="password"> </v-text-field>
  	    </v-card-text> 
      	<v-card-actions class="justify-center pb-6">
    	    <v-btn @click="login">Login </v-btn>
          <v-btn @click="close">Close </v-btn>
      	</v-card-actions>
      </v-card>
    </div>
</template>
<script>
export default { 
  data: function () {
    return {
      username: "",
      password: "",
      nameErrors: null,
      listaUsuarios: [],
      show: true
    };
  },
  methods: {
    login: function () {
     /* this.$store.state.services
        .login({
          email: this.username,
          password: this.password,
        })
        .then((data) => {
          console.log(data.token);
          if (data.token != null) {
            this.$router.push("profile");
            console.log("Loggin Correcto");
          } else {
            this.username = "";
            this.password = "";
            alert("Credenciales incorrectas");
            console.log("Loggin Incrorrecto");
          }
        });*/
        if(this.username == "roberto" && this.password == "roberto"){
          localStorage.setItem("key", "123")
          console.log("hoala mundo")
          this.$router.push('/Home')
        }
    },
    showSignIn(){
      this.$emit("showSignIn")
    },
    close(){
      this.$emit("close")
    }
  },
  mounted(){
  	console.log(this.show)
  }
};
</script>
<style lang="">
</style>
