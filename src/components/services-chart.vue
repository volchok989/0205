<template>
  <div>
    <h3>Services</h3>
    <div class='chart'>
      <apex-chart
        :options='chartOptions'
        :series='chartData'
        type='bar'
        height='100'
      ></apex-chart>
      <div class='numbers'>
        <p
          v-for='(item, i) in servicesNumbers'
          :key='i'
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class='total'>
      <span>Total</span>
      <span>{{ servicesTotal }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'services-chart',
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  computed: {
    servicesNames () {
      return this.services.map(item => item.title)
    },
    servicesNumbers () {
      return this.services.map(item => item.number)
    },
    servicesColors () {
      return this.services.map(item => item.color)
    },
    servicesTotal () {
      return this.servicesNumbers.reduce((a, b) => a + b)
    }
  },
  data () {
    return {
      chartData: [
        {
          data: []
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        legend: {
          show: false
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            }
          }
        },
        colors: [],
        grid: {
          show: false,
          borderColor: 'transparent',
          padding: {
            left: -20,
            right: -50,
            top: -30,
            bottom: -15
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            fontSize: '14px',
            fontFamily: 'Arial, serif',
            fontWeight: '400',
            colors: '#333'
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex]
          },
          offsetX: 0
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [],
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        tooltip: {
          theme: 'dark',
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      }
    }
  },
  created () {
    this.chartOptions.xaxis.categories = this.servicesNames
    this.chartData[0].data = this.servicesNumbers
    this.chartOptions.colors = this.servicesColors
  }
}
</script>

<style lang='scss' scoped>
::v-deep .chart {
  padding: 15px 0 0;
  border-top: 1px solid #DADADA;
  border-bottom: 1px solid #DADADA;
  display: flex;
  width: 100%;
  > div:first-child {
    width: 100%;
  }
  .numbers p {
    margin: 0 34px;
    text-align: center;
    font-size: 13px;
    line-height: 15px;
    font-weight: 700;
    padding: 10px 0;
  }
}
h3 {
  padding-right: 20px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  text-align: right;
}
.total {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 16px;
  font-weight: 700;
  padding-right: 32px;
}
</style>
