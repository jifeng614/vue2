<template>
  <div>
    <el-carousel height="450px">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.img" alt="" width="100%" height="100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [],
    };
  },
  mounted() {
    this.$http.get("/api/w/website/bannerList").then((res) => {
      console.log(res);
      this.bannerList = res.data.data;
    });
  },
};
</script>

<style>
</style>