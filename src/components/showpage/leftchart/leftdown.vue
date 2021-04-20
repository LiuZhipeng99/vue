<template>
    <div class="xpanel-wrapper xpanel-wrapper-22">
        <div class="xpanel">
            <div class="fill-h" id="leftdown">
            </div>
        </div>
    </div>
</template>

<script>

// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
// }
import * as echarts from 'echarts';
export default {
    //  :data-empty="true"
    data(){
      return{

      }
  },
    mounted() {
        this.leftdown()
    },

    methods:{

        leftdown(){
        var chartDom = document.getElementById('leftdown');
        var myChart = echarts.init(chartDom);
            setInterval(() =>{
                myChart.setOption(this.myoption);
            }, 1000)   //核心代码每隔1000ms,更新option
        this.myoption && myChart.setOption(this.myoption);}

    },


    computed:{

        result_success(){
            // console.log('success:'+this.$store.state.data_result.success)
            return this.$store.state.data_result.success
        },
        result_fails(){
            // console.log('fail:'+this.$store.state.data_result.fails)
            return this.$store.state.data_result.fails
        },

        myoption(){
            let myoption = {
                title: {
                    text: '部署成功失败占比',
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                },
                color:['#67C23A','#F66C6C'],
                series: [
                    {
                        name: '部署情况',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: this.result_success, name: '成功'},
                            {value: this.result_fails, name: '失败'},
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            return myoption
        }

    },
    watch:{


    }


}
</script>

<style scoped>
    .fill-h {height:100%;min-height:100%;}
    .xpanel {
        padding: 15px;
        height: 100%;
        min-height: 170px;
        background: url("../../../assets/panel.png") center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        text-align: center;
    }
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-22 {height:60%;}
</style>
