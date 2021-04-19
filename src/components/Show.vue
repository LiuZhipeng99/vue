
<template>

  <div class="container">
    <header class="header">
      <h3>SFC可视化界面</h3>
    </header>
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row fill-h">
          <leftchart/>
          <centerchart/>
          <rightchart/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // let echarts = require('echarts')  //这是基本模版
  //下面是按需引入的方法
  // // 引入柱状图组件
  // require('echarts/lib/chart/bar')
  // // 引入提示框和title组件
  // require('echarts/lib/component/tooltip')
  // require('echarts/lib/component/title')
  // import center_chart from "./showpage/center_chart";
  import centerchart from "./showpage/centerchart";
  import leftchart from "./showpage/leftchart";
  import rightchart from "./showpage/rightchart";



  export default {
    data(){
      return{

      }
    },
    components:{
      // center_chart
      centerchart,
      rightchart,
      leftchart
    },


    mounted() {
      this.$store.dispatch('getdata')
    },




  }
  // }
</script>
<style scoped>
  .header {
    margin:0 auto;
    width:100%;
    height:65px;
    max-width:1920px;
    background:url("../assets/header.png") center no-repeat;
  }
  .header h3 {
    margin:0;
    padding:0;
    line-height:50px;
    text-align:center;
    font-size:24px;
    color:#5dc2fe;
  }
  .wrapper {position:absolute;top:80px;bottom:0;left:0;right:0;min-height:555px;}
  .container-fluid {height:100%;min-height:100%;}
  .row {margin-left:-7px;margin-right:-8px;}
  .row>div {padding-left:7px;padding-right:8px;}
  .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
  .xpanel-wrapper-1 {height:100%;}
  .xpanel-wrapper-2 {height:50%;}
  .xpanel-wrapper-3 {height:33.33333%;}
  .xpanel {
    padding:15px;
    height:100%;
    min-height:170px;
    background:url("../assets/panel.png") center no-repeat;
    background-size:100% 100%;
    box-sizing:border-box;
  }

  /* tool */
  .fill-h {height:100%;min-height:100%;}
  .no-margin {margin:0 !important;}
  .no-padding {padding:0 !important;}

  /* scrollbar */
  ::-webkit-scrollbar {width:0;height:0;}
  ::-webkit-scrollbar-track {background-color:transparent;}
  ::-webkit-scrollbar-thumb {border-radius:5px;background-color:rgba(0, 0, 0, 0.3);}

</style>
