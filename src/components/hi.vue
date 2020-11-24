<template>
  <div>
      <h1>我是你峰哥</h1>
      <h2>{{road}}</h2>
      <button @click="go">去hello</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            road:""
        }
    },
    mounted(){
        console.log(this.$route)
        this.road = this.$route.name
    },
    methods:{
        go(){
            this.$router.push({
                // path:"/hello",
                // query:{
                //     name:"wang",
                //     age:"19"
                // }
                name:"hello",
                params:{
                    name:"wang",
                    age:"19"
                }
            });
        }
    }
}
</script>

<style>
    .go{
        color: #f99;
    }
</style>
