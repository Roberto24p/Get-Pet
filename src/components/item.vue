<template lang="">
    <div>
        <v-card max-width="300">
             <v-img @mouseover="hover=true" :class="{animation: hover}" height="350" :src="pet.imagen"></v-img>
              <v-card-title>{{pet.name}}</v-card-title>
              <v-card-text>
               <div class="my-4 subtitle-1">
                   {{ pet.descripcion}}
              </div>
              </v-card-text>
              <v-card-text>
                  <div>
                      
                      {{pet.direccion}}
                  </div>
                  
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                   <v-btn color="orange" text> Adoptar   </v-btn>
                   <v-btn color="orange" text> Me Interesa </v-btn>
              </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
  props: {
    pet: Object,
  },
  data: function () {
    return {
      hover: false,
    };
  },
};
</script>
<style scoped>
.animation {
  opacity: 0.5;
}
</style>