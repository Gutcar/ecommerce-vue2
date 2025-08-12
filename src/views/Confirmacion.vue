<template>
  <b-row no-gutters class="justify-content-center">
    <b-col cols="12" md="auto" class="confir__ancho m-4 px-md-0 px-3">
      <h3>Confirmación</h3>
      <div class="p-5 rounded border my-5">
        <p class="text-secondary pb-0">
          La Orden <b>N° {{ confirmado.orderNumber }}</b>
          ha sido confirmada y ya la estamos preparando!
        </p>
      </div>
      <b-button variant="primary" class="w-100" :to="{ name: 'home' }"
        >Ir al Home</b-button
      >
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["confirmado"]),
  },
};
</script>

<style lang="sass" scoped>
.logo
  width: 100px

.confir__ancho
  width: 400px
  text-align: center

.size
  font-size: 1.1em
</style>
