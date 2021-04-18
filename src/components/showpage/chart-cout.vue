<template>
<div>
  <dv-digital-flop :config="config" style="width:200px;height:20px;" />
  <!-- <dv-digital-flop :config="config2" style="width:200px;height:50px;" /> -->
  <dv-digital-flop :config="config3" style="width:200px;height:20px;" />
    
</div>
</template>

<script>
function formatter (number) {
    const numbers = number.toString().split('').reverse()
    const segs = []

    while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

    return segs.join(',').split('').reverse().join('')
}

export default {
    data(){
        return{
            config:{
                number: [1200],
                content: '部署成功个数：{nt}',
                formatter,
                style: {
                    fontSize: 18,
                    fill: '#3de7c9',
                },
                textAlign: 'left'

            },
            config2:{
                number: [1000],
                content: '{nt}个',
                formatter
            },
            config3:{
                number: [5],
                content: '部署失败个数：{nt}',
                formatter,
                style: {
                    fontSize: 18,
                    fill: '#3de7c9',
                },
                textAlign: 'left'

            }
        }
    },
    methods:{
    }
}
</script>

<style>

</style>