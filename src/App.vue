<template>
  <v-app>
    <v-app-bar color="primary">
    <header-app></header-app>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import headerApp from "@/components/HeaderApp.vue"
export default {
  name: 'App',
  components:{
    headerApp
  },

  data: () => ({
    //
  }),
};
</script>
