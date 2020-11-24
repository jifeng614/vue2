<template>
  <div class="bigbox">
    <div class="zhuce">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input class="input name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input class="input" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="btn" @click="deng">登录</el-button>
      <p @click="go">没有账号，去注册</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    go() {
      this.$router.push({
        name: "zhuce",
      });
    },
    deng() {
      this.$http.post("/local/users/denglu").then((res) => {
        console.log(res.data.code);
        this.bannerList = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.bigbox {
  width: 100%;
  height: 600px;
  background-image: url("../assets/bei.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  .zhuce {
    margin-left: 1100px;
    width: 320px;
    height: 205px;
    padding: 40px;
    border-radius: 20px;
    background-color: rgba($color: #ffffff, $alpha: 0.7);
    .btn {
      width: 245px;
      margin-left: 35px;
    }
    .input {
      width: 200px;
    }
  }
  p {
    margin-top: 20px;
    text-align: center;
    text-decoration: underline;
  }
  p:hover {
    color: royalblue;
  }
}
</style>