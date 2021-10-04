<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://images.dog.ceo/breeds/setter-english/n02100735_3899.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Cuchurrumina
    </v-card-title>

    <v-card-subtitle>
      Bonita
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Historia
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla facilis at quibusdam maiores. Corporis delectus optio dolor quia consequuntur impedit quo voluptatibus aut, quibusdam autem soluta veritatis aperiam earum quasi.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<style>

</style>