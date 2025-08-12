<template>
  <b-container fluid class="px-0">
    <b-row no-gutters>
      <b-col>
        <NavBar />
      </b-col>
    </b-row>
    <router-view />
  </b-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style lang="sass">
.row
  --bs-gutter-x:0rem !important
</style>
