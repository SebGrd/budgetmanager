import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    incomes:  []
  },
  getters: {
    incomes: (state) => {
      return state.incomes;
    }
  },
  mutations: {
    INIT_STORE(state) {
      const storeData = localStorage.getItem('store');
      if (storeData){
        this.replaceState(
            Object.assign(state, JSON.parse(storeData))
        )
      }
    },
    setIncomes (state, incomes) {
      state.incomes = incomes;
    },
    addIncome (state, income) {
      state.incomes.push(income);
    },
  },
  actions: {
    addIncome({ commit, state }, income) {
      // @todo make validation file
      if (!income || typeof income !== 'object' || !income.amount || !income.name.length) {
        throw new Error('Validation error');
      }
      commit('addIncome', {...income, id: state.incomes.length});
    },
    deleteIncome({ commit, state }, incomeId) {
      const index = state.incomes.findIndex((income) => income.id === incomeId)
      state.incomes.splice(index, 1);
      commit('setIncomes', state.incomes);
    },
  },
  modules: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});
