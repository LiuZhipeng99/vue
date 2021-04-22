<template>
    <div class="col-lg-3 fill-h">
        <div class="xpanel-wrapper xpanel-wrapper-21">
            <div class="xpanel">

                <div class="fill-h" id="worldMap">
                    <charttable/>
                </div>
            </div>
        </div>
        <chartpie/>
    </div>
</template>

<script>
import charttable from "./leftup"
import chartpie from "./leftdown"

export default {
    components:{
        charttable,
      chartpie,
    },
}

</script>

<style scoped>
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-21 {height:40%;}
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
