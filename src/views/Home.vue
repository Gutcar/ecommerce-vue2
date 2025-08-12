<template>
  <div>
    <b-row no-gutters class="home--bordes">
      <b-col cols="12" class="bg-light px-0">
        <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ Header con imagen de Vitrina ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
        <header>
          <div class="text-center my-3">
            <img
              alt="Vitrina"
              src="../assets/img/Vitrina.png"
              class="img-fluid"
            />
          </div>
        </header>
        <!-- ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ Header con imagen de Vitrina ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ -->
      </b-col>
    </b-row>
    <section>
      <b-row no-gutters class="text-center justify-content-around">
        <b-col class="px-0">
          <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ Primera Sección ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
          <h2 class="my-mb-5 pb-5 pt-3">Planes Flexibles</h2>
          <!-- Si los datos aun no han sido recibidos mostrará la linea de abajo -->
          <p v-if="isLoading">Cargando Datos...</p> 
          <b-row v-else class="my-3">
            <CardHome
              v-for="(plan, index) in planes"
              :key="index"
              :titulo="plan.titulo"
              :imagen="require('../assets/img/imagen-home.png')"
              :imagen-alt="plan.titulo"
              :texto="plan.texto"
            ></CardHome>
          </b-row>
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row
        no-gutters
        class="text-center justify-content-around home--opiniones__back-color"
      >
        <b-col class="px-0">
          <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ Segunda Sección ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
          <h2 class="my-mb-5 pb-5 pt-3">Qué dicen de nosotros</h2>
          <!-- Si los datos aun no han sido recibidos mostrará la linea de abajo -->
          <p v-if="isLoading">Cargando Datos...</p>
          <b-row v-else class="my-3">
            <CardHome
              v-for="(opinion, index) in opiniones"
              :key="index"
              :imagen="require('../assets/img/opiniones.png')"
              :imagen-alt="opinion.nombre"
              :texto="opinion.texto"
              :nombre="opinion.nombre"
            ></CardHome>
          </b-row>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import CardHome from "@/components/CardHome.vue";
import { mapState } from "vuex";

export default {
  components: {
    CardHome,
  },
  data() {
    return {
      isLoading: true, // si los datos aun no han cargado
    };
  },
  // Petición para obtener los datos realizada al crear la vista
  created() {
    this.$store.dispatch("getHome").then(() => {
      this.isLoading = false;
    });
  },
  computed: {
    ...mapState(["planes", "opiniones"]),
  },
};
</script>

<style lang="sass" scoped>
.home--bordes
    padding: 15px
.home--texto__aling-center
  text-align: center !important
.home--opiniones__back-color
  background-color: #F5F5F2
</style>
