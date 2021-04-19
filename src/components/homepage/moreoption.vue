<template>

    <el-dialog title="SFC模拟参数" :visible.sync="dialogshow" :center=center>
  <el-form ref="form_more" :model="form_more " label-width="150px" size="mini" >
      <div class="left-form" >
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
      </div>
      <div class="right-form">

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
      </div>
    </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="cancel()">取 消</el-button>
              <el-button type="primary" @click="confirmed">确 定</el-button>
          </div>

    </el-dialog>


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
        dialogshow:false,
        center:true
    }
  },
  methods:{
        getform() {
            return this.$refs.form_more
         },
        cancel(){
            this.dialogshow=false
         },
        confirmed(){
            this.dialogshow=false

        }


  }
}

</script>

<style scoped>

    el-form-item{
      margin-bottom: -5px;
    }
    .right-form{
      display: inline-block;
      /*设置文字垂直对齐顶部*/
      vertical-align: top
    }
    .left-form{
      display: inline-block;
    }


</style>
