<template>
  <div>
    <el-button type="success" @click="add()">加</el-button>
    <p>{{num}}</p>
    <el-button type="info" @click="reduce()">减</el-button>
    <router-view />
  </div>
</template>

<script>
export default {
    computed:{
        num() {
            return this.$store.state.num
        }
    },
    methods:{
        add(){
            this.$store.commit('jia')
        },
        reduce(){
            this.$store.commit('jian')
        }
    }
};
</script>

<style>
</style>