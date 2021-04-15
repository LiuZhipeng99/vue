<template>
  <div class="container">
      <div class="text-center">
        <h2 class="tm-section-title mb-4">SFC训练模型数据配置</h2>
        <p class="titleText">
          当前只显示部分常见配置参数(为设置参数将自动取默认值)
        </p><br>
      </div>

    <div class="row">
     <div class="option bottomoption">
      底层网络配置
       <div class="divider"></div>
       <bottom :isbotmore="isbotmore" ref="form_bottom"/>
       <el-button type="primary" round class="btn_foot" @click="showbotmore" >{{showinfobot}}</el-button>

     </div>
      <div class="option requestoption" >
        SFC请求配置
        <div class="divider"></div>
      <request :isreqmore="isreqmore" ref="form_request"/>
        <el-button type="primary" round class="btn_foot" @click="showreqmore" >{{showinforeq}}</el-button>
      </div>

      <div class="option modeloption" >
        模型参数设置
        <div class="divider"></div>
       <model :ismodmore="ismodmore" ref="form_model"/>
        <el-button type="primary" round class="btn_foot" @click="showmodmore" >{{showinfomod}}</el-button>
      </div>


    </div>
    <div class="train-button">
      <el-button type="success" class="train" round  size="big" @click="trainbegin">开始训练</el-button>
    </div>
  </div>
</template>

<script>
import bottom from './trainpage/bottom'
import model from './trainpage/model'
import request from './trainpage/request'
  export default {
    data(){
      return{
        isbotmore:false,
        isreqmore:false,
        ismodmore:false,
        showinfobot:"显示更多",
        showinforeq:"显示更多",
        showinfomod:"显示更多"

      }
    },
    components:{
      bottom,model,request
    },
    methods:{
      showbotmore(){
        this.isbotmore=!this.isbotmore
        if (this.isbotmore){
          this.showinfobot="隐藏显示"
        }
      },
      showreqmore(){
        this.isreqmore=!this.isreqmore
        if (this.isreqmore){
          this.showinforeq="隐藏显示"
        }
      },
      showmodmore(){
        this.ismodmore=!this.ismodmore
        if (this.ismodmore){
          this.showinfomod="隐藏显示"
        }
      },
      trainbegin(){
        let form_bot=this.$refs.form_bottom.form_bottom
        let form_req=this.$refs.form_request.form_request
        let form_mod=this.$refs.form_model.form_model
        console.log(form_bot)
        console.log(form_req)
        console.log(form_mod)

      }

    }

  }
</script>

<!--按组件出现顺序书写css-->
<style scoped>

  .container{
    margin-top: 50px;
    margin-bottom: 150px;
  }
  .row{
    margin-left: 50px;
    overflow: hidden;
    /*border-radius: 24px;*/
    /*border: 5px solid #3a8ee6;*/
  }
  .option{
    /* float: left; */
    display: inline-block;
    width: calc((100% / 3 - 50px));
    height: 100%;
    margin-right: 50px;
    border-radius: 24px;
    border: 2px solid #3a8ee6;
    text-align: center;
    font-size: 30px;
    /*margin-bottom: 10px;*/
  }
  .divider{
    width: 100%;
    height: 0;
    border: 1px solid #8c939d;
    margin-bottom: 10px;
    background-color: #8c939d;
  }

  .train-button{
    position: relative;
    margin-left: 513px;
    margin-top: 50px;
  }

  .btn_foot{
    margin-bottom: 5px;
  }


</style>
