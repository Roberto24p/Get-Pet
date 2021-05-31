<template lang="">
 
  <v-card>
    <v-card-title>
    <span class="headline">Login</span>
    </v-card-title>
    <v-card-text>
      <v-text-field
                  label="Usuario"
                  required
                ></v-text-field>
    </v-card-text> 
  </v-card>

</template>
<script>
export default {
  data: function () {
    return {
      username: "",
      password: "",
      nameErrors: null,
      listaUsuarios: [],
      
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
};
</script>
<style lang="">
</style>