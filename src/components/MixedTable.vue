<template>
  <el-table
      :data="mixedData"
      :default-sort="{prop: 'amount', order: 'descending'}"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="Date"
        width="100"
        sortable>
      <template slot-scope="{ row }">
        {{ row.date | shortenDate }}
      </template>
    </el-table-column>
    <el-table-column
        prop="name"
        label="Name"
        width="300"
        sortable>
    </el-table-column>
    <el-table-column
        prop="amount"
        label="Amount"
        sortable>
      <template slot-scope="{ row }">
        <span :class="{in: (row.type === 'income'), out: (row.type === 'bill')}">
          {{ amountFormatter(row) }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MixedTable",
  computed: {
    ...mapGetters([
      'incomes',
      'bills'
    ]),
    mixedData() {
      const incomes = this.incomes.map((income) => ({...income, type: 'income'}))
      const bills = this.bills.map((bill) => ({...bill, type: 'bill'}))
      return [...incomes, ...bills];
    },
  },
  filters: {
    shortenDate(date) {
      if (isNaN(Date.parse(date))) return '-';
      const day = new Date(date).getDate();
      const lastNum = [...day.toString()].reverse()[0]
      if (lastNum === '1') return `${day}st`
      if (lastNum === '2') return `${day}nd`
      return `${day}th`
    }
  },
  methods: {
    amountFormatter(object) {
      if (object.type === 'income') return `+ ${object.amount.toString()}€`
      if (object.type === 'bill') return `- ${object.amount.toString()}€`
      return object.amount;
    },
  },
}
</script>

<style lang="scss" scoped>
.in, .out{
  font-weight: 600;
}
.in{
  color: forestgreen;
}
.out{
  color: darkred;
}
</style>