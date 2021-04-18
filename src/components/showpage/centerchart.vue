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
            sfc_id:[],

            }
        },
        mounted() {
            this.centerechart()
        },//注意，mounted必须在绘图定义前面调用，否则图像不显示
        methods:{
            centerechart(){
            var chartDom = document.getElementById('centerechart');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '30%']
                },
                visualMap: {
                    type: 'piecewise',
                    show: false,
                    dimension: 0,
                    seriesIndex: 0,
                    pieces: [{
                        gt: 1,
                        lt: 3,
                        color: 'rgba(0, 0, 180, 0.4)'
                    }, {
                        gt: 5,
                        lt: 7,
                        color: 'rgba(0, 0, 180, 0.4)'
                    }]
                },
                series: [
                    {
                        type: 'line',
                        smooth: 0.6,
                        symbol: 'none',
                        lineStyle: {
                            color: '#5470C6',
                            width: 5
                        },
                        markLine: {
                            symbol: ['none', 'none'],
                            label: {show: false},
                            data: [
                                {xAxis: 1},
                                {xAxis: 3},
                                {xAxis: 5},
                                {xAxis: 7}
                            ]
                        },
                        areaStyle: {},
                        data: [
                            ['2019-10-10', 200],
                            ['2019-10-11', 560],
                            ['2019-10-12', 750],
                            ['2019-10-13', 580],
                            ['2019-10-14', 250],
                            ['2019-10-15', 300],
                            ['2019-10-16', 450],
                            ['2019-10-17', 300],
                            ['2019-10-18', 100]
                        ]
                    }
                ]
            };

            option && myChart.setOption(option);
    },
        readCSV(){

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
        background:url("../../assets/panel.png") center no-repeat;
        background-size:100% 100%;
        box-sizing:border-box;
    }
</style>
