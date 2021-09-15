<template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adopcion</span>
        </v-card-title>
        <v-card-text>
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
                        >
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6"
                    >
                        <v-text-field
                            label="Apellido"
                        >

                        </v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
             <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="cerrar"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>

</template>

<script>
export default {
    props:{
      show: Boolean
    },
    methods:{
      cerrar(){
        this.$emit("cerrar")
      }
    }
}
</script>

<style>

</style>