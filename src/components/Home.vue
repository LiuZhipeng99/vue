<template>
  <div class="container">

      <div class="text-center">
        <h2 class="tm-section-title mb-4">SFC网络资源部署首页</h2>
        <p class="titleText">
          上传或部署资源部署文件
        </p><br>
      </div>
      <div class="row justify-content-center ">
          <div class="col-3 upload ">
              <upload/>
          </div>
          <div class="col-2">
            <h1 >或</h1>
          </div>
        <div class="col-3 demo-input-sfc ">
          <span>模拟SFC请求 </span><br>
          <option1 class="option1"/>
          <el-button type="primary" round class="btn_foot" @click="getform">生成数据</el-button>
          <el-button type="primary" round class="btn_foot" @click="optshow">{{textshow}}</el-button>
          <moreoption :isoptshow.sync="isoptshow" ref="form_more"/>
        </div>

      </div> <!--      row-->

       <buttonrow/>



  </div>



</template>

<script>
  import upload from './homepage/upload'
  import option1 from './homepage/option1'
  import moreoption from './homepage/moreoption'
  import buttonrow from './homepage/buttonrow'
export default {
    data(){
      return{
        isoptshow:false,
        textshow:'更多数据',
      }
    },
  components:{
    upload,option1, moreoption, buttonrow
  },
  methods:{
    optshow(){
     this.$refs.form_more.dialogshow=true
    },
    getform(){
      this.$message({
          message: '生成预置SFC请求',
          type: 'success'
        });
      let form_info=this.$refs.form_more.form_more
      JSON.stringify(form_info)
      console.log(form_info)
    }
  }

}
</script>

<!--设置组件之间css独立-->
<style scoped>
  .col-2{
    margin:80px 0 0 135px;
    /* width: 100px; */
    /* display:inline-block; */
  }
  .container{
    margin-top: 50px;
  }



  /*row*/
  .upload{
/*display: inline-block;*/
  }
  .demo-input-sfc{
    text-align: center;
    /*height: 270px;*/
    margin-top: -5px;
    /*display: inline-block;*/
    margin-right: 20px;
  }

 .option1{
    margin-top: 5px;
  }


</style>
