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
    import '../../../assets/esresize'
    import {EleResize} from "../../../assets/esresize";
    // import * as echarts from 'echarts'
    let echarts = require('echarts')  //这是基本模版

    export default {
        data(){
            return{
                xAxisData:['1s', '2s', '3s', '4s', '5s', '6s', '7s'],
                reven:[],
                cost:[],
                porb:[]
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
                    if(this.total_cost!=0){
                        this.xAxisData.push(this.xAxisData.length + 1 + 's');  //这里面的this不指向vue对象
                        this.myoption.xAxis.data=this.xAxisData
                        this.myoption.series[0].data=this.reven.push(this.total_reven)
                        console.log(this.reven)
                        this.myoption.series[1].data=this.cost.push(this.total_cost)
                        this.myoption.series[2].data=this.porb.push(this.total_porb)
                        myChart.setOption(this.myoption);}
                }, 1000)
                this.myoption && myChart.setOption(this.myoption);
                let listener=function () {
                    myChart.resize()
                }
                EleResize.on(document.getElementById('centerechart'),listener)
            }

    },
        computed:{

            total_cost(){
                if (this.$store.state.data_result.total_cost){
                    let cost_length=this.$store.state.data_result.total_cost.length-1
                    return this.$store.state.data_result.total_cost[cost_length-1]} //获取最新的totalcost
                else return [0]
            },
            total_reven(){
                if (this.$store.state.data_result.total_revenue){
                    let reven_length=this.$store.state.data_result.total_revenue.length-1
                    // console.log(this.$store.state.data_result.total_revenue[reven_length-1])
                    return this.$store.state.data_result.total_revenue[reven_length-1]}
                else return [0]
            },
            total_porb(){
                if (this.$store.state.data_result.porb){
                    let reven_length=this.$store.state.data_result.porb.length-1
                    return this.$store.state.data_result.porb[reven_length-1].toFixed(2)}
                else return [0]
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
                        data: this.xAxisData,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                    },
                    yAxis: [
                        {type: 'value',
                        name:'左y轴',
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        {type: 'value',
                            name:'右y轴',
                            axisTick: {
                                show: false
                            },
                        },


                    ],
                    series: [
                        {
                            name: '总收益',
                            type: 'line',
                            itemStyle : {
                                normal : {
                                    color:'#67C23A',
                                    lineStyle:{
                                        color:'#67C23A'
                                    }
                                }
                            },
                            data: this.reven,
                            smooth: true,
                            yAxisIndex:0
                        },
                        {
                            name: '总支出',
                            type: 'line',
                            smooth: true,
                            itemStyle : {
                                normal : {
                                    color:'#F66C6C',
                                    lineStyle:{
                                        color:'#F66C6C'
                                    }
                                }
                            },
                            data: this.cost,
                            yAxisIndex:0
                        },
                        {
                            name: '收益率',
                            type: 'line',
                            itemStyle : {
                                normal : {
                                    color:'#7CCBFB',
                                    lineStyle:{
                                        color:'#7CCBFB'
                                    }
                                }
                            },
                            data: this.porb,
                            smooth: true,
                            yAxisIndex:1
                        },

                    ]
                }
                return myoption
            }
        },
        watch:{
            total_cost(newVal){
                    return newVal
                },
            total_reven(newVal){
                    return newVal
                },
            myoption(newVal){
                    return newVal
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
