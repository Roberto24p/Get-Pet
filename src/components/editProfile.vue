<template>
   <v-row justify="center" v-if="profile!=null">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Profile
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Editar Perfil</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="send()"
            >
              Guardar
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Datos</v-subheader>
          <v-list-item>
            <v-list-item-content>
            <v-container>
                <v-row >
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                            label="Nombre"
                            required
                            v-model="profile.names"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                            label="A cerca de ti: "
                            v-model="profile.about"
                        >

                        </v-text-field>
                    </v-col>
                    <v-col>
                       <v-text-field type="date" label="Fecha de nacimiento" v-model="profile.dateBorn">
                       </v-text-field>
                    </v-col>
     
                       <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field label="Ciudad" v-model="profile.city">

                        </v-text-field>
                    </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="6">
                       <v-file-input
                          label="Foto de Perfil"
                          truncate-length="15"
                          prepend-icon="mdi-camera" 
                          @change="clickImagen($event)"
                          type="file"
                        ></v-file-input>
                    </v-col>
                </v-row>
            </v-container>
            </v-list-item-content>
          </v-list-item>
         
        </v-list>

      </v-card>

    </v-dialog>
  </v-row>
</template>
<script>

import { mapState } from 'vuex';
export default ({
    data(){
        return{
            dialog: false,
            imagen: null,


        }
    },
    computed: mapState(['token']),
    methods:{
        clickImagen(e){
          console.log(e)
          this.imagen = e
        },
        send(){
            this.$store.state.services.uploadImagen(this.imagen)
         .then(img=>{
            const profile = {
              avatar: img,
              names: this.profile.names,
              about: this.profile.about,
              city: this.profile.city
            }
            console.log(profile)
            fetch('http://192.168.100.6:8090/profiles/', {
              method: 'PUT',
              body: JSON.stringify(profile),
              headers: {
                 'Authorization': this.token,
               'Content-Type': 'application/json',
              }
            }).then(resp=>{
              console.log("Errorrrs")
              console.log(resp)
            }).catch(e=>console.log(e) )
          })
          
         
      
        }
    },
    props: {
        profile: Object,
    },
})
</script>

