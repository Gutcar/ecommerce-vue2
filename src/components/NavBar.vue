<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-toggle target="nav-collapse" class="mx-3"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-between">
        <b-navbar-nav class="mr-md-3 mx-3">
          <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'equipos' }">Equipos</b-nav-item>
          <b-nav-item>Planes</b-nav-item>
          <b-nav-item>Prepago</b-nav-item>
          <b-nav-item>Oficina Virtual</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="sass">
nav
  padding: 0 !important
</style>
