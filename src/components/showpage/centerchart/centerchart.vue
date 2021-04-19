<template>
    <div class="col-lg-6 fill-h">
        <div class="xpanel-wrapper xpanel-wrapper-1">
            <div class="xpanel">
                <div class="fill-h" id="centerechart"></div>
            </div>
        </div>
    </div>
</template>

<script>
    // import * as echarts from 'echarts'
    let echarts = require('echarts')  //这是基本模版

    export default {
        data(){
            return{
                xAxisData:['1s', '2s', '3s', '4s', '5s', '6s', '7s'],
            }
        },
         mounted() {
            this.centerechart()
        },//注意，mounted必须在绘图定义前面调用，否则图像不显示
        methods:{
             centerechart() {
                var chartDom = document.getElementById('centerechart');
                var myChart = echarts.init(chartDom);
                setInterval(() =>{
                    this.xAxisData.push(this.xAxisData.length + 1 + 's');  //这里面的this不指向vue对象
                    this.myoption.xAxis.data=this.xAxisData
                    myChart.setOption(this.myoption);
                }, 1000)
                this.myoption && myChart.setOption(this.myoption);
            }

    },
        computed:{
            total_cost(){

                if (this.$store.state.data_result.total_cost){
                    // console.log(this.$store.state.data_result.total_cost.map(Number))
                return this.$store.state.data_result.total_cost.map(Number)}
                else return [20]
            },
            total_reven(){
                if (this.$store.state.data_result.total_revenue){
                return this.$store.state.data_result.total_revenue.map(Number)}
                else return [20]
            },
            total_porb(){
                if (this.$store.state.data_result.porb){
                    return this.$store.state.data_result.porb}
                else return [0.1]
            },
            myoption(){   //把option设为计算属性！！！
                let myoption= {
                    title: {
                        text: '部署情况图'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['总收益', '总支出', '收益率']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.xAxisData
                    },
                    yAxis: [
                        {type: 'value',
                        name:'左y轴',
                            position:'left',
                            axisLine: {
                                show: false  //不显示坐标轴轴线
                            },
                            axisTick: {
                                show: false  //不显示坐标轴刻度
                            },
                        },
                        {type: 'value',
                            name:'右y轴',
                            position:'right',
                            axisLabel: {formatter: '{value}'}
                        },
                    ],
                    series: [
                        {
                            name: '总收益',
                            type: 'line',
                            stack: '总量',
                            data: this.total_reven,
                            yAxisIndex:0
                        },
                        {
                            name: '总支出',
                            type: 'line',
                            stack: '总量',
                            data: this.total_cost,
                            yAxisIndex:0
                        },
                        {
                            name: '收益率',
                            type: 'line',
                            stack: '总量',
                            data: this.total_porb,
                            yAxisIndex:1
                        },

                    ]
                }
                return myoption
            }
        },
        watch:{
            total_cost(newVal){
            //     handler(newVal){
            //         this.centerechart()
                    return newVal
            // }
                // deep:true

            },
            total_reven(newVal){
               // handler(newVal){
                    return newVal
               //  }
                // deep:true
                },
            myoption(){
    }
        }


}
</script>

<style scoped>
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-1 {height:100%;}
    .fill-h {height:100%;min-height:100%;
    }


    .xpanel {
        padding:15px;
        height:100%;
        min-height:170px;
        background:url("../../../assets/panel.png") center no-repeat;
        background-size:100% 100%;
        box-sizing:border-box;
    }
</style>
