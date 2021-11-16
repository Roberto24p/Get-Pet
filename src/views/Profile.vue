<template>
  <v-container>
    <v-row style="margin-top: 50px">
      <v-col class="d-flex justify-space-around flex-wrap" > 
        <perfilHeader v-bind:profile="prof"></perfilHeader>
         
     </v-col>
    </v-row>
      <editProfile v-bind:profile="prof" style="max-width: 5px; max-heigth: 5px; margin-top:3px" ></editProfile>
    <v-row>
      <v-col  class="d-flex justify-space-around"> 
        <h2>TUS MASCOTAS</h2>
        <petForm style="max-width: 5px; max-heigth: 5px; margin-top:3px" ></petForm>

      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-space-around flex-wrap " style="margin-top: 30px;">
        <petsItems style="margin-top: 30px; margin-right:30px" v-for="i in pets" v-bind:pet="i" :key="i._id"> </petsItems>
      </v-col>
    </v-row>
     <v-row>
      <v-col  class="d-flex justify-space-around"> 
        <h2>EN ADOPCION</h2>
      </v-col>
    </v-row>
     <v-row>
      <v-col  class="d-flex justify-space-around"> 
        <petsItems style="margin-top: 30px; margin-right:30px" v-for="i in petsAdoption" v-bind:pet="i" :key="i._id"> </petsItems>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import perfilHeader from "@/components/perfilHeader"
import { mapState } from 'vuex';
import petsItems from "@/components/petsItems"
import petForm from "@/components/petForm"
import {storage} from '../services/fireBase';
import editProfile from "@/components/editProfile"
const ref = storage.ref()
export default {
    components:{
      editProfile,
      perfilHeader,
      petsItems,
      petForm        
    },
    data(){
      return {
        prof: null,
        pets: [],
        petsAdoption: [],
        dialogEditProfile : false
      }
    },
    computed: mapState(['token']),
    created: async function(){
      const perfil = "" 
      console.log(this.token)
      const profile = await fetch(process.env.VUE_APP_RUTA_PROFILE+this.token,
        {
          headers: {
          'Authorization': this.token,
           'Content-Type': 'application/json',
          }, 
          method: 'GET'
        }
      )
      const res = profile.json()
      res.then(x=>{
        this.prof = x.message
        const arrayPets = x.message.pets 
        console.log(arrayPets)
        let petsNoAdoption = []
        let petsAdoption = []
        for(const i in arrayPets){
          console.log(i)
          if(arrayPets[i].adoption == false) petsNoAdoption.push(arrayPets[i])
          else petsAdoption.push(arrayPets[i])
        }
        this.petsAdoption = petsAdoption
        this.pets = petsNoAdoption
      })
    }
}
</script>
<style >
    
</style>