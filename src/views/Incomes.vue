<template>
  <div>
    <h1>Incomes</h1>
    {{ income }}
    <add-incomes :dialog-visible.sync="dialogVisible"/>
  </div>
</template>

<script>

import AddIncomes from "../components/incomes/addIncomes";

export default {
  name: 'Incomes',
  components: {
    AddIncomes
  },
  data() {
    return {
      dialogVisible: false,
      income: 0,
    };
  },
  methods: {},
  async mounted() {
    await this.$store.commit('setIncomes', 2000);
    this.income = this.$store.state.incomes;
    console.log(this.income);
  }
}
</script>
