<template>
  <div class="mod-container">
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
  </el-form>

    <el-dialog title="底层网络参数配置" :visible.sync="ismodshow" :center=center width="250" >
      <div class="left-form" >
  <el-form ref="form" :model="form_model" label-width="80px" size="mini">
    <el-form-item label="critic学习率"  label-width="130px">

        <el-input  v-model="form_model.critic_lr" placeholder="最小2 最大15"></el-input>

    </el-form-item>

    <el-form-item label="embedding单元数"  label-width="130px">

        <el-input  v-model="form_model.embedding_dim" placeholder="最小2 最大15"></el-input>

    </el-form-item>

    <el-form-item label="全局隐藏层单元数"  label-width="130px">

        <el-input  v-model="form_model.hidden_dim" placeholder="最小2 最大15"></el-input>

    </el-form-item>

    <el-form-item label="GRU层数"  label-width="130px">

        <el-input  v-model="form_model.num_layers" placeholder="最小2 最大15"></el-input>

    </el-form-item>

    <el-form-item label="encoder单元数" label-width="130px">

        <el-input  v-model="form_model.enc_units" placeholder="最小2 最大15"></el-input>

    </el-form-item>
  </el-form>
      </div>

      <div class="right-form">
      <el-form ref="form" :model="form_model" label-width="80px" size="mini">


    <el-form-item label="decoder单元数"  label-width="130px">

        <el-input  v-model="form_model.dec_units" placeholder="最小2 最大15"></el-input>

    </el-form-item>



      <el-form-item label="GNN单元数"  label-width="130px">

        <el-input  v-model="form_model.gnn_units" placeholder="最小2 最大15"></el-input>

    </el-form-item>

    <el-form-item label="DP率" label-width="130px">

        <el-input  v-model="form_model.dropout_rate" placeholder="最小2 最大15"></el-input>

    </el-form-item>

    <el-form-item label="L2正则率"  label-width="130px">

        <el-input  v-model="form_model.l2reg_rate " placeholder="最小2 最大15"></el-input>

    </el-form-item>
  </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirmed">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script >
export default {
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
      ismodshow:false,
      center:true
    }
  },
  methods:{
    cancel(){
      this.ismodshow=false
    },
    confirmed(){
      this.ismodshow=false
    }}
}
</script>

<style scoped >
  .right-form{
    display: inline-block;
    /*设置文字垂直对齐顶部*/
    vertical-align: top
  }
  .left-form{
    display: inline-block;
    margin-left: 50px;
  }
</style>
