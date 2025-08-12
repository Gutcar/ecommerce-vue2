<template>
  <b-col cols="12" md="4">
    <article>
      <b-card
        :title="titulo"
        :img-src="imagen"
        :img-alt="imagenAlt"
        img-top
        tag="article"
        style="max-width: 20rem; min-width: 20rem; margin: 0 auto"
        class="mb-5"
      >
        <b-card-text>
          {{ texto }}
        </b-card-text>
        <template v-if="nombre" #footer>
          <small class="text-muted">{{ nombre }}</small>
        </template>
      </b-card>
    </article>
  </b-col>
</template>

<script>
export default {
  props: {
    titulo: String,
    imagen: String,
    imagenAlt: String,
    texto: String,
    nombre: String,
  },
};
</script>

<style></style>
