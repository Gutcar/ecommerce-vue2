<template>
  <b-col cols="12">
    <b-card no-body class="overflow-hidden mb-2 mx-3">
      <b-row no-gutters>
        <b-col cols="4">
          <b-card-img :src="imagen" :alt="imagenAlt"></b-card-img>
        </b-col>
        <b-col cols="8">
          <b-card-body
            :title="titulo"
            title-tag="h6"
            class="p-0 ps-4 py-md-1 pt-4"
          >
            <b-card-text class="fw-bold fs-6 text-primary">
              $ {{ precio }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    titulo: String,
    imagen: String,
    imagenAlt: String,
    precio: Number,
  },
};
</script>

<style></style>
