<template>
    <div class="pie-chart">
        <vpie :data="chartData" :loading="false" radius="1000" id="renderchart"></vpie>
  </div>
</template>

<script>
import vpie from 'v-charts/lib/pie.common'
import 'v-charts/lib/style.css'

// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
// }

export default {
    //  :data-empty="true"
  components:{
      vpie,
  },
    data(){
      return{

      }
  },
    async mounted() {

    },

    methods:{

    },


    computed:{
        // result_length(){
        //     let read_data=this.$store.state.data
        //
        //     if(read_data){
        //         console.log(read_data.length)
        //         return read_data.length
        //     }
        // },
        result_success(){
            // console.log('success:'+this.$store.state.data_result.success)
            return this.$store.state.data_result.success
        },
        result_fails(){
            // console.log('fail:'+this.$store.state.data_result.fails)
            return this.$store.state.data_result.fails
        },
        chartData () {
            var columns=["部署情况","数量"]
            var rows=[
                {"部署情况": "成功", "数量":this.result_success},
                {"部署情况": "失败", "数量":this.result_fails},
            ]
            var chartData={columns,rows}
            return chartData
        }

    },
    watch:{


    }


}
</script>

<style>

</style>
