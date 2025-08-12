<template>
  <b-col cols="12" md="3">
    <article>
      <b-card
        :img-src="imagen"
        :img-alt="imagenAlt"
        img-top
        tag="article"
        style="margin: 0 auto"
        class="mb-4 mx-1"
      >
        <h5>{{ nombre }}</h5>
        <b-card-text>
          <div v-for="(caract, index) in caracteristicas" :key="index">
            <small class="card--texto__izquierda fw-light"
              >- {{ caract }}</small
            >
          </div>

          <div class="d-flex justify-content-around mt-3 text-center">
            <div>
              <p class="mb-0">Antes</p>
              <p class="fs-5 text-muted">{{ normal }}</p>
            </div>
            <div>
              <p class="mb-0">Ahora</p>
              <p class="fw-bold fs-5 text-primary">{{ promo }}</p>
            </div>
          </div>
        </b-card-text>
        <b-button variant="primary" class="card--boton__ancho" @click="agregar">
          Agregar
        </b-button>
      </b-card>
    </article>
  </b-col>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: String,
    nombre: String,
    imagen: String,
    imagenAlt: String,
    caracteristicas: Array,
    normal: Number,
    promo: Number,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["agregarItemCarrito"]),
    agregar() {
      let nuevoItem = {
        id: this.id,
        nombre: this.nombre,
        quantity: this.quantity,
        price: this.promo,
      };

      this.agregarItemCarrito(nuevoItem);
      console.log(nuevoItem);
    },
  },
};
</script>

<style lang="sass" scoped>
.card--texto__izquierda
  text-align: start
.card--boton__ancho
  width: 100%
</style>
