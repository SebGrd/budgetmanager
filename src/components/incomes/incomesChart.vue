<template>
  <div>
    <a-chart
        height="200"
        :options="chartOptions"
        :series="series"></a-chart>
  </div>
</template>

<script>
export default {
  name: "incomesChart",
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
      series: [
        {
          data: [{
            x: 'Income 1',
            y: 1200
          },{
            x: 'Income 2',
            y: 300
          },{
            x: 'Income 3',
            y: 190
          }]
        }
      ],
    };
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>