<template>
  <div class="container">
    <div class="containervertical">
      <div class="text-center">
        <h2 class="tm-section-title mb-4">SFC网络资源部署首页</h2>
        <p class="titleText">
          上传或部署资源部署文件
        </p><br>
      </div>
      <div class="row">
        <div class="upload">
        <upload/>
        </div>
        <span style="margin-left: 50px"></span>
        <div class="demo-input-suffix">
          <span>模拟SFC请求 </span><br>
          <option1 class="option1"/>
          <el-button type="primary" round class="btn_foot" @click="getform">生成数据</el-button>
          <el-button type="primary" round class="btn_foot" @click="optshow">{{textshow}}</el-button>
        </div>

      </div> <!--      row-->
      <div class="button-row">
        <buttonrow/>
      </div>
    </div>
    <moreoption :isoptshow="isoptshow" ref="form_more"/>
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
      console.log(this.isoptshow)
      this.isoptshow=!this.isoptshow
      if(this.isoptshow==true) {
        this.textshow='隐藏数据'

      }
      if(this.isoptshow==false) {
        this.textshow='更多数据'
      }
    },
    getform(){
      let form_info=this.$refs.form_more.form_more
      JSON.stringify(form_info)
      console.log(form_info)
    }
  }

}
</script>

<!--设置组件之间css独立-->
<style scoped>
  .container{
    margin-top: 50px;
  }

  .containervertical{
    /* float: left; */
    display: inline-block;
  }

  .text-center{
    margin-left: 250px;
  }

  /*row*/
  .upload{
    float: left;
    position: relative;
    margin-left: 150px;
  }
  .demo-input-suffix{
    text-align: center;
    height: 270px;
    margin-top: -5px;
  }

 .option1{
    margin-top: 5px;
  }



.button-row{
  margin-left: 150px;
  margin-top: 50px;
}

</style>
