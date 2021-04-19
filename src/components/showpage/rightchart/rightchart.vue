<template>
    <div class="col-lg-3 fill-h">
        <div class="xpanel-wrapper xpanel-wrapper-31">
            <div class="xpanel">
                <div class="fill-h" id="provinceMap">
                    <charthistogram />
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import charthistogram from './chart-histogram'
export default {
    components:{
        charthistogram,
    }
}
</script>

<style>
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
    .xpanel-wrapper-31  {height:100%;}
</style>
