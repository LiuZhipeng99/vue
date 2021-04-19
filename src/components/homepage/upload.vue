<template>

      <el-upload
              accept=".csv"
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将SFC资源文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip" style="text-align: center;margin-left: 50px">注仅支持csv格式文件</div>
      </el-upload>


</template>

<script>
export default {

}
</script>

<style scoped>
    .el-upload__tip{
      width: 100%;
    }
</style>
