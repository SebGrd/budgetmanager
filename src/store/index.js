import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { _t } from "../validators/types";

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
      const newIncome = {...income, id: state.incomes.length};
      if (_t('Income').isValid(newIncome)) {
        commit('addIncome', newIncome);
      }
    },
    deleteIncome({ commit, state }, incomeId) {
      deleteById(state.incomes, incomeId);
      commit('setIncomes', state.incomes);
    },
    addBill({ commit, state }, bill) {
      const newBill = {...bill, id: state.bills.length};
      if (_t('Income').isValid(newBill)) {
        commit('addBill', newBill);
      }
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
