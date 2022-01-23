<template>
  <el-table
      :data="incomes"
      :default-sort="{prop: 'date', order: 'descending'}"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="Date"
        width="180"
        sortable>
      <template slot-scope="{ row }">
        {{ row.date | shortenDate }}
      </template>
    </el-table-column>
    <el-table-column
        prop="name"
        label="Name"
        width="180"
        sortable>
    </el-table-column>
    <el-table-column
        prop="amount"
        label="Amount"
        :formatter="amountFormatter"
        sortable>
    </el-table-column>
    <el-table-column
        fixed="right"
        label="Operations"
        width="120">
      <template slot-scope="{ row }">
        <el-button
            icon="el-icon-delete"
            type="danger"
            size="mini"
            circle
            @click="delIncome(row.id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "IncomesTable",
  computed: {
    ...mapGetters([
      'incomes'
    ])
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
    ...mapActions([
        'deleteIncome'
    ]),
    amountFormatter(object, row, value) {
      return `+ ${value.toString()}€`
    },
    delIncome(incomeId){
      this.deleteIncome(incomeId);
    }
  },
}
</script>

<style scoped>

</style>