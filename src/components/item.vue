<template >
    <div>
        <v-card max-width="300" :loading="loading">
	        <v-img @mouseover="hover=true"  
          	 @mouseleave="hover=false" 
	    	     :class="{animation: hover}"
		         height="300"
		         :src="pet.imagen">
          </v-img>
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
		        <v-btn color="orange" text @click="adoptar"> Adoptar   </v-btn>
            <v-btn color="orange" text> Me Interesa </v-btn>
          </v-card-actions>
        </v-card>
        <v-dialog v-show="adopcionFrm" v-model="adopcionFrm" max-width="600px  ">
          <adopcionFrm  @cerrar="cerrar" ></adopcionFrm>
        </v-dialog>
    </div>
  
</template>
<script>
import adopcionFrm from "@/components/adopcionFrm.vue"
export default {
  components:{
    adopcionFrm,
  },
  props: {
    pet: Object,
  },
  data: function () {
    return {
      hover: false,
      loading: false,
      adopcionFrm: false,
    };
  },
  methods: {
    adoptar(){
      this.loading = true
      this.adopcionFrm = true
      setTimeout(()=>this.loading = false, 3000)
    },
    cerrar(){
      this.adopcionFrm = false
    }
  }
};
</script>
<style scoped>
.animation {
  opacity: 0.5;
}


</style>
