<template>
    <div class="col-lg-3 fill-h">
        <div class="xpanel-wrapper xpanel-wrapper-22">
            <div class="xpanel">

                <div class="fill-h" id="worldMap">
                    <charttable/>
                </div>
            </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-21">
            <div class="xpanel">
               当前部署完成情况
                <div class="fill-h" id="flyMap">
                    <chartpie />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import charttable from "./chart-table"
import chartpie from "./chart-pie"

export default {
    components:{
        charttable,
      chartpie,
    },
}

</script>

<style scoped>
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-21 {height:60%;}
    .xpanel-wrapper-22 {height:40%;}

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

</style>
