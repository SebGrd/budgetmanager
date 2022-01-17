<template>
  <div>
    <h1>Spendings</h1>
    <el-table
        :data="spendings"
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
  name: 'Spendings',
  data() {
    return {
      spendings: [{
        date: '2016-05-03',
        name: 'EDF',
        amount: 32
      }, {
        date: '2016-05-02',
        name: 'Bouygues Telecom',
        amount: 12
      }, {
        date: '2016-05-04',
        name: 'Car insurance',
        amount: 65
      }, {
        date: '2016-05-01',
        name: 'Money saved',
        amount: 85
      }],
    };
  },
  methods: {
    amountFormatter(object, row, value) {
      return `- ${value.toString()}€`
    }
  },
}
</script>