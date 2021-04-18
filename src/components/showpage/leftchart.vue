<template>
    <div class="col-lg-3 fill-h">
        <div class="xpanel-wrapper xpanel-wrapper-2">
            <div class="xpanel">
               当前部署完成情况
                <div class="fill-h" id="flyMap">
                    <chartpie style="display:inline"  />
                    <chartcout style="display:inline" />
                </div>
            </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-2">
            <div class="xpanel">
                <!-- 世界地图 -->
                <div class="fill-h" id="worldMap">
                    <chartline />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import chartline from "./chart-line"
import chartpie from "./chart-pie"
import chartcout from "./chart-cout"
export default {
    components:{
      chartline,
      chartpie,
      chartcout,
    },
}

</script>

<style scoped>
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-2 {height:50%;}
    .fill-h {height:100%;min-height:100%;}
    .xpanel {
        padding: 15px;
        height: 100%;
        min-height: 170px;
        background: url("../../assets/panel.png") center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        text-align: center;
    }

</style>
