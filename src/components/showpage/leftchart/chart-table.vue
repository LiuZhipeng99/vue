<template>
  <div class="table-container">
    <div class="head">部署情况实时预览</div>
    <el-tag type="info" size="big" class="option info">当前部署总数：{{result_all}}</el-tag>
    <el-tag type="success" size="big" class="option">部署成功数：{{result_success}}</el-tag>
    <el-tag type="danger" size="big" class="option">部署失败数：{{result_fails}}</el-tag>
    <el-tag type="warning" size="big" class="option">部署成功率：{{result_chance}}</el-tag>
  </div>
</template>


<script>



export default {

  data() {
    return {

      }
  },
  computed:{
    result_success(){
      let result_success=parseInt(this.$store.state.data_result.success)
      return result_success
    },
    result_fails(){
      let result_fails=parseInt(this.$store.state.data_result.fails)
      return result_fails
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
  width: 300px;
  margin-bottom: 15px;
  text-align: center;
}
  /*.info{*/
  /*  margin-top: 20px;*/
  /*}*/
  .head{
    margin-top: -10px;
    margin-bottom: 10px;
  }



</style>
