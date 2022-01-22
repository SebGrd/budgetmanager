<template>
  <div>
    <s-title>
      <template #right>
        <el-button type="primary" icon="el-icon-plus" @click="openDialog">
          Add income
        </el-button>
      </template>
    </s-title>
    <el-row :gutter="15">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header">
            <span>Total incomes</span>
          </div>
          <div>
            <strong>2250€</strong>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header">
            <span>Incomes repartition</span>
          </div>
          <incomes-chart></incomes-chart>
        </el-card>
      </el-col>
    </el-row>
    <incomes-table></incomes-table>
    <add-incomes v-if="dialogVisible" :dialog-visible.sync="dialogVisible"/>
  </div>
</template>

<script>

import AddIncomes from "../components/incomes/addIncomes";
import STitle from "../components/s-title";
import IncomesTable from "../components/incomes/incomesTable";
import IncomesChart from "../components/incomes/incomesChart";

export default {
  name: 'Incomes',
  components: {
    IncomesChart,
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
    },
  },
}
</script>
