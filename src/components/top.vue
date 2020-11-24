<template>
  <div>
    <div class="div">
      <img src="../assets/logo.png" alt="" />
      <ul>
        <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props:{
    datalist:{
      type:Array,
      required:true
    }
  }
};
</script>

<style scoped>
    .div{
        width: 75%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        display: flex;
        justify-content: right;
    }
    li {
        padding: 10px;
        list-style: none;
    }
</style>