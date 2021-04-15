<template>

  <el-form ref="form" :model="form" label-width="80px" size="mini">
    <el-form-item label="SFC长度">
      <el-input v-model="form.sfclength" placeholder="最小2 最大15"></el-input>
    </el-form-item>
    <el-form-item label="资源请求">
      <el-input v-model="form.resource" placeholder="最小2 最大15"></el-input>
    </el-form-item>

    <el-form-item label="生成时间">
      <el-input v-model="form.genelizetime" placeholder="平均2" ></el-input>
    </el-form-item>


  </el-form>
</template>

<script>
export default {
  props:{
    isoptshow: Boolean
  },
  data() {
    return {
      form:{
        sfclength:'',
        resource: '',
        genelizetime:''
      },


    }
  },
  methods:{

  }

}
</script>

<style scoped>
.btn_foot{
text-align: center;
}

</style>
