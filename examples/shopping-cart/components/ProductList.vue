<template>
<div>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
  <p v-text="proyecto"></p>
    <p v-text="proyecto.nombre"></p>
    <button @click="cambiarNombreHijo()">Cambiar Nombre</button>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all,
    proyecto: state => state.products.proyecto
  }),
 

  methods: {
  ...mapActions('cart',['addProductToCart']),
  cambiarNombreHijo() {
    this.$store.state.products.proyecto.hijos.push("perro");
  }
},
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
