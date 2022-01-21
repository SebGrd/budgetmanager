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
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "IncomesTable",
  computed: {
    ...mapGetters([
      'incomes'
    ])
  },
  methods: {
    amountFormatter(object, row, value) {
      return `+ ${value.toString()}€`
    }
  },
}
</script>

<style scoped>

</style>