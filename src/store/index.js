import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incomes:  [{
      id: 0,
      date: '2016-05-03',
      name: 'Pay check',
      amount: 1300
    }, {
      id: 1,
      date: '2016-05-02',
      name: 'HH',
      amount: 300
    }, {
      id: 2,
      date: '2016-05-04',
      name: 'HAW',
      amount: 180
    }]
  },
  getters: {
    incomes: (state) => {
      return state.incomes;
    }
  },
  mutations: {
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
  },
  modules: {
  }
})
