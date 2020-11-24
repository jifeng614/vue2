<template>
  <div>
      <div class="box">
          <el-button type="waring" @click="changeaa()">按钮</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            aa:'今天不下雪'
        }
    },
    methods:{
        changeaa(){
           this.$emit('feng',this.aa) 
        }
    }
}
</script>

<style >
    .box {
        width: 100%;
        height: 300px;
        background-color: #f99;
    }
</style>