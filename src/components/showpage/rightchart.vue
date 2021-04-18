<template>
    <div class="col-lg-3 fill-h">
        <div class="xpanel-wrapper xpanel-wrapper-3">
            <div class="xpanel">
                <!-- 省份地图 -->
                <div class="fill-h" id="provinceMap">
                    <charthistogram />
                </div>
            </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-3">
            <div class="xpanel">
                <!-- 城市地图 -->
                <div class="fill-h" id="cityMap">
                    <chartcout />
                </div>
            </div>
        </div>
        <div class="xpanel-wrapper xpanel-wrapper-3">
            <div class="xpanel">
                <!-- 区县地图 -->
                <div class="fill-h" id="countyMap">
                    <charttable />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import charthistogram from './chart-histogram'
import charttable from './chart-table'
import chartcout from './chart-cout'
export default {
    components:{
        charttable,
        charthistogram,
        chartcout,
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
        background:url("../../assets/panel.png") center no-repeat;
        background-size:100% 100%;
        box-sizing:border-box;
    }
    .xpanel-wrapper-2 {height:50%;}
</style>
