<template>
    <div class="col-lg-3 fill-h">
        <charthistogram/>
        <rightdown/>
    </div>
</template>

<script>
import charthistogram from './rightup'
import rightdown from './rightdown'
export default {
    components:{
        charthistogram,rightdown
    }
}
</script>

<style>

    .fill-h {height:100%;min-height:100%;}


</style>
