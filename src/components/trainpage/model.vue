<template>
  <el-form ref="form" :model="form_model" label-width="80px" size="mini">
    <el-form-item label="奖励折扣率" label-width="130px">
      <el-col :span="18">
        <el-input v-model="form_model. drl_gamma" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="agent探索率" label-width="130px">
      <el-col :span="18">
        <el-input v-model="form_model.explore_rate" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="actor学习率" label-width="130px">
      <el-col :span="18">
        <el-input v-model="form_model.actor_lr" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="critic学习率" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.critic_lr" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="embedding单元数" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.embedding_dim" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="全局隐藏层单元数" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.hidden_dim" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="GRU层数" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.num_layers" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="encoder单元数" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.enc_units" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="decoder单元数" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.dec_units" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="GNN单元数" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.gnn_units" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="DP率" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.dropout_rate" placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item label="L2正则率" v-show="ismodmore" label-width="130px">
      <el-col :span="18">
        <el-input  v-model="form_model.l2reg_rate " placeholder="最小2 最大15"></el-input>
      </el-col>
    </el-form-item>



  </el-form>
</template>

<script >
export default {
  props:{
    ismodmore: Boolean
  },
  data() {
    return {
      form_model:{
        drl_gamma:'',
        explore_rate:'',
        actor_lr:'',
        critic_lr:'',
        embedding_dim:'',
        hidden_dim:'',
        num_layers:'',
        enc_units:'',
        dec_units:'',
        gnn_units:'',
        dropout_rate:'',
        l2reg_rate:'',
      },
      ismodshow:false
    }
  }
}
</script>

<style scoped >

</style>
