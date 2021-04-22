<template>

  <div class="=bottom_container">
      <el-form ref="form_bottom" :model="form_bottom" label-width="80px" size="mini" class="form" >
        <el-form-item label="底层网络节点个数" label-width="130px">
          <el-col :span="18">
          <el-input v-model="form_bottom.pn_num_nodes" placeholder="最小2 最大15"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="wm算法alpha参数" label-width="130px">
          <el-col :span="18">
            <el-input  v-model="form_bottom.wm_alpha" placeholder="最小2 最大15"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="wm算法beta参数" label-width="130px">
          <el-col :span="18">
            <el-input  v-model="form_bottom.wm_beta " placeholder="最小2 最大15"></el-input>
          </el-col>
        </el-form-item>
      </el-form>


    <el-dialog title="底层网络参数配置" :visible.sync="isbotshow" :center=center width="400px">
      <el-form ref="form_bottom" :model="form_bottom" label-width="80px" size="mini" class="form" >
      <el-form-item label="节点最小资源请求"  label-width="130px">
          <el-col :span="18">
            <el-input  v-model="form_bottom.min_node_capacity" placeholder="最小2 最大15"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="节点最大资源请求"  label-width="130px">
          <el-col :span="18">
            <el-input  v-model="form_bottom.max_node_capacity" placeholder="最小2 最大15"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="链路最小资源请求"  label-width="130px">
        <el-col :span="18">
          <el-input  v-model="form_bottom.min_edge_capacity" placeholder="最小2 最大15"></el-input>
        </el-col>
      </el-form-item>

        <el-form-item label="链路最大资源请求"    label-width="130px">
        <el-col :span="18">
          <el-input  v-model="form_bottom.max_edge_capacity" placeholder="最小2 最大15"></el-input>
        </el-col>
      </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="confirmed">确 定</el-button>
    </div>

  </el-dialog>

  </div>
</template>

<script>

export default {
  data() {
    return {
      form_bottom:{
        pn_num_nodes:'',
        wm_alpha: '',
        wm_beta:'',
        min_node_capacity:'',
        max_node_capacity:'',
        min_edge_capacity:'',
        max_edge_capacity:''
      },
      isbotshow:false,
      center:true
    }
  },
  methods:{
    cancel(){
      this.isbotshow=false
    },
    confirmed(){
      this.isbotshow=false
    }}

}

// console.log(this.isbotmore) vue-cli4构建的环境会报错
</script>

<style scoped>
  span{
  text-align: center;
}
  .form >>> #input{
    width: 20px;
  }
  .dialog{
    width: 1500px;
  }
</style>
