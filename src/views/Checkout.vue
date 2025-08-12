<template>
  <div>
    <b-row no-gutters class="check--bordes">
      <b-col cols="12" md="8" class="bg-light px-md-5 px-2">
        <h2 class="check--texto__aling-center my-md-3 my-4">Checkout</h2>
        <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ Formulario de Checkout ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
        <b-form @submit.prevent="confirmar">
          <h4 class="fs-5 fst-italic text-secondary">Datos del Comprador</h4>
          <hr />
          <b-form-group
            label="Nombre"
            label-for="input-1"
            class="text-secondary"
          >
            <b-form-input
              id="input-1"
              v-model="cliente.nombre"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Email"
            label-for="input-2"
            class="text-secondary"
          >
            <b-form-input
              id="input-2"
              v-model="cliente.email1"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Repetir Email"
            label-for="input-3"
            class="text-secondary"
          >
            <b-form-input
              id="input-3"
              v-model="cliente.email2"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Telefono"
            label-for="input-4"
            class="text-secondary"
          >
            <b-form-input
              id="input-4"
              v-model="cliente.fono"
              type="tel"
              placeholder="9 1234 5678"
              pattern="[9]{1}[0-9]{4}[0-9]{4}"
              required
            ></b-form-input>
          </b-form-group>

          <br />
          <h4 class="fs-5 fst-italic text-secondary">Datos del Despacho</h4>
          <hr />

          <b-form-group
            label="Dirección"
            label-for="input-5"
            class="text-secondary"
          >
            <b-form-input
              id="input-5"
              v-model="despacho.direccion"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Comuna"
            label-for="input-6"
            class="text-secondary"
          >
            <b-form-input
              id="input-6"
              v-model="despacho.comuna"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <br />
          <h4 class="fs-5 fst-italic text-secondary">Forma de Pago</h4>
          <hr />

          <b-form-group label-for="input-7">
            <b-form-select
              id="input-7"
              v-model="formapago"
              :options="metodosPago"
              required
            ></b-form-select>
          </b-form-group>

          <br />
          <b-button type="submit" variant="primary" class="text-center w-100"
            >Confirmar</b-button
          >
        </b-form>
        <!-- ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ Formulario de Checkout ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ -->
      </b-col>
      <b-col cols="12" md="4" class="bg-light px-3 mt-5">
        <section class="mt-4">
          <h5 class="fs-6 fw-bold text-secondary">Productos</h5>
          <hr />
          <div>
            <!-- ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓ CARRITO DE COMPRAS ⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓⇓  -->
            <div v-if="items.length !== 0">
              <CardCarrito
                v-for="item in items"
                :key="item.id"
                :titulo="item.nombre"
                :imagen="require('../assets/img/IMG-equipos.png')"
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
              <h5 v-if="items.length !== 0" class="fs-5 fw-bold text-secondary">
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
              <h5 v-if="items.length !== 0" class="fs-5 fw-bold text-secondary">
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
        </section>
        <!-- ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ CARRITO DE COMPRAS ⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑⇑ -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardCarrito from "@/components/CardCarrito.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    CardCarrito,
  },
  data() {
    return {
      // datos cliente
      cliente: {
        nombre: "",
        email1: "",
        email2: "",
        fono: "",
      },
      // datos de despacho
      despacho: {
        direccion: "",
        comuna: "",
      },
      // selección de la forma de pago
      formapago: null,
      metodosPago: [
        { text: "Seleccione un metodo de pago", value: null },
        "Transferencia Bancaria",
        "Servipag",
        "Webpay",
        "Contra entrega",
      ],
    };
  },
  // Petición para obtener los datos realizada al crear la vista
  created() {
    this.$store.dispatch("getProductos");
  },
  computed: {
    ...mapState(["productos", "items"]),
    ...mapGetters(["subtotalProductos", "descuento", "totalFinal"]),
  },
  methods: {
    ...mapActions(["postOrdenProce"]),
    /// BOTON para confirmar el formulario y procesar la orden
    confirmar() {
      // verificación de que los emails coincidan
      if (this.cliente.email1 !== this.cliente.email2) {
        alert("Verifique que los emails correspondan");
      } else {
        const totales = {
          subtotal: this.subtotalProductos,
          descuentos: this.descuento,
          total: this.totalFinal,
        };
        const clienteVerificado = {
          nombre: this.cliente.nombre,
          email: this.cliente.email1,
          fono: this.cliente.fono,
        };

        const orden = {
          items: this.items,
          totales,
          cliente: clienteVerificado,
          despacho: this.despacho,
          formapago: this.formapago,
        };

        this.postOrdenProce(orden).then(() => {
          this.$router.push({ name: "confirmacion" });
        });
        console.log(orden);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.check--bordes
    padding: 15px
.check--grande
    font-size: 1.8rem
.check--porcentaje
    font-size: 3rem
    padding: 0 25%
.check--pequeno
    font-size: 1rem
.check--texto__aling-center
  text-align: center !important
.custom-select
  display: inline-block
  width: 100%
  height: calc(1.5em + .75rem + 2px)
  padding: .375rem 1.75rem .375rem .75rem
  font-size: 1rem
  font-weight: 400
  line-height: 1.5
  color: #495057
  vertical-align: middle
  border: 1px solid #ced4da
  border-radius: .25rem
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
</style>
