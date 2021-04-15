<template>
  <div class="moreoption" v-if="isoptshow" v-bind:isoptshow.sync='isoptshow'>
    <el-col :span="8" class="left">

  <el-form ref="form_more" :model="form_more " label-width="80px" size="mini" label-position="top">
    <el-form-item label="num_sfcs">
      <el-input v-model="form_more.num_sfcs" placeholder="默认100"></el-input>
    </el-form-item>
    <el-form-item label="min_length">
      <el-input v-model="form_more.min_length" placeholder="默认0.2"></el-input>
    </el-form-item>
    <el-form-item label="max_length">
      <el-input v-model="form_more.max_length" placeholder="默认0.5"></el-input>
    </el-form-item>
    <el-form-item label="min_node_request">
      <el-input v-model="form_more.min_node_request" placeholder="默认50"></el-input>
    </el-form-item>
    <el-form-item label="max_node_request" >
      <el-input v-model="form_more.max_node_request" placeholder="默认100"></el-input>
    </el-form-item>
  </el-form>
    </el-col>
<span style="margin-left:auto"></span>
    <el-col :span="8" class="right">
    <el-form ref="form_more" :model="form_more " label-width="80px" size="mini" label-position="top">
    <el-form-item label="min_edge_request">
      <el-input v-model="form_more.min_edge_request" placeholder="默认50"></el-input>
    </el-form-item>
    <el-form-item label="max_edge_request">
      <el-input v-model="form_more.max_edge_request" placeholder="默认100"></el-input>
    </el-form-item>
    <el-form-item label="aver_lifetime ">
      <el-input v-model="form_more.aver_lifetime" placeholder="默认400"></el-input>
    </el-form-item>
    <el-form-item label="aver_arrival_rate ">
      <el-input v-model="form_more.aver_arrival_rate" placeholder="默认20"></el-input>
    </el-form-item>
  </el-form>
    </el-col>
  </div>

</template>

<script>
export default {
  props:{
    isoptshow:Boolean
  },
  data(){
    return{
      form_more:{
        num_sfcs:100,
        min_length:0.2,
        max_length:0.5,
        min_node_request:50,
        max_node_request:100,
        min_edge_request:50,
        max_edge_request:100,
        aver_lifetime:400,
        aver_arrival_rate:20,
      },
    }
  },
  methods:{
    getform(){
      return this.$refs.form_more
    }
  }
}

</script>

<style scoped>
.moreoption{
  float: right;
  margin-left: 30px;
  height: 100%;
  width:300px ;
  /*border: 3px solid #3a8ee6;*/
  /*border-radius: 24px;*/

}
  .left{
    width: 40%;
    margin-left: 25px;
  }
  .right{
    width: 40%;
    margin-left: 30px;
  }
el-form-item{
  margin-bottom: -5px;
}

</style>
