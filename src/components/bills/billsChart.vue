<template>
  <div>
    <a-chart
        height="200"
        :options="chartOptions"
        :series="series"></a-chart>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "billsChart",
  data() {
    return {
      chartOptions: {
        chart: {
          height: 150,
          type: 'treemap',
          toolbar: {
            show: false,
          }
        },
        grid: {
          padding: {
            top: -25,
            right: -26,
            left: 0,
            bottom: 0,
          }
        },
        legend: {
          show: false,
          customLegendItems: ['x', 'y', 'z'],
        },
        tooltip: {
          enabled: false,
        },
        noData: {
          text: 'No data',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
        }
      },
    };
  },
  computed: {
    ...mapGetters([
      'bills',
    ]),
    data() {
      if (!this.bills) return [];
      return this.bills.map((income) => ({x: income.name, y: income.amount}))
    },
    series() {
      return [{
        data: this.data
      }];
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>