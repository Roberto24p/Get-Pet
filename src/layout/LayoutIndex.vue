<template lang="">
    <div>
    <!--<v-toolbar dark prominent src="https://picsum.photos/1920/1080?random">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Catch Pets</v-toolbar-title>
        <v-spacer></v-spacer>
         <v-btn color="success" text @click="dialog = true">
           Login/Register
         </v-btn>
    </v-toolbar>-->
    <v-container> 
       <!-- <item style="margin-top: 30px;" v-bind:pet="mascota"></item> -->
        <router-view></router-view>
    </v-container>
    <v-dialog
      @click:outside="resetDialog"
	    v-model="dialog"
	    transition="dialog-top-transition"
	    max-width="400px" >
	      <login-frm v-show="dialogLogIn" @showSignIn="showSignIn"></login-frm>
        <sigIn v-show="dialogSignIn">
        </sigIn>
    </v-dialog>
  </div>
</template>
<script>
import LoginFrm from "@/components/LoginFrm.vue";
import sigIn from "@/components/signIn.vue";
export default {
  components: {
    LoginFrm, 
    sigIn
  },
  data() {
    return {
	    dialog: false,
      dialogLogIn: true,
      dialogSignIn: false,
    }

  },
  methods: {
    showSignIn(){
      this.dialogLogIn = false
      this.dialogSignIn = true
    },
    resetDialog(){
      this.dialogLogIn = true
      this.dialogSignIn = false
      this.dialog = false
      console.log("Hola mundo")
    }
  }
  /* components: {
    item,
  },
  data() {
    return {
      mascotaLista: [],
    };
  },
  methods: {
    async getPicture() {
      const req = await fetch(`https://dog.ceo/api/breeds/image/random`, {
        method: "GET",
      });
      const res = await req.json();

      return res;
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.getPicture().then((data) => {
        this.mascotaLista.push({
          name: "Roberto",
          direccion: "duran",
          descripcion: "bonio, hermoso, bello",
          imagen: data.message,
          id: i
        });
      });
    }
    console.log(this.mascotaLista);

    /*mascota: {
       
      }*/
};
</script>
<style >
a {
  text-decoration: none;
}
</style>
