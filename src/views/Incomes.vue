<template>
  <div>
    <s-title>
      <template #right>
        <el-button type="primary" icon="el-icon-plus" @click="openDialog">
          Add income
        </el-button>
      </template>
    </s-title>
    <incomes-table></incomes-table>
    <add-incomes v-if="dialogVisible" :dialog-visible.sync="dialogVisible"/>
  </div>
</template>

<script>

import AddIncomes from "../components/incomes/addIncomes";
import STitle from "../components/s-title";
import IncomesTable from "../components/incomes/incomesTable";

export default {
  name: 'Incomes',
  components: {
    IncomesTable,
    STitle,
    AddIncomes
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    }
  },
}
</script>
