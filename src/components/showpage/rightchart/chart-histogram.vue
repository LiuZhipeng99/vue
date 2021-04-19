<template>
    <div class="histogram-chart">
        <vhistogram :data="chartData" :loading="false" height="280px"></vhistogram> 
  </div>
</template>

<script>
import vhistogram from 'v-charts/lib/histogram.common'
import 'v-charts/lib/style.css'	
export default {
    //  :data-empty="true"
  components:{
      vhistogram,
  },
  data(){
      return{
          chartData:{
              columns:["部署情况","数量"],
              rows:[
                  {"部署情况": "成功", "数量":200},
                  {"部署情况": "失败", "数量":100},
                //   {"部署成功": 100, "部署失败":200},
                //   {"部署成功": 100, "部署失败":200}
              ]
          }
      }
  }
}
</script>

<style>

</style>