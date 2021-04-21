<template>
  <div class="table-container" >
    <div class="head" id="leftup"><b>部署情况实时预览</b></div>
    <el-tag type="info" size="big" class="option info" color="#DEEBF7">当前部署总数：{{result_all}}</el-tag>
    <el-tag type="success" size="big" class="option">部署成功数：{{result_success}}</el-tag>
    <el-tag type="danger" size="big" class="option">部署失败数：{{result_fails}}</el-tag>
    <el-tag type="warning" size="big" class="option">部署成功率：{{result_chance}}</el-tag>
  </div>
</template>


<script>


  import {EleResize} from "../../../assets/esresize";

  export default {

  data() {
    return {

      }
  },
  mounted() {

  },
  computed:{
    result_success(){
      return parseInt(this.$store.state.data_result.success)
    },
    result_fails(){
      return parseInt(this.$store.state.data_result.fails)
    },
    result_all(){
      return this.result_success+this.result_fails
    },
    result_chance(){
      var result_chance=parseFloat(this.$store.state.data_result.success)/this.result_all
      return result_chance.toFixed(2)
    }

  }
};
</script>

<style scoped>
.option{
  font-size: large;
  width: 70%;
  margin-bottom: 15px;
  text-align: center;
}
  /*.info{*/
  /*  margin-top: 20px;*/
  /*}*/
  .head{
    margin-top: -10px;
    margin-bottom: 20px;
    text-align: left;
    font-size: large;
  }



</style>
