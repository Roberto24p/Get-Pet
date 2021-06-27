<template lang="es">
    <div>
    <v-card v-if="show">
	<v-card-title class="justify-center">
	    <span class="headline">Login</span>
	</v-card-title>
	<v-card-text>
	    <v-text-field label="Usuario" required ></v-text-field>
	</v-card-text> 
	<v-card-text>
	    <v-text-field type="password" label="Password"> </v-text-field>
	</v-card-text> 
	<v-card-actions class="justify-center pb-6">
	    <v-btn>Login </v-btn>
	    <v-btn @click="show=false">Sign in </v-btn>
	</v-card-actions>
  </v-card>
  <v-card v-else>
	<v-card-title class="justify-center">
	    <span class="headline">Sign In</span>
	</v-card-title>
	<v-card-text>
	    <v-text-field label="E-mail" type="email" required >
	    </v-text-field>
	</v-card-text>
	<v-card-text>
	    <v-text-field label="Usuario" required></v-text-field> 
	</v-card-text>
	<v-card-text>
	    <v-text-field type="password" label="Password"></v-text-field>
	</v-card-text>
	<v-card-text>
	    <v-text-field type="password" label="Confirm Password"></v-text-field>
	</v-card-text>
	<v-card-actions class="justify-center pb-6">
	    <v-btn>Register</v-btn>
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
      this.$store.state.services
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
        });
    },
  },
    mounted(){
	console.log(this.show)
    }
};
</script>
<style lang="">
</style>
