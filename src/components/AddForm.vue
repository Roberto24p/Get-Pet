<template lang="">
<v-container>
<v-row   justify="center">
  <v-col  lg="5"
    md="8"  
    sm="4" >
     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
   
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="age"
      label="Edad"
      required
    ></v-text-field>


 
  

    <v-btn
      color="primary"
      class="mr-4"
      @click=""
    >
      Guardar
    </v-btn>

    
  </v-form>
  </v-col>
  </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    age: null,
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style lang="">
</style>