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
            <strong>{{ totalIncomes }}€</strong>
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header">
            <span>Best income</span>
          </div>
          <div>
            <strong>{{ bestIncome.amount }}€</strong>
            <p><small>{{ bestIncome.name }}</small></p>
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
import {mapGetters} from "vuex";

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
  computed: {
    ...mapGetters([
        'incomes',
    ]),
    /**
     * @return Number
     */
    totalIncomes() {
      if (!this.incomes) return 0;
      const reducer = (previousValue, currentValue) => currentValue.amount + previousValue;
      return this.incomes.reduce(reducer, 0)
    },
    /**
     * @returns {{amount: number, name: string}}
     */
    bestIncome() {
      if (!this.incomes) return {
        amount: 0,
        name: '-',
      };
      console.log(this.incomes);
      return [...this.incomes].sort((a, b) => a.amount - b.amount).reverse()[0];
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
  },
}
</script>
