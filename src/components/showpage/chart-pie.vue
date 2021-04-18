<template>
    <div class="pie-chart">
        <dv-active-ring-chart :config="config" style="width:auto;height:300px" />
  </div>
</template>

<script>
export default {
  data(){
      return{
            config:{
                radius: '40%',
            activeRadius: '45%',
            data: [
                {
                name: '周口',
                value: 55
                },
                {
                name: '南阳',
                value: 120
                },
                {
                name: '西峡',
                value: 78
                },
                {
                name: '驻马店',
                value: 66
                },
                {
                name: '新乡',
                value: 80
                }
            ],
            digitalFlopStyle: {
                fontSize: 15
            },
            showOriginValue: true
            }
          }
      }
}
</script>

<style>

</style>