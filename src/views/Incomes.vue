<template>
  <div>
    <s-title>
      <template #right>
        <el-button type="primary" icon="el-icon-plus" @click="openDialog">
          Add income
        </el-button>
      </template>
    </s-title>
    {{ income }}
    <add-incomes :dialog-visible.sync="dialogVisible"/>
  </div>
</template>

<script>

import AddIncomes from "../components/incomes/addIncomes";
import STitle from "../components/s-title";

export default {
  name: 'Incomes',
  components: {
    STitle,
    AddIncomes
  },
  data() {
    return {
      dialogVisible: false,
      income: 0,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    }
  },
  async mounted() {
    await this.$store.commit('setIncomes', 2000);
    this.income = this.$store.state.incomes;
  }
}
</script>
