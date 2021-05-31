<template >
  <v-container>
    <v-col
      class="d-flex justify-space-around flex-wrap"
      style="margin-top: -30px"
    >
   
        <item
          style="margin-top: 30px"
          v-for="mascota in mascotaLista"
          v-bind:pet="mascota"
          :key="mascota.i"
        ></item>
   
    </v-col>
  </v-container>
</template>

<script>
import item from "@/components/item.vue";

export default {
  components: {
    item,
  },
  data() {
    return {
      mascotaLista: [],
    };
  },
  methods: {
    getPicture: async function () {
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
          name: "Sneider",
          direccion: "duran",
          descripcion: "bonio, hermoso, bello",
          imagen: data.message,
          id: i,
        });
      });
    }
  },
};
</script>
