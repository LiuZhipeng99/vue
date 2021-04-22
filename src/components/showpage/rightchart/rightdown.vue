<template>
    <div class="xpanel-wrapper xpanel-wrapper-32">
        <div class="xpanel">
            <div class="head"><b>部署实时收益率</b></div>
            <div class="fill-h" id="rightdown">
            </div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import {EleResize} from "../../../assets/esresize";


export default {

    mounted() {
        this.rightdown()
    },//注意，mounted必须在绘图定义前面调用，否则图像不显示
    methods: {
        rightdown() {
            var chartDom = document.getElementById('rightdown');
            var myChart = echarts.init(chartDom);
            setInterval(() =>{
                myChart.setOption(this.myoption);
            }, 500)   //核心代码每隔1000ms,更新option
            this.myoption && myChart.setOption(this.myoption);
            let listener=function () {
                myChart.resize()
            }
            EleResize.on(document.getElementById('rightdown'),listener)
        }
    },
    computed:{
        total_porb_length(){
            if (this.$store.state.data_result.porb){
           return  this.$store.state.data_result.porb.length-1}
            else return 0
        },
        total_porb(){
            if (this.$store.state.data_result.porb){
                return ((this.$store.state.data_result.porb[this.total_porb_length-1]*100).toFixed(2))}
            else return [1]
        },

        myoption(){
            var myoption = {
                series: [{
                    type: 'gauge',
                    radius: "85%",
                    axisLine: {
                        lineStyle: {
                            width: 30,
                            color: [
                                [0.3, '#67e0e3'],
                                [0.7, '#37a2da'],
                                [1, '#fd666d']
                            ]
                        }
                    },
                    pointer: {
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        distance: -30,
                        length: 8,
                        lineStyle: {
                            color: '#fff',
                            width: 2
                        }
                    },
                    splitLine: {
                        distance: -30,
                        length: 25,
                        lineStyle: {
                            color: '#fff',
                            width: 4
                        }
                    },
                    axisLabel: {
                        color: 'auto',
                        distance: 10,
                        fontSize: 12
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value} %',
                        color: 'auto',
                        fontSize: 15,
                        distance:-20
                    },
                    data: [{
                        value: this.total_porb
                    }],
                    min:parseInt(this.total_porb/10)*10,
                    max:parseInt(this.total_porb/10)*10+10,
                }]
            };
            return myoption
        }
    },
    watch:{
        total_porb(newVal){
            return newVal
        },
        total_porb_length(newVal){
            return newVal
        },
        total_porb_current(newVal){
            return newVal
        }
    }
}
</script>

<style>
    .xpanel-wrapper-32  {height:50%;}
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .fill-h {height:100%;min-height:100%;}
    .xpanel {
        padding:15px;
        height:100%;
        min-height:170px;
        background:url("../../../assets/panel.png") center no-repeat;
        background-size:100% 100%;
        box-sizing:border-box;
    }
    #rightdown{
    }
    .head{
        text-align: left;
        font-size: large;
    }
</style>
