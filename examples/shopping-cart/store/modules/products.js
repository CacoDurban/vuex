import shop from '../../api/shop'

// initial state
const state = {
  all: [],
  proyecto: {}
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
    state.proyecto = {
      nombre: "carlos",
      hijos: [
        {nombre: "hijo1"},
        {nombre: "hijo2"},
        {nombre: "hijo3"}
      ]
    }
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
