<template>
  <div class="button-row"  >
  <el-button type="success" class="deploy" round size="medium" :disabled="isdisEnable">开始部署</el-button>
  <el-button type="success" class="train" round  size="medium" @click="gotrain">模型手动训练</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isdisEnable:true
    }
  },
  methods:{
    gotrain(){
      // let url=window.location.href;
      // window.location.href=url+"/train.html"
      this.$router.push('/train')
    }
  }

}
</script>

<style scoped>
.button-row{
  text-align: center;
  margin-top: 60px;
}
</style>
