<template>
    <div class="pie-chart">
        <vpie :data="chartData" :loading="false" radius="1000"></vpie> 
  </div>
</template>

<script>
import vpie from 'v-charts/lib/pie.common'
import 'v-charts/lib/style.css'	
export default {
    //  :data-empty="true"
  components:{
      vpie,
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