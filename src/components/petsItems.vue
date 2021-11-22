<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      v-bind:src="pet.pictures[0]"
     height="300"
    ></v-img>

    <v-card-title>
      {{pet.name}}
    </v-card-title>

    <v-card-subtitle>
      {{pet.description}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Editar
      </v-btn>

      <v-spacer></v-spacer>

     
    </v-card-actions>

  </v-card>
</template>

<script>

export default {
    data: () => ({
      show: false,
      imageUri: '',
      id: ''
    }),
    props: {
      pet: Object
    }
  }
</script>

<style>

</style>