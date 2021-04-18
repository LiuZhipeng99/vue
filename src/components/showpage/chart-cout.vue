<template>
<div>
  <dv-digital-flop :config="config" style="width:200px;height:50px;" />
    
</div>
</template>

<script>
function formatter (number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

const config1 = {
  number: [123456],
  content: '{nt}个',
  formatter
}

const config2 = {
  number: [654321],
  content: '{nt}个',
  formatter
}

export default [
  config1,
  config2
]
// export default {

// }
</script>

<style>

</style>