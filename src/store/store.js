import Vue from "vue";
import Vuex from "vuex";
import AxiosServices from "@/services/AxiosServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planes: [],
    opiniones: [],
    productos: [],
    items: [],
    ordenes: [],
    confirmado: {},
  },
  mutations: {
    OBTENER_PLANES(state, planesData) {
      state.planes = planesData;
    },
    OBTENER_OPINIONES(state, opinionesData) {
      state.opiniones = opinionesData;
    },
    OBTENER_PRODUCTOS(state, productosData) {
      state.productos = productosData;
    },
    AGREGAR_ITEM_CARRITO(state, nuevoItem) {
      state.items.push(nuevoItem);
    },
    AGREGAR_ORDEN(state, nuevaOrden) {
      state.ordenes.push(nuevaOrden);
    },
    ORDEN_CONFIRMADA(state, confirmacionData) {
      state.confirmado = confirmacionData;
      state.items = [];
    },
  },
  actions: {
    getHome({ commit }) {
      return AxiosServices.getHome()
        .then((response) => {
          commit("OBTENER_PLANES", response.data.planes);
          commit("OBTENER_OPINIONES", response.data.opiniones);
        })
        .catch((error) => {
          console.log(`There was an error: ${error.message}`);
        });
    },
    getProductos({ commit }) {
      return AxiosServices.getProductos()
        .then((response) => {
          commit("OBTENER_PRODUCTOS", response.data.productos);
        })
        .catch((error) => {
          console.log(`There was an error: ${error.message}`);
        });
    },
    agregarItemCarrito({ commit }, nuevoItem) {
      commit("AGREGAR_ITEM_CARRITO", nuevoItem);
    },
    postOrdenProce({ commit }, orden) {
      return AxiosServices.respOrdenProce()
        .then((response) => {
          commit("AGREGAR_ORDEN", orden);
          commit("ORDEN_CONFIRMADA", response.data);
        })
        .catch((error) => {
          console.log(`There was an error: ${error.message}`);
          console.log(error);
        });
      /* Si fuera posible hacer POST se utilizaría el siguiente codigo.
      No sería necesario guardar las ordenes localmente.

      return AxiosServices.postOrdenProce(orden)
        .then((response) => {
          commit("ORDEN_CONFIRMADA", response.data);
        })
        .catch((error) => {
          console.log(`There was an error: ${error.message}`);
        });
      */
    },
  },
  getters: {
    subtotalProductos: (state) => {
      let precios = state.items.map((el) => Number(el.price));
      const total = precios.reduce((a, b) => a + b);

      return total;
    },
    descuento: (state, getters) => {
      if (getters.subtotalProductos < 100000) {
        const descuento = getters.subtotalProductos * 0.05;

        return Math.floor(descuento);
      }
      if (getters.subtotalProductos >= 100000) {
        const descuento = getters.subtotalProductos * 0.07;

        return Math.floor(descuento);
      }
    },
    totalFinal: (state, getters) => {
      const total = getters.subtotalProductos - getters.descuento;

      return total;
    },
  },
  modules: {},
});
