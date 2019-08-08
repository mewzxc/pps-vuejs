<template>
    <div>
        <h1 class="title">Chart</h1>
        <button class="button" @click="toggle()">Toggle</button>
        <button class="button" @click="get()">Print</button>
        <ApexChart ref="myChart" :type="types[idx]" :series="series" :options="options" />
    </div>
</template>

<script>
import jsPDF from 'jspdf'

export default {
    data() {
        return {
            idx: 0
        }
    },
    methods: {
        toggle() {
            if (this.idx == this.types.length) {
                this.idx = 0
            } else {
                this.idx += 1
            }
        },
        get() {
            this.$refs.myChart.chart.dataURI().then(uri => {
                const pdf = new jsPDF()
                pdf.addImage(uri, 'PNG', 0, 0)
                pdf.save('download.pdf')
            })
        }
    },
    computed: {
        types() {
            return ['line', 'bar', 'area']
        },
        series(){
            return [
                {
                    name: '2019',
                    data: [3, 1, 5]
                },
                {
                    name: '2018',
                    data: [2, 8, 6]
                }
            ]
        },
        options() {
            return {
                xasis: {
                    categories: ['Dep A', 'Dep B', 'Dep C']
                }
            }
        }
    }
}
</script>

