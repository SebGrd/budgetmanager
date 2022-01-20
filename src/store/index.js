import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incomes: 0
  },
  mutations: {
    setIncomes (state, income) {
      state.incomes = income;
    }
  },
  actions: {
  },
  modules: {
  }
})
