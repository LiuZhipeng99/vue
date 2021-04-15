<template>
  <el-form ref="form" :model="form_request" label-width="80px" size="mini" class="request">
    <el-form-item label="奖励折扣率" label-width="130px">
      <el-col :span="18">
        <el-input v-model="form_request.num_sfcs" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="min_length" label-width="130px">
      <el-col :span="18">
        <el-input v-model="form_request.min_length" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="max_length" label-width="130px">
    <el-col :span="18">
      <el-input v-model="form_request.max_length" placeholder="最小2 最大15"></el-input>
    </el-col>
  </el-form-item>

    <el-form-item label="节点最小资源请求" v-show="isreqmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_request.min_node_request" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="节点最大资源请求" v-show="isreqmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_request.max_node_request" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="链路最小资源请求" v-show="isreqmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_request.min_edge_request  " placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="链路最大资源请求" v-show="isreqmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_request.max_edge_request  " placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="SFC平均生存时间" v-show="isreqmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_request.aver_lifetime" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="SFC平均到达速率" v-show="isreqmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_request.aver_arrival_rate " placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>


  </el-form>
</template>

<script>
export default {
  props:{
    isreqmore: Boolean
  },
  data() {
    return {
      form_request:{
        num_sfcs:'',
        min_length: '',
        max_length:'',
        min_node_request:'',
        max_node_request:'',
        min_edge_request:'',
        max_edge_request:'',
        aver_lifetime:'',
        aver_arrival_rate:'',
      },
      isreqshow:false
    }
  }
}
</script>

<style scoped>
  .request{

  }
</style>
