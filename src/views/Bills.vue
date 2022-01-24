<template>
  <div class="bills">
    <s-title>
      <template #right>
        <el-button type="primary" icon="el-icon-plus" @click="openDialog">
          Add bill
        </el-button>
      </template>
    </s-title>
    <el-row :gutter="20">
      <el-col :span="24" :lg="8">
        <el-row :gutter="20">
          <el-col :span="24" :sm="12" :lg="24">
            <s-card title="Total bills" class="bills__card bills__card--total">
              <strong class="bills__card__number">-{{ totalBills }}€</strong>
            </s-card>
          </el-col>
          <el-col :span="24" :sm="12" :lg="24">
            <s-card title="Highest bill" class="bills__card bills__card--best">
              <strong class="bills__card__number">-{{ highestBill.amount }}€</strong>
              <small class="bills__card__sub">{{ highestBill.name }}</small>
            </s-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :lg="16">
        <s-card title="Bills repartition" class="bills__chart">
          <incomes-chart></incomes-chart>
        </s-card>
      </el-col>
    </el-row>
    <s-card>
      <incomes-table></incomes-table>
    </s-card>
    <add-incomes v-if="dialogVisible" :dialog-visible.sync="dialogVisible"/>
  </div>
</template>

<script>

import AddIncomes from "../components/bills/addBills";
import STitle from "../components/sComponents/s-title";
import IncomesTable from "../components/bills/billsTable";
import IncomesChart from "../components/bills/billsChart";
import {mapGetters} from "vuex";
import SCard from "../components/sComponents/sCard";

export default {
  name: 'Bills',
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
      'bills',
    ]),
    /**
     * @return Number
     */
    totalBills() {
      if (!this.bills) return 0;
      const reducer = (previousValue, currentValue) => currentValue.amount + previousValue;
      return this.bills.reduce(reducer, 0)
    },
    /**
     * @returns {{amount: number, name: string}}
     */
    highestBill() {
      if (!this.bills.length) return {
        amount: 0,
        name: '-',
      };
      return [...this.bills].sort((a, b) => a.amount - b.amount).reverse()[0];
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
.bills{
  &__card{
    margin-bottom: 1.1rem;
    &--total{
      .bills__card__number{
        font-size: 2.4rem;
      }
    }
    &--best{
      .bills__card__number{
        font-size: 1.5rem;
      }
    }
    &__number{
      font-size: 2rem;
      color: darkred;
    }
    &__sub{
      display: block;
      font-size: 1.2rem;
    }
  }
  &__chart{
    margin-bottom: 1rem;
  }
}
</style>