<template>
  <v-container>
    <v-row style="margin-top: 50px">
      <v-col class="d-flex justify-space-around flex-wrap" > 
        <perfilHeader v-bind:profile="prof"></perfilHeader>
     </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-space-around flex-wrap">
        <petsItems   style="margin-top: 30px"></petsItems>
      </v-col>  
      <v-col>
        <petForm v-for="i in pets" v-bind:pet="i" v-bind:key="1"> </petForm>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import perfilHeader from "@/components/perfilHeader"
import petsItems from "@/components/petsItems"
import petForm from "@/components/petForm"
export default {
    components:{
      perfilHeader,
      petsItems,
      petForm        
    },
    data(){
      return {
        prof: null,
        pets: []
      }
    },
    created: async function(){
      console.log(this.$store.state.services )
      const idPerfil = localStorage.getItem('id')
      const profile = await fetch('http://localhost:8090/profiles/' + idPerfil)
      const res = profile.json()
      res.then(x=>{
        this.prof = x.message
        this.pets = x.message.pets
        console.log(this.pets)
        console.log(x.message)
      })
    }
}
</script>
<style >
    
</style>