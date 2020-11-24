<template>
  <div>
      <h2>最棒的</h2>
      <!-- <h2>{{aa}}</h2>
      <h2>{{bb}}</h2> -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            aa:'',
            bb:''
        }
    },
    mounted(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>