<template>
  <div>
    <b-row no-gutters class="equipos--bordes">
      <b-col cols="12" md="3" class="bg-light px-3 mt-md-5">
        <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ CARRITO DE COMPRAS ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
        <section>
          <h5 class="fs-6 fw-bold text-secondary">
            Bolsa de Compras BIG MOBILE
          </h5>
          <hr />
          <div>
            <div v-if="items.length !== 0">
              <CardCarrito
                v-for="item in items"
                :key="item.id"
                :titulo="item.nombre"
                :imagen="require('../assets/img/IMG-carrito.png')"
                :imagenAlt="item.nombre"
                :precio="item.price"
              />
            </div>
            <p v-else class="fst-italic">Agrega algo a tu carrito</p>
          </div>
          <hr />
          <div class="d-flex justify-content-between my-1">
            <div>
              <h6 class="fs-6 fw-bold text-secondary">Subtotal Productos</h6>
            </div>
            <div>
              <h5 v-if="items.length !== 0" class="fs-6 fw-bold text-secondary">
                $ {{ subtotalProductos }}
              </h5>
              <h5 v-else class="fs-5 fw-bold text-secondary">$ 0</h5>
            </div>
          </div>
          <div class="d-flex justify-content-between my-1">
            <div>
              <h6 class="fs-6 fw-bold text-secondary">Descuentos</h6>
            </div>
            <div>
              <h5 v-if="items.length !== 0" class="fs-6 fw-bold text-secondary">
                $ {{ descuento }}
              </h5>
              <h5 v-else class="fs-5 fw-bold text-secondary">$ 0</h5>
            </div>
          </div>
          <div class="d-flex justify-content-between my-1">
            <div>
              <h6 class="fs-6 fw-bold text-secondary">TOTAL</h6>
            </div>
            <div>
              <h4 v-if="items.length !== 0" class="fs-3 fw-bold text-primary">
                $ {{ totalFinal }}
              </h4>
              <h4 v-else class="fs-3 fw-bold text-primary">$ 0</h4>
            </div>
          </div>
          <div>
            <b-button
              v-if="items.length !== 0"
              variant="primary"
              class="equipos--boton__ancho mt-3"
              :to="{ name: 'checkout' }"
            >
              Pagar
            </b-button>
            <b-button
              v-else
              variant="primary"
              class="equipos--boton__ancho mt-3"
            >
              Pagar
            </b-button>
          </div>
        </section>
        <!-- ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ CARRITO DE COMPRAS ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ -->
      </b-col>
      <b-col cols="12" md="9" class="bg-light px-0 mt-md-0 mt-5">
        <h2 class="text-center text-md-start">Equipos & Accesorios</h2>
        <!-- Si los datos aun no han sido recibidos mostrará la linea de abajo -->
        <p v-if="isLoading">Cargando Datos...</p>
        <b-row v-else class="my-3">
          <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ GALERIA DE PRODUCTOS ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
          <CardEquipos
            v-for="produc in productos"
            :key="produc.id"
            :id="produc.id"
            :nombre="produc.nombre"
            :imagen="require('../assets/img/IMG-equipos.png')"
            :imagenAlt="produc.imagen"
            :caracteristicas="produc.caracteristicas"
            :normal="produc.precio_normal"
            :promo="produc.precio_promo"
          ></CardEquipos>
          <!-- ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ GALERIA DE PRODUCTOS ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ -->
        </b-row>
        <nav class="my-3">
          <ul class="pagination">
            <li class="page-item active"><a class="page-link">1</a></li>
            <li class="page-item"><a class="page-link">2</a></li>
            <li class="page-item"><a class="page-link">3</a></li>
          </ul>
        </nav>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardEquipos from "@/components/CardEquipos.vue";
import CardCarrito from "@/components/CardCarrito.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CardEquipos,
    CardCarrito,
  },
  data() {
    return {
      isLoading: true, // si los datos aun no han cargado
    };
  },
  // Petición para obtener los datos realizada al crear la vista
  created() {
    this.$store.dispatch("getProductos").then(() => {
      this.isLoading = false;
    });
  },
  computed: {
    ...mapState(["productos", "items"]),
    ...mapGetters(["subtotalProductos", "descuento", "totalFinal"]),
  },
};
</script>

<style lang="sass" scoped>
.equipos--bordes
    padding: 15px
.equipos--texto__aling-end
  text-align: end !important
.equipos--boton__ancho
  width: 100%
</style>
