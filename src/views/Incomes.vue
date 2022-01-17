<template>
  <div>
    <h1>Incomes</h1>
    <el-table
        :data="incomes"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="Date"
          width="180"
          sortable>
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
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Incomes',
  data() {
    return {
      incomes: [{
        date: '2016-05-03',
        name: 'Pay check',
        amount: 1300
      }, {
        date: '2016-05-02',
        name: 'HH',
        amount: 300
      }, {
        date: '2016-05-04',
        name: 'HAW',
        amount: 180
      }],
    };
  },
  methods: {
    amountFormatter(object, row, value) {
      return `+ ${value.toString()}€`
    }
  },
}
</script>
