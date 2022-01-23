import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function deleteById(array, id) {
  const index = array.findIndex((obj) => obj.id === id)
  array.splice(index, 1);
}

export const store = new Vuex.Store({
  state: {
    incomes:  [],
    bills: [],
  },
  getters: {
    incomes: (state) => {
      return state.incomes;
    },
    bills: (state) => {
      return state.bills;
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
    setBills (state, bills) {
      state.bills = bills;
    },
    addBill (state, bill) {
      state.bills.push(bill);
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
      deleteById(state.incomes, incomeId);
      commit('setIncomes', state.incomes);
    },
    addBill({ commit, state }, bill) {
      // @todo make validation file
      if (!bill || typeof bill !== 'object' || !bill.amount || !bill.name.length) {
        throw new Error('Validation error');
      }
      commit('addBill', {...bill, id: state.bills.length});
    },
    deleteBill({ commit, state }, billId) {
      deleteById(state.bills, billId);
      commit('setBills', state.bills);
    },
  },
  modules: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});
