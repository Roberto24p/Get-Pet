<template>
   <v-row justify="center">
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
          +
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
          <v-toolbar-title>Registro de Mascota</v-toolbar-title>
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
                            v-model="pet.name"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                            label="Edad"
                            v-model="pet.age"
                        >

                        </v-text-field>
                    </v-col>
                    <v-col>
                       <v-text-field v-model="pet.date" type="date" label="Fecha de nacimiento">
                       </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6">
                        <v-text-field label="Descripcion" v-model="pet.description">

                        </v-text-field>
                    </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="6">
                       <v-file-input
                          label="Imagen de tu mascota"
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

        <v-list
          three-line
          subheader
        >

          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="pet.adoption"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Adopcio'on</v-list-item-title>
              <v-list-item-subtitle>Esta mascota se publicara en la secci'on de adopci'on</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>

export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        imagen: null,
        pet: {
          user: localStorage.getItem('id'),
          name: '',
          dateBorn: '',
          description: '',
          adoption: false,
          city: '',
          pictures: ''
        }
      }
    },
    methods:{
      clickImagen(e){
        console.log(e)
        this.imagen = e

      },
      send(){
        this.dialog = false
         this.$store.state.services.uploadImagen(this.imagen)
         .then(img=>{
           console.log(img)
           this.pet.pictures = img
           fetch(process.env.VUE_APP_RUTA_ADD_PET, {
              method: 'POST',
              body: JSON.stringify(this.pet),
              headers: {
               'Content-Type': 'application/json',
              }
            }).then(resp=>{
              console.log(resp)
            })
          })
       /* const newUri = 'moment/'+ uuidv4()+ '/'+this.imagen.name
        const refImg = ref.child(newUri)
        const metada = {contentType: 'image/jpeg'}
        this.pet.pictures = newUri
        console.log(this.pet)
        refImg.put(this.imagen, metada)
          .then(e=>{
            fetch(process.env.VUE_APP_RUTA_ADD_PET, {
              method: 'POST',
              body: JSON.stringify(this.pet),
              headers: {
               'Content-Type': 'application/json',
              }
            }).then(resp=>{
              console.log(resp)
            })
          })*/
      }
    }
}
</script>

<style>

</style>