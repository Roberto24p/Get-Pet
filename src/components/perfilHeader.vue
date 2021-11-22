<template >
  <v-container v-if="profile!=null" >
      <v-row>
          <v-col xs="12" md="3">
              <v-avatar color="warning lighten-2"  size="110" >
                  <v-img :src="profile.avatar" alt="avatar"></v-img>
              </v-avatar>
              <h2 class="pl-4">{{profile.names}} </h2>
          </v-col>
          <v-col md="9" xs="12" >
              <v-card elevation="1">
                  <v-card-title> A cerca de mi...</v-card-title>
                  <v-card-text>{{profile.about}}</v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
const ref = storage.ref()
import {storage} from '../services/fireBase';
export default {
   props:{
    profile: Object
  },
   data(){
       return {
           avatar: ''
       }
   }
}
</script>

<style>

</style>