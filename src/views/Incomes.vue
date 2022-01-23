<template>
  <div class="incomes">
    <s-title>
      <template #right>
        <el-button type="primary" icon="el-icon-plus" @click="openDialog">
          Add income
        </el-button>
      </template>
    </s-title>
    <el-row :gutter="20">
      <el-col :span="24" :lg="8">
        <el-row :gutter="20">
          <el-col :span="24" :sm="12" :lg="24">
            <s-card title="Total incomes" class="incomes__card incomes__card--total">
              <strong class="incomes__card__number">+{{ totalIncomes }}€</strong>
            </s-card>
          </el-col>
          <el-col :span="24" :sm="12" :lg="24">
            <s-card title="Best income" class="incomes__card incomes__card--best">
              <strong class="incomes__card__number">+{{ bestIncome.amount }}€</strong>
              <small class="incomes__card__sub">{{ bestIncome.name }}</small>
            </s-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :lg="16">
        <s-card title="Incomes repartition">
          <incomes-chart></incomes-chart>
        </s-card>
      </el-col>
    </el-row>
    <incomes-table></incomes-table>
    <add-incomes v-if="dialogVisible" :dialog-visible.sync="dialogVisible"/>
  </div>
</template>

<script>

import AddIncomes from "../components/incomes/addIncomes";
import STitle from "../components/sComponents/s-title";
import IncomesTable from "../components/incomes/incomesTable";
import IncomesChart from "../components/incomes/incomesChart";
import {mapGetters} from "vuex";
import SCard from "../components/sComponents/sCard";

export default {
  name: 'Incomes',
  components: {
    SCard,
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
      if (!this.incomes.length) return {
        amount: 0,
        name: '-',
      };
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

<style scoped lang="scss">
.incomes{
  &__card{
    &--total{
      margin-bottom: 20px;
    }
    &__number{
      font-size: 2.3rem;
    }
    &__sub{
      display: block;
      font-size: 1.2rem;
    }
  }
}
</style>