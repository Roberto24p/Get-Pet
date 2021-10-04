<template>
  <v-container>
    <v-row style="margin-top: 50px">
      <v-col class="d-flex justify-space-around flex-wrap" > 
        <perfilHeader></perfilHeader>
     </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-space-around flex-wrap">
      <petsItems   style="margin-top: 30px"></petsItems>
      <petsItems   style="margin-top: 30px"></petsItems>
      <petsItems   style="margin-top: 30px"></petsItems>
      <petsItems   style="margin-top: 30px"></petsItems>
      </v-col>  
    </v-row>
  </v-container>
</template>
<script>
import perfilHeader from "@/components/perfilHeader"
import petsItems from "@/components/petsItems"
export default {
    components:{
      perfilHeader,
      petsItems
    }
}
</script>
<style >
    
</style>